"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[641],{1641:(e,l,a)=>{a.r(l),a.d(l,{default:()=>B});var o=a(9835),t=a(1957);const s=(0,o._)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz17l-3EsOtm8-Znyuj0otU2BLDz0OnY4MEvI3ojbUCJO-e9ANZ-8RRJGcYfuKIEXzoSk&usqp=CAU"},null,-1);function n(e,l,a,n,r,m){const i=(0,o.up)("q-avatar"),u=(0,o.up)("q-space"),d=(0,o.up)("q-btn"),c=(0,o.up)("q-toolbar"),p=(0,o.up)("q-icon"),_=(0,o.up)("q-route-tab"),h=(0,o.up)("q-tabs"),y=(0,o.up)("q-header"),b=(0,o.up)("DialogForm"),g=(0,o.up)("router-view"),w=(0,o.up)("q-page-container"),f=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(f,{view:"lHh Lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{bordered:"",class:"bg-grey-1 text-primary q-mt-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{rounded:"",size:"40px",class:"q-pl-xs"},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(u),(0,o.Wm)(d,{flat:"",round:"",dense:"",icon:"menu",onClick:e.showNotif},null,8,["onClick"])])),_:1}),(0,o.Wm)(h,{dense:"","indicator-color":"primary","narrow-indicator":"","inline-label":""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.tabs,(l=>((0,o.wg)(),(0,o.j4)(_,{key:l.name,to:l.route,label:l.label},{default:(0,o.w5)((()=>[l.main?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(p,{key:0,name:"close",size:"1.2rem",class:"tab-icon",onClick:(0,t.iM)((a=>e.closeTab(l)),["prevent"])},null,8,["onClick"]))])),_:2},1032,["to","label"])))),128))])),_:1})])),_:1}),(0,o.Wm)(b),(0,o.Wm)(w,{animated:""},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(g,{key:e.$route.fullPath,onClose:e.closeTab},null,8,["onClose"]))])),_:1})])),_:1})}var r=a(499),m=a(3100),i=a(6970);const u=(0,o._)("div",{class:"text-h6"},"Новая заявка",-1),d={class:"row q-col-gutter-md"},c=(0,o._)("h6",{class:"q-ma-none text-bold q-my-md"}," Дополнительная информация: ",-1),p={class:"row"},_={class:"col-xs-12 col-sm-6 col-md-6 q-col-gutter-y-md"},h={class:"self-end q-pt-md"},y={class:"text-caption text-right text-grey-8"};function b(e,l,a,t,s,n){const r=(0,o.up)("q-space"),m=(0,o.up)("q-btn"),b=(0,o.up)("q-card-section"),g=(0,o.up)("q-input"),w=(0,o.up)("q-select"),f=(0,o.up)("q-card-actions"),q=(0,o.up)("q-form"),V=(0,o.up)("q-card"),T=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(T,{modelValue:e.showForm,"onUpdate:modelValue":l[11]||(l[11]=l=>e.showForm=l),"transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{class:"dialogForm",style:{width:"100%","max-width":"800px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"row items-center bg-primary text-white"},{default:(0,o.w5)((()=>[u,(0,o.Wm)(r),(0,o.Wm)(m,{icon:"close",flat:"",round:"",dense:"",onClick:e.closeDialog},null,8,["onClick"])])),_:1}),(0,o.Wm)(b,{class:"q-pa-lg"},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{onSubmit:e.addNewApplication,onReset:e.clearForm,class:"q-ma-0"},{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(g,{outlined:"",dense:"",modelValue:e.person_fullname,"onUpdate:modelValue":l[0]||(l[0]=l=>e.person_fullname=l),label:"Имя клиента *","lazy-rules":"",class:"col-xs-12 col-sm-12 col-md-12 col-lg-6",rules:e.rules},null,8,["modelValue","rules"]),(0,o.Wm)(g,{outlined:"",dense:"",modelValue:e.person_phone,"onUpdate:modelValue":l[1]||(l[1]=l=>e.person_phone=l),label:"Номер телефона *","lazy-rules":"","fill-mask":"",mask:"7 (###) ### - ####",class:"col-xs-12 col-sm-12 col-md-12 col-lg-6",rules:e.rules},null,8,["modelValue","rules"]),(0,o.Wm)(g,{label:"E-mail *",modelValue:e.person_email,"onUpdate:modelValue":l[2]||(l[2]=l=>e.person_email=l),type:"email",outlined:"",dense:"","lazy-rules":"",rules:e.rules,class:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},null,8,["modelValue","rules"]),(0,o.Wm)(g,{label:"Название компании *",modelValue:e.company_name,"onUpdate:modelValue":l[3]||(l[3]=l=>e.company_name=l),outlined:"",dense:"","lazy-rules":"",rules:e.rules,class:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},null,8,["modelValue","rules"]),(0,o.Wm)(w,{modelValue:e.company_type,"onUpdate:modelValue":l[4]||(l[4]=l=>e.company_type=l),options:e.companyTypes,label:"Организационно-правовая форма",outlined:"",dense:"",class:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},null,8,["modelValue","options"]),(0,o.Wm)(g,{outlined:"",dense:"",modelValue:e.inn,"onUpdate:modelValue":l[5]||(l[5]=l=>e.inn=l),label:"ИНН клиента*","lazy-rules":"",rules:e.rules,mask:"## ## ### ### ##",class:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},null,8,["modelValue","rules"]),(0,o.Wm)(w,{modelValue:e.stg,"onUpdate:modelValue":l[6]||(l[6]=l=>e.stg=l),multiple:"",options:e.products,label:"Продукт",outlined:"",dense:"",class:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},null,8,["modelValue","options"]),(0,o.Wm)(w,{modelValue:e.state,"onUpdate:modelValue":l[7]||(l[7]=l=>e.state=l),options:e.optionsState,label:"Статус заявки *",outlined:"",dense:"","lazy-rules":"",rules:e.rules,class:"col-xs-12 col-sm-12 col-md-12 col-lg-6"},null,8,["modelValue","options","rules"])]),c,(0,o._)("div",p,[(0,o._)("div",_,[(0,o.Wm)(g,{outlined:"",dense:"",modelValue:e.client_name,"onUpdate:modelValue":l[8]||(l[8]=l=>e.client_name=l),label:"Партнёр","lazy-rules":""},null,8,["modelValue"]),(0,o.Wm)(g,{outlined:"",dense:"",modelValue:e.partnerInn,"onUpdate:modelValue":l[9]||(l[9]=l=>e.partnerInn=l),label:"ИНН партнёра","lazy-rules":"",mask:"## ## ### ### ##"},null,8,["modelValue"]),(0,o.Wm)(g,{outlined:"",dense:"",modelValue:e.crm_source_type,"onUpdate:modelValue":l[10]||(l[10]=l=>e.crm_source_type=l),label:"Источник заявки","lazy-rules":""},null,8,["modelValue"])])]),(0,o.Wm)(f,{align:"left",class:"bg-white text-teal q-pa-none q-pt-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:"Сохранить",color:"primary",type:"submit"}),(0,o.Wm)(m,{label:"Отмена",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])),_:1}),(0,o._)("div",h,[(0,o._)("div",y," Заявка принята "+(0,i.zw)(e.formatDateTime(new Date))+" в "+(0,i.zw)(e.formatDateOnlyTime(new Date))+". ",1)])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var g=a(4376);const{formatDate:w}=g["default"],f=((new Date).toLocaleDateString(),(0,o.aZ)({name:"DialogForm",setup(){return{num:(0,r.iH)(null),id:(new Date).getTime()*Math.random()*1e5,dadd:new Date,profile_id:(new Date).getTime()*Math.random()*1e9,state:(0,r.iH)(null),stg:(0,r.iH)(null),inn:(0,r.iH)(null),company_name:(0,r.iH)(null),person_phone:(0,r.iH)(null),company_type:(0,r.iH)(null),person_email:(0,r.iH)(null),lastUpd:new Date,person_fullname:(0,r.iH)(null),type:(0,r.iH)("partner"),user_id:(new Date).getTime()*Math.random()*1e9,client_name:(0,r.iH)(null),partnerInn:(0,r.iH)(null),crm_source_type:(0,r.iH)(null),rules:[e=>!!e||"Обязательное поле!"]}},computed:{...(0,m.rn)({showForm:e=>e.allTabs.isShowForm,optionsState:e=>e.allTabs.optionsState,products:e=>e.allTabs.products,companyTypes:e=>e.allTabs.companyTypes})},methods:{...(0,m.OI)({closeDialog:"allTabs/closeDialog",addOrder:"allTabs/addOrder"}),formatDateOnlyTime(e){return w(e,"HH:mm")},formatDateTime(e){return w(e,"DD.MM.YYYY")},getColor(e){const l=this.status[e];return l?l.color:"#FB8C00"},addNewApplication(){const e={id:this.id,num:Math.floor(666*Math.random())+1,dadd:this.dadd,profile_id:this.profile_id,state:this.state,lastUpd:this.lastUpd,stg:Array.from(this.stg),inn:this.inn,company_name:this.company_name,person_phone:this.person_phone,company_type:this.company_type,person_fullname:this.person_fullname,person_email:this.person_email,extra:{partner:{type:this.type,user_id:this.user_id,client_name:this.client_name,inn:this.partnerInn},crm_source_type:this.crm_source_type},is_new:!0};console.log("FORM",e),this.addOrder(e),this.clearForm()},clearForm(){this.num="",this.id="",this.dadd="",this.profile_id="",this.state="",this.stg="",this.inn="",this.company_name="",this.person_phone="",this.company_type="",this.person_email="",this.lastUpd=new Date,this.person_fullname="",this.extra={},this.closeDialog()}}}));var q=a(1639),V=a(3706),T=a(4458),W=a(3190),x=a(136),D=a(4455),Z=a(8326),v=a(6611),k=a(7509),H=a(1821),Q=a(9984),U=a.n(Q);const C=(0,q.Z)(f,[["render",b]]),z=C;U()(f,"components",{QDialog:V.Z,QCard:T.Z,QCardSection:W.Z,QSpace:x.Z,QBtn:D.Z,QForm:Z.Z,QInput:v.Z,QSelect:k.Z,QCardActions:H.Z});var F=a(9302);const I=(0,o.aZ)({name:"MainLayout",components:{DialogForm:z},setup(){const e=(0,F.Z)();return{activeTab:(0,r.iH)("accounts"),showNotif(){e.notify({timeout:2500,progress:!0,message:"Мне жаль, но тут пока ничего нет.",color:"primary",position:"top-right"})}}},computed:{...(0,m.rn)({tabs:e=>e.allTabs.tabs}),...(0,m.Se)({tabIndex:"allTabs/tabIndex",itemIndex:"allTabs/itemIndex"})},methods:{...(0,m.nv)({closeTab:"allTabs/closeTab"})}});var S=a(7605),M=a(6602),O=a(1663),j=a(1357),A=a(7817),R=a(4337),Y=a(2857),N=a(2133);const L=(0,q.Z)(I,[["render",n]]),B=L;U()(I,"components",{QLayout:S.Z,QHeader:M.Z,QToolbar:O.Z,QAvatar:j.Z,QSpace:x.Z,QBtn:D.Z,QTabs:A.Z,QRouteTab:R.Z,QIcon:Y.Z,QPageContainer:N.Z})}}]);