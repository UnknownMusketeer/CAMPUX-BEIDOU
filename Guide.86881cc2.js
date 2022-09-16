import{ap as C,w as _,Y as P,a as Q,Z as V,$ as z,a0 as m,a1 as s,a2 as l,a3 as g,al as B,aj as v,a8 as O,ar as T,aa as H}from"./index.53118d9a.js";import{s as X,Q as L}from"./Campus.4b74de92.js";import{Q as G}from"./QForm.b4e328ed.js";import{d as w}from"./QAvatar.228b257b.js";window.CESIUM_BASE_URL="/cesium/";const W="/campux-logo2c.7614cc78.png";const j={class:"absolute-top bg-transparent text-white no-box-shadow text-right",style:{"z-index":"500",height:"46px"}},F={class:"q-pa-sm text-center row",style:{width:"80vw",height:"45vh","max-width":"380px"}},N={class:"q-pt-lg col q-px-md"},$={class:"text-left q-pl-xs q-pt-xs q-mb-sm",style:{"font-size":"22px","font-weight":"800"}},D=l("div",{class:"text-left text-weight-bolder q-pl-xs q-mb-lg",style:{"font-size":"19px","background-image":"linear-gradient(84deg, #dccc41, #44ac04)","background-clip":"text","-webkit-background-clip":"text",color:"transparent",width:"-webkit-fit-content",transform:"skewX(-6deg)"}}," WEB3\u6821\u5185\u5143\u5B87\u5B99 ",-1),M=l("div",{class:"text-left text-bold q-pl-xs q-mb-md",style:{"font-size":"11px",transform:"skewX(-6deg)"}}," \u5DF2\u6709WEB3\u8D26\u6237\uFF1F ",-1),ee={__name:"Guide",emits:["universitySelected","login"],setup(R,{emit:c}){const f=C(),k=new X.exports.Provider({logger:console,appId:"12f343cc-1d0e-4b68-9db3-138d9ce7bf72"});function q(){k.request({method:"cfx_accounts",params:[{scopes:["baseInfo","identity"]}]}).then(e=>{console.log("show data"),console.log(e);const{address:t,code:a,scopes:p}=e;console.log("\u7528\u6237\u5730\u5740",t,"OAuth Code",a,"Scope",p),console.log("login begin");const n=localStorage;n.removeItem("accountAddress.caucx"),n.setItem("accountAddress.caucx",t);let E={code:a};w.post("http://127.0.0.1:8000/api/campus/login",E).then(o=>{console.log("get result"),console.log(o.data);let b=o.data.username,I=o.data.password,y=o.data.profile;if(o.data!="AnywebCodeError"&&o.data!="GetAnywebUserInfoError")w.post("http://127.0.0.1:8000/api/token/",{username:b,password:I}).then(i=>{console.log(i);const U=new Date().getTime()+1e3*60*60*24*7;n.setItem("access.caucx",i.data.access),n.setItem("refresh.caucx",i.data.refresh),n.setItem("expiredTime.caucx",U),n.setItem("username.caucx",b),u.commit("setProfile",y),u.commit("selectUniversity",y.university),c("login"),c("universitySelected")});else{let i=o.data;i=="AnywebCodeError"?f.notify({position:"top",message:"\u6388\u6743\u9519\u8BEF\uFF01"}):i=="GetAnywebUserInfoError"&&f.notify({position:"top",message:"\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u9519\u8BEF\uFF01"})}})}).catch(e=>{console.error("\u8C03\u7528\u5931\u8D25",e)})}const h=[{logo:"https://tspace-1253470014.cos.ap-hongkong.myqcloud.com/nft/confiliondancer/image/confiliondancer.png",label:"\u4E2D\u56FD\u6C11\u822A\u5927\u5B66",position:{longitude:39.1006,latitude:39.1}},{logo:"https://tspace-1253470014.cos.ap-hongkong.myqcloud.com/nft/confi3year/image/conflux3ndanniversary.jpg",label:"\u897F\u5357\u4EA4\u901A\u5927\u5B66\uFF08\u7280\u6D66\u6821\u533A\uFF09",position:{longitude:39.12,latitude:39.10538}}],d=_(h),r=_(d.value[0]),u=P();function x(){u.commit("selectUniversity",r.value),c("universitySelected",r.value)}function S(e,t){t(()=>{const a=e.toLowerCase();d.value=h.filter(p=>p.label.toLowerCase().indexOf(a)>-1)})}const A=Q(()=>document.body.clientHeight>700?(console.log("45vh"),"45vh"):(console.log("55vh"),"55vh"));return(e,t)=>(V(),z(H,{style:T({"border-radius":"1rem",height:v(A)})},{default:m(()=>[s(O,{class:"q-pa-none"},{default:m(()=>[l("div",j,[s(g,{flat:"",ripple:!1,onClick:x,class:"text-grey-5",round:"",icon:"close",style:{top:"5px",right:"5px","font-size":"12px"}})]),l("div",F,[l("div",N,[l("div",$,[s(B,{src:v(W),width:"170px","spinner-color":"primary","spinner-size":"82px",style:{transform:"skewX(-6deg)"}},null,8,["src"])]),D,s(G,{onSubmit:x,class:"text-center q-mb-lg"},{default:m(()=>[s(L,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),options:d.value,outlined:"",dense:"",behavior:"menu","use-input":"","fill-input":"","hide-selected":"",color:"green-4","input-debounce":"0",rounded:"",onFilter:S,class:"q-pb-md universitySelect",style:{"border-radius":"0.8rem !important",color:"black !important",transform:"skewX(-6deg)"}},null,8,["modelValue","options"]),s(g,{label:"\u8FDB\u5165\u4F53\u9A8C",type:"submit",class:"full-width q-ml-sm",color:"custom-green",style:{"border-radius":"0.8rem !important",transform:"skewX(-6deg)",height:"40px"},outline:"",rounded:""})]),_:1}),M,s(g,{label:"\u767B\u5F55",type:"submit",color:"custom-green",rounded:"",unelevated:"",class:"full-width text-white",style:{"border-radius":"0.8rem !important",transform:"skewX(-6deg)",height:"40px"},onClick:q})])])]),_:1})]),_:1},8,["style"]))}};export{ee as default};
