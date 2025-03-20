'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { sendMessage } from '@/lib/gameApi';
import { RealtimeChannel } from '@supabase/supabase-js';

interface Message {
  id: string;
  username: string;
  content: string;
  created_at: string;
  game_id?: string;
  user_id?: string;
}

interface ChatProps {
  gameId: string;
  userId: string;
  username: string;
}

export function Chat({ gameId, userId, username }: ChatProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const channelRef = useRef<RealtimeChannel | null>(null);

  // 채팅 메시지 불러오기
  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('game_id', gameId)
        .order('created_at', { ascending: true });

      if (!error && data) {
        setMessages(data);
      } else {
        console.error('메시지 불러오기 오류:', error);
      }
    } catch (err) {
      console.error('메시지 불러오기 예외:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 메시지 불러오기
    fetchMessages();
    
    // 메시지 실시간 구독
    const messageChannel = supabase
      .channel(`messages-${gameId}-live`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `game_id=eq.${gameId}`
      }, (payload) => {
        console.log('New message received in chat component:', payload);
        // 새 메시지가 나의 메시지가 아닌 경우에만 추가 (중복 방지)
        if (payload.new.user_id !== userId) {
          setMessages(prev => [...prev, payload.new as Message]);
        }
      });
      
    const status = messageChannel.subscribe((status) => {
      console.log(`Chat component subscription status: ${status}`);
    });
    
    channelRef.current = messageChannel;

    return () => {
      // 구독 정리
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
    };
  }, [gameId, userId]);

  // 메시지가 추가될 때마다 스크롤 맨 아래로
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    try {
      const result = await sendMessage(gameId, userId, username, message);
      console.log('Message sent:', result);
      
      // 내가 보낸 메시지를 즉시 추가 (UI 반응성을 위해)
      const newMessage: Message = {
        id: Date.now().toString(), // 임시 ID, 서버 응답으로 대체될 수 있음
        game_id: gameId,
        user_id: userId,
        username: username,
        content: message,
        created_at: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
    } catch (error) {
      console.error('메시지 전송 오류:', error);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden border border-gray-600">
      <div className="p-2 bg-gray-700 border-b border-gray-600">
        <h3 className="text-white font-bold">게임 채팅</h3>
      </div>
      
      <div className="flex-1 p-3 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">메시지를 불러오는 중...</p>
          </div>
        ) : (
          <div className="space-y-2">
            {messages.length === 0 ? (
              <p className="text-center text-gray-400 py-4">아직 메시지가 없습니다.</p>
            ) : (
              messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`p-2 rounded-lg max-w-[90%] ${
                    msg.username === username 
                      ? 'bg-blue-600 ml-auto' 
                      : 'bg-gray-700'
                  }`}
                >
                  <div className="text-xs text-gray-300 mb-1">
                    {msg.username}
                  </div>
                  <div className="text-sm">
                    {msg.content}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-2 border-t border-gray-600 flex">
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지 입력..."
          className="flex-1 px-3 py-2 bg-gray-700 rounded-l-md border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md"
        >
          전송
        </button>
      </form>
    </div>
  );
} 