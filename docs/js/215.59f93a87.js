"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[215],{1215:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var l=t(9835),n=t(6970);function o(e,a,t,o,s,r){const i=(0,l.up)("q-badge"),c=(0,l.up)("q-td"),d=(0,l.up)("q-table");return(0,l.wg)(),(0,l.j4)(d,{title:"Счета",rows:e.accs,columns:e.columns,"row-key":"client_name","rows-per-page-label":"Заявок на странице",flat:"",bordered:"","card-class":"grid-mobile__card",pagination:e.initialPagination},{"body-cell-meeting_state":(0,l.w5)((a=>[(0,l.Wm)(c,{props:a},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{color:e.getColor(a.value),label:a.value},null,8,["color","label"])])),_:2},1032,["props"])])),"body-cell-stg":(0,l.w5)((e=>[(0,l.Wm)(c,{props:e},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.row.stg,((e,a)=>((0,l.wg)(),(0,l.iD)("span",{key:a},(0,n.zw)(e),1)))),128))])),_:2},1032,["props"])])),"body-cell-meeting_date":(0,l.w5)((a=>[(0,l.Wm)(c,{props:a,class:"d-flex wrap"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.formatDateTime(a.row.meeting_date)),1)])),_:2},1032,["props"])])),"body-cell-person_phone":(0,l.w5)((e=>[(0,l.Wm)(c,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)(" + "+(0,n.zw)(e.row.person_phone),1)])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination"])}var s=t(3100),r=t(4376),i=t(9302);const{formatDate:c}=r["default"],d=[{name:"client_name",label:"Клиент",required:!0,align:"left",field:e=>e.client_name,format:e=>`${e}`,sortable:!0},{name:"client_city",label:"Город",field:"client_city",sortable:!0,sort:(e,a)=>e.localeCompare(a),align:"centre"},{name:"stg",label:"Продукт",field:"stg",align:"centre"},{name:"meeting_date",label:"Дата встречи",field:"meeting_date",sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10),align:"centre"},{name:"meeting_place",label:"Место встречи",field:"meeting_place"},{name:"meeting_state",label:"Статус встречи",field:"meeting_state"},{name:"person_phone",label:"Номер телефона",field:"person_phone"},{name:"bank_name",label:"Банк",field:"bank_name"}],m=(0,l.aZ)({name:"AccountsGrid",setup(){const e=(0,i.Z)();return{columns:d,initialPagination:{rowsPerPage:10},showLoading(){e.loading.show({message:"Загрузка..."})},hideLoading(){e.loading.hide()}}},computed:{...(0,s.rn)({accs:e=>e.allTabs.accounts,stateColor:e=>e.allTabs.stateColor})},methods:{...(0,s.nv)({getAccounts:"allTabs/getAccounts"}),formatDateTime(e){return c(e,"DD.MM.YYYY HH:mm")},getColor(e){const a=this.stateColor[e];return a?a.color:"#FB8C00"}},mounted(){this.showLoading(),this.getAccounts().then((()=>this.hideLoading()))}});var p=t(1639),g=t(4204),u=t(7220),b=t(990),_=t(9984),w=t.n(_);const f=(0,p.Z)(m,[["render",o]]),h=f;w()(m,"components",{QTable:g.Z,QTd:u.Z,QBadge:b.Z})}}]);