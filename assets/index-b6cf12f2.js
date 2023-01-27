import{d as w,g as C,b as R,e as r,w as o,u as l,r as p,o as B,a as n,E as O,h as c,p as E,i as q,f as S,_ as F}from"./index-df3efb78.js";const P=a=>(E("data-v-c7ea1e38"),a=a(),q(),a),I=P(()=>S("div",{class:"tip"},"jpg/png files with a size less than 500kb",-1)),U=w({__name:"index",setup(a){const u=[{type:"input",value:"admin",label:"用户名",prop:"username",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",label:"职位",placeholder:"请选择职位",prop:"role",rules:[{required:!0,message:"职位不能为空",trigger:"change"}],attrs:{style:{width:"100%"}},children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],label:"爱好",prop:"like",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",value:"1",label:"足球"},{type:"checkbox",value:"2",label:"篮球"},{type:"checkbox",value:"3",label:"乒乓球"}]},{type:"radio-group",value:"",label:"性别",prop:"gender",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",value:"male",label:"男"},{type:"radio",value:"female",label:"女"}]},{type:"upload",label:"上传",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3}},{type:"editor",value:"初始化文字",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}];let d=(e,t)=>{console.log("handleRemove"),console.log(e,t)},g=e=>{console.log("handlePreview"),console.log(e)},m=e=>(console.log("beforeRemove"),O.confirm(`Cancel the transfert of ${e.file.name} ?`)),h=e=>{console.log("handleExceed",e),c.warning(`The limit is 3, you selected ${e.files.length} files this time, add up to ${e.files.length+e.fileList.length} totally`)},f=e=>{console.log("success"),console.log(e)},_=e=>{console.log("change"),console.log(e)},b=e=>{console.log("handleBeforeUpload"),console.log(e)},v=e=>{e.formRef.validate(t=>{t?(console.log(e.model),c.success("提交成功！")):c.error("表单填写有误，请检查")})},i=C(),y=()=>{i.value.resetFields()};return(e,t)=>{const s=p("el-button"),x=p("m-form");return B(),R("div",null,[r(x,{ref_key:"mFormRef",ref:i,"label-width":"100px",options:u,onOnChange:l(_),onBeforeUpload:l(b),onOnPreview:l(g),onOnRemove:l(d),onBeforeRemove:l(m),onOnSuccess:l(f),onOnExceed:l(h)},{uploadArea:o(()=>[r(s,{size:"small",type:"primary"},{default:o(()=>[n("Click to upload")]),_:1})]),uploadTip:o(()=>[I]),operate:o(k=>[r(s,{type:"primary",onClick:$=>l(v)(k)},{default:o(()=>[n("提交")]),_:2},1032,["onClick"]),r(s,{onClick:l(y)},{default:o(()=>[n("重置")]),_:1},8,["onClick"])]),_:1},8,["onOnChange","onBeforeUpload","onOnPreview","onOnRemove","onBeforeRemove","onOnSuccess","onOnExceed"])])}}});const T=F(U,[["__scopeId","data-v-c7ea1e38"]]);export{T as default};