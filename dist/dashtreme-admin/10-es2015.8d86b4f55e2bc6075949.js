(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Yj9t:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthModule",(function(){return f}));var r=n("ofXK"),l=n("3Pt+"),a=n("tyNb"),i=n("fXoL");const o=["f"],m=["f"],d=["f"],s=["f"],c=["f"],u=["f"],p=["f"],S=[{path:"",children:[{path:"signin1",component:(()=>{class e{constructor(e,t){this.router=e,this.route=t}onSubmit(){this.signin1.reset()}onResetpassword1(){this.router.navigate(["reset-password1"],{relativeTo:this.route.parent})}onSignup1(){this.router.navigate(["signup1"],{relativeTo:this.route.parent})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-signin1"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](o,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.signin1=n.first)},decls:54,vars:0,consts:[["id","wrapper"],[1,"height-100v","d-flex","align-items-center","justify-content-center"],[1,"loader-wrapper"],[1,"lds-ring"],[1,"card","card-authentication1","mx-auto","my-5"],[1,"card-body"],[1,"card-content","p-2"],[1,"text-center"],["src","assets/images/logo-icon.png","alt","logo icon"],[1,"card-title","text-uppercase","text-center","py-3"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","exampleInputUsername",1,"sr-only"],[1,"position-relative","has-icon-right"],["type","text","id","exampleInputUsername","placeholder","Enter Username","ngModel","","required","",1,"form-control","input-shadow"],[1,"form-control-position"],[1,"icon-user"],["for","exampleInputPassword",1,"sr-only"],["type","password","id","exampleInputPassword","placeholder","Enter Password","ngModel","","required","",1,"form-control","input-shadow"],[1,"icon-lock"],[1,"form-row"],[1,"form-group","col-6"],[1,"icheck-material-white"],["type","checkbox","id","user-checkbox","checked",""],["for","user-checkbox"],[1,"form-group","col-6","text-right"],["href","JavaScript:;",3,"click"],["type","button",1,"btn","btn-light","btn-block"],[1,"text-center","mt-3"],[1,"form-row","mt-4"],[1,"form-group","mb-0","col-6"],[1,"fa","fa-facebook-square"],[1,"form-group","mb-0","col-6","text-right"],[1,"fa","fa-twitter-square"],[1,"card-footer","text-center","py-3"],[1,"text-warning","mb-0"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275element"](3,"div",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"div",5),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275elementStart"](7,"div",7),i["\u0275\u0275element"](8,"img",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"div",9),i["\u0275\u0275text"](10,"Sign In"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"form",10,11),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),i["\u0275\u0275elementStart"](13,"div",12),i["\u0275\u0275elementStart"](14,"label",13),i["\u0275\u0275text"](15,"Username"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"div",14),i["\u0275\u0275element"](17,"input",15),i["\u0275\u0275elementStart"](18,"div",16),i["\u0275\u0275element"](19,"i",17),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"div",12),i["\u0275\u0275elementStart"](21,"label",18),i["\u0275\u0275text"](22,"Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"div",14),i["\u0275\u0275element"](24,"input",19),i["\u0275\u0275elementStart"](25,"div",16),i["\u0275\u0275element"](26,"i",20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](27,"div",21),i["\u0275\u0275elementStart"](28,"div",22),i["\u0275\u0275elementStart"](29,"div",23),i["\u0275\u0275element"](30,"input",24),i["\u0275\u0275elementStart"](31,"label",25),i["\u0275\u0275text"](32,"Remember me"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"div",26),i["\u0275\u0275elementStart"](34,"a",27),i["\u0275\u0275listener"]("click",(function(){return t.onResetpassword1()})),i["\u0275\u0275text"](35,"Reset Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"button",28),i["\u0275\u0275text"](37,"Sign In"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](38,"div",29),i["\u0275\u0275text"](39,"Sign In With"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](40,"div",30),i["\u0275\u0275elementStart"](41,"div",31),i["\u0275\u0275elementStart"](42,"button",28),i["\u0275\u0275element"](43,"i",32),i["\u0275\u0275text"](44," Facebook"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](45,"div",33),i["\u0275\u0275elementStart"](46,"button",28),i["\u0275\u0275element"](47,"i",34),i["\u0275\u0275text"](48," Twitter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](49,"div",35),i["\u0275\u0275elementStart"](50,"p",36),i["\u0275\u0275text"](51,"Do not have an account? "),i["\u0275\u0275elementStart"](52,"a",27),i["\u0275\u0275listener"]("click",(function(){return t.onSignup1()})),i["\u0275\u0275text"](53," Sign Up here"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm,l.DefaultValueAccessor,l.NgControlStatus,l.NgModel,l.RequiredValidator],styles:[""]}),e})(),data:{title:"SignIn 1"}},{path:"signup1",component:(()=>{class e{constructor(e,t){this.router=e,this.route=t}onSubmit(){this.signup1.reset()}onSignin1(){this.router.navigate(["signin1"],{relativeTo:this.route.parent})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-signup1"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](m,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.signup1=n.first)},decls:55,vars:0,consts:[["id","wrapper"],[1,"height-100v","d-flex","align-items-center","justify-content-center"],[1,"card","card-authentication1","mx-auto","my-4"],[1,"card-body"],[1,"card-content","p-2"],[1,"text-center"],["src","assets/images/logo-icon.png","alt","logo icon"],[1,"card-title","text-uppercase","text-center","py-3"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","exampleInputName",1,"sr-only"],[1,"position-relative","has-icon-right"],["type","text","id","exampleInputName","placeholder","Enter Your Name","ngModel","","required","",1,"form-control","input-shadow"],[1,"form-control-position"],[1,"icon-user"],["for","exampleInputEmailId",1,"sr-only"],["type","text","id","exampleInputEmailId","placeholder","Enter Your Email ID","ngModel","","required","",1,"form-control","input-shadow"],[1,"icon-envelope-open"],["for","exampleInputPassword",1,"sr-only"],["type","text","id","exampleInputPassword","placeholder","Choose Password","ngModel","","required","",1,"form-control","input-shadow"],[1,"icon-lock"],[1,"icheck-material-white"],["type","checkbox","id","user-checkbox","checked",""],["for","user-checkbox"],["type","button",1,"btn","btn-light","btn-block","waves-effect","waves-light"],[1,"text-center","mt-3"],[1,"form-row","mt-4"],[1,"form-group","mb-0","col-6"],["type","button",1,"btn","btn-light","btn-block"],[1,"fa","fa-facebook-square"],[1,"form-group","mb-0","col-6","text-right"],[1,"fa","fa-twitter-square"],[1,"card-footer","text-center","py-3"],[1,"text-warning","mb-0"],["href","JavaScript:;",3,"click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"div",5),i["\u0275\u0275element"](6,"img",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",7),i["\u0275\u0275text"](8,"Sign Up"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"form",8,9),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),i["\u0275\u0275elementStart"](11,"div",10),i["\u0275\u0275elementStart"](12,"label",11),i["\u0275\u0275text"](13,"Name"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"div",12),i["\u0275\u0275element"](15,"input",13),i["\u0275\u0275elementStart"](16,"div",14),i["\u0275\u0275element"](17,"i",15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"div",10),i["\u0275\u0275elementStart"](19,"label",16),i["\u0275\u0275text"](20,"Email ID"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"div",12),i["\u0275\u0275element"](22,"input",17),i["\u0275\u0275elementStart"](23,"div",14),i["\u0275\u0275element"](24,"i",18),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](25,"div",10),i["\u0275\u0275elementStart"](26,"label",19),i["\u0275\u0275text"](27,"Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",12),i["\u0275\u0275element"](29,"input",20),i["\u0275\u0275elementStart"](30,"div",14),i["\u0275\u0275element"](31,"i",21),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](32,"div",10),i["\u0275\u0275elementStart"](33,"div",22),i["\u0275\u0275element"](34,"input",23),i["\u0275\u0275elementStart"](35,"label",24),i["\u0275\u0275text"](36,"I Agree With Terms & Conditions"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](37,"button",25),i["\u0275\u0275text"](38,"Sign Up"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](39,"div",26),i["\u0275\u0275text"](40,"Sign Up With"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](41,"div",27),i["\u0275\u0275elementStart"](42,"div",28),i["\u0275\u0275elementStart"](43,"button",29),i["\u0275\u0275element"](44,"i",30),i["\u0275\u0275text"](45," Facebook"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](46,"div",31),i["\u0275\u0275elementStart"](47,"button",29),i["\u0275\u0275element"](48,"i",32),i["\u0275\u0275text"](49," Twitter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](50,"div",33),i["\u0275\u0275elementStart"](51,"p",34),i["\u0275\u0275text"](52,"Already have an account? "),i["\u0275\u0275elementStart"](53,"a",35),i["\u0275\u0275listener"]("click",(function(){return t.onSignin1()})),i["\u0275\u0275text"](54," Sign In here"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm,l.DefaultValueAccessor,l.NgControlStatus,l.NgModel,l.RequiredValidator],styles:[""]}),e})(),data:{title:"SignUp 1"}},{path:"signin2",component:(()=>{class e{constructor(e,t){this.router=e,this.route=t}onSubmit(){this.signin2.reset()}onResetpassword2(){this.router.navigate(["reset-password2"],{relativeTo:this.route.parent})}onSignup2(){this.router.navigate(["signup2"],{relativeTo:this.route.parent})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-signin2"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](d,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.signin2=n.first)},decls:64,vars:0,consts:[["id","wrapper"],[1,"height-100v","d-flex","align-items-center","justify-content-center"],[1,"card-authentication2","mx-auto","my-5"],[1,"card-group"],[1,"card","mb-0"],[1,"bg-signin2"],[1,"card-img-overlay","rounded-left","my-5"],[1,"text-white"],[1,"card-text","text-white","pt-3"],[1,"card-body"],[1,"card-content","p-3"],[1,"text-center"],["src","assets/images/logo-icon.png","alt","logo icon"],[1,"card-title","text-uppercase","text-center","py-3"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],[1,"position-relative","has-icon-left"],["for","exampleInputUsername",1,"sr-only"],["type","text","id","exampleInputUsername","placeholder","Username","ngModel","","required","",1,"form-control"],[1,"form-control-position"],[1,"icon-user"],["for","exampleInputPassword",1,"sr-only"],["type","password","id","exampleInputPassword","placeholder","Password","ngModel","","required","",1,"form-control"],[1,"icon-lock"],[1,"form-row","mr-0","ml-0"],[1,"form-group","col-6"],[1,"icheck-material-white"],["type","checkbox","id","user-checkbox","checked",""],["for","user-checkbox"],[1,"form-group","col-6","text-right"],["href","JavaScript:;",3,"click"],["type","button",1,"btn","btn-light","btn-block","waves-effect","waves-light"],[1,"text-center","pt-3"],[1,"form-row","mt-4"],[1,"form-group","mb-0","col-6"],["type","button",1,"btn","btn-light","btn-block"],[1,"fa","fa-facebook-square"],[1,"form-group","mb-0","col-6","text-right"],[1,"fa","fa-twitter-square"],[1,"text-warning"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275element"](5,"div",5),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275elementStart"](7,"h2",7),i["\u0275\u0275text"](8,"Lorem"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"h1",7),i["\u0275\u0275text"](10,"Ipsum Dolor"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"p",8),i["\u0275\u0275text"](12,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",4),i["\u0275\u0275elementStart"](14,"div",9),i["\u0275\u0275elementStart"](15,"div",10),i["\u0275\u0275elementStart"](16,"div",11),i["\u0275\u0275element"](17,"img",12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"div",13),i["\u0275\u0275text"](19,"Sign In"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"form",14,15),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),i["\u0275\u0275elementStart"](22,"div",16),i["\u0275\u0275elementStart"](23,"div",17),i["\u0275\u0275elementStart"](24,"label",18),i["\u0275\u0275text"](25,"Username"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](26,"input",19),i["\u0275\u0275elementStart"](27,"div",20),i["\u0275\u0275element"](28,"i",21),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"div",16),i["\u0275\u0275elementStart"](30,"div",17),i["\u0275\u0275elementStart"](31,"label",22),i["\u0275\u0275text"](32,"Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](33,"input",23),i["\u0275\u0275elementStart"](34,"div",20),i["\u0275\u0275element"](35,"i",24),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"div",25),i["\u0275\u0275elementStart"](37,"div",26),i["\u0275\u0275elementStart"](38,"div",27),i["\u0275\u0275element"](39,"input",28),i["\u0275\u0275elementStart"](40,"label",29),i["\u0275\u0275text"](41,"Remember me"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](42,"div",30),i["\u0275\u0275elementStart"](43,"a",31),i["\u0275\u0275listener"]("click",(function(){return t.onResetpassword2()})),i["\u0275\u0275text"](44,"Reset Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](45,"button",32),i["\u0275\u0275text"](46,"Sign In"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](47,"div",33),i["\u0275\u0275elementStart"](48,"p"),i["\u0275\u0275text"](49,"or Sign in with"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](50,"div",34),i["\u0275\u0275elementStart"](51,"div",35),i["\u0275\u0275elementStart"](52,"button",36),i["\u0275\u0275element"](53,"i",37),i["\u0275\u0275text"](54," Facebook"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](55,"div",38),i["\u0275\u0275elementStart"](56,"button",36),i["\u0275\u0275element"](57,"i",39),i["\u0275\u0275text"](58," Twitter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](59,"hr"),i["\u0275\u0275elementStart"](60,"p",40),i["\u0275\u0275text"](61,"Do not have an account? "),i["\u0275\u0275elementStart"](62,"a",31),i["\u0275\u0275listener"]("click",(function(){return t.onSignup2()})),i["\u0275\u0275text"](63," Sign Up here"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm,l.DefaultValueAccessor,l.NgControlStatus,l.NgModel,l.RequiredValidator],styles:[""]}),e})(),data:{title:"SignIn 2"}},{path:"signup2",component:(()=>{class e{constructor(e,t){this.router=e,this.route=t}onSubmit(){this.signup2.reset()}onSignin2(){this.router.navigate(["signin2"],{relativeTo:this.route.parent})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-signup2"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](s,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.signup2=n.first)},decls:74,vars:0,consts:[["id","wrapper"],[1,"height-100v","d-flex","align-items-center","justify-content-center"],[1,"card-authentication2","mx-auto","my-3"],[1,"card-group"],[1,"card","mb-0"],[1,"bg-signup2"],[1,"card-img-overlay","rounded-left","my-5"],[1,"text-white"],[1,"card-text","text-white","pt-3"],[1,"card-body"],[1,"card-content","p-3"],[1,"text-center"],["src","assets/images/logo-icon.png","alt","logo icon"],[1,"card-title","text-uppercase","text-center","py-3"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],[1,"position-relative","has-icon-left"],["for","exampleInputName",1,"sr-only"],["type","text","id","exampleInputName","placeholder","Name","ngModel","","required","",1,"form-control"],[1,"form-control-position"],[1,"icon-user"],["for","exampleInputEmailId",1,"sr-only"],["type","text","id","exampleInputEmailId","placeholder","Email ID","ngModel","","required","",1,"form-control"],[1,"icon-envelope-open"],["for","exampleInputPassword",1,"sr-only"],["type","text","id","exampleInputPassword","placeholder","Password","ngModel","","required","",1,"form-control"],[1,"icon-lock"],["for","exampleInputRetryPassword",1,"sr-only"],["type","password","id","exampleInputRetryPassword","placeholder","Retry Password","ngModel","","required","",1,"form-control"],[1,"icheck-material-white"],["type","checkbox","id","user-checkbox","checked",""],["for","user-checkbox"],["type","button",1,"btn","btn-light","btn-block","waves-effect","waves-light"],[1,"text-center","pt-3"],[1,"form-row","mt-4"],[1,"form-group","mb-0","col-6"],["type","button",1,"btn","btn-light","btn-block"],[1,"fa","fa-facebook-square"],[1,"form-group","mb-0","col-6","text-right"],[1,"fa","fa-twitter-square"],[1,"text-warning"],["href","JavaScript:;",3,"click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275element"](5,"div",5),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275elementStart"](7,"h2",7),i["\u0275\u0275text"](8,"Lorem"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"h1",7),i["\u0275\u0275text"](10,"Ipsum Dolor"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"p",8),i["\u0275\u0275text"](12,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",4),i["\u0275\u0275elementStart"](14,"div",9),i["\u0275\u0275elementStart"](15,"div",10),i["\u0275\u0275elementStart"](16,"div",11),i["\u0275\u0275element"](17,"img",12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"div",13),i["\u0275\u0275text"](19,"Sign Up"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"form",14,15),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),i["\u0275\u0275elementStart"](22,"div",16),i["\u0275\u0275elementStart"](23,"div",17),i["\u0275\u0275elementStart"](24,"label",18),i["\u0275\u0275text"](25,"Name"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](26,"input",19),i["\u0275\u0275elementStart"](27,"div",20),i["\u0275\u0275element"](28,"i",21),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"div",16),i["\u0275\u0275elementStart"](30,"div",17),i["\u0275\u0275elementStart"](31,"label",22),i["\u0275\u0275text"](32,"Email ID"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](33,"input",23),i["\u0275\u0275elementStart"](34,"div",20),i["\u0275\u0275element"](35,"i",24),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"div",16),i["\u0275\u0275elementStart"](37,"div",17),i["\u0275\u0275elementStart"](38,"label",25),i["\u0275\u0275text"](39,"Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](40,"input",26),i["\u0275\u0275elementStart"](41,"div",20),i["\u0275\u0275element"](42,"i",27),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](43,"div",16),i["\u0275\u0275elementStart"](44,"div",17),i["\u0275\u0275elementStart"](45,"label",28),i["\u0275\u0275text"](46,"Retry Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](47,"input",29),i["\u0275\u0275elementStart"](48,"div",20),i["\u0275\u0275element"](49,"i",27),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](50,"div",16),i["\u0275\u0275elementStart"](51,"div",30),i["\u0275\u0275element"](52,"input",31),i["\u0275\u0275elementStart"](53,"label",32),i["\u0275\u0275text"](54,"I Accept terms & conditions"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](55,"button",33),i["\u0275\u0275text"](56,"Sign Up"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](57,"div",34),i["\u0275\u0275elementStart"](58,"p"),i["\u0275\u0275text"](59,"or Sign up with"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](60,"div",35),i["\u0275\u0275elementStart"](61,"div",36),i["\u0275\u0275elementStart"](62,"button",37),i["\u0275\u0275element"](63,"i",38),i["\u0275\u0275text"](64," Facebook"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](65,"div",39),i["\u0275\u0275elementStart"](66,"button",37),i["\u0275\u0275element"](67,"i",40),i["\u0275\u0275text"](68," Twitter"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](69,"hr"),i["\u0275\u0275elementStart"](70,"p",41),i["\u0275\u0275text"](71,"Already have an account? "),i["\u0275\u0275elementStart"](72,"a",42),i["\u0275\u0275listener"]("click",(function(){return t.onSignin2()})),i["\u0275\u0275text"](73," Sign In here"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm,l.DefaultValueAccessor,l.NgControlStatus,l.NgModel,l.RequiredValidator],styles:[""]}),e})(),data:{title:"SignUp 2"}},{path:"lock-screen",component:(()=>{class e{constructor(){}onSubmit(){this.lockScreenForm.reset()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-lock-screen"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](c,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.lockScreenForm=n.first)},decls:18,vars:0,consts:[["id","wrapper"],[1,"height-100v","d-flex","align-items-center","justify-content-center"],[1,"card","card-authentication1","mx-auto","my-5","animated","bounceInDown"],[1,"user-lock","rounded-top","bg-dark-light"],[1,"user-lock-img"],["src","assets/images/avatars/avatar-18.png","alt","user avatar"],[1,"card-body"],[1,"text-center","mt-5","py-2"],["novalidate","",1,"mt-3","mb-1",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","exampleInputpassword",1,"sr-only"],["type","password","id","exampleInputpassword","placeholder","Enter your password","ngModel","","required","",1,"form-control"],["type","button",1,"btn","btn-light","btn-block","waves-effect","waves-light","mt-2"],[1,"icon-lock-open"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275element"](5,"img",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275elementStart"](7,"h4",7),i["\u0275\u0275text"](8,"Mark Jhonsan"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"form",8,9),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),i["\u0275\u0275elementStart"](11,"div",10),i["\u0275\u0275elementStart"](12,"label",11),i["\u0275\u0275text"](13,"Enter Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](14,"input",12),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"button",13),i["\u0275\u0275element"](16,"i",14),i["\u0275\u0275text"](17," Unlock"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm,l.DefaultValueAccessor,l.NgControlStatus,l.NgModel,l.RequiredValidator],styles:[""]}),e})(),data:{title:"Lock Screen"}},{path:"reset-password1",component:(()=>{class e{constructor(e,t){this.router=e,this.route=t}onSubmit(){this.resetpassword1.reset()}onSignin1(){this.router.navigate(["signin1"],{relativeTo:this.route.parent})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-reset-password1"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](u,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.resetpassword1=n.first)},decls:25,vars:0,consts:[["id","wrapper"],[1,"height-100v","d-flex","align-items-center","justify-content-center"],[1,"card","card-authentication1","mx-auto","my-5"],[1,"card-body"],[1,"card-content","p-2"],[1,"card-title","text-uppercase","pb-2"],[1,"pb-2"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","exampleInputEmailAddress",1,""],[1,"position-relative","has-icon-right"],["type","text","id","exampleInputEmailAddress","placeholder","Email Address","ngModel","",1,"form-control","input-shadow"],[1,"form-control-position"],[1,"icon-envelope-open"],["type","button",1,"btn","btn-light","btn-block","mt-3"],[1,"card-footer","text-center","py-3"],[1,"text-warning","mb-0"],["href","javascript:;",3,"click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"div",5),i["\u0275\u0275text"](6,"Reset Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"p",6),i["\u0275\u0275text"](8,"Please enter your email address. You will receive a link to create a new password via email."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"form",7,8),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),i["\u0275\u0275elementStart"](11,"div",9),i["\u0275\u0275elementStart"](12,"label",10),i["\u0275\u0275text"](13,"Email Address"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"div",11),i["\u0275\u0275element"](15,"input",12),i["\u0275\u0275elementStart"](16,"div",13),i["\u0275\u0275element"](17,"i",14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"button",15),i["\u0275\u0275text"](19,"Reset Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"div",16),i["\u0275\u0275elementStart"](21,"p",17),i["\u0275\u0275text"](22,"Return to the "),i["\u0275\u0275elementStart"](23,"a",18),i["\u0275\u0275listener"]("click",(function(){return t.onSignin1()})),i["\u0275\u0275text"](24," Sign In"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm,l.DefaultValueAccessor,l.NgControlStatus,l.NgModel],styles:[""]}),e})(),data:{title:"Reset Password 1"}},{path:"reset-password2",component:(()=>{class e{constructor(e,t){this.router=e,this.route=t}onSubmit(){this.resetpassword2.reset()}onSignin2(){this.router.navigate(["signin2"],{relativeTo:this.route.parent})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](a.f),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-reset-password2"]],viewQuery:function(e,t){var n;1&e&&i["\u0275\u0275viewQuery"](p,!0),2&e&&i["\u0275\u0275queryRefresh"](n=i["\u0275\u0275loadQuery"]())&&(t.resetpassword2=n.first)},decls:38,vars:0,consts:[["id","wrapper"],[1,"height-100v","d-flex","align-items-center","justify-content-center"],[1,"card-authentication2","mx-auto","my-5"],[1,"card-group"],[1,"card","mb-0"],[1,"bg-reset-password2"],[1,"card-img-overlay","rounded-left","my-5"],[1,"text-white"],[1,"card-text","text-white","pt-3"],[1,"card-body"],[1,"card-content","p-3"],[1,"card-title","text-uppercase","text-center","pb-3"],[1,"text-center","pb-2"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],[1,"position-relative","has-icon-left"],["for","exampleInputEmailAddress",1,"sr-only"],["type","text","id","exampleInputEmailAddress","placeholder","Email Address",1,"form-control"],[1,"form-control-position"],[1,"icon-envelope-open"],["type","button",1,"btn","btn-light","btn-block","mt-3"],[1,"clearfix"],[1,"text-center","pt-3"],[1,"text-warning"],["href","javascript:;",3,"click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275element"](5,"div",5),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275elementStart"](7,"h2",7),i["\u0275\u0275text"](8,"Lorem"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"h1",7),i["\u0275\u0275text"](10,"Ipsum Dolor"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"p",8),i["\u0275\u0275text"](12,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",4),i["\u0275\u0275elementStart"](14,"div",9),i["\u0275\u0275elementStart"](15,"div",10),i["\u0275\u0275elementStart"](16,"div",11),i["\u0275\u0275text"](17,"Reset Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](18,"p",12),i["\u0275\u0275text"](19,"Please enter your email address. You will receive a link to create a new password via email."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](20,"form",13,14),i["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),i["\u0275\u0275elementStart"](22,"div",15),i["\u0275\u0275elementStart"](23,"div",16),i["\u0275\u0275elementStart"](24,"label",17),i["\u0275\u0275text"](25,"Email Address"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](26,"input",18),i["\u0275\u0275elementStart"](27,"div",19),i["\u0275\u0275element"](28,"i",20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](29,"button",21),i["\u0275\u0275text"](30,"Reset Password"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](31,"div",22),i["\u0275\u0275elementStart"](32,"div",23),i["\u0275\u0275element"](33,"hr"),i["\u0275\u0275elementStart"](34,"p",24),i["\u0275\u0275text"](35,"Return to the "),i["\u0275\u0275elementStart"](36,"a",25),i["\u0275\u0275listener"]("click",(function(){return t.onSignin2()})),i["\u0275\u0275text"](37," Sign In"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.NgForm],styles:[""]}),e})(),data:{title:"Reset Password 2"}}]}];let v=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.i.forChild(S)],a.i]}),e})(),f=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,v,l.FormsModule]]}),e})()}}]);