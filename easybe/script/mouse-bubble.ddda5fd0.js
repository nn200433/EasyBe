"use strict";(self.webpackChunkeasybe=self.webpackChunkeasybe||[]).push([[1545],{6373:function(e,t,n){function i(e){let t=document.createElement("canvas");t.id="bubble",$("#home").after(t);let n=document.getElementById("bubble"),i=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight,n.style.position="fixed",n.style.left="0",n.style.bottom="0",n.style.pointerEvents="none";let l=[],o=e.live,s=e.colors;window.addEventListener("mousemove",(function(t){for(let n=0;n<e.quantity;n++)l.push({sx:t.x,sy:t.y,vx:.5-Math.random(),vy:.5-Math.random(),life:o,color:s[parseInt(Math.random()*s.length)],size:Math.random()*e.size})})),setInterval((function(){i.clearRect(0,0,n.width,n.height);for(let e=0;e<l.length;e++){let t=l[e];i.beginPath(),i.arc(t.sx,t.sy,t.size,2*Math.PI,!1),i.fillStyle="rgba("+t.color+","+t.life/o+")",i.fill(),t.life--,t.life<=0&&l.splice(e,1),t.sx+=3*t.vx,t.sy+=3*t.vy}}),20)}n.r(t),n.d(t,{default:function(){return i}})}}]);