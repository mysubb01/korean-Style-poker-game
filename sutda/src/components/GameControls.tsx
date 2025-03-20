'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GameState } from '@/types/game';
import { startGame, placeBet, callBet, dieBet } from '@/lib/gameApi';

interface GameControlsProps {
  gameState: GameState;
  currentPlayerId: string;
  onAction: () => void;
}

// 버튼 이미지 경로
const buttonImages = {
  call: '/images/ui/callbtn.png',
  die: '/images/ui/diebtn.png',
  bet: '/images/ui/doublebtn.png',
  half: '/images/ui/halfbtn.png',
  quarter: '/images/ui/quarterbtn.png',
  ping: '/images/ui/pingbtn.png'
};

export function GameControls({ gameState, currentPlayerId, onAction }: GameControlsProps) {
  const [betAmount, setBetAmount] = useState<number>(500);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isCurrentTurn = gameState.currentTurn === currentPlayerId;
  const isGameWaiting = gameState.status === 'waiting';
  const isGamePlaying = gameState.status === 'playing';
  const isGameFinished = gameState.status === 'finished';
  
  const currentPlayer = gameState.players.find(p => p.id === currentPlayerId);
  
  // 승자 이름 가져오기
  const winnerName = gameState.winner 
    ? gameState.players.find(p => p.id === gameState.winner)?.username 
    : null;

  // 게임 시작 처리
  const handleStartGame = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await startGame(gameState.id);
      onAction();
    } catch (err) {
      console.error('게임 시작 오류:', err);
      setError('게임을 시작하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 베팅 처리
  const handleBet = async (amount?: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!currentPlayer) {
        throw new Error('플레이어 정보를 찾을 수 없습니다.');
      }

      // 전달된 금액이 있으면 그 금액으로, 없으면 입력 필드의 금액으로
      const betValue = amount !== undefined ? amount : betAmount;
      
      if (betValue <= 0 || betValue > currentPlayer.balance) {
        throw new Error('유효하지 않은 베팅 금액입니다.');
      }
      
      await placeBet(gameState.id, currentPlayerId, betValue);
      onAction();
    } catch (err) {
      console.error('베팅 오류:', err);
      setError('베팅 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 콜 처리
  const handleCall = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await callBet(gameState.id, currentPlayerId);
      onAction();
    } catch (err) {
      console.error('콜 오류:', err);
      setError('콜 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 다이 처리
  const handleDie = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await dieBet(gameState.id, currentPlayerId);
      onAction();
    } catch (err) {
      console.error('다이 오류:', err);
      setError('다이 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 빠른 배팅 금액 계산 (현재 베팅 금액의 절반, 콜)
  const getHalfBetAmount = () => {
    if (!currentPlayer) return 0;
    const halfBet = Math.floor(gameState.bettingValue / 2);
    return halfBet > 0 && currentPlayer.balance >= halfBet ? halfBet : 0;
  };

  // 베팅 버튼 컴포넌트
  const BettingButton = ({ 
    imageSrc, 
    label, 
    onClick, 
    disabled = false 
  }: { 
    imageSrc: string; 
    label: string; 
    onClick: () => void; 
    disabled?: boolean; 
  }) => (
    <button
      className={`relative h-14 overflow-hidden rounded-md shadow-md ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105 transition-transform'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <Image
        src={imageSrc}
        alt={label}
        width={120}
        height={56}
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg drop-shadow-lg">
        {label}
      </span>
    </button>
  );

  if (isGameFinished) {
    return (
      <div className="p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-yellow-500 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-yellow-400">게임 종료</h2>
        {winnerName && (
          <div className="text-center">
            <p className="text-yellow-400 font-bold mb-2 text-xl">{winnerName}님이 승리했습니다!</p>
            <p className="text-gray-300">획득 포인트: {gameState.bettingValue}</p>
          </div>
        )}
        <button
          className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-md shadow-lg transition-all"
          onClick={() => window.location.href = '/'}
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  if (isGameWaiting) {
    return (
      <div className="p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-yellow-500 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-yellow-400">게임 대기 중</h2>
        <p className="text-gray-300 text-center mb-4">현재 {gameState.players.length}명의 플레이어가 대기 중입니다.</p>
        
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <div className="text-center">
          <button
            className={`py-3 px-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-md shadow-lg transition-all ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleStartGame}
            disabled={isLoading || gameState.players.length < 2}
          >
            {isLoading ? '처리 중...' : '게임 시작'}
          </button>
        </div>
        
        {gameState.players.length < 2 && (
          <p className="text-red-400 text-center mt-2">최소 2명의 플레이어가 필요합니다.</p>
        )}
        
        <div className="mt-4 text-gray-300 text-center text-sm">
          <p>게임 ID: {gameState.id}</p>
          <p className="mt-1">이 ID를 친구들에게 공유하여 같이 게임하세요!</p>
        </div>
      </div>
    );
  }

  if (isGamePlaying) {
    return (
      <div className="p-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-lg border border-yellow-500 shadow-xl">
        {/* 화면이 테이블 위에 겹쳐질 때는 컴팩트하게 표시 */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-yellow-400">게임 진행 중</h2>
          <div className="text-right">
            <p className="text-yellow-400 font-bold">{gameState.bettingValue} 포인트</p>
            {currentPlayer && (
              <p className="text-xs text-gray-300">내 잔액: {currentPlayer.balance} P</p>
            )}
          </div>
        </div>
        
        {error && (
          <div className="bg-red-500 text-white p-2 rounded-md mb-2 text-xs">
            {error}
          </div>
        )}
        
        {isCurrentTurn ? (
          <div>
            <p className="text-green-400 font-bold text-sm mb-2">내 턴입니다!</p>
            
            {/* 커스텀 베팅 입력 */}
            <div className="mb-3">
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(parseInt(e.target.value) || 0)}
                  min={100}
                  max={currentPlayer?.balance || 0}
                  step={100}
                  className="flex-grow px-2 py-1 bg-gray-800 rounded-md border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  disabled={isLoading}
                />
                <button
                  className="px-3 py-1 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-md shadow transition-all text-sm"
                  onClick={() => handleBet()}
                  disabled={isLoading || !currentPlayer || betAmount <= 0 || betAmount > currentPlayer.balance}
                >
                  베팅
                </button>
              </div>
            </div>
            
            {/* 배팅 이미지 버튼 - 화면 아래쪽 배치 */}
            <div className="grid grid-cols-3 gap-2">
              <BettingButton
                imageSrc={buttonImages.ping}
                label="삥"
                onClick={() => handleBet(100)}
                disabled={isLoading || (currentPlayer?.balance || 0) < 100}
              />
              
              <BettingButton
                imageSrc={buttonImages.call}
                label="콜"
                onClick={handleCall}
                disabled={isLoading}
              />
              
              <BettingButton
                imageSrc={buttonImages.bet}
                label="따당"
                onClick={() => handleBet(gameState.bettingValue * 2)}
                disabled={isLoading || (currentPlayer?.balance || 0) < gameState.bettingValue * 2}
              />
              
              <BettingButton
                imageSrc={buttonImages.quarter}
                label="쿼터"
                onClick={() => handleBet(Math.floor(gameState.bettingValue / 4))}
                disabled={isLoading || Math.floor(gameState.bettingValue / 4) <= 0 || (currentPlayer?.balance || 0) < Math.floor(gameState.bettingValue / 4)}
              />
              
              <BettingButton
                imageSrc={buttonImages.half}
                label="하프"
                onClick={() => handleBet(getHalfBetAmount())}
                disabled={isLoading || getHalfBetAmount() <= 0}
              />
              
              <BettingButton
                imageSrc={buttonImages.die}
                label="다이"
                onClick={handleDie}
                disabled={isLoading}
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="text-blue-400 mb-2 text-sm">
              <span className="font-bold">{gameState.players.find(p => p.id === gameState.currentTurn)?.username || '알 수 없음'}</span>님의 차례입니다
            </p>
            
            <div className="flex justify-end">
              <div className="w-1/2">
                <BettingButton
                  imageSrc={buttonImages.die}
                  label="다이 (포기)"
                  onClick={handleDie}
                  disabled={isLoading || currentPlayer?.isDie}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-yellow-500 shadow-lg">
      <p className="text-gray-300 text-center">게임 상태를 불러오는 중...</p>
    </div>
  );
} 