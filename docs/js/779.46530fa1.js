"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[779],{9779:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var l=t(9835),n=t(6970);function o(e,a,t,o,r,s){const i=(0,l.up)("q-badge"),c=(0,l.up)("q-td"),m=(0,l.up)("q-table");return(0,l.wg)(),(0,l.j4)(m,{title:"Счета",rows:e.accs,columns:e.columns,"row-key":"client_name","rows-per-page-label":"Заявок на странице",flat:"",bordered:"","card-class":"grid-mobile__card",pagination:e.initialPagination},{"body-cell-meeting_state":(0,l.w5)((a=>[(0,l.Wm)(c,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:e.getColor(a.value),label:a.value},null,8,["color","label"])])),_:2},1032,["props"])])),"body-cell-stg":(0,l.w5)((e=>[(0,l.Wm)(c,{props:e},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.row.stg,((e,a)=>((0,l.wg)(),(0,l.iD)("span",{key:a},(0,n.zw)(e),1)))),128))])),_:2},1032,["props"])])),"body-cell-meeting_date":(0,l.w5)((a=>[(0,l.Wm)(c,{props:a,class:"d-flex wrap"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.formatDateTime(a.row.meeting_date)),1)])),_:2},1032,["props"])])),"body-cell-person_phone":(0,l.w5)((e=>[(0,l.Wm)(c,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)(" + "+(0,n.zw)(e.row.person_phone),1)])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination"])}var r=t(3100),s=t(4376);const{formatDate:i}=s["default"],c=[{name:"client_name",label:"Клиент",required:!0,align:"left",field:e=>e.client_name,format:e=>`${e}`,sortable:!0},{name:"client_city",label:"Город",field:"client_city",sortable:!0,sort:(e,a)=>e.localeCompare(a),align:"centre"},{name:"stg",label:"Продукт",field:"stg",align:"centre"},{name:"meeting_date",label:"Дата встречи",field:"meeting_date",sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10),align:"centre"},{name:"meeting_place",label:"Место встречи",field:"meeting_place"},{name:"meeting_state",label:"Статус встречи",field:"meeting_state"},{name:"person_phone",label:"Номер телефона",field:"person_phone"},{name:"bank_name",label:"Банк",field:"bank_name"}],m=(0,l.aZ)({name:"AccountsGrid",setup(){return{columns:c,initialPagination:{rowsPerPage:10}}},computed:{...(0,r.rn)({accs:e=>e.allTabs.accounts,stateColor:e=>e.allTabs.stateColor})},methods:{...(0,r.nv)({getAccounts:"allTabs/getAccounts"}),formatDateTime(e){return i(e,"DD.MM.YYYY HH:mm")},getColor(e){const a=this.stateColor[e];return a?a.color:"#FB8C00"}},mounted(){this.getAccounts()}});var p=t(1639),d=t(4204),u=t(7220),g=t(990),b=t(9984),_=t.n(b);const w=(0,p.Z)(m,[["render",o]]),f=w;_()(m,"components",{QTable:d.Z,QTd:u.Z,QBadge:g.Z})}}]);