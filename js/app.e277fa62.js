(function(e){function t(t){for(var r,o,i=t[0],s=t[1],f=t[2],u=0,_=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&_.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);S&&S(t);while(_.length)_.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-87e09b36":"e4546cf1","chunk-2d0c8e41":"46b67d7b","chunk-2f39eb43":"623af4a4"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-87e09b36":1,"chunk-2f39eb43":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-87e09b36":"bb75e3b0","chunk-2d0c8e41":"31d6cfe0","chunk-2f39eb43":"b3e61369"}[e]+".css",c=s.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var f=a[i],u=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(u===r||u===c))return t()}var _=document.getElementsByTagName("style");for(i=0;i<_.length;i++){f=_[i],u=f.getAttribute("data-href");if(u===r||u===c)return t()}var S=document.createElement("link");S.rel="stylesheet",S.type="text/css",S.onload=t,S.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],S.parentNode.removeChild(S),n(a)},S.href=c;var T=document.getElementsByTagName("head")[0];T.appendChild(S)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var f,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var _=new Error;f=function(t){u.onerror=u.onload=null,clearTimeout(S);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;_.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",_.name="ChunkLoadError",_.type=r,_.request=o,n[1](_)}c[e]=void 0}};var S=setTimeout((function(){f({type:"timeout",target:u})}),12e4);u.onerror=u.onload=f,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],u=f.push.bind(f);f.push=t,f=f.slice();for(var _=0;_<f.length;_++)t(f[_]);var S=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},c=[],a={name:"App",data:function(){return{}}},i=a,s=n("2877"),f=n("6544"),u=n.n(f),_=n("7496"),S=n("f6c4"),T=Object(s["a"])(i,o,c,!1,null,null,null),E=T.exports;u()(T,{VApp:_["a"],VMain:S["a"]});var d=n("f309");r["a"].use(d["a"]);var m=new d["a"]({}),l=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f"));r["a"].use(l["a"]);var O=[{path:"/",name:"login",component:function(){return Promise.all([n.e("chunk-87e09b36"),n.e("chunk-2d0c8e41")]).then(n.bind(null,"578a"))}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-87e09b36"),n.e("chunk-2f39eb43")]).then(n.bind(null,"f65e"))}}],C=new l["a"]({mode:"history",base:"/",routes:O});C.beforeEach((function(e,t,n){var r=sessionStorage.getItem("credential");null==r?"login"!=e.name?n({path:"/",params:{nextUrl:e.fullPath}}):n():"admin_admin"==r?"dashboard"!=e.name?n({path:"/dashboard",params:{nextUrl:e.fullPath}}):n():(sessionStorage.removeItem("credential"),n({path:"/",params:{nextUrl:e.fullPath}}))}));var I=C,p=n("2f62");r["a"].use(p["a"]);var N=new p["a"].Store({strict:!0,state:{Cmd:{CMD_GET_UNIT_INFO:"21",CMD_GET_USER_STATUS:"22",CMD_GET_UNIT_OPTIONS:"23",CMD_SET_IP_INFO:"b8",CMD_GET_IP_INFO:"b9",CMD_SET_POWER_CONVERSION:"c6",CMD_GET_POWER_CONVERSION:"c7",CMD_SET_POWER_ON_STATE:"c8",CMD_GET_POWER_ON_STATE:"c9",CMD_SET_NTP:"ca",CMD_GET_NTP:"cb",CMD_SET_ALIAS:"cc",CMD_GET_ALIAS:"cd",CMD_SET_RF_OFFSET:"ce",CMD_GET_RF_OFFSET:"cf",CMD_SET_BAUDRATE:"4b"},PollingState:"21",websocketIsConnected:!1,websocket:null,timerPromise:null,secretKey:"",ipInfo:{IsDhcp:!0,Address:"192.168.77.77",Subnet:"255.255.255.0",Gateway:"192.168.77.1",MAC:"48:65:EE:48:01:02"},unitOptions:{Tx:{StepAtten:{Min:0,Max:31.75,Rez:.25},LoFreq:{PresentEnabled:!0,RangeEnabled:!1,Presets:[28.05,29]},Alc:{Enabled:!1,Active:!1}}},unitStatus:{TxStepAtten:2.75,TxLoFreq:28.05,TxPower:31.5,TxRefLocked:!0,SwTxEnabled:!0,RxStepAtten:0,RxLoFreq:0,RxPower:0,RxRefLocked:!0,SwRxEnabled:!1,FanSpeed:2130,Temperature:53.2,TempCompEnabled:!0,Faults:[]},savedUnitStatus:{TxStepAtten:0,TxLoFreq:28.05,TxPower:31.5,TxRefLocked:!0,SwTxEnabled:!0,RxStepAtten:0,RxLoFreq:0,RxPower:0,RxRefLocked:!0,SwRxEnabled:!1,FanSpeed:2130,Temperature:53.2,TempCompEnabled:!0,Faults:[]},unitInfo:{Model:"KAA-100B-A1-1130110",Serial:"SN2310",Firmware:"20210102BD04",Bootloader:"0.2.2"},clockNtp:{PrimaryAddr:"192.168.10.100",SecondaryAddr:"192.168.10.100",ManualTimeEnabled:!0,ManualDateTime:"2021-11-10T13:01:15",UtcOffsetMinute:90,UpdateDaily:!1,IsSynced:!1},serialInterface:{IsRs485:!0,SelectedBaudrate:115200,BaudrateOptions:[115200,38400,9600]},PowerOnState:!1,RfOffset:3.7,PowerConversion:1,alias:"Mission BUC"},getters:{getPollingState:function(e){return e.PollingState},getCommandOptions:function(e){return e.Cmd},getUnitInfo:function(e){return e.unitInfo},getTxOption:function(e){return e.unitOptions.txOption},getUnitStatus:function(e){return e.unitStatus},getIpInfo:function(e){return e.ipInfo},getSerialOptions:function(e){return e.serialInterface},getClockNtp:function(e){return e.clockNtp},getUnitAlias:function(e){return e.alias},getRfOffset:function(e){return e.RfOffset},getPowerConversion:function(e){return e.PowerConversion},getPowerOnState:function(e){return e.PowerOnState}},mutations:{GET_UNIT_INFO:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_UNIT_INFO,key:e.secretKey});e.websocket.send(t)}},GET_IP_INFO:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_IP_INFO,key:e.secretKey});e.websocket.send(t)}},GET_USER_STATUS:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_USER_STATUS,key:e.secretKey});e.websocket.send(t)}},GET_UNIT_OPTIONS:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_UNIT_OPTIONS,key:e.secretKey});e.websocket.send(JSON.stringify(t))}},SET_WEBSOCKET:function(e,t){e.websocket=t},SET_WEBSOCKET_CONNECTED:function(e,t){e.websocketIsConnected=t},SET_IP_INFO:function(e,t){e.ipInfo=t},SET_STEP_ATTENUATOR:function(e,t){e.unitStatus.TxStepAtten=t},SET_SW_TX_ENABLE:function(e,t){e.unitStatus.SwTxEnabled=t},SET_SERIAL_INTERFACE_OPTIONS:function(e,t){e.serialInterface.SelectedBaudrate=t.SelectedBaudrate},SET_RF_OFFSET_SETTINGS:function(e,t){e.rfStartupSettings.RfOffset=t},SET_BOOTUP_RF_SETTINGS:function(e,t){e.rfStartupSettings.BootupRf=t},SET_RF_POWER_CONVERSION:function(e,t){e.rfStartupSettings.PowerConversion=t},GET_UNIT_ALIAS:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_ALIAS,key:e.secretKey});e.websocket.send(t)}},SET_UNIT_ALIAS:function(e,t){if(e.websocketIsConnected){var n=JSON.stringify({cmd:e.Cmd.CMD_SET_ALIAS,key:e.secretKey,cmdData:t});e.websocket.send(n)}},SET_SECRET_KEY:function(e,t){e.secretKey=t},SET_POLLING_STATE:function(e,t){e.PollingState=t},SET_PROMISE:function(e,t){e.timerPromise=t},CANCEL_PROMISE:function(e){null!=e.timerPromise&&clearInterval(e.timerPromise)},SET_NTP_OPTIONS:function(e,t){if(e.websocketIsConnected){var n=JSON.stringify({cmd:e.Cmd.CMD_SET_NTP,key:e.secretKey,cmdData:t});e.websocket.send(n)}},GET_NTP_OPTIONS:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_NTP,key:e.secretKey});e.websocket.send(t)}},GET_BAUDRATE_OPTIONS:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_SET_BAUDRATE,key:e.secretKey});e.websocket.send(t)}},SET_BAUDRATE_OPTIONS:function(e,t){if(e.websocketIsConnected){var n=JSON.stringify({cmd:e.Cmd.CMD_SET_BAUDRATE,key:e.secretKey,cmdData:t});e.websocket.send(n)}},GET_RF_OFFSET:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_RF_OFFSET,key:e.secretKey});e.websocket.send(t)}},SET_RF_OFFSET:function(e,t){if(e.websocketIsConnected){var n=JSON.stringify({cmd:e.Cmd.CMD_SET_RF_OFFSET,key:e.secretKey,cmdData:t});e.websocket.send(n),console.log("Get RF Offset: ",n)}},GET_POWER_CONVERSION:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_POWER_CONVERSION,key:e.secretKey});e.websocket.send(t),console.log("Get Power Conversion: ",t)}},SET_POWER_CONVERSION:function(e,t){if(e.websocketIsConnected){var n=JSON.stringify({cmd:e.Cmd.CMD_SET_POWER_CONVERSION,key:e.secretKey,cmdData:t});console.log(n),e.websocket.send(n)}},GET_POWER_ON_STATE:function(e){if(e.websocketIsConnected){var t=JSON.stringify({cmd:e.Cmd.CMD_GET_POWER_ON_STATE,key:e.secretKey});e.websocket.send(t),console.log("Get Power On State: ",t)}},SET_POWER_ON_STATE:function(e,t){if(e.websocketIsConnected){var n=JSON.stringify({cmd:e.Cmd.CMD_SET_POWER_ON_STATE,key:e.secretKey,cmdData:t});e.websocket.send(n)}},PROCESS_RECEIVED_DATA:function(e,t){switch(t.cmd){case e.Cmd.CMD_GET_UNIT_INFO:e.unitInfo=t.UnitInfo;break;case e.Cmd.CMD_GET_IP_INFO:e.ipInfo=t.UnitIp;break;case e.Cmd.CMD_GET_NTP:e.clockNtp=t.ClockNtp;break;case e.Cmd.CMD_GET_POWER_CONVERSION:e.PowerConversion=t.PowerConversion;break;case e.Cmd.CMD_GET_RF_OFFSET:e.RfOffset=t.RfOffset;break;case e.Cmd.CMD_GET_POWER_ON_STATE:e.PowerOnState=t.PowerOnState;break;case e.Cmd.CMD_SET_BAUDRATE:e.serialInterface=t.SerialInterface;break;case e.Cmd.CMD_GET_ALIAS:e.alias=t.Alias;break;case e.Cmd.CMD_GET_USER_STATUS:console.log(t);break;case e.Cmd.CMD_GET_UNIT_OPTIONS:break}}},actions:{PerformSetIpInfo:function(e,t){var n=e.commit;n("SET_IP_INFO",t)},PerformSetStepAtten:function(e,t){var n=e.commit;n("SET_STEP_ATTENUATOR",t)},PerformSetSwTxEnabled:function(e,t){var n=e.commit;n("SET_SW_TX_ENABLE",t)},PerformSetSerialInterface:function(e,t){var n=e.commit;n("SET_SERIAL_INTERFACE_OPTIONS",t)},PerformSetRfOffsetSettings:function(e,t){var n=e.commit;n("SET_RF_OFFSET_SETTINGS",t)},PerformSetBootupRfSettings:function(e,t){var n=e.commit;n("SET_BOOTUP_RF_SETTINGS",t)},PerformSetRfPowerConversion:function(e,t){var n=e.commit;n("SET_RF_POWER_CONVERSION",t)},PerformSetNtp:function(e,t){var n=e.commit;n("SET_NTP_OPTIONS",t)},PerformTestFaults:function(e){var t=e.commit;t("SET_TEST_FAULT")},PerformResetFaults:function(e){var t=e.commit;setTimeout((function(){t("RESET_TEST_FAULT")}),5e3)},PerformSetUnitAlias:function(e,t){var n=e.commit;n("SET_UNIT_ALIAS",t)},PerformSetSecretKey:function(e,t){var n=e.commit;n("SET_SECRET_KEY",t)},PerformLogOut:function(e){var t=e.commit;t("CANCEL_PROMISE"),t("SET_WEBSOCKET_CONNECTED",!1),t("SET_POLLING_STATE","21")},PerformSetBaudrate:function(e,t){var n=e.commit;n("SET_BAUDRATE_OPTIONS",t)},PerformSetPowerConversion:function(e,t){var n=e.commit;n("SET_POWER_CONVERSION",t)},PerformSetPowerOnState:function(e,t){var n=e.commit;n("SET_POWER_ON_STATE",t)}}}),P=n("d1d6"),b=n.n(P);r["a"].use(b.a),new r["a"]({store:N,vuetify:m,router:I,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.e277fa62.js.map