(()=>{var e={};e.id=193,e.ids=[193],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8893:e=>{"use strict";e.exports=require("buffer")},4770:e=>{"use strict";e.exports=require("crypto")},7702:e=>{"use strict";e.exports=require("events")},2615:e=>{"use strict";e.exports=require("http")},8791:e=>{"use strict";e.exports=require("https")},8216:e=>{"use strict";e.exports=require("net")},8621:e=>{"use strict";e.exports=require("punycode")},6162:e=>{"use strict";e.exports=require("stream")},2452:e=>{"use strict";e.exports=require("tls")},7360:e=>{"use strict";e.exports=require("url")},1568:e=>{"use strict";e.exports=require("zlib")},6899:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>u}),t(8631),t(2029),t(5866);var a=t(3191),s=t(8716),o=t(7922),i=t.n(o),n=t(5231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let u=["",{children:["game",{children:["new",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8631)),"C:\\Users\\sucha\\Desktop\\coding\\code\\sutda\\sutda\\src\\app\\game\\new\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,2029)),"C:\\Users\\sucha\\Desktop\\coding\\code\\sutda\\sutda\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\sucha\\Desktop\\coding\\code\\sutda\\sutda\\src\\app\\game\\new\\page.tsx"],d="/game/new/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/game/new/page",pathname:"/game/new",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},5672:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},4262:(e,r,t)=>{Promise.resolve().then(t.bind(t,6034))},7520:()=>{},434:(e,r,t)=>{"use strict";t.d(r,{default:()=>s.a});var a=t(9404),s=t.n(a)},6034:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var a=t(326),s=t(7577),o=t(5047),i=t(434),n=t(5100);function l(){let e=(0,o.useRouter)(),[r,t]=(0,s.useState)(""),[l,u]=(0,s.useState)(!1),[c,d]=(0,s.useState)(null),m=async t=>{if(t.preventDefault(),!r.trim()){d("사용자 이름을 입력해주세요.");return}u(!0),d(null);try{let{gameId:t,playerId:a}=await (0,n.dz)(r);localStorage.setItem(`game_${t}_player_id`,a),localStorage.setItem(`game_${t}_username`,r),e.push(`/game/${t}`)}catch(e){console.error("게임 생성 오류:",e),d("게임을 생성하는 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{u(!1)}};return a.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-4",children:(0,a.jsxs)("div",{className:"w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-8",children:[a.jsx("h1",{className:"text-3xl font-bold mb-6 text-center",children:"새 게임 생성"}),c&&a.jsx("div",{className:"bg-red-500 text-white p-3 rounded-md mb-4",children:c}),(0,a.jsxs)("form",{onSubmit:m,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"username",className:"block text-sm font-medium mb-2",children:"사용자 이름"}),a.jsx("input",{type:"text",id:"username",value:r,onChange:e=>t(e.target.value),className:"w-full px-3 py-2 bg-gray-800 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"게임에서 사용할 이름을 입력하세요",disabled:l})]}),a.jsx("button",{type:"submit",className:`w-full py-3 font-medium rounded-md ${l?"bg-gray-500 cursor-not-allowed":"bg-red-600 hover:bg-red-700"}`,disabled:l,children:l?"생성 중...":"게임 생성 및 입장"})]}),a.jsx("div",{className:"mt-6 text-center",children:a.jsx(i.default,{href:"/",className:"text-blue-400 hover:text-blue-300 text-sm",children:"돌아가기"})})]})})}},5100:(e,r,t)=>{"use strict";t.d(r,{Cb:()=>c,Op:()=>d,bG:()=>m,dz:()=>o,ky:()=>n,nY:()=>i,t:()=>l,u1:()=>u});var a=t(2777),s=t(2665);async function o(e){let r=(0,s.Z)(),t=(0,s.Z)(),o=`user_${Math.random().toString(36).substring(2,9)}`;try{let{data:s,error:i}=await a.O.from("games").insert({id:r,status:"waiting",current_turn:null,betting_value:0,winner:null}).select();if(i)throw console.error("게임 생성 오류 세부 정보:",i),Error("게임을 생성할 수 없습니다: "+i.message);console.log("게임 생성 성공:",r);let{data:n,error:l}=await a.O.from("players").insert({id:t,game_id:r,user_id:o,username:e,balance:1e4,is_die:!1}).select();if(l)throw console.error("플레이어 생성 오류 세부 정보:",l),Error("플레이어를 생성할 수 없습니다: "+l.message);return console.log("플레이어 생성 성공:",t),localStorage.setItem(`game_${r}_user_id`,o),{gameId:r,playerId:t}}catch(e){throw console.error("게임 생성 중 예외 발생:",e),e}}async function i(e,r){try{let{data:t,error:o}=await a.O.from("games").select("*").eq("id",e).single();if(o||!t)throw console.error("게임 조회 오류 세부 정보:",o),Error("게임을 찾을 수 없습니다: "+(o?.message||"알 수 없는 오류"));if("waiting"!==t.status)throw Error("이미 시작된 게임에는 참가할 수 없습니다.");let i=(0,s.Z)(),l=`user_${Math.random().toString(36).substring(2,9)}`,{data:u,error:c}=await a.O.from("players").insert({id:i,game_id:e,user_id:l,username:r,balance:1e4,is_die:!1}).select();if(c)throw console.error("플레이어 생성 오류 세부 정보:",c),Error("게임에 참가할 수 없습니다: "+c.message);console.log("플레이어 참가 성공:",i),localStorage.setItem(`game_${e}_user_id`,l);let d=await n(e);return{playerId:i,gameState:d}}catch(e){throw console.error("게임 참가 중 예외 발생:",e),e}}async function n(e){let{data:r,error:t}=await a.O.from("games").select("*").eq("id",e).single();if(t||!r)throw console.error("게임 조회 오류:",t),Error("게임을 찾을 수 없습니다.");let{data:s,error:o}=await a.O.from("players").select("*").eq("game_id",e);if(o)throw console.error("플레이어 조회 오류:",o),Error("플레이어 정보를 불러올 수 없습니다.");return{id:r.id,status:r.status,players:s.map(e=>({id:e.id,user_id:e.user_id,username:e.username,balance:e.balance,cards:e.cards||[],isDie:e.is_die})),currentTurn:r.current_turn||"",winner:r.winner,bettingValue:r.betting_value}}async function l(e){let{data:r,error:t}=await a.O.from("players").select("id").eq("game_id",e);if(t||!r||r.length<2)throw Error("최소 2명의 플레이어가 필요합니다.");let s=function(){let e=Array.from({length:40},(e,r)=>r+1);for(let r=e.length-1;r>0;r--){let t=Math.floor(Math.random()*(r+1));[e[r],e[t]]=[e[t],e[r]]}return e}();for(let e=0;e<r.length;e++){let t=[s.pop(),s.pop()].filter(Boolean),{error:o}=await a.O.from("players").update({cards:t}).eq("id",r[e].id);if(o)throw console.error("플레이어 카드 업데이트 오류:",o),Error("카드를 배분할 수 없습니다.")}let o=r[Math.floor(Math.random()*r.length)].id,{error:i}=await a.O.from("games").update({status:"playing",current_turn:o,betting_value:0}).eq("id",e);if(i)throw console.error("게임 상태 업데이트 오류:",i),Error("게임을 시작할 수 없습니다.");await p(e,"start",o)}async function u(e,r,t){if(t<=0)throw Error("베팅 금액은 0보다 커야 합니다.");let s=await n(e);if("playing"!==s.status)throw Error("게임이 진행 중이 아닙니다.");if(s.currentTurn!==r)throw Error("당신의 턴이 아닙니다.");let o=s.players.find(e=>e.id===r);if(!o)throw Error("플레이어를 찾을 수 없습니다.");if(o.balance<t)throw Error("잔액이 부족합니다.");let i=f(s.players,r),{error:l}=await a.O.from("games").update({current_turn:i,betting_value:s.bettingValue+t}).eq("id",e);if(l)throw console.error("게임 상태 업데이트 오류:",l),Error("베팅할 수 없습니다.");let{error:u}=await a.O.from("players").update({balance:o.balance-t}).eq("id",r);if(u)throw console.error("플레이어 잔액 업데이트 오류:",u),Error("잔액을 업데이트할 수 없습니다.");await p(e,"bet",r,t)}async function c(e,r){let t=await n(e);if("playing"!==t.status)throw Error("게임이 진행 중이 아닙니다.");if(t.currentTurn!==r)throw Error("당신의 턴이 아닙니다.");let s=t.players.find(e=>e.id===r);if(!s)throw Error("플레이어를 찾을 수 없습니다.");if(s.balance<500)throw Error("잔액이 부족합니다.");let o=f(t.players,r),{error:i}=await a.O.from("games").update({current_turn:o,betting_value:t.bettingValue+500}).eq("id",e);if(i)throw console.error("게임 상태 업데이트 오류:",i),Error("콜할 수 없습니다.");let{error:l}=await a.O.from("players").update({balance:s.balance-500}).eq("id",r);if(l)throw console.error("플레이어 잔액 업데이트 오류:",l),Error("잔액을 업데이트할 수 없습니다.");await p(e,"call",r,500)}async function d(e,r){let t=await n(e);if("playing"!==t.status)throw Error("게임이 진행 중이 아닙니다.");if(t.currentTurn!==r)throw Error("당신의 턴이 아닙니다.");let{error:s}=await a.O.from("players").update({is_die:!0}).eq("id",r);if(s)throw console.error("플레이어 다이 상태 업데이트 오류:",s),Error("다이할 수 없습니다.");let o=t.players.filter(e=>e.id!==r&&!e.isDie);if(1===o.length){let r=o[0].id,{error:s}=await a.O.from("players").update({balance:o[0].balance+t.bettingValue}).eq("id",r);if(s)throw console.error("승자 잔액 업데이트 오류:",s),Error("승자 잔액을 업데이트할 수 없습니다.");let{error:i}=await a.O.from("games").update({status:"finished",winner:r}).eq("id",e);if(i)throw console.error("게임 종료 상태 업데이트 오류:",i),Error("게임을 종료할 수 없습니다.")}else{let s=f(t.players,r),{error:o}=await a.O.from("games").update({current_turn:s}).eq("id",e);if(o)throw console.error("게임 상태 업데이트 오류:",o),Error("게임 상태를 업데이트할 수 없습니다.")}await p(e,"die",r)}async function m(e,r,t){if(!t.trim())throw Error("메시지 내용이 비어있습니다.");let{data:s,error:o}=await a.O.from("players").select("username, user_id").eq("id",r).single();if(o||!s)throw console.error("플레이어 정보 조회 오류:",o),Error("플레이어 정보를 찾을 수 없습니다.");let{error:i}=await a.O.from("messages").insert({game_id:e,user_id:s.user_id,username:s.username,content:t});if(i)throw console.error("메시지 저장 오류:",i),Error("메시지를 전송할 수 없습니다: "+i.message)}async function p(e,r,t,s){let{error:o}=await a.O.from("game_actions").insert({game_id:e,player_id:t,action_type:r,amount:s});o&&(console.error("게임 액션 기록 오류:",o),console.warn("게임 액션을 기록할 수 없습니다."))}function f(e,r){if(e.length<=1)return r;let t=e.filter(e=>!e.isDie),a=(t.findIndex(e=>e.id===r)+1)%t.length;return t[a].id}},2777:(e,r,t)=>{"use strict";t.d(r,{O:()=>a});let a=(0,t(5815).eI)("https://ftzxcbarjntphlwmincc.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0enhjYmFyam50cGhsd21pbmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNzk5OTAsImV4cCI6MjA1Nzk1NTk5MH0.h8y5X3kCGJgvVf-_EA4jOyjU-4Z5q24GHklQZgrocY4",{realtime:{params:{eventsPerSecond:10}}})},8631:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});let a=(0,t(8570).createProxy)(String.raw`C:\Users\sucha\Desktop\coding\code\sutda\sutda\src\app\game\new\page.tsx#default`)},2029:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o,metadata:()=>s});var a=t(9510);t(5023);let s={title:"한국식 포커 - 섯다",description:"전통적인 한국식 포커 게임인 섯다를 온라인에서 즐겨보세요!"};function o({children:e}){return a.jsx("html",{lang:"ko",children:a.jsx("body",{children:a.jsx("main",{children:e})})})}},5023:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[819,165,404],()=>t(6899));module.exports=a})();