import{d as l,g as i,c as v,u as m,r as p,o as _}from"./index-df3efb78.js";const f=l({__name:"index",setup(u){let o=i([]);const c=e=>{o.value.push({title:"阅读",start:e.dateStr+" 12:00",end:e.dateStr+" 16:00"})},a=e=>{},s=e=>{console.log(e);let n=document.createElement("div");const t=e.timeText.split("-"),d=t[0].replace("时",""),r=t[0].replace("时","");return n.innerHTML=`
  <div>开始时间:${d}</div>
  <div>结束时间:${r}</div>
  <div>标题:${e.event._def.title}</div>
  `,{domNodes:[n]}};return(e,n)=>{const t=p("m-calendar");return _(),v(t,{events:m(o),onDateClick:c,onEventClick:a,onEventContent:s,displayEventEnd:"",eventContent:s},null,8,["events"])}}});export{f as default};
