(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[184],{2183:function(e,r,t){Promise.resolve().then(t.bind(t,989))},989:function(e,r,t){"use strict";t.d(r,{default:function(){return b}});var a=t(7437),l=t(2265),s=t(9376),n=t(4381),o=t(3145),i=t(1994),c=t(3335);function d(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,c.m6)((0,i.W)(r))}function u(e){let{position:r,username:t,balance:l,isCurrentTurn:s,isDead:n,isMe:i,faceImage:c="/images/ui/face1.png",cards:u=[]}=e,m=function(e){switch(e%8){case 0:default:return{container:"bottom-4 left-1/2 -translate-x-1/2",cards:"mt-2"};case 1:return{container:"bottom-12 right-16 lg:right-24",cards:"mt-2"};case 2:return{container:"right-4 top-1/2 -translate-y-1/2",cards:"ml-2 flex-col space-y-1 space-x-0"};case 3:return{container:"top-12 right-16 lg:right-24",cards:"mb-2 flex-row-reverse"};case 4:return{container:"top-4 left-1/2 -translate-x-1/2",cards:"mb-2 flex-row-reverse"};case 5:return{container:"top-12 left-16 lg:left-24",cards:"mb-2 flex-row-reverse"};case 6:return{container:"left-4 top-1/2 -translate-y-1/2",cards:"mr-2 flex-col space-y-1 space-x-0"};case 7:return{container:"bottom-12 left-16 lg:left-24",cards:"mt-2"}}}(r),h=(e,r)=>"open"===e&&r?"/images/cards/".concat(r,".png"):"showing"===e?"/images/cards/back.png":"/images/cards/hidden.png";return(0,a.jsxs)("div",{className:d("absolute flex flex-col items-center",m.container,s&&"animate-pulse"),children:[(0,a.jsxs)("div",{className:"relative mb-1",children:[(0,a.jsx)("div",{className:d("flex items-center justify-center relative",n&&"opacity-50"),children:(0,a.jsxs)("div",{className:d("relative w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg",i?"border-blue-500":"border-yellow-500",s?"ring-2 ring-green-400":""),children:[(0,a.jsx)(o.default,{src:c,alt:t,width:64,height:64,className:"object-cover"}),n&&(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:(0,a.jsx)(o.default,{src:"/images/ui/dieM.png",alt:"Die",width:40,height:40,className:"object-contain"})})]})}),(0,a.jsx)("div",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 text-center",children:(0,a.jsxs)("div",{className:"bg-gray-900 bg-opacity-80 p-1 rounded-md shadow-md border border-yellow-600",children:[(0,a.jsx)("p",{className:"text-xs font-bold text-white truncate",children:t}),(0,a.jsxs)("p",{className:"text-xs text-yellow-400",children:[l.toLocaleString(),"P"]})]})})]}),(0,a.jsx)("div",{className:d("flex space-x-1",m.cards),children:u.map((e,r)=>(0,a.jsx)("div",{className:d("relative w-10 h-14 transition-all","hidden"===e.status&&"opacity-50 scale-95"),children:(0,a.jsx)(o.default,{src:h(e.status,e.value),alt:e.status,width:40,height:56,className:"rounded shadow-md"})},r))})]})}function m(e){var r;let{gameState:t,currentPlayerId:s}=e,[n,i]=(0,l.useState)(!1),[c,d]=(0,l.useState)(!1);(0,l.useEffect)(()=>{(null==t?void 0:t.status)!=="playing"||c?(null==t?void 0:t.status)!=="finished"||n||i(!0):d(!0)},[null==t?void 0:t.status,c,n]);let m=null==t?void 0:t.players.find(e=>e.id===s);if(!t||!m)return(0,a.jsx)("div",{className:"flex items-center justify-center h-full p-8",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 border-4 border-t-yellow-400 border-yellow-200 rounded-full animate-spin mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-yellow-400 font-bold",children:"게임 정보를 불러오는 중..."})]})});let h=t.players.length,g=function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&0!==e.length?r?e.map(e=>({status:"open",value:"".concat(Math.ceil(e/4)||10,"_").concat((e-1)%4+1)})):e.map(()=>({status:"showing"})):[{status:"hidden"},{status:"hidden"}]},f=t.players.map((e,r)=>{let a=(r-t.players.findIndex(e=>e.id===s))%h;a<0&&(a+=h);let l=e.id===s,o=e.id===t.currentTurn,i=l||n||"finished"===t.status;return{...e,position:a,isMe:l,isCurrentTurn:o,isDead:!0===e.isDie,cards:g(e.cards,i)}});return(0,a.jsxs)("div",{className:"relative h-full w-full overflow-hidden",children:[(0,a.jsxs)("div",{className:"absolute inset-0 rounded-full bg-gradient-to-b from-green-800 to-green-900 m-8",style:{boxShadow:"0 0 30px rgba(0, 0, 0, 0.7), inset 0 0 80px rgba(0, 0, 0, 0.3)",border:"10px solid #8B4513"},children:[(0,a.jsxs)("div",{className:"absolute inset-2 rounded-full bg-green-700 bg-opacity-50 flex items-center justify-center",children:[(0,a.jsx)("div",{className:"w-[80%] h-[80%] rounded-full border-2 border-dashed border-green-500 border-opacity-50"}),(0,a.jsx)(o.default,{src:"/images/table/bgM.png",alt:"Table Background",layout:"fill",objectFit:"cover",className:"rounded-full opacity-80"})]}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",children:(0,a.jsx)("div",{className:"relative mb-3",children:(0,a.jsx)("div",{className:"px-4 py-2 bg-gray-900 bg-opacity-80 rounded-lg border border-yellow-600 shadow-lg",children:(0,a.jsxs)("p",{className:"text-yellow-400 font-bold text-center",children:["총 배팅 금액: ",t.bettingValue.toLocaleString()," 포인트"]})})})})]}),f.map(e=>(0,a.jsx)(u,{position:e.position,username:e.username,balance:e.balance,isCurrentTurn:e.isCurrentTurn,isDead:e.isDead,isMe:e.isMe,faceImage:"/images/ui/face".concat(parseInt(e.id)%5+1,".png"),cards:e.cards},e.id)),"waiting"===t.status&&(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",children:(0,a.jsxs)("div",{className:"px-6 py-4 bg-black bg-opacity-70 rounded-lg border border-yellow-600 shadow-lg",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-yellow-400 mb-2",children:"게임 대기 중"}),(0,a.jsxs)("p",{className:"text-white",children:["현재 ",h,"명의 플레이어가 참가했습니다."]}),(0,a.jsx)("p",{className:"text-white mt-1",children:"게임을 시작하려면 최소 2명의 플레이어가 필요합니다."})]})}),"finished"===t.status&&(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",children:(0,a.jsxs)("div",{className:"px-6 py-4 bg-black bg-opacity-70 rounded-lg border border-yellow-600 shadow-lg",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-yellow-400 mb-2",children:"게임 종료!"}),(0,a.jsxs)("p",{className:"text-white",children:["승자: ",(null===(r=t.players.find(e=>e.id===t.winner))||void 0===r?void 0:r.username)||"없음"]})]})})]})}let h={call:"/images/ui/callbtn.png",die:"/images/ui/diebtn.png",bet:"/images/ui/doublebtn.png"};function g(e){var r;let{gameState:t,currentPlayerId:s,onAction:i}=e,[c,d]=(0,l.useState)(500),[u,m]=(0,l.useState)(!1),[g,f]=(0,l.useState)(null),x=t.currentTurn===s,b="waiting"===t.status,w="playing"===t.status,p="finished"===t.status,y=t.players.find(e=>e.id===s),j=t.winner?null===(r=t.players.find(e=>e.id===t.winner))||void 0===r?void 0:r.username:null,v=async()=>{m(!0),f(null);try{await (0,n.t)(t.id),i()}catch(e){console.error("게임 시작 오류:",e),f("게임을 시작하는 중 오류가 발생했습니다.")}finally{m(!1)}},N=async()=>{m(!0),f(null);try{if(!y||c<=0||c>y.balance)throw Error("유효하지 않은 베팅 금액입니다.");await (0,n.u1)(t.id,s,c),i()}catch(e){console.error("베팅 오류:",e),f("베팅 중 오류가 발생했습니다.")}finally{m(!1)}},_=async()=>{m(!0),f(null);try{await (0,n.Cb)(t.id,s),i()}catch(e){console.error("콜 오류:",e),f("콜 중 오류가 발생했습니다.")}finally{m(!1)}},I=async()=>{m(!0),f(null);try{await (0,n.Op)(t.id,s),i()}catch(e){console.error("다이 오류:",e),f("다이 중 오류가 발생했습니다.")}finally{m(!1)}};return p?(0,a.jsxs)("div",{className:"p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-yellow-500 shadow-lg",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-center mb-4 text-yellow-400",children:"게임 종료"}),j&&(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsxs)("p",{className:"text-yellow-400 font-bold mb-2 text-xl",children:[j,"님이 승리했습니다!"]}),(0,a.jsxs)("p",{className:"text-gray-300",children:["획득 포인트: ",t.bettingValue]})]}),(0,a.jsx)("button",{className:"mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-md shadow-lg transition-all",onClick:()=>window.location.href="/",children:"홈으로 돌아가기"})]}):b?(0,a.jsxs)("div",{className:"p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-yellow-500 shadow-lg",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-center mb-4 text-yellow-400",children:"게임 대기 중"}),(0,a.jsxs)("p",{className:"text-gray-300 text-center mb-4",children:["현재 ",t.players.length,"명의 플레이어가 대기 중입니다."]}),g&&(0,a.jsx)("div",{className:"bg-red-500 text-white p-3 rounded-md mb-4",children:g}),(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("button",{className:"py-3 px-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold rounded-md shadow-lg transition-all ".concat(u?"opacity-50 cursor-not-allowed":""),onClick:v,disabled:u||t.players.length<2,children:u?"처리 중...":"게임 시작"})}),t.players.length<2&&(0,a.jsx)("p",{className:"text-red-400 text-center mt-2",children:"최소 2명의 플레이어가 필요합니다."}),(0,a.jsxs)("div",{className:"mt-4 text-gray-300 text-center text-sm",children:[(0,a.jsxs)("p",{children:["게임 ID: ",t.id]}),(0,a.jsx)("p",{className:"mt-1",children:"이 ID를 친구들에게 공유하여 같이 게임하세요!"})]})]}):w?(0,a.jsxs)("div",{className:"p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-yellow-500 shadow-lg",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold text-center mb-4 text-yellow-400",children:"게임 진행 중"}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("p",{className:"text-gray-300",children:["현재 베팅 금액: ",(0,a.jsxs)("span",{className:"text-yellow-400 font-bold",children:[t.bettingValue," 포인트"]})]}),y&&(0,a.jsxs)("p",{className:"text-gray-300 mt-1",children:["내 잔액: ",(0,a.jsxs)("span",{className:"text-yellow-400 font-bold",children:[y.balance," 포인트"]})]})]}),g&&(0,a.jsx)("div",{className:"bg-red-500 text-white p-3 rounded-md mb-4",children:g}),x?(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-green-400 font-bold mb-3",children:"당신의 차례입니다!"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-gray-300 mb-1",children:"베팅 금액"}),(0,a.jsx)("input",{type:"number",value:c,onChange:e=>d(parseInt(e.target.value)||0),min:100,max:(null==y?void 0:y.balance)||0,step:100,className:"w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500",disabled:u})]}),(0,a.jsxs)("div",{className:"grid grid-cols-3 gap-3 mt-3",children:[(0,a.jsxs)("button",{className:"relative h-12 overflow-hidden rounded-lg ".concat(u?"opacity-50 cursor-not-allowed":"transform hover:scale-105 transition-transform"),onClick:N,disabled:u||!y||c<=0||c>y.balance,children:[(0,a.jsx)(o.default,{src:h.bet,alt:"베팅",width:80,height:48,className:"w-full h-full object-contain"}),(0,a.jsx)("span",{className:"absolute inset-0 flex items-center justify-center text-white font-bold drop-shadow-lg",children:"베팅"})]}),(0,a.jsxs)("button",{className:"relative h-12 overflow-hidden rounded-lg ".concat(u?"opacity-50 cursor-not-allowed":"transform hover:scale-105 transition-transform"),onClick:_,disabled:u,children:[(0,a.jsx)(o.default,{src:h.call,alt:"콜",width:80,height:48,className:"w-full h-full object-contain"}),(0,a.jsx)("span",{className:"absolute inset-0 flex items-center justify-center text-white font-bold drop-shadow-lg",children:"콜"})]}),(0,a.jsxs)("button",{className:"relative h-12 overflow-hidden rounded-lg ".concat(u?"opacity-50 cursor-not-allowed":"transform hover:scale-105 transition-transform"),onClick:I,disabled:u,children:[(0,a.jsx)(o.default,{src:h.die,alt:"다이",width:80,height:48,className:"w-full h-full object-contain"}),(0,a.jsx)("span",{className:"absolute inset-0 flex items-center justify-center text-white font-bold drop-shadow-lg",children:"다이"})]})]})]}):(0,a.jsx)("p",{className:"text-center text-gray-300 py-3 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-50",children:"다른 플레이어의 차례입니다."})]}):(0,a.jsx)("div",{className:"p-6 bg-gray-900 bg-opacity-90 rounded-lg border border-yellow-500 shadow-lg",children:(0,a.jsx)("p",{className:"text-center text-gray-300",children:"게임 상태를 불러오는 중..."})})}function f(e){let{gameId:r,playerId:t,username:s,messages:i}=e,[c,d]=(0,l.useState)(""),[u,m]=(0,l.useState)(!1),[h,g]=(0,l.useState)(null),f=(0,l.useRef)(null);(0,l.useEffect)(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[i]);let x=async e=>{if(e.preventDefault(),c.trim()){m(!0),g(null);try{await (0,n.bG)(r,t,c),d("")}catch(e){console.error("메시지 전송 오류:",e),g("메시지를 전송하는 중 오류가 발생했습니다.")}finally{m(!1)}}};return(0,a.jsxs)("div",{className:"flex flex-col h-full bg-gray-900 bg-opacity-80 rounded-lg border border-yellow-600 shadow-lg overflow-hidden",children:[(0,a.jsx)("div",{className:"p-3 bg-gradient-to-r from-yellow-700 to-yellow-900 border-b border-yellow-600",children:(0,a.jsx)("h2",{className:"text-xl font-bold text-yellow-300",children:"채팅"})}),(0,a.jsx)("div",{ref:f,className:"flex-grow p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800",style:{maxHeight:"calc(100% - 110px)"},children:0===i.length?(0,a.jsx)("p",{className:"text-gray-400 text-center italic",children:"메시지가 없습니다."}):(0,a.jsx)("div",{className:"space-y-2",children:i.map(e=>(0,a.jsxs)("div",{className:"".concat(e.user_id===localStorage.getItem("game_".concat(r,"_user_id"))?"bg-blue-900 ml-6 rounded-tl-xl rounded-tr-xl rounded-bl-xl":"bg-gray-800 mr-6 rounded-tl-xl rounded-tr-xl rounded-br-xl"," p-2 shadow-md"),children:[(0,a.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,a.jsx)("span",{className:"font-bold text-xs ".concat(e.user_id===localStorage.getItem("game_".concat(r,"_user_id"))?"text-blue-300":"text-yellow-300"),children:e.username}),(0,a.jsx)("span",{className:"text-gray-400 text-xs",children:new Date(e.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),(0,a.jsx)("p",{className:"text-white mt-1 break-words",children:e.content})]},e.id))})}),h&&(0,a.jsx)("div",{className:"bg-red-600 text-white p-2 text-sm",children:h}),(0,a.jsx)("form",{onSubmit:x,className:"p-3 bg-gray-800 border-t border-gray-700",children:(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("input",{type:"text",value:c,onChange:e=>d(e.target.value),className:"flex-grow px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"메시지 입력...",disabled:u}),(0,a.jsx)("button",{type:"submit",disabled:u||!c.trim(),className:"px-4 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold rounded-lg transition-all ".concat(u||!c.trim()?"opacity-50 cursor-not-allowed":""),children:(0,a.jsx)(o.default,{src:"/images/ui/send.png",alt:"전송",width:24,height:24,className:"w-6 h-6"})})]})})]})}var x=t(5526);function b(e){let{gameId:r}=e;(0,s.useRouter)();let[t,o]=(0,l.useState)(null),[i,c]=(0,l.useState)(null),[d,u]=(0,l.useState)(""),[h,b]=(0,l.useState)(!1),[w,p]=(0,l.useState)(null),[y,j]=(0,l.useState)([]),[v,N]=(0,l.useState)(!1),_=async()=>{try{let{data:e,error:t}=await x.O.from("messages").select("*").eq("game_id",r).order("created_at",{ascending:!0});!t&&e?j(e):console.error("메시지 불러오기 오류:",t)}catch(e){console.error("메시지 불러오기 예외:",e)}},I=async()=>{try{let e=await (0,n.ky)(r);return o(e),e}catch(e){return console.error("게임 상태 불러오기 실패:",e),p("게임 정보를 불러오는 중 오류가 발생했습니다."),null}};(0,l.useEffect)(()=>{let e=localStorage.getItem("game_".concat(r,"_player_id")),t=localStorage.getItem("game_".concat(r,"_username"));if(e&&t){console.log("저장된 플레이어 정보 발견:",e,t),c(e),u(t),I(),_();let r=setInterval(()=>{console.log("게임 상태 폴링..."),I()},2e3),a=setInterval(()=>{console.log("메시지 폴링..."),_()},1e3);return()=>{clearInterval(r),clearInterval(a),console.log("폴링 인터벌 정리 완료")}}},[r]);let S=async e=>{if(!e.trim()){p("닉네임을 입력해주세요.");return}b(!0),p(null);try{let{playerId:t,gameState:a}=await (0,n.nY)(r,e);localStorage.setItem("game_".concat(r,"_player_id"),t),localStorage.setItem("game_".concat(r,"_username"),e),c(t),u(e),o(a),_()}catch(e){console.error("게임 참가 오류:",e),p("게임 참가 중 오류가 발생했습니다.")}finally{b(!1)}};return i&&t?(0,a.jsxs)("div",{className:"min-h-screen w-full bg-gray-950 relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute inset-0 overflow-hidden",style:{background:"linear-gradient(to bottom, #1a2035, #0a0a1a)",backgroundImage:"url(/images/table/bgM.png)",backgroundSize:"cover",backgroundPosition:"center",filter:"blur(8px)",opacity:.3,transform:"scale(1.1)"}}),(0,a.jsx)("div",{className:"container mx-auto p-4 relative z-10",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-6 h-[calc(100vh-2rem)]",children:[(0,a.jsx)("div",{className:"flex-grow rounded-xl overflow-hidden shadow-2xl bg-gray-900 bg-opacity-50 border border-gray-800",children:(0,a.jsx)(m,{gameState:t,currentPlayerId:i})}),(0,a.jsxs)("div",{className:"w-full md:w-80 lg:w-96 flex flex-col space-y-4",children:[(0,a.jsx)("div",{className:"h-auto",children:(0,a.jsx)(g,{gameState:t,currentPlayerId:i,onAction:()=>{I()}})}),(0,a.jsx)("div",{className:"flex-grow overflow-hidden",children:(0,a.jsx)(f,{gameId:r,playerId:i,username:d,messages:y})})]})]})})]}):(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-950",children:(0,a.jsxs)("div",{className:"w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg border border-yellow-800",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold text-center text-yellow-400 mb-6",children:"섯다 게임 참가"}),w&&(0,a.jsx)("div",{className:"bg-red-600 text-white p-3 rounded-md mb-4",children:w}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),S(d)},children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-sm font-bold text-gray-300 mb-2",children:"닉네임"}),(0,a.jsx)("input",{type:"text",id:"username",value:d,onChange:e=>u(e.target.value),className:"w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"게임에서 사용할 닉네임을 입력하세요",disabled:h,required:!0})]}),(0,a.jsx)("button",{type:"submit",disabled:h||!d.trim(),className:"w-full py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold rounded-md shadow-lg transition-all ".concat(h||!d.trim()?"opacity-50 cursor-not-allowed":""),children:h?"참가 중...":"게임 참가하기"})]})]})})}},4381:function(e,r,t){"use strict";t.d(r,{Cb:function(){return d},Op:function(){return u},bG:function(){return m},dz:function(){return s},ky:function(){return o},nY:function(){return n},t:function(){return i},u1:function(){return c}});var a=t(5526),l=t(3837);async function s(e){let r=(0,l.Z)(),t=(0,l.Z)(),s="user_".concat(Math.random().toString(36).substring(2,9));try{let{data:l,error:n}=await a.O.from("games").insert({id:r,status:"waiting",current_turn:null,betting_value:0,winner:null}).select();if(n)throw console.error("게임 생성 오류 세부 정보:",n),Error("게임을 생성할 수 없습니다: "+n.message);console.log("게임 생성 성공:",r);let{data:o,error:i}=await a.O.from("players").insert({id:t,game_id:r,user_id:s,username:e,balance:1e4,is_die:!1}).select();if(i)throw console.error("플레이어 생성 오류 세부 정보:",i),Error("플레이어를 생성할 수 없습니다: "+i.message);return console.log("플레이어 생성 성공:",t),localStorage.setItem("game_".concat(r,"_user_id"),s),{gameId:r,playerId:t}}catch(e){throw console.error("게임 생성 중 예외 발생:",e),e}}async function n(e,r){try{let{data:t,error:s}=await a.O.from("games").select("*").eq("id",e).single();if(s||!t)throw console.error("게임 조회 오류 세부 정보:",s),Error("게임을 찾을 수 없습니다: "+((null==s?void 0:s.message)||"알 수 없는 오류"));if("waiting"!==t.status)throw Error("이미 시작된 게임에는 참가할 수 없습니다.");let n=(0,l.Z)(),i="user_".concat(Math.random().toString(36).substring(2,9)),{data:c,error:d}=await a.O.from("players").insert({id:n,game_id:e,user_id:i,username:r,balance:1e4,is_die:!1}).select();if(d)throw console.error("플레이어 생성 오류 세부 정보:",d),Error("게임에 참가할 수 없습니다: "+d.message);console.log("플레이어 참가 성공:",n),localStorage.setItem("game_".concat(e,"_user_id"),i);let u=await o(e);return{playerId:n,gameState:u}}catch(e){throw console.error("게임 참가 중 예외 발생:",e),e}}async function o(e){let{data:r,error:t}=await a.O.from("games").select("*").eq("id",e).single();if(t||!r)throw console.error("게임 조회 오류:",t),Error("게임을 찾을 수 없습니다.");let{data:l,error:s}=await a.O.from("players").select("*").eq("game_id",e);if(s)throw console.error("플레이어 조회 오류:",s),Error("플레이어 정보를 불러올 수 없습니다.");return{id:r.id,status:r.status,players:l.map(e=>({id:e.id,user_id:e.user_id,username:e.username,balance:e.balance,cards:e.cards||[],isDie:e.is_die})),currentTurn:r.current_turn||"",winner:r.winner,bettingValue:r.betting_value}}async function i(e){let{data:r,error:t}=await a.O.from("players").select("id").eq("game_id",e);if(t||!r||r.length<2)throw Error("최소 2명의 플레이어가 필요합니다.");let l=function(){let e=Array.from({length:40},(e,r)=>r+1);for(let r=e.length-1;r>0;r--){let t=Math.floor(Math.random()*(r+1));[e[r],e[t]]=[e[t],e[r]]}return e}();for(let e=0;e<r.length;e++){let t=[l.pop(),l.pop()].filter(Boolean),{error:s}=await a.O.from("players").update({cards:t}).eq("id",r[e].id);if(s)throw console.error("플레이어 카드 업데이트 오류:",s),Error("카드를 배분할 수 없습니다.")}let s=r[Math.floor(Math.random()*r.length)].id,{error:n}=await a.O.from("games").update({status:"playing",current_turn:s,betting_value:0}).eq("id",e);if(n)throw console.error("게임 상태 업데이트 오류:",n),Error("게임을 시작할 수 없습니다.");await h(e,"start",s)}async function c(e,r,t){if(t<=0)throw Error("베팅 금액은 0보다 커야 합니다.");let l=await o(e);if("playing"!==l.status)throw Error("게임이 진행 중이 아닙니다.");if(l.currentTurn!==r)throw Error("당신의 턴이 아닙니다.");let s=l.players.find(e=>e.id===r);if(!s)throw Error("플레이어를 찾을 수 없습니다.");if(s.balance<t)throw Error("잔액이 부족합니다.");let n=g(l.players,r),{error:i}=await a.O.from("games").update({current_turn:n,betting_value:l.bettingValue+t}).eq("id",e);if(i)throw console.error("게임 상태 업데이트 오류:",i),Error("베팅할 수 없습니다.");let{error:c}=await a.O.from("players").update({balance:s.balance-t}).eq("id",r);if(c)throw console.error("플레이어 잔액 업데이트 오류:",c),Error("잔액을 업데이트할 수 없습니다.");await h(e,"bet",r,t)}async function d(e,r){let t=await o(e);if("playing"!==t.status)throw Error("게임이 진행 중이 아닙니다.");if(t.currentTurn!==r)throw Error("당신의 턴이 아닙니다.");let l=t.players.find(e=>e.id===r);if(!l)throw Error("플레이어를 찾을 수 없습니다.");if(l.balance<500)throw Error("잔액이 부족합니다.");let s=g(t.players,r),{error:n}=await a.O.from("games").update({current_turn:s,betting_value:t.bettingValue+500}).eq("id",e);if(n)throw console.error("게임 상태 업데이트 오류:",n),Error("콜할 수 없습니다.");let{error:i}=await a.O.from("players").update({balance:l.balance-500}).eq("id",r);if(i)throw console.error("플레이어 잔액 업데이트 오류:",i),Error("잔액을 업데이트할 수 없습니다.");await h(e,"call",r,500)}async function u(e,r){let t=await o(e);if("playing"!==t.status)throw Error("게임이 진행 중이 아닙니다.");if(t.currentTurn!==r)throw Error("당신의 턴이 아닙니다.");let{error:l}=await a.O.from("players").update({is_die:!0}).eq("id",r);if(l)throw console.error("플레이어 다이 상태 업데이트 오류:",l),Error("다이할 수 없습니다.");let s=t.players.filter(e=>e.id!==r&&!e.isDie);if(1===s.length){let r=s[0].id,{error:l}=await a.O.from("players").update({balance:s[0].balance+t.bettingValue}).eq("id",r);if(l)throw console.error("승자 잔액 업데이트 오류:",l),Error("승자 잔액을 업데이트할 수 없습니다.");let{error:n}=await a.O.from("games").update({status:"finished",winner:r}).eq("id",e);if(n)throw console.error("게임 종료 상태 업데이트 오류:",n),Error("게임을 종료할 수 없습니다.")}else{let l=g(t.players,r),{error:s}=await a.O.from("games").update({current_turn:l}).eq("id",e);if(s)throw console.error("게임 상태 업데이트 오류:",s),Error("게임 상태를 업데이트할 수 없습니다.")}await h(e,"die",r)}async function m(e,r,t){if(!t.trim())throw Error("메시지 내용이 비어있습니다.");let{data:s,error:n}=await a.O.from("players").select("username, user_id").eq("id",r).single();if(n||!s)throw console.error("플레이어 정보 조회 오류:",n),Error("플레이어 정보를 찾을 수 없습니다.");let o=(0,l.Z)(),i=new Date().toISOString(),c={id:o,game_id:e,user_id:s.user_id,username:s.username,content:t,created_at:i},{error:d}=await a.O.from("messages").insert(c);if(d)throw console.error("메시지 저장 오류:",d),Error("메시지를 전송할 수 없습니다: "+d.message)}async function h(e,r,t,l){let{error:s}=await a.O.from("game_actions").insert({game_id:e,player_id:t,action_type:r,amount:l});s&&(console.error("게임 액션 기록 오류:",s),console.warn("게임 액션을 기록할 수 없습니다."))}function g(e,r){if(e.length<=1)return r;let t=e.filter(e=>!e.isDie),a=(t.findIndex(e=>e.id===r)+1)%t.length;return t[a].id}},5526:function(e,r,t){"use strict";t.d(r,{O:function(){return a}});let a=(0,t(3777).eI)("https://ftzxcbarjntphlwmincc.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0enhjYmFyam50cGhsd21pbmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNzk5OTAsImV4cCI6MjA1Nzk1NTk5MH0.h8y5X3kCGJgvVf-_EA4jOyjU-4Z5q24GHklQZgrocY4",{realtime:{params:{eventsPerSecond:20}},auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!1},global:{fetch:fetch.bind(globalThis)}})}},function(e){e.O(0,[280,258,971,117,744],function(){return e(e.s=2183)}),_N_E=e.O()}]);