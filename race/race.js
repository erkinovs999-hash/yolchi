var Zm=Object.create;var Tl=Object.defineProperty;var Jm=Object.getOwnPropertyDescriptor;var jm=Object.getOwnPropertyNames;var Qm=Object.getPrototypeOf,eg=Object.prototype.hasOwnProperty;var tg=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),Vo=(i,e)=>{for(var t in e)Tl(i,t,{get:e[t],enumerable:!0})},ng=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of jm(e))!eg.call(i,s)&&s!==t&&Tl(i,s,{get:()=>e[s],enumerable:!(n=Jm(e,s))||n.enumerable});return i};var Wd=(i,e,t)=>(t=i!=null?Zm(Qm(i)):{},ng(e||!i||!i.__esModule?Tl(t,"default",{value:i,enumerable:!0}):t,i));var gd=tg((f1,md)=>{"use strict";var ie={};ie.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)};ie.localCName=ie.generateIdentifier();ie.splitLines=function(i){return i.trim().split(`
`).map(e=>e.trim())};ie.splitSections=function(i){return i.split(`
m=`).map((t,n)=>(n>0?"m="+t:t).trim()+`\r
`)};ie.getDescription=function(i){let e=ie.splitSections(i);return e&&e[0]};ie.getMediaSections=function(i){let e=ie.splitSections(i);return e.shift(),e};ie.matchPrefix=function(i,e){return ie.splitLines(i).filter(t=>t.indexOf(e)===0)};ie.parseCandidate=function(i){let e;i.indexOf("a=candidate:")===0?e=i.substring(12).split(" "):e=i.substring(10).split(" ");let t={foundation:e[0],component:{1:"rtp",2:"rtcp"}[e[1]]||e[1],protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]};for(let n=8;n<e.length;n+=2)switch(e[n]){case"raddr":t.relatedAddress=e[n+1];break;case"rport":t.relatedPort=parseInt(e[n+1],10);break;case"tcptype":t.tcpType=e[n+1];break;case"ufrag":t.ufrag=e[n+1],t.usernameFragment=e[n+1];break;default:t[e[n]]===void 0&&(t[e[n]]=e[n+1]);break}return t};ie.writeCandidate=function(i){let e=[];e.push(i.foundation);let t=i.component;t==="rtp"?e.push(1):t==="rtcp"?e.push(2):e.push(t),e.push(i.protocol.toUpperCase()),e.push(i.priority),e.push(i.address||i.ip),e.push(i.port);let n=i.type;return e.push("typ"),e.push(n),n!=="host"&&i.relatedAddress&&i.relatedPort!==void 0&&(e.push("raddr"),e.push(i.relatedAddress),e.push("rport"),e.push(i.relatedPort)),i.tcpType&&i.protocol.toLowerCase()==="tcp"&&(e.push("tcptype"),e.push(i.tcpType)),(i.usernameFragment||i.ufrag)&&(e.push("ufrag"),e.push(i.usernameFragment||i.ufrag)),"candidate:"+e.join(" ")};ie.parseIceOptions=function(i){return i.substring(14).split(" ")};ie.parseRtpMap=function(i){let e=i.substring(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=e.length===3?parseInt(e[2],10):1,t.numChannels=t.channels,t};ie.writeRtpMap=function(i){let e=i.payloadType;i.preferredPayloadType!==void 0&&(e=i.preferredPayloadType);let t=i.channels||i.numChannels||1;return"a=rtpmap:"+e+" "+i.name+"/"+i.clockRate+(t!==1?"/"+t:"")+`\r
`};ie.parseExtmap=function(i){let e=i.substring(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1],attributes:e.slice(2).join(" ")}};ie.writeExtmap=function(i){return"a=extmap:"+(i.id||i.preferredId)+(i.direction&&i.direction!=="sendrecv"?"/"+i.direction:"")+" "+i.uri+(i.attributes?" "+i.attributes:"")+`\r
`};ie.parseFmtp=function(i){let e={},t,n=i.substring(i.indexOf(" ")+1).split(";");for(let s=0;s<n.length;s++)t=n[s].trim().split("="),e[t[0].trim()]=t[1];return e};ie.writeFmtp=function(i){let e="",t=i.payloadType;if(i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.parameters&&Object.keys(i.parameters).length){let n=[];Object.keys(i.parameters).forEach(s=>{i.parameters[s]!==void 0?n.push(s+"="+i.parameters[s]):n.push(s)}),e+="a=fmtp:"+t+" "+n.join(";")+`\r
`}return e};ie.parseRtcpFb=function(i){let e=i.substring(i.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}};ie.writeRtcpFb=function(i){let e="",t=i.payloadType;return i.preferredPayloadType!==void 0&&(t=i.preferredPayloadType),i.rtcpFeedback&&i.rtcpFeedback.length&&i.rtcpFeedback.forEach(n=>{e+="a=rtcp-fb:"+t+" "+n.type+(n.parameter&&n.parameter.length?" "+n.parameter:"")+`\r
`}),e};ie.parseSsrcMedia=function(i){let e=i.indexOf(" "),t={ssrc:parseInt(i.substring(7,e),10)},n=i.indexOf(":",e);return n>-1?(t.attribute=i.substring(e+1,n),t.value=i.substring(n+1)):t.attribute=i.substring(e+1),t};ie.parseSsrcGroup=function(i){let e=i.substring(13).split(" ");return{semantics:e.shift(),ssrcs:e.map(t=>parseInt(t,10))}};ie.getMid=function(i){let e=ie.matchPrefix(i,"a=mid:")[0];if(e)return e.substring(6)};ie.parseFingerprint=function(i){let e=i.substring(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1].toUpperCase()}};ie.getDtlsParameters=function(i,e){return{role:"auto",fingerprints:ie.matchPrefix(i+e,"a=fingerprint:").map(ie.parseFingerprint)}};ie.writeDtlsParameters=function(i,e){let t="a=setup:"+e+`\r
`;return i.fingerprints.forEach(n=>{t+="a=fingerprint:"+n.algorithm+" "+n.value+`\r
`}),t};ie.parseCryptoLine=function(i){let e=i.substring(9).split(" ");return{tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}};ie.writeCryptoLine=function(i){return"a=crypto:"+i.tag+" "+i.cryptoSuite+" "+(typeof i.keyParams=="object"?ie.writeCryptoKeyParams(i.keyParams):i.keyParams)+(i.sessionParams?" "+i.sessionParams.join(" "):"")+`\r
`};ie.parseCryptoKeyParams=function(i){if(i.indexOf("inline:")!==0)return null;let e=i.substring(7).split("|");return{keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}};ie.writeCryptoKeyParams=function(i){return i.keyMethod+":"+i.keySalt+(i.lifeTime?"|"+i.lifeTime:"")+(i.mkiValue&&i.mkiLength?"|"+i.mkiValue+":"+i.mkiLength:"")};ie.getCryptoParameters=function(i,e){return ie.matchPrefix(i+e,"a=crypto:").map(ie.parseCryptoLine)};ie.getIceParameters=function(i,e){let t=ie.matchPrefix(i+e,"a=ice-ufrag:")[0],n=ie.matchPrefix(i+e,"a=ice-pwd:")[0];return t&&n?{usernameFragment:t.substring(12),password:n.substring(10)}:null};ie.writeIceParameters=function(i){let e="a=ice-ufrag:"+i.usernameFragment+`\r
a=ice-pwd:`+i.password+`\r
`;return i.iceLite&&(e+=`a=ice-lite\r
`),e};ie.parseRtpParameters=function(i){let e={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=ie.splitLines(i)[0].split(" ");e.profile=n[2];for(let r=3;r<n.length;r++){let o=n[r],a=ie.matchPrefix(i,"a=rtpmap:"+o+" ")[0];if(a){let l=ie.parseRtpMap(a),c=ie.matchPrefix(i,"a=fmtp:"+o+" ");switch(l.parameters=c.length?ie.parseFmtp(c[0]):{},l.rtcpFeedback=ie.matchPrefix(i,"a=rtcp-fb:"+o+" ").map(ie.parseRtcpFb),e.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":e.fecMechanisms.push(l.name.toUpperCase());break;default:break}}}ie.matchPrefix(i,"a=extmap:").forEach(r=>{e.headerExtensions.push(ie.parseExtmap(r))});let s=ie.matchPrefix(i,"a=rtcp-fb:* ").map(ie.parseRtcpFb);return e.codecs.forEach(r=>{s.forEach(o=>{r.rtcpFeedback.find(l=>l.type===o.type&&l.parameter===o.parameter)||r.rtcpFeedback.push(o)})}),e};ie.writeRtpDescription=function(i,e){let t="";t+="m="+i+" ",t+=e.codecs.length>0?"9":"0",t+=" "+(e.profile||"UDP/TLS/RTP/SAVPF")+" ",t+=e.codecs.map(s=>s.preferredPayloadType!==void 0?s.preferredPayloadType:s.payloadType).join(" ")+`\r
`,t+=`c=IN IP4 0.0.0.0\r
`,t+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,e.codecs.forEach(s=>{t+=ie.writeRtpMap(s),t+=ie.writeFmtp(s),t+=ie.writeRtcpFb(s)});let n=0;return e.codecs.forEach(s=>{s.maxptime>n&&(n=s.maxptime)}),n>0&&(t+="a=maxptime:"+n+`\r
`),e.headerExtensions&&e.headerExtensions.forEach(s=>{t+=ie.writeExtmap(s)}),t};ie.parseRtpEncodingParameters=function(i){let e=[],t=ie.parseRtpParameters(i),n=t.fecMechanisms.indexOf("RED")!==-1,s=t.fecMechanisms.indexOf("ULPFEC")!==-1,r=ie.matchPrefix(i,"a=ssrc:").map(h=>ie.parseSsrcMedia(h)).filter(h=>h.attribute==="cname"),o=r.length>0&&r[0].ssrc,a,l=ie.matchPrefix(i,"a=ssrc-group:FID").map(h=>h.substring(17).split(" ").map(d=>parseInt(d,10)));l.length>0&&l[0].length>1&&l[0][0]===o&&(a=l[0][1]),t.codecs.forEach(h=>{if(h.name.toUpperCase()==="RTX"&&h.parameters.apt){let u={ssrc:o,codecPayloadType:parseInt(h.parameters.apt,10)};o&&a&&(u.rtx={ssrc:a}),e.push(u),n&&(u=JSON.parse(JSON.stringify(u)),u.fec={ssrc:o,mechanism:s?"red+ulpfec":"red"},e.push(u))}}),e.length===0&&o&&e.push({ssrc:o});let c=ie.matchPrefix(i,"b=");return c.length&&(c[0].indexOf("b=TIAS:")===0?c=parseInt(c[0].substring(7),10):c[0].indexOf("b=AS:")===0?c=parseInt(c[0].substring(5),10)*1e3*.95-2e3*8:c=void 0,e.forEach(h=>{h.maxBitrate=c})),e};ie.parseRtcpParameters=function(i){let e={},t=ie.matchPrefix(i,"a=ssrc:").map(r=>ie.parseSsrcMedia(r)).filter(r=>r.attribute==="cname")[0];t&&(e.cname=t.value,e.ssrc=t.ssrc);let n=ie.matchPrefix(i,"a=rtcp-rsize");e.reducedSize=n.length>0,e.compound=n.length===0;let s=ie.matchPrefix(i,"a=rtcp-mux");return e.mux=s.length>0,e};ie.writeRtcpParameters=function(i){let e="";return i.reducedSize&&(e+=`a=rtcp-rsize\r
`),i.mux&&(e+=`a=rtcp-mux\r
`),i.ssrc!==void 0&&i.cname&&(e+="a=ssrc:"+i.ssrc+" cname:"+i.cname+`\r
`),e};ie.parseMsid=function(i){let e,t=ie.matchPrefix(i,"a=msid:");if(t.length===1)return e=t[0].substring(7).split(" "),{stream:e[0],track:e[1]};let n=ie.matchPrefix(i,"a=ssrc:").map(s=>ie.parseSsrcMedia(s)).filter(s=>s.attribute==="msid");if(n.length>0)return e=n[0].value.split(" "),{stream:e[0],track:e[1]}};ie.parseSctpDescription=function(i){let e=ie.parseMLine(i),t=ie.matchPrefix(i,"a=max-message-size:"),n;t.length>0&&(n=parseInt(t[0].substring(19),10)),isNaN(n)&&(n=65536);let s=ie.matchPrefix(i,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substring(12),10),protocol:e.fmt,maxMessageSize:n};let r=ie.matchPrefix(i,"a=sctpmap:");if(r.length>0){let o=r[0].substring(10).split(" ");return{port:parseInt(o[0],10),protocol:o[1],maxMessageSize:n}}};ie.writeSctpDescription=function(i,e){let t=[];return i.protocol!=="DTLS/SCTP"?t=["m="+i.kind+" 9 "+i.protocol+" "+e.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+e.port+`\r
`]:t=["m="+i.kind+" 9 "+i.protocol+" "+e.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+e.port+" "+e.protocol+` 65535\r
`],e.maxMessageSize!==void 0&&t.push("a=max-message-size:"+e.maxMessageSize+`\r
`),t.join("")};ie.generateSessionId=function(){return Math.random().toString().substr(2,22)};ie.writeSessionBoilerplate=function(i,e,t){let n,s=e!==void 0?e:2;return i?n=i:n=ie.generateSessionId(),`v=0\r
o=`+(t||"thisisadapterortc")+" "+n+" "+s+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`};ie.getDirection=function(i,e){let t=ie.splitLines(i);for(let n=0;n<t.length;n++)switch(t[n]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return t[n].substring(2);default:}return e?ie.getDirection(e):"sendrecv"};ie.getKind=function(i){return ie.splitLines(i)[0].split(" ")[0].substring(2)};ie.isRejected=function(i){return i.split(" ",2)[1]==="0"};ie.parseMLine=function(i){let t=ie.splitLines(i)[0].substring(2).split(" ");return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}};ie.parseOLine=function(i){let t=ie.matchPrefix(i,"o=")[0].substring(2).split(" ");return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}};ie.isValidSDP=function(i){if(typeof i!="string"||i.length===0)return!1;let e=ie.splitLines(i);for(let t=0;t<e.length;t++)if(e[t].length<2||e[t].charAt(1)!=="=")return!1;return!0};typeof md=="object"&&(md.exports=ie)});var Lf=0,hh=1,Df=2;var ro=1,$a=2,nr=3,ei=0,Wt=1,Ht=2,ti=0,ir=1,uh=2,dh=3,fh=4,Nf=5;var os=100,Uf=101,Of=102,Ff=103,Bf=104,kf=200,zf=201,Vf=202,Hf=203,ph=204,mh=205,Gf=206,Wf=207,Xf=208,qf=209,Yf=210,$f=211,Kf=212,Zf=213,Jf=214,ga=0,_a=1,xa=2,Os=3,ya=4,va=5,Sa=6,Ma=7,Ka=0,jf=1,Qf=2,Bn=0,gh=1,_h=2,xh=3,oo=4,yh=5,vh=6,Sh=7,jl="attached",ep="detached",Mh=300,ki=301,as=302,Za=303,Ja=304,ao=306,En=1e3,Tn=1001,Ni=1002,Ct=1003,ja=1004;var cs=1005;var Rt=1006,sr=1007;var kn=1008;var pn=1009,bh=1010,Th=1011,rr=1012,Qa=1013,zn=1014,yn=1015,Vn=1016,ec=1017,tc=1018,or=1020,Eh=35902,Ah=35899,wh=1021,Ch=1022,vn=1023,Yn=1026,zi=1027,nc=1028,ic=1029,Vi=1030,sc=1031;var rc=1033,co=33776,lo=33777,ho=33778,uo=33779,oc=35840,ac=35841,cc=35842,lc=35843,hc=36196,uc=37492,dc=37496,fc=37488,pc=37489,fo=37490,mc=37491,gc=37808,_c=37809,xc=37810,yc=37811,vc=37812,Sc=37813,Mc=37814,bc=37815,Tc=37816,Ec=37817,Ac=37818,wc=37819,Cc=37820,Rc=37821,Pc=36492,Ic=36494,Lc=36495,Dc=36283,Nc=36284,po=36285,Uc=36286;var Qi=2300,es=2301,fa=2302,Ql=2303,eh=2400,th=2401,nh=2402,tp=2500;var Rh=0,mo=1,ar=2,np=3200;var go=0,ip=1,Si="",At="srgb",rn="srgb-linear",Lr="linear",at="srgb";var pa=7680;var sp=519,rp=512,op=513,ap=514,Oc=515,cp=516,lp=517,Fc=518,hp=519,Ph=35044;var Ih="300 es",On=2e3,Fs=2001;function ig(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){let i=Bs("canvas");return i.style.display="block",i}var Xd={},ks=null;function Dr(...i){let e="THREE."+i.shift();ks?ks("log",e,...i):console.log(e,...i)}function dp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=dp(i);let e="THREE."+i.shift();if(ks)ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ze(...i){i=dp(i);let e="THREE."+i.shift();if(ks)ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ji(...i){let e=i.join(" ");e in Xd||(Xd[e]=!0,Le(...i))}function fp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pp={[ga]:_a,[xa]:Sa,[ya]:Ma,[Os]:va,[_a]:ga,[Sa]:xa,[Ma]:ya,[va]:Os},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=1234567,Cr=Math.PI/180,ts=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Lh(i,e){return(i%e+e)%e}function rg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function og(i,e,t){return i!==e?(t-i)/(e-i):0}function Rr(i,e,t){return(1-t)*i+t*e}function ag(i,e,t,n){return Rr(i,e,1-Math.exp(-t*n))}function cg(i,e=1){return e-Math.abs(Lh(i,e*2)-e)}function lg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ug(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dg(i,e){return i+Math.random()*(e-i)}function fg(i){return i*(.5-Math.random())}function pg(i){i!==void 0&&(qd=i);let e=qd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mg(i){return i*Cr}function gg(i){return i*ts}function _g(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cr={DEG2RAD:Cr,RAD2DEG:ts,generateUUID:Fn,clamp:Ze,euclideanModulo:Lh,mapLinear:rg,inverseLerp:og,lerp:Rr,damp:ag,pingpong:cg,smoothstep:lg,smootherstep:hg,randInt:ug,randFloat:dg,randFloatSpread:fg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:_g,ceilPowerOfTwo:xg,floorPowerOfTwo:yg,setQuaternionFromProperEuler:vg,normalize:ct,denormalize:Un},Ce=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){let A=Math.acos(m),C=Math.sin(A);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C,l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+_*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+_*a;let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},El=new D,Yd=new _n,Ve=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],A=s[1],C=s[4],v=s[7],S=s[2],b=s[5],R=s[8];return r[0]=o*_+a*A+l*S,r[3]=o*m+a*C+l*b,r[6]=o*p+a*v+l*R,r[1]=c*_+h*A+u*S,r[4]=c*m+h*C+u*b,r[7]=c*p+h*v+u*R,r[2]=d*_+f*A+g*S,r[5]=d*m+f*C+g*b,r[8]=d*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Al.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Al=new Ve,$d=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){let i={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rn]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:$d,fromXYZ:Kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:at,toXYZ:$d,fromXYZ:Kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var Ke=Sg();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Bs("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mg=0,zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wl(s[o].image)):r.push(wl(s[o]))}else r=wl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var bg=0,Cl=new D,Bt=class i extends $n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=Rt,o=kn,a=vn,l=pn,c=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Fn(),this.name="",this.source=new zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case En:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Ni:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case En:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Ni:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Mh;Bt.DEFAULT_ANISOTROPY=1;var lt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,v=(f+1)/2,S=(p+1)/2,b=(h+d)/4,R=(u+_)/4,y=(g+m)/4;return C>v&&C>S?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=b/n,r=R/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=y/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-_)/A,this.z=(d-h)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Bt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new zs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Ta{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nr=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Be=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Eg)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),wi.crossVectors(n,mn),wi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),wi.crossVectors(n,mn)),wi.normalize(),Ho.crossVectors(mn,wi),s[0]=wi.x,s[4]=Ho.x,s[8]=mn.x,s[1]=wi.y,s[5]=Ho.y,s[9]=mn.y,s[2]=wi.z,s[6]=Ho.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],A=n[3],C=n[7],v=n[11],S=n[15],b=s[0],R=s[4],y=s[8],w=s[12],L=s[1],F=s[5],I=s[9],U=s[13],E=s[2],T=s[6],N=s[10],O=s[14],G=s[3],V=s[7],q=s[11],Z=s[15];return r[0]=o*b+a*L+l*E+c*G,r[4]=o*R+a*F+l*T+c*V,r[8]=o*y+a*I+l*N+c*q,r[12]=o*w+a*U+l*O+c*Z,r[1]=h*b+u*L+d*E+f*G,r[5]=h*R+u*F+d*T+f*V,r[9]=h*y+u*I+d*N+f*q,r[13]=h*w+u*U+d*O+f*Z,r[2]=g*b+_*L+m*E+p*G,r[6]=g*R+_*F+m*T+p*V,r[10]=g*y+_*I+m*N+p*q,r[14]=g*w+_*U+m*O+p*Z,r[3]=A*b+C*L+v*E+S*G,r[7]=A*R+C*F+v*T+S*V,r[11]=A*y+C*I+v*N+S*q,r[15]=A*w+C*U+v*O+S*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],A=l*f-c*d,C=a*f-c*u,v=a*d-l*u,S=o*f-c*h,b=o*d-l*h,R=o*u-a*h;return t*(_*A-m*C+p*v)-n*(g*A-m*S+p*b)+s*(g*C-_*S+p*R)-r*(g*v-_*b+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=t*a-n*o,C=t*l-s*o,v=t*c-r*o,S=n*l-s*a,b=n*c-r*a,R=s*c-r*l,y=h*_-u*g,w=h*m-d*g,L=h*p-f*g,F=u*m-d*_,I=u*p-f*_,U=d*p-f*m,E=A*U-C*I+v*F+S*L-b*w+R*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=(a*U-l*I+c*F)*T,e[1]=(s*I-n*U-r*F)*T,e[2]=(_*R-m*b+p*S)*T,e[3]=(d*b-u*R-f*S)*T,e[4]=(l*L-o*U-c*w)*T,e[5]=(t*U-s*L+r*w)*T,e[6]=(m*v-g*R-p*C)*T,e[7]=(h*R-d*v+f*C)*T,e[8]=(o*I-a*L+c*y)*T,e[9]=(n*L-t*I-r*y)*T,e[10]=(g*b-_*v+p*A)*T,e[11]=(u*v-h*b-f*A)*T,e[12]=(a*w-o*F-l*y)*T,e[13]=(t*F-n*w+s*y)*T,e[14]=(_*C-g*S-m*A)*T,e[15]=(h*S-u*C+d*A)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,A=l*c,C=l*h,v=l*u,S=n.x,b=n.y,R=n.z;return s[0]=(1-(_+p))*S,s[1]=(f+v)*S,s[2]=(g-C)*S,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(d+p))*b,s[6]=(m+A)*b,s[7]=0,s[8]=(g+C)*R,s[9]=(m-A)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ms.set(s[0],s[1],s[2]).length(),a=Ms.set(s[4],s[5],s[6]).length(),l=Ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);let c=1/o,h=1/a,u=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=On,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===On)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Fs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=On,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===On)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Fs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ms=new D,In=new Be,Tg=new D(0,0,0),Eg=new D(1,1,1),wi=new D,Ho=new D,mn=new D,Zd=new Be,Jd=new _n,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ag=0,jd=new D,bs=new _n,ai=new Be,Go=new D,vr=new D,wg=new D,Cg=new _n,Qd=new D(1,0,0),ef=new D(0,1,0),tf=new D(0,0,1),nf={type:"added"},Rg={type:"removed"},Ts={type:"childadded",child:null},Rl={type:"childremoved",child:null},pt=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Kn,n=new _n,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ve}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(vr,Go,this.up):ai.lookAt(Go,vr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ai),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rg),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pg={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Lh(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Pl(o,r,e+1/3),this.g=Pl(o,r,e),this.b=Pl(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.workingToColorSpace($t.copy(this),e),Math.round(Ze($t.r*255,0,255))*65536+Math.round(Ze($t.g*255,0,255))*256+Math.round(Ze($t.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=At){Ke.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Wo);let n=Rr(Ci.h,Wo.h,t),s=Rr(Ci.s,Wo.s,t),r=Rr(Ci.l,Wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new De;De.NAMES=mp;var Hs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ui=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new D,ci=new D,Il=new D,li=new D,Es=new D,As=new D,sf=new D,Ll=new D,Dl=new D,Nl=new D,Ul=new lt,Ol=new lt,Fl=new lt,Di=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ci.subVectors(n,t),Il.subVectors(e,t);let o=Ln.dot(Ln),a=Ln.dot(ci),l=Ln.dot(Il),c=ci.dot(ci),h=ci.dot(Il),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ul.setScalar(0),Ol.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ul,r.x),o.addScaledVector(Ol,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ci.subVectors(e,t),Ln.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Ln.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,n),As.subVectors(r,n),Ll.subVectors(e,n);let l=Es.dot(Ll),c=As.dot(Ll);if(l<=0&&c<=0)return t.copy(n);Dl.subVectors(e,s);let h=Es.dot(Dl),u=As.dot(Dl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Es,o);Nl.subVectors(e,r);let f=Es.dot(Nl),g=As.dot(Nl);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(As,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return sf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(sf,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Es,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),qo.subVectors(this.max,Sr),ws.subVectors(e.a,Sr),Cs.subVectors(e.b,Sr),Rs.subVectors(e.c,Sr),Ri.subVectors(Cs,ws),Pi.subVectors(Rs,Cs),$i.subVectors(ws,Rs);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-$i.z,$i.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,$i.z,0,-$i.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-$i.y,$i.x,0];return!Bl(t,ws,Cs,Rs,qo)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,ws,Cs,Rs,qo))?!1:(Yo.crossVectors(Ri,Pi),t=[Yo.x,Yo.y,Yo.z],Bl(t,ws,Cs,Rs,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,Xo=new Kt,ws=new D,Cs=new D,Rs=new D,Ri=new D,Pi=new D,$i=new D,Sr=new D,qo=new D,Yo=new D,Ki=new D;function Bl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ut=new D,$o=new Ce,Ig=0,Ot=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ig++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Or=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fr=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lg=new Kt,Mr=new D,kl=new D,un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(kl)),this.expandByPoint(Mr.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dg=0,bn=new Be,zl=new pt,Ps=new D,gn=new Kt,br=new Kt,Vt=new D,ht=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?Fr:Or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(gn.min,br.min),gn.expandByPoint(Vt),Vt.addVectors(gn.max,br.max),gn.expandByPoint(Vt)):(gn.expandByPoint(br.min),gn.expandByPoint(br.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Vt.add(Ps)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new D,l[y]=new D;let c=new D,h=new D,u=new D,d=new Ce,f=new Ce,g=new Ce,_=new D,m=new D;function p(y,w,L){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,L),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,L),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(F),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),a[y].add(_),a[w].add(_),a[L].add(_),l[y].add(m),l[w].add(m),l[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let y=0,w=A.length;y<w;++y){let L=A[y],F=L.start,I=L.count;for(let U=F,E=F+I;U<E;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let C=new D,v=new D,S=new D,b=new D;function R(y){S.fromBufferAttribute(s,y),b.copy(S);let w=a[y];C.copy(w),C.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(b,w);let F=v.dot(l[y])<0?-1:1;o.setXYZW(y,C.x,C.y,C.z,F)}for(let y=0,w=A.length;y<w;++y){let L=A[y],F=L.start,I=L.count;for(let U=F,E=F+I;U<E;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ot(d,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},sn=new D,Ws=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vl=new D,Ng=new D,Ug=new Ve,Nn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Vl.subVectors(n,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ug.getNormalMatrix(e),s=this.coplanarPoint(Vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Og=0,on=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ir,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Nn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ui=new D,Hl=new D,Ko=new D,Zo=new D,ns=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hl.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),Zo.copy(this.origin).sub(Hl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ko),a=Zo.dot(this.direction),l=-Zo.dot(Ko),c=Zo.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hl).addScaledVector(Ko,d),f}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,p=n.x-o.x,A=n.y-o.y,C=n.z-o.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(h),R,y,w,L,F,I,U,E,T,N,O,G;if(v>=S&&v>=b?(w=l,I=u,T=g,G=p,l>=0?(R=c,y=h,L=d,F=f,U=_,E=m,N=A,O=C):(R=h,y=c,L=f,F=d,U=m,E=_,N=C,O=A)):S>=b?(w=c,I=d,T=_,G=A,c>=0?(R=h,y=l,L=f,F=u,U=m,E=g,N=C,O=p):(R=l,y=h,L=u,F=f,U=g,E=m,N=p,O=C)):(w=h,I=f,T=m,G=C,h>=0?(R=l,y=c,L=u,F=d,U=g,E=_,N=p,O=A):(R=c,y=l,L=d,F=u,U=_,E=g,N=A,O=p)),w===0)return null;let V=R/w,q=y/w,Z=1/w,ce=L-V*I,de=F-q*I,ke=U-V*T,oe=E-q*T,be=N-V*G,$=O-q*G,Q=be*oe-$*ke,le=ce*$-de*be,Fe=ke*de-oe*ce;if(s){if(Q<0||le<0||Fe<0)return null}else if((Q<0||le<0||Fe<0)&&(Q>0||le>0||Fe>0))return null;let ve=Q+le+Fe;if(ve===0)return null;let Xe=Z*(Q*I+le*T+Fe*G);return(ve>0?Xe<0:Xe>0)?null:this.at(Xe/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rf=new Be,Zi=new ns,Jo=new un,of=new D,jo=new D,Qo=new D,ea=new D,Gl=new D,ta=new D,af=new D,na=new D,Qe=class extends pt{constructor(e=new ht,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Gl.fromBufferAttribute(u,e),o?ta.addScaledVector(Gl,h):ta.addScaledVector(Gl.sub(t),h))}t.add(ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Jo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Jo,of)===null||Zi.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(rf.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),C=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=A,S=C;v<S;v+=3){let b=a.getX(v),R=a.getX(v+1),y=a.getX(v+2);s=ia(this,p,e,n,c,h,u,b,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let A=a.getX(m),C=a.getX(m+1),v=a.getX(m+2);s=ia(this,o,e,n,c,h,u,A,C,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=A,S=C;v<S;v+=3){let b=v,R=v+1,y=v+2;s=ia(this,p,e,n,c,h,u,b,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let A=m,C=m+1,v=m+2;s=ia(this,o,e,n,c,h,u,A,C,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fg(i,e,t,n,s,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(na);return c<t.near||c>t.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,jo),i.getVertexPosition(l,Qo),i.getVertexPosition(c,ea);let h=Fg(i,e,t,n,jo,Qo,ea,af);if(h){let u=new D;Di.getBarycoord(af,jo,Qo,ea,u),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,u,new Ce)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,u,new Ce)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Di.getNormal(jo,Qo,ea,d.normal),h.face=d,h.barycoord=u}return h}var Tr=new lt,cf=new lt,lf=new lt,Bg=new lt,hf=new Be,sa=new D,Wl=new un,uf=new Be,Xl=new ns,Br=class extends Qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(s),e.ray.intersectsSphere(Wl)!==!1&&(uf.copy(s).invert(),Xl.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;cf.fromBufferAttribute(s.attributes.skinIndex,e),lf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Tr.copy(t),t.set(0,0,0,0)):(Tr.set(...t,1),t.set(0,0,0)),Tr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=lf.getComponent(r);if(o!==0){let a=cf.getComponent(r);hf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Bg.copy(Tr).applyMatrix4(hf),o)}}return t.isVector4&&(t.w=Tr.w),t.applyMatrix4(this.bindMatrixInverse)}},Xs=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qs=class extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ct,h=Ct,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},df=new Be,kg=new Be,kr=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:kg;df.multiplyMatrices(a,t[r]),df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qs(t,e,e,vn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Le("Skeleton: No bone found with UUID:",r),o=new Xs),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},pi=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Be,ff=new Be,ra=[],pf=new Kt,zg=new Be,Er=new Qe,Ar=new un,An=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),pf.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Ar.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),ff.multiplyMatrices(n,Is),Er.matrixWorld=ff,Er.raycast(e,ra);for(let o=0,a=ra.length;o<a;o++){let l=ra[o];l.instanceId=r,l.object=this,t.push(l)}ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(s*this.count),s,this.count,nc,yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new un,Vg=new Ce(.5,.5),oa=new D,Ys=class{constructor(e=new Nn,t=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],A=r[12],C=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-g,S-A).normalize(),s[1].setComponents(c+o,f+h,p+g,S+A).normalize(),s[2].setComponents(c+a,f+u,p+_,S+C).normalize(),s[3].setComponents(c-a,f-u,p-_,S-C).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,S-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,S-v).normalize(),t===On)s[5].setComponents(c+l,f+d,p+m,S+v).normalize();else if(t===Fs)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=Vg.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $s=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Aa=new D,wa=new D,mf=new Be,wr=new ns,aa=new un,ql=new D,gf=new D,is=class extends pt{constructor(e=new ht,t=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Aa.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Aa.distanceTo(wa);e.setAttribute("lineDistance",new We(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;mf.copy(s).invert(),wr.copy(e.ray).applyMatrix4(mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),A=h.getX(_+1),C=ca(this,e,wr,l,p,A,_);C&&t.push(C)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=ca(this,e,wr,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=ca(this,e,wr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=ca(this,e,wr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ca(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Aa.fromBufferAttribute(a,s),wa.fromBufferAttribute(a,r),t.distanceSqToSegment(Aa,wa,ql,gf)>n)return;ql.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ql);if(!(c<e.near||c>e.far))return{distance:c,point:gf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _f=new D,xf=new D,zr=class extends is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_f.fromBufferAttribute(t,s),xf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_f.distanceTo(xf);e.setAttribute("lineDistance",new We(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vr=class extends is{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ks=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yf=new Be,ih=new ns,la=new un,ha=new D,Hr=class extends pt{constructor(e=new ht,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;yf.copy(s).invert(),ih.copy(e.ray).applyMatrix4(yf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);ha.fromBufferAttribute(u,m),vf(ha,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ha.fromBufferAttribute(u,g),vf(ha,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vf(i,e,t,n,s,r,o){let a=ih.distanceSqToPoint(i);if(a<t){let l=new D;ih.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gr=class extends Bt{constructor(e=[],t=ki,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wr=class extends Bt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends Bt{constructor(e,t,n=zn,s,r,o,a=Ct,l=Ct,c,h=Yn,u=1){if(h!==Yn&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ca=class extends Oi{constructor(e,t=zn,n=ki,s,r,o=Ct,a=Ct,l,c=Yn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xr=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zt=class i extends ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function g(_,m,p,A,C,v,S,b,R,y,w){let L=v/R,F=S/y,I=v/2,U=S/2,E=b/2,T=R+1,N=y+1,O=0,G=0,V=new D;for(let q=0;q<N;q++){let Z=q*F-U;for(let ce=0;ce<T;ce++){let de=ce*L-I;V[_]=de*A,V[m]=Z*C,V[p]=E,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=b>0?1:-1,h.push(V.x,V.y,V.z),u.push(ce/R),u.push(1-q/y),O+=1}}for(let q=0;q<y;q++)for(let Z=0;Z<R;Z++){let ce=d+Z+T*q,de=d+Z+T*(q+1),ke=d+(Z+1)+T*(q+1),oe=d+(Z+1)+T*q;l.push(ce,de,oe),l.push(de,ke,oe),G+=6}a.addGroup(f,G,w),f+=G,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qr=class i extends ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,h=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zn=class i extends ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;A(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function A(){let v=new D,S=new D,b=0,R=(t-e)/n;for(let y=0;y<=r;y++){let w=[],L=y/r,F=L*(t-e)+e;for(let I=0;I<=s;I++){let U=I/s,E=U*l+a,T=Math.sin(E),N=Math.cos(E);S.x=F*T,S.y=-L*n+m,S.z=F*N,u.push(S.x,S.y,S.z),v.set(T,R,N).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-L),w.push(g++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let L=_[w][y],F=_[w+1][y],I=_[w+1][y+1],U=_[w][y+1];(e>0||w!==0)&&(h.push(L,F,U),b+=3),(t>0||w!==r-1)&&(h.push(F,I,U),b+=3)}c.addGroup(p,b,0),p+=b}function C(v){let S=g,b=new Ce,R=new D,y=0,w=v===!0?e:t,L=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*L,0),d.push(0,L,0),f.push(.5,.5),g++;let F=g;for(let I=0;I<=s;I++){let E=I/s*l+a,T=Math.cos(E),N=Math.sin(E);R.x=w*N,R.y=m*L,R.z=w*T,u.push(R.x,R.y,R.z),d.push(0,L,0),b.x=T*.5+.5,b.y=N*.5*L+.5,f.push(b.x,b.y),g++}for(let I=0;I<s;I++){let U=S+I,E=F+I;v===!0?h.push(E,E+1,U):h.push(E+1,E,U),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class i extends Zn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new Be;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends dn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ra=class extends $r{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Sf=new D,Mf=new D,Yl=new Dh,$l=new Dh,Kl=new Dh,Zs=class extends dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mf.subVectors(s[0],s[1]).add(s[0]),c=Mf);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Sf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Yl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),$l.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Kl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),$l.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yl.calc(l),$l.calc(l),Kl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Hg(i,e){let t=1-i;return t*t*e}function Gg(i,e){return 2*(1-i)*i*e}function Wg(i,e){return i*i*e}function Pr(i,e,t,n){return Hg(i,e)+Gg(i,t)+Wg(i,n)}function Xg(i,e){let t=1-i;return t*t*t*e}function qg(i,e){let t=1-i;return 3*t*t*i*e}function Yg(i,e){return 3*(1-i)*i*i*e}function $g(i,e){return i*i*i*e}function Ir(i,e,t,n,s){return Xg(i,e)+qg(i,t)+Yg(i,n)+$g(i,s)}var Pa=class extends dn{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,s.x,r.x,o.x,a.x),Ir(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends dn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,s.x,r.x,o.x,a.x),Ir(e,s.y,r.y,o.y,a.y),Ir(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},La=class extends dn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends dn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends dn{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,s.x,r.x,o.x),Pr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends dn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,s.x,r.x,o.x),Pr(e,s.y,r.y,o.y),Pr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(bf(a,l.x,c.x,h.x,u.x),bf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}},Kg=Object.freeze({__proto__:null,ArcCurve:Ra,CatmullRomCurve3:Zs,CubicBezierCurve:Pa,CubicBezierCurve3:Ia,EllipseCurve:$r,LineCurve:La,LineCurve3:Da,QuadraticBezierCurve:Na,QuadraticBezierCurve3:Kr,SplineCurve:Ua});var Jn=class i extends ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let A=p*d-o;for(let C=0;C<c;C++){let v=C*u-r;g.push(v,-A,0),_.push(0,0,1),m.push(C/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){let C=A+c*p,v=A+c*(p+1),S=A+1+c*(p+1),b=A+1+c*p;f.push(C,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Zr=class i extends ht{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new D,g=new Ce;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let A=p+m,C=A,v=A+n+1,S=A+n+2,b=A+1;a.push(C,v,b),a.push(v,S,b)}}this.setIndex(a),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Js=class i extends ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let A=[],C=p/n,v=o+C*a,S=e*Math.cos(v),b=Math.sqrt(e*e-S*S),R=0;p===0&&o===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let y=0;y<=t;y++){let w=y/t,L=s+w*r;u.x=-b*Math.cos(L),u.y=S,u.z=b*Math.sin(L),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+R,1-C),A.push(c++)}h.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){let C=h[p][A+1],v=h[p][A],S=h[p+1][A],b=h[p+1][A+1];(p!==0||o>0)&&f.push(C,v,b),(p!==n-1||l<Math.PI)&&f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var js=class i extends ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new D,f=new D,g=new D;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let p=0;p<=s;p++){let A=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(A),f.y=(e+t*Math.cos(m))*Math.sin(A),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(A),d.y=e*Math.sin(A),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,A=(s+1)*(_-1)+m-1,C=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(p,A,v),l.push(A,C,v)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Jr=class i extends ht{constructor(e=new Kr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new Ce,h=new D,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function _(){for(let C=0;C<t;C++)m(C);m(r===!1?t:0),A(),p()}function m(C){h=e.getPointAt(C/t,h);let v=o.normals[C],S=o.binormals[C];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,y=Math.sin(R),w=-Math.cos(R);l.x=w*v.x+y*S.x,l.y=w*v.y+y*S.y,l.z=w*v.z+y*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let C=1;C<=t;C++)for(let v=1;v<=s;v++){let S=(s+1)*(C-1)+(v-1),b=(s+1)*C+(v-1),R=(s+1)*C+v,y=(s+1)*(C-1)+v;g.push(S,b,y),g.push(b,R,y)}}function A(){for(let C=0;C<=t;C++)for(let v=0;v<=s;v++)c.x=C/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Kg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Tf(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=ls(i[t]);for(let s in n)e[s]=n[s]}return e}function Tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var gp={clone:ls,merge:jt},Jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=Zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oa=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jr=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ka,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fa=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ba=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Li(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ma(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Qg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ef(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function e0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ka=class extends jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case th:r=e,a=2*t-n;break;case nh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case th:o=e,l=2*n-t;break;case nh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,A=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,C=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+A*o[c+S]+C*o[l+S]+v*o[u+S];return r}},za=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Va=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ha=class extends jn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],p=f*d+g*2,A=u[p],C=u[p+1],v=e*d+g*2,S=h[v],b=h[v+1],R=n0(n,t,A,S,s);r[g]=_p(R,_,C,b,m)}return r}};function _p(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function t0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function n0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=_p(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=t0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Li(t,this.TimeBufferType),this.values=Li(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Li(e.times,Array),values:Li(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ma(e.settings)&&(n.settings={inTangents:Li(e.settings.inTangents,Array),outTangents:Li(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ha(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case fa:t=this.InterpolantFactoryMethodSmooth;break;case Ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ma(this.settings)&&(Af(this.settings.inTangents,e),Af(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ma(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Af(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=es;var mi=class extends fn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Qi;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="color";var gi=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};gi.prototype.ValueTypeName="number";var Ga=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},_i=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends fn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Qi;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Fi.prototype.ValueTypeName="vector";var eo=class{constructor(e="",t=-1,n=[],s=tp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(s0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Qg(l);l=Ef(l,1,h),c=Ef(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new gi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function i0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gi;case"vector":case"vector2":case"vector3":case"vector4":return Fi;case"color":return Qr;case"quaternion":return _i;case"bool":case"boolean":return mi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function s0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=i0(i.type);if(i.times===void 0){let n=[],s=[];e0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ma(i.settings)&&(t.settings={inTangents:Li(i.settings.inTangents,Float32Array),outTangents:Li(i.settings.outTangents,Float32Array)}),t}var qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(wf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!wf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wa=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new Wa,Qn=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var di={},sh=class extends Error{constructor(e,t){super(e),this.response=t}},Qs=class extends Qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=qn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:s});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=di[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){A();function A(){u.read().then(({done:C,value:v})=>{if(C)p.close();else{_+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,R=h.length;b<R;b++){let y=h[b];y.onProgress&&y.onProgress(S)}p.enqueue(v),A()}},C=>{p.error(C)})}}});return new Response(m)}else throw new sh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{qn.add(`file:${e}`,c);let h=di[e];delete di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=di[e];if(h===void 0)throw this.manager.itemError(e),c;delete di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ls=new WeakMap,Xa=class extends Qn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=qn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ls.get(o);u===void 0&&(u=[],Ls.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Bs("img");function l(){h(),t&&t(this);let u=Ls.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),qn.remove(`image:${e}`);let d=Ls.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var to=class extends Qn{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,o=new Xa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ss=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},er=class extends ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zl=new Be,Cf=new D,Rf=new D,tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Fs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ua=new D,da=new _n,Xn=new D,no=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,da,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ua,da,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new D,Pf=new Ce,If=new Ce,bt=class extends no{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Pf,If),t.subVectors(If,Pf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rh=class extends tr{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},io=class extends ss{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},oh=class extends tr{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0}},rs=class extends ss{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bi=class extends no{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends tr{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yi=class extends ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jl=new WeakMap,so=class extends Qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=qn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Jl.has(o)===!0?(s&&s(Jl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Jl.set(l,c),qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});qn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ds=-90,Ns=1,qa=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bt(Ds,Ns,e,t);s.layers=this.layers,this.add(s);let r=new bt(Ds,Ns,e,t);r.layers=this.layers,this.add(r);let o=new bt(Ds,Ns,e,t);o.layers=this.layers,this.add(o);let a=new bt(Ds,Ns,e,t);a.layers=this.layers,this.add(a);let l=new bt(Ds,Ns,e,t);l.layers=this.layers,this.add(l);let c=new bt(Ds,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ya=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Uh="\\[\\]\\.:\\/",r0=new RegExp("["+Uh+"]","g"),Oh="[^"+Uh+"]",o0="[^"+Uh.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",Oh),c0=/(WCOD+)?/.source.replace("WCOD",o0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),u0=new RegExp("^"+a0+c0+l0+h0+"$"),d0=["material","materials","bones","map"],ch=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(e){let t=u0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=ch;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NS=new Float32Array(1);var lh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Fh(i,e,t,n){let s=f0(n);switch(t){case wh:return i*e;case nc:return i*e/s.components*s.byteLength;case ic:return i*e/s.components*s.byteLength;case Vi:return i*e*2/s.components*s.byteLength;case sc:return i*e*2/s.components*s.byteLength;case Ch:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case rc:return i*e*4/s.components*s.byteLength;case co:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(e,8)/4;case oc:case cc:return Math.max(i,8)*Math.max(e,8)/2;case hc:case uc:case fc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dc:case fo:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Ic:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f0(i){switch(i){case pn:case bh:return{byteLength:1,components:1};case rr:case Th:case Vn:return{byteLength:2,components:1};case ec:case tc:return{byteLength:2,components:4};case zn:case Qa:case yn:return{byteLength:4,components:1};case Eh:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function m0(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,c_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,__=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:g0,alphahash_pars_fragment:_0,alphamap_fragment:x0,alphamap_pars_fragment:y0,alphatest_fragment:v0,alphatest_pars_fragment:S0,aomap_fragment:M0,aomap_pars_fragment:b0,batching_pars_vertex:T0,batching_vertex:E0,begin_vertex:A0,beginnormal_vertex:w0,bsdfs:C0,iridescence_fragment:R0,bumpmap_pars_fragment:P0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:N0,color_fragment:U0,color_pars_fragment:O0,color_pars_vertex:F0,color_vertex:B0,common:k0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:V0,displacementmap_pars_vertex:H0,displacementmap_vertex:G0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:$0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:c_,envmap_vertex:j0,fog_vertex:Q0,fog_pars_vertex:e_,fog_fragment:t_,fog_pars_fragment:n_,gradientmap_pars_fragment:i_,lightmap_pars_fragment:s_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:l_,lights_toon_pars_fragment:h_,lights_phong_fragment:u_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:__,lightprobes_pars_fragment:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:M_,map_fragment:b_,map_pars_fragment:T_,map_particle_fragment:E_,map_particle_pars_fragment:A_,metalnessmap_fragment:w_,metalnessmap_pars_fragment:C_,morphinstance_vertex:R_,morphcolor_vertex:P_,morphnormal_vertex:I_,morphtarget_pars_vertex:L_,morphtarget_vertex:D_,normal_fragment_begin:N_,normal_fragment_maps:U_,normal_pars_fragment:O_,normal_pars_vertex:F_,normal_vertex:B_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:G_,opaque_fragment:W_,packing:X_,premultiplied_alpha_fragment:q_,project_vertex:Y_,dithering_fragment:$_,dithering_pars_fragment:K_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:j_,shadowmap_pars_vertex:Q_,shadowmap_vertex:ex,shadowmask_pars_fragment:tx,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:sx,skinnormal_vertex:rx,specularmap_fragment:ox,specularmap_pars_fragment:ax,tonemapping_fragment:cx,tonemapping_pars_fragment:lx,transmission_fragment:hx,transmission_pars_fragment:ux,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:_x,backgroundCube_vert:xx,backgroundCube_frag:yx,cube_vert:vx,cube_frag:Sx,depth_vert:Mx,depth_frag:bx,distance_vert:Tx,distance_frag:Ex,equirect_vert:Ax,equirect_frag:wx,linedashed_vert:Cx,linedashed_frag:Rx,meshbasic_vert:Px,meshbasic_frag:Ix,meshlambert_vert:Lx,meshlambert_frag:Dx,meshmatcap_vert:Nx,meshmatcap_frag:Ux,meshnormal_vert:Ox,meshnormal_frag:Fx,meshphong_vert:Bx,meshphong_frag:kx,meshphysical_vert:zx,meshphysical_frag:Vx,meshtoon_vert:Hx,meshtoon_frag:Gx,points_vert:Wx,points_frag:Xx,shadow_vert:qx,shadow_frag:Yx,sprite_vert:$x,sprite_frag:Kx},ge={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ii={basic:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:jt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:jt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:jt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:jt([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:jt([ge.lights,ge.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ii.physical={uniforms:jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Bc={r:0,b:0,g:0},Zx=new Be,Vp=new Ve;Vp.set(-1,0,0,0,1,0,0,0,1);function Jx(i,e,t,n,s,r){let o=new De(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){let v=A.backgroundBlurriness>0;C=e.get(C,v)}return C}function g(A){let C=!1,v=f(A);v===null?m(o,a):v&&v.isColor&&(m(v,1),C=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(A,C){let v=f(C);v&&(v.isCubeTexture||v.mapping===ao)?(c===void 0&&(c=new Qe(new Zt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ls(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(C.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vp),c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==at,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qe(new Jn(2,2),new xn({name:"BackgroundMaterial",uniforms:ls(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,C){A.getRGB(Bc,Nh(i)),t.buffers.color.setClear(Bc.r,Bc.g,Bc.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,C=1){o.set(A),a=C,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,m(o,a)},render:g,addToRenderList:_,dispose:p}}function jx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(F,I,U,E,T){let N=!1,O=u(F,E,U,I);r!==O&&(r=O,c(r.object)),N=f(F,E,U,T),N&&g(F,E,U,T),T!==null&&e.update(T,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,v(F,I,U,E),T!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function u(F,I,U,E){let T=E.wireframe===!0,N=n[I.id];N===void 0&&(N={},n[I.id]=N);let O=F.isInstancedMesh===!0?F.id:0,G=N[O];G===void 0&&(G={},N[O]=G);let V=G[U.id];V===void 0&&(V={},G[U.id]=V);let q=V[T];return q===void 0&&(q=d(l()),V[T]=q),q}function d(F){let I=[],U=[],E=[];for(let T=0;T<t;T++)I[T]=0,U[T]=0,E[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:E,object:F,attributes:{},index:null}}function f(F,I,U,E){let T=r.attributes,N=I.attributes,O=0,G=U.getAttributes();for(let V in G)if(G[V].location>=0){let Z=T[V],ce=N[V];if(ce===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;O++}return r.attributesNum!==O||r.index!==E}function g(F,I,U,E){let T={},N=I.attributes,O=0,G=U.getAttributes();for(let V in G)if(G[V].location>=0){let Z=N[V];Z===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor));let ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),T[V]=ce,O++}r.attributes=T,r.attributesNum=O,r.index=E}function _(){let F=r.newAttributes;for(let I=0,U=F.length;I<U;I++)F[I]=0}function m(F){p(F,0)}function p(F,I){let U=r.newAttributes,E=r.enabledAttributes,T=r.attributeDivisors;U[F]=1,E[F]===0&&(i.enableVertexAttribArray(F),E[F]=1),T[F]!==I&&(i.vertexAttribDivisor(F,I),T[F]=I)}function A(){let F=r.newAttributes,I=r.enabledAttributes;for(let U=0,E=I.length;U<E;U++)I[U]!==F[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function C(F,I,U,E,T,N,O){O===!0?i.vertexAttribIPointer(F,I,U,T,N):i.vertexAttribPointer(F,I,U,E,T,N)}function v(F,I,U,E){_();let T=E.attributes,N=U.getAttributes(),O=I.defaultAttributeValues;for(let G in N){let V=N[G];if(V.location>=0){let q=T[G];if(q===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(q=F.instanceColor)),q!==void 0){let Z=q.normalized,ce=q.itemSize,de=e.get(q);if(de===void 0)continue;let ke=de.buffer,oe=de.type,be=de.bytesPerElement,$=oe===i.INT||oe===i.UNSIGNED_INT||q.gpuType===Qa;if(q.isInterleavedBufferAttribute){let Q=q.data,le=Q.stride,Fe=q.offset;if(Q.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)p(V.location+ve,Q.meshPerAttribute);F.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<V.locationSize;ve++)m(V.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ve=0;ve<V.locationSize;ve++)C(V.location+ve,ce/V.locationSize,oe,Z,le*be,(Fe+ce/V.locationSize*ve)*be,$)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,q.meshPerAttribute);F.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Q=0;Q<V.locationSize;Q++)C(V.location+Q,ce/V.locationSize,oe,Z,ce*be,ce/V.locationSize*Q*be,$)}}else if(O!==void 0){let Z=O[G];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(V.location,Z);break;case 3:i.vertexAttrib3fv(V.location,Z);break;case 4:i.vertexAttrib4fv(V.location,Z);break;default:i.vertexAttrib1fv(V.location,Z)}}}}A()}function S(){w();for(let F in n){let I=n[F];for(let U in I){let E=I[U];for(let T in E){let N=E[T];for(let O in N)h(N[O].object),delete N[O];delete E[T]}}delete n[F]}}function b(F){if(n[F.id]===void 0)return;let I=n[F.id];for(let U in I){let E=I[U];for(let T in E){let N=E[T];for(let O in N)h(N[O].object),delete N[O];delete E[T]}}delete n[F.id]}function R(F){for(let I in n){let U=n[I];for(let E in U){let T=U[E];if(T[F.id]===void 0)continue;let N=T[F.id];for(let O in N)h(N[O].object),delete N[O];delete T[F.id]}}}function y(F){for(let I in n){let U=n[I],E=F.isInstancedMesh===!0?F.id:0,T=U[E];if(T!==void 0){for(let N in T){let O=T[N];for(let G in O)h(O[G].object),delete O[G];delete T[N]}delete U[E],Object.keys(U).length===0&&delete n[I]}}}function w(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function Qx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ey(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==pn&&R!==yn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:v,maxSamples:S,samples:b}}function ty(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Nn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let A=r?0:n,C=A*4,v=p.clippingState||null;l.value=v,v=h(g,d,C,f);for(let S=0;S!==C;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,v=f;C!==_;++C,v+=4)o.copy(u[C]).applyMatrix4(A,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var hr=4,ny=6,iy=20,sy=256,_o=new Bi,yp=new De,Bh=null,kh=0,zh=0,Vh=!1,ry=new D,hs=new D,dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=ry}=r;Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,kh,zh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Vn,format:vn,colorSpace:rn,depthBuffer:!1},s=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oy(r)),this._blurMaterial=cy(r,e,t),this._ggxMaterial=ay(r,e,t)}return s}_compileMaterial(e){let t=new Qe(new ht,e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,n,s,r){let l=new bt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(yp),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qe(new Zt,new an({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(yp),p=!0);for(let C=0;C<6;C++){let v=C%3;v===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):v===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let S=this._cubeSize;lr(s,v*S,C>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ki||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,_o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-hr?n-g+hr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,lr(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,_o),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,lr(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,_o)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-hr?s-this._lodMax+hr:0),d=4*(this._cubeSize-h);lr(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(l,_o)}};function oy(i){let e=[],t=[],n=i,s=i-hr+1+ny;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let p=0;p<u;p++){let A=p%3*2/3-1,C=p>2?0:-1,v=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];g.set(v,f*d*p);for(let S=0;S<d;S++){let b=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?hs.set(1,R,b):p===1?hs.set(-b,1,-R):p===2?hs.set(-b,R,1):p===3?hs.set(-1,R,-b):p===4?hs.set(-b,-1,R):hs.set(b,R,-1),hs.toArray(_,(p*d+S)*f)}}let m=new ht;m.setAttribute("position",new Ot(g,f)),m.setAttribute("outputDirection",new Ot(_,f)),t.push(new Qe(m,null)),n>hr&&n--}return{lodMeshes:t,sizeLods:e}}function vp(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ay(i,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function cy(i,e,t){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Sp(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Mp(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zc=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zt(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:ti});r.uniforms.tEquirect.value=t;let o=new Qe(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Rt),new qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function ly(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Za||f===Ja)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new zc(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Za||f===Ja,_=f===ki||f===as;if(g||_){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new dr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let A=d.image;return g&&A&&A.height>0||_&&A&&l(A)?(n===null&&(n=new dr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Za?d.mapping=ki:f===Ja&&(d.mapping=as),d}function l(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function hy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ji("WebGLRenderer: "+n+" extension not supported."),s}}}function uy(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(f!==null){let A=f.array;_=f.version;for(let C=0,v=A.length;C<v;C+=3){let S=A[C+0],b=A[C+1],R=A[C+2];d.push(S,b,b,R,R,S)}}else{let A=g.array;_=g.version;for(let C=0,v=A.length/3-1;C<v;C+=3){let S=C+0,b=C+1,R=C+2;d.push(S,b,b,R,R,S)}}let m=new(g.count>=65535?Fr:Or)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function dy(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function py(i,e,t){let n=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let v=a.attributes.position.count*C,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*S*4*u),R=new Nr(b,v,S,u);R.type=yn,R.needsUpdate=!0;let y=C*4;for(let L=0;L<u;L++){let F=m[L],I=p[L],U=A[L],E=v*S*4*L;for(let T=0;T<F.count;T++){let N=T*y;f===!0&&(s.fromBufferAttribute(F,T),b[E+N+0]=s.x,b[E+N+1]=s.y,b[E+N+2]=s.z,b[E+N+3]=0),g===!0&&(s.fromBufferAttribute(I,T),b[E+N+4]=s.x,b[E+N+5]=s.y,b[E+N+6]=s.z,b[E+N+7]=0),_===!0&&(s.fromBufferAttribute(U,T),b[E+N+8]=s.x,b[E+N+9]=s.y,b[E+N+10]=s.z,b[E+N+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ce(v,S)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function my(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var gy={[gh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[oo]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[Sh]:"NEUTRAL_TONE_MAPPING",[yh]:"CUSTOM_TONE_MAPPING"};function _y(i,e,t,n,s,r){let o=new hn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ht;c.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new We([0,2,0,0,2,0],2));let h=new Oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Qe(c,h),d=new Bi(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,A=[],C=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<A.length;b++){let R=A[b];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){A=v,C=A.length>0&&A[0].isRenderPass===!0;let S=o.width,b=o.height;A.length>0&&a===null&&(a=new hn(S,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new hn(S,b,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<A.length;R++){let y=A[R];y.setSize&&y.setSize(S,b)}},this.begin=function(v,S){if(_||v.toneMapping===Bn&&A.length===0)return!1;if(p=S,S!==null){let b=S.width,R=S.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return C===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Bn,!0},this.hasRenderPass=function(){return C},this.end=function(v,S){v.toneMapping=m,_=!0;let b=o,R=a;for(let y=0;y<A.length;y++){let w=A[y];w.enabled!==!1&&(w.render(v,R,b,S),w.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},Ke.getTransfer(f)===at&&(h.defines.SRGB_TRANSFER="");let y=gy[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(u,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Hp=new Bt,Wh=new Oi(1,1),Gp=new Nr,Wp=new Ea,Xp=new Gr,bp=[],Tp=[],Ep=new Float32Array(16),Ap=new Float32Array(9),wp=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bp[s];if(r===void 0&&(r=new Float32Array(s),bp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gc(i,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function My(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;wp.set(n),i.uniformMatrix2fv(this.addr,!1,wp),zt(t,n)}}function by(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Ap.set(n),i.uniformMatrix3fv(this.addr,!1,Ap),zt(t,n)}}function Ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Ep.set(n),i.uniformMatrix4fv(this.addr,!1,Ep),zt(t,n)}}function Ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wh.compareFunction=t.isReversedDepthBuffer()?Fc:Oc,r=Wh):r=Hp,t.setTexture2D(e||r,s)}function Ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wp,s)}function Uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xp,s)}function Oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gp,s)}function Fy(i){switch(i){case 5126:return xy;case 35664:return yy;case 35665:return vy;case 35666:return Sy;case 35674:return My;case 35675:return by;case 35676:return Ty;case 5124:case 35670:return Ey;case 35667:case 35671:return Ay;case 35668:case 35672:return wy;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Py;case 36295:return Iy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Oy}}function By(i,e){i.uniform1fv(this.addr,e)}function ky(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function zy(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Vy(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Hy(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gy(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wy(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xy(i,e){i.uniform1iv(this.addr,e)}function qy(i,e){i.uniform2iv(this.addr,e)}function Yy(i,e){i.uniform3iv(this.addr,e)}function $y(i,e){i.uniform4iv(this.addr,e)}function Ky(i,e){i.uniform1uiv(this.addr,e)}function Zy(i,e){i.uniform2uiv(this.addr,e)}function Jy(i,e){i.uniform3uiv(this.addr,e)}function jy(i,e){i.uniform4uiv(this.addr,e)}function Qy(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wh:o=Hp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ev(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wp,r[o])}function tv(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xp,r[o])}function nv(i,e,t){let n=this.cache,s=e.length,r=Gc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gp,r[o])}function iv(i){switch(i){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Vy;case 35674:return Hy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return Zy;case 36295:return Jy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}var Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}},qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iv(t.type)}},Yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function Cp(i,e){i.seq.push(e),i.map[e.id]=e}function sv(i,e,t){let n=i.name,s=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),o=Hh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cp(t,c===void 0?new Xh(a,i,e):new qh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Yh(a),Cp(t,u)),t=u}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);sv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Rp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var rv=37297,ov=0;function av(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Pp=new Ve;function cv(i){Ke._getMatrix(Pp,Ke.workingColorSpace,i);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ip(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+av(i.getShaderSource(e),a)}else return r}function lv(i,e){let t=cv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var hv={[gh]:"Linear",[_h]:"Reinhard",[xh]:"Cineon",[oo]:"ACESFilmic",[vh]:"AgX",[Sh]:"Neutral",[yh]:"Custom"};function uv(i,e){let t=hv[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kc=new D;function dv(){Ke.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function pv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function yo(i){return i!==""}function Lp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(i){return i.replace(gv,xv)}var _v=new Map;function xv(i,e){let t=Ye[e];if(t===void 0){let n=_v.get(e);if(n!==void 0)t=Ye[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $h(t)}var yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(i){return i.replace(yv,vv)}function vv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Up(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Sv={[ro]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function Mv(i){return Sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bv={[ki]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE_UV"};function Tv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ev={[as]:"ENVMAP_MODE_REFRACTION"};function Av(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ev[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wv={[Ka]:"ENVMAP_BLENDING_MULTIPLY",[jf]:"ENVMAP_BLENDING_MIX",[Qf]:"ENVMAP_BLENDING_ADD"};function Cv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wv[i.combine]||"ENVMAP_BLENDING_NONE"}function Rv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Mv(t),c=Tv(t),h=Av(t),u=Cv(t),d=Rv(t),f=fv(t),g=pv(r),_=s.createProgram(),m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(m=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Bn?uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=$h(o),o=Lp(o,t),o=Dp(o,t),a=$h(a),a=Lp(a,t),a=Dp(a,t),o=Np(o),a=Np(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=A+m+o,v=A+p+a,S=Rp(s,s.VERTEX_SHADER,C),b=Rp(s,s.FRAGMENT_SHADER,v);s.attachShader(_,S),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(F){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(S)||"",E=s.getShaderInfoLog(b)||"",T=I.trim(),N=U.trim(),O=E.trim(),G=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,b);else{let q=Ip(s,S,"vertex"),Z=Ip(s,b,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+T+`
`+q+`
`+Z)}else T!==""?Le("WebGLProgram: Program Info Log:",T):(N===""||O==="")&&(V=!1);V&&(F.diagnostics={runnable:G,programLog:T,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(S),s.deleteShader(b),y=new ur(s,_),w=mv(s,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,rv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ov++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var Iv=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zh(e),t.set(e,n)),n}},Zh=class{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}};function Lv(i){return i===Vi||i===fo||i===po}function Dv(i,e,t,n,s,r){let o=new Ur,a=new Kh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,L,F,I,U){let E=F.fog,T=I.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||N,O),V=G&&G.mapping===ao?G.image.height:null,q=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let Z=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,ce=Z!==void 0?Z.length:0,de=0;T.morphAttributes.position!==void 0&&(de=1),T.morphAttributes.normal!==void 0&&(de=2),T.morphAttributes.color!==void 0&&(de=3);let ke,oe,be,$;if(q){let xt=ii[q];ke=xt.vertexShader,oe=xt.fragmentShader}else{ke=y.vertexShader,oe=y.fragmentShader;let xt=a.getVertexShaderStage(y),rt=a.getFragmentShaderStage(y);a.update(y,xt,rt),be=xt.id,$=rt.id}let Q=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,ve=I.isBatchedMesh===!0,Xe=!!y.map,Tt=!!y.matcap,$e=!!G,et=!!y.aoMap,it=!!y.lightMap,He=!!y.bumpMap&&y.wireframe===!1,st=!!y.normalMap,ut=!!y.displacementMap,Mt=!!y.emissiveMap,mt=!!y.metalnessMap,dt=!!y.roughnessMap,k=y.anisotropy>0,Dt=y.clearcoat>0,tt=y.dispersion>0,P=y.retroreflectivity>0,x=y.iridescence>0,H=y.sheen>0,Y=y.transmission>0,J=k&&!!y.anisotropyMap,se=Dt&&!!y.clearcoatMap,ae=Dt&&!!y.clearcoatNormalMap,j=Dt&&!!y.clearcoatRoughnessMap,ee=x&&!!y.iridescenceMap,ue=x&&!!y.iridescenceThicknessMap,Pe=H&&!!y.sheenColorMap,fe=H&&!!y.sheenRoughnessMap,he=!!y.specularMap,Ne=!!y.specularColorMap,Oe=!!y.specularIntensityMap,Ge=Y&&!!y.transmissionMap,z=Y&&!!y.thicknessMap,pe=!!y.gradientMap,te=!!y.alphaMap,me=y.alphaTest>0,ye=!!y.alphaHash,ne=!!y.extensions,Ue=Bn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let Re={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:ke,fragmentShader:oe,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ve,batchingColor:ve&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:Tt,envMap:$e,envMapMode:$e&&G.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:it,bumpMap:He,normalMap:st,displacementMap:ut,emissiveMap:Mt,normalMapObjectSpace:st&&y.normalMapType===ip,normalMapTangentSpace:st&&y.normalMapType===go,packedNormalMap:st&&y.normalMapType===go&&Lv(y.normalMap.format),metalnessMap:mt,roughnessMap:dt,anisotropy:k,anisotropyMap:J,clearcoat:Dt,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:j,dispersion:tt,retroreflection:P,iridescence:x,iridescenceMap:ee,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ne,specularIntensityMap:Oe,transmission:Y,transmissionMap:Ge,thicknessMap:z,gradientMap:pe,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:ye,combine:y.combine,mapUv:Xe&&g(y.map.channel),aoMapUv:et&&g(y.aoMap.channel),lightMapUv:it&&g(y.lightMap.channel),bumpMapUv:He&&g(y.bumpMap.channel),normalMapUv:st&&g(y.normalMap.channel),displacementMapUv:ut&&g(y.displacementMap.channel),emissiveMapUv:Mt&&g(y.emissiveMap.channel),metalnessMapUv:mt&&g(y.metalnessMap.channel),roughnessMapUv:dt&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:se&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(y.sheenRoughnessMap.channel),specularMapUv:he&&g(y.specularMap.channel),specularColorMapUv:Ne&&g(y.specularColorMap.channel),specularIntensityMapUv:Oe&&g(y.specularIntensityMap.channel),transmissionMapUv:Ge&&g(y.transmissionMap.channel),thicknessMapUv:z&&g(y.thicknessMap.channel),alphaMapUv:te&&g(y.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(st||k),vertexNormals:!!T.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!T.attributes.uv&&(Xe||te),fog:!!E,useFog:y.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||T.attributes.normal===void 0&&st===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:de,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ht,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(w,y),A(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function A(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function C(y){let w=f[y.type],L;if(w){let F=ii[w];L=gp.clone(F.uniforms)}else L=y.uniforms;return L}function v(y,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new Pv(i,w,y,s),c.push(L),h.set(w,L)),L}function S(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:C,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function Nv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,_,m,p){let A=i[e];return A===void 0?(A={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},i[e]=A):(A.id=d.id,A.object=d,A.geometry=f,A.material=g,A.materialVariant=o(d),A.groupOrder=_,A.renderOrder=d.renderOrder,A.z=m,A.group=p),e++,A}function l(d,f,g,_,m,p,A){A.reversedDepth===!0&&(m=-m);let C=a(d,f,g,_,m,p);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):t.push(C)}function c(d,f,g,_,m,p){let A=a(d,f,g,_,m,p);g.transmission>0?n.unshift(A):g.transparent===!0?s.unshift(A):t.unshift(A)}function h(d,f){t.length>1&&t.sort(d||Uv),n.length>1&&n.sort(f||Op),s.length>1&&s.sort(f||Op)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Ov(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Fp,i.set(n,[o])):s>=r.length?(o=new Fp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Bv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kv=0;function zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vv(i){let e=new Fv,t=Bv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Be,o=new Be;function a(c){let h=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,A=0,C=0,v=0,S=0,b=0,R=0,y=0,w=0,L=0;c.sort(zv);for(let I=0,U=c.length;I<U;I++){let E=c[I],T=E.color,N=E.intensity,O=E.distance,G=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Vi?G=E.shadow.map.texture:G=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=T.r*N,u+=T.g*N,d+=T.b*N;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],N);L++}else if(E.isSunLight){let V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let q=E.shadow,Z=t.get(E);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=G;let ce=q.getViewportCount();for(let de=0;de<ce;de++)n.sunShadowMatrix[_+de]=q.getMatrix(de),n.sunShadowCascade[_+de]=q._cascadeData[de];_+=ce,g++}n.sun[f]=V,f++}else if(E.isDirectionalLight){let V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let q=E.shadow,Z=t.get(E);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=E.shadow.matrix,S++}n.directional[m]=V,m++}else if(E.isSpotLight){let V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(T).multiplyScalar(N),V.distance=O,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[A]=V;let q=E.shadow;if(E.map&&(n.spotLightMap[y]=E.map,y++,q.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[A]=q.matrix,E.castShadow){let Z=t.get(E);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.spotShadow[A]=Z,n.spotShadowMap[A]=G,R++}A++}else if(E.isRectAreaLight){let V=e.get(E);V.color.copy(T).multiplyScalar(N),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[C]=V,C++}else if(E.isPointLight){let V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){let q=E.shadow,Z=t.get(E);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=E.shadow.matrix,b++}n.point[p]=V,p++}else if(E.isHemisphereLight){let V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(N),V.groundColor.copy(E.groundColor).multiplyScalar(N),n.hemi[v]=V,v++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==A||F.rectAreaLength!==C||F.hemiLength!==v||F.numSunShadows!==g||F.numDirectionalShadows!==S||F.numPointShadows!==b||F.numSpotShadows!==R||F.numSpotMaps!==y||F.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=A,n.rectArea.length=C,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=A,F.rectAreaLength=C,F.hemiLength=v,F.numSunShadows=g,F.numDirectionalShadows=S,F.numPointShadows=b,F.numSpotShadows=R,F.numSpotMaps=y,F.numLightProbes=L,n.version=kv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let A=0,C=c.length;A<C;A++){let v=c[A];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Bp(i){let e=new Vv(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Hv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Bp(i),e.set(s,[a])):r>=o.length?(a=new Bp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Xv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],qv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],kp=new Be,xo=new D,Gh=new D;function Yv(i,e,t){let n=new Ys,s=new Ce,r=new Ce,o=new lt,a=new Fa,l=new Ba,c={},h=t.maxTextureSize,u={[ei]:Wt,[Wt]:ei,[Ht]:Ht},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Gv,fragmentShader:Wv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ht;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let p=this.type;this.render=function(b,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===$a&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ro);let w=i.getRenderTarget(),L=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=p!==this.type;U&&R.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(T=>T.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,T=b.length;E<T;E++){let N=b[E],O=N.shadow;if(O===void 0){Le("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let G=O.getFrameExtents();s.multiply(G),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,O.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===nr){if(N.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new hn(s.x,s.y,{format:Vi,type:Vn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new Oi(s.x,s.y,yn),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=Yn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct}else N.isPointLight?(O.map=new zc(s.x),O.map.depthTexture=new Ca(s.x,zn)):(O.map=new hn(s.x,s.y),O.map.depthTexture=new Oi(s.x,s.y,zn)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=Yn,this.type===ro?(O.map.depthTexture.compareFunction=V?Fc:Oc,O.map.depthTexture.minFilter=Rt,O.map.depthTexture.magFilter=Rt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();N.isPointLight!==!0&&O.updateMatrices(N,y);for(let Z=0;Z<q;Z++){let ce=O.getCamera(Z);if(N.isPointLight){let de=O.camera,ke=O.matrix,oe=N.distance||de.far;oe!==de.far&&(de.far=oe,de.updateProjectionMatrix()),xo.setFromMatrixPosition(N.matrixWorld),de.position.copy(xo),Gh.copy(de.position),Gh.add(Xv[Z]),de.up.copy(qv[Z]),de.lookAt(Gh),de.updateMatrixWorld(),ke.makeTranslation(-xo.x,-xo.y,-xo.z),kp.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),O._frustum.setFromProjectionMatrix(kp,de.coordinateSystem,de.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(O.map),i.clear());let de=O.getViewport(Z);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),I.viewport(o)}n=O.getFrustum(Z),v(R,y,ce,N,this.type)}O.isPointLightShadow!==!0&&this.type===nr&&A(O,y),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,L,F)};function A(b,R){let y=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new hn(s.x,s.y,{format:Vi,type:Vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,y,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,y,f,_,null)}function C(b,R,y,w){let L=null,F=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)L=F;else if(L=y.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let I=L.uuid,U=R.uuid,E=c[I];E===void 0&&(E={},c[I]=E);let T=E[U];T===void 0&&(T=L.clone(),E[U]=T,R.addEventListener("dispose",S)),L=T}if(L.visible=R.visible,L.wireframe=R.wireframe,w===nr?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:u[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let I=i.properties.get(L);I.light=y}return L}function v(b,R,y,w,L){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===nr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let U=e.update(b),E=b.material;if(Array.isArray(E)){let T=U.groups;for(let N=0,O=T.length;N<O;N++){let G=T[N],V=E[G.materialIndex];if(V&&V.visible){let q=C(b,V,w,L);b.onBeforeShadow(i,b,R,y,U,q,G),i.renderBufferDirect(y,null,U,q,b,G),b.onAfterShadow(i,b,R,y,U,q,G)}}}else if(E.visible){let T=C(b,E,w,L);b.onBeforeShadow(i,b,R,y,U,T,null),i.renderBufferDirect(y,null,U,T,b,null),b.onAfterShadow(i,b,R,y,U,T,null)}}let I=b.children;for(let U=0,E=I.length;U<E;U++)v(I[U],R,y,w,L)}function S(b){b.target.removeEventListener("dispose",S);for(let y in c){let w=c[y],L=b.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function $v(i,e){function t(){let z=!1,pe=new lt,te=null,me=new lt(0,0,0,0);return{setMask:function(ye){te!==ye&&!z&&(i.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ne,Ue,Re,xt){xt===!0&&(ye*=Re,ne*=Re,Ue*=Re),pe.set(ye,ne,Ue,Re),me.equals(pe)===!1&&(i.clearColor(ye,ne,Ue,Re),me.copy(pe))},reset:function(){z=!1,te=null,me.set(-1,0,0,0)}}}function n(){let z=!1,pe=!1,te=null,me=null,ye=null;return{setReversed:function(ne){if(pe!==ne){let Ue=e.get("EXT_clip_control");ne?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),pe=ne;let Re=ye;ye=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(ne){ne?Q(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ne){te!==ne&&!z&&(i.depthMask(ne),te=ne)},setFunc:function(ne){if(pe&&(ne=pp[ne]),me!==ne){switch(ne){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ne}},setLocked:function(ne){z=ne},setClear:function(ne){ye!==ne&&(ye=ne,pe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){z=!1,te=null,me=null,ye=null,pe=!1}}}function s(){let z=!1,pe=null,te=null,me=null,ye=null,ne=null,Ue=null,Re=null,xt=null;return{setTest:function(rt){z||(rt?Q(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!z&&(i.stencilMask(rt),pe=rt)},setFunc:function(rt,Pn,Gn){(te!==rt||me!==Pn||ye!==Gn)&&(i.stencilFunc(rt,Pn,Gn),te=rt,me=Pn,ye=Gn)},setOp:function(rt,Pn,Gn){(ne!==rt||Ue!==Pn||Re!==Gn)&&(i.stencilOp(rt,Pn,Gn),ne=rt,Ue=Pn,Re=Gn)},setLocked:function(rt){z=rt},setClear:function(rt){xt!==rt&&(i.clearStencil(rt),xt=rt)},reset:function(){z=!1,pe=null,te=null,me=null,ye=null,ne=null,Ue=null,Re=null,xt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,A=null,C=null,v=null,S=null,b=null,R=null,y=new De(0,0,0),w=0,L=!1,F=null,I=null,U=null,E=null,T=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=G>=2);let q=null,Z={},ce=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),ke=new lt().fromArray(ce),oe=new lt().fromArray(de);function be(z,pe,te,me){let ye=new Uint8Array(4),ne=i.createTexture();i.bindTexture(z,ne),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<te;Ue++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(pe+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ne}let $={};$[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Os),He(!1),st(hh),Q(i.CULL_FACE),et(ti);function Q(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function le(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Fe(z,pe){return d[z]!==pe?(i.bindFramebuffer(z,pe),d[z]=pe,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function ve(z,pe){let te=g,me=!1;if(z){te=f.get(pe),te===void 0&&(te=[],f.set(pe,te));let ye=z.textures;if(te.length!==ye.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ue=ye.length;ne<Ue;ne++)te[ne]=i.COLOR_ATTACHMENT0+ne;te.length=ye.length,me=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,me=!0);me&&i.drawBuffers(te)}function Xe(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let Tt={[os]:i.FUNC_ADD,[Uf]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};Tt[Ff]=i.MIN,Tt[Bf]=i.MAX;let $e={[kf]:i.ZERO,[zf]:i.ONE,[Vf]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[Yf]:i.SRC_ALPHA_SATURATE,[Xf]:i.DST_COLOR,[Gf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[qf]:i.ONE_MINUS_DST_COLOR,[Wf]:i.ONE_MINUS_DST_ALPHA,[$f]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Zf]:i.CONSTANT_ALPHA,[Jf]:i.ONE_MINUS_CONSTANT_ALPHA};function et(z,pe,te,me,ye,ne,Ue,Re,xt,rt){if(z===ti){m===!0&&(le(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),z!==Nf){if(z!==p||rt!==L){if((A!==os||S!==os)&&(i.blendEquation(i.FUNC_ADD),A=os,S=os),rt)switch(z){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",z);break}else switch(z){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",z);break}C=null,v=null,b=null,R=null,y.set(0,0,0),w=0,p=z,L=rt}return}ye=ye||pe,ne=ne||te,Ue=Ue||me,(pe!==A||ye!==S)&&(i.blendEquationSeparate(Tt[pe],Tt[ye]),A=pe,S=ye),(te!==C||me!==v||ne!==b||Ue!==R)&&(i.blendFuncSeparate($e[te],$e[me],$e[ne],$e[Ue]),C=te,v=me,b=ne,R=Ue),(Re.equals(y)===!1||xt!==w)&&(i.blendColor(Re.r,Re.g,Re.b,xt),y.copy(Re),w=xt),p=z,L=!1}function it(z,pe){z.side===Ht?le(i.CULL_FACE):Q(i.CULL_FACE);let te=z.side===Wt;pe&&(te=!te),He(te),z.blending===ir&&z.transparent===!1?et(ti):et(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let me=z.stencilWrite;a.setTest(me),me&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Mt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(z){F!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),F=z)}function st(z){z!==Lf?(Q(i.CULL_FACE),z!==I&&(z===hh?i.cullFace(i.BACK):z===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),I=z}function ut(z){z!==U&&(O&&i.lineWidth(z),U=z)}function Mt(z,pe,te){z?(Q(i.POLYGON_OFFSET_FILL),(E!==pe||T!==te)&&(E=pe,T=te,o.getReversed()&&(pe=-pe),i.polygonOffset(pe,te))):le(i.POLYGON_OFFSET_FILL)}function mt(z){z?Q(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function dt(z){z===void 0&&(z=i.TEXTURE0+N-1),q!==z&&(i.activeTexture(z),q=z)}function k(z,pe,te){te===void 0&&(q===null?te=i.TEXTURE0+N-1:te=q);let me=Z[te];me===void 0&&(me={type:void 0,texture:void 0},Z[te]=me),(me.type!==z||me.texture!==pe)&&(q!==te&&(i.activeTexture(te),q=te),i.bindTexture(z,pe||$[z]),me.type=z,me.texture=pe)}function Dt(){let z=Z[q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function x(){try{i.texSubImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function H(){try{i.texSubImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function se(){try{i.texStorage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function ae(){try{i.texStorage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function j(){try{i.texImage2D(...arguments)}catch(z){ze("WebGLState:",z)}}function ee(){try{i.texImage3D(...arguments)}catch(z){ze("WebGLState:",z)}}function ue(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function Pe(z,pe){u[z]!==pe&&(i.pixelStorei(z,pe),u[z]=pe)}function fe(z){ke.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ke.copy(z))}function he(z){oe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),oe.copy(z))}function Ne(z,pe){let te=c.get(pe);te===void 0&&(te=new WeakMap,c.set(pe,te));let me=te.get(z);me===void 0&&(me=i.getUniformBlockIndex(pe,z.name),te.set(z,me))}function Oe(z,pe){let me=c.get(pe).get(z);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,z.__bindingPointIndex),l.set(pe,me))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,Z={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,A=null,C=null,v=null,S=null,b=null,R=null,y=new De(0,0,0),w=0,L=!1,F=null,I=null,U=null,E=null,T=null,ke.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:le,bindFramebuffer:Fe,drawBuffers:ve,useProgram:Xe,setBlending:et,setMaterial:it,setFlipSided:He,setCullFace:st,setLineWidth:ut,setPolygonOffset:Mt,setScissorTest:mt,activeTexture:dt,bindTexture:k,unbindTexture:Dt,compressedTexImage2D:tt,compressedTexImage3D:P,texImage2D:j,texImage3D:ee,pixelStorei:Pe,getParameter:ue,updateUBOMapping:Ne,uniformBlockBinding:Oe,texStorage2D:se,texStorage3D:ae,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:fe,viewport:he,reset:Ge}}function Kv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return g?new OffscreenCanvas(P,x):Bs("canvas")}function m(P,x,H){let Y=1,J=tt(P);if((J.width>H||J.height>H)&&(Y=H/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let se=Math.floor(Y*J.width),ae=Math.floor(Y*J.height);d===void 0&&(d=_(se,ae));let j=x?_(se,ae):d;return j.width=se,j.height=ae,j.getContext("2d").drawImage(P,0,0,se,ae),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ae+")."),j}else return"data"in P&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function p(P){return P.generateMipmaps}function A(P){i.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,x,H,Y,J,se=!1){if(P!==null){if(i[P]!==void 0)return i[P];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;Y&&(ae=e.get("EXT_texture_norm16"),ae||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),H===i.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),x===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),H===i.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),H===i.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let ee=se?Lr:Ke.getTransfer(J);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=ee===at?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),H===i.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,x){let H;return P?x===null||x===zn||x===or?H=i.DEPTH24_STENCIL8:x===yn?H=i.DEPTH32F_STENCIL8:x===rr&&(H=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===or?H=i.DEPTH_COMPONENT24:x===yn?H=i.DEPTH_COMPONENT32F:x===rr&&(H=i.DEPTH_COMPONENT16),H}function b(P,x){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function R(P){let x=P.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function y(P){let x=P.target;x.removeEventListener("dispose",y),F(x)}function w(P){let x=n.get(P);if(x.__webglInit===void 0)return;let H=P.source,Y=f.get(H);if(Y){let J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(P),Object.keys(Y).length===0&&f.delete(H)}n.remove(P)}function L(P){let x=n.get(P);i.deleteTexture(x.__webglTexture);let H=P.source,Y=f.get(H);delete Y[x.__cacheKey],o.memory.textures--}function F(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=P.textures;for(let Y=0,J=H.length;Y<J;Y++){let se=n.get(H[Y]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(H[Y])}n.remove(P)}let I=0;function U(){I=0}function E(){return I}function T(P){I=P}function N(){let P=I;return P>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function O(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function G(P,x){let H=n.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let Y=P.image;if(Y===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,P,x);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function V(P,x){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){le(H,P,x);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function q(P,x){let H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){le(H,P,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function Z(P,x){let H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Fe(H,P,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let ce={[En]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Ni]:i.MIRRORED_REPEAT},de={[Ct]:i.NEAREST,[ja]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[sr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},ke={[rp]:i.NEVER,[hp]:i.ALWAYS,[op]:i.LESS,[Oc]:i.LEQUAL,[ap]:i.EQUAL,[Fc]:i.GEQUAL,[cp]:i.GREATER,[lp]:i.NOTEQUAL};function oe(P,x){if(x.type===yn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===sr||x.magFilter===cs||x.magFilter===kn||x.minFilter===Rt||x.minFilter===sr||x.minFilter===cs||x.minFilter===kn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ce[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ce[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ce[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,de[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ke[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==cs&&x.minFilter!==kn||x.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function be(P,x){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",R));let Y=x.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let se=O(x);if(se!==P.__cacheKey){J[se]===void 0&&(J[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[se].usedTimes++;let ae=J[P.__cacheKey];ae!==void 0&&(J[P.__cacheKey].usedTimes--,ae.usedTimes===0&&L(x)),P.__cacheKey=se,P.__webglTexture=J[se].texture}return H}function $(P,x,H){return Math.floor(Math.floor(P/H)/x)}function Q(P,x,H,Y){let se=P.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,Y,x.data);else{se.sort((Pe,fe)=>Pe.start-fe.start);let ae=0;for(let Pe=1;Pe<se.length;Pe++){let fe=se[ae],he=se[Pe],Ne=fe.start+fe.count,Oe=$(he.start,x.width,4),Ge=$(fe.start,x.width,4);he.start<=Ne+1&&Oe===Ge&&$(he.start+he.count-1,x.width,4)===Oe?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++ae,se[ae]=he)}se.length=ae+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Pe=0,fe=se.length;Pe<fe;Pe++){let he=se[Pe],Ne=Math.floor(he.start/4),Oe=Math.ceil(he.count/4),Ge=Ne%x.width,z=Math.floor(Ne/x.width),pe=Oe,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Ge,z,pe,te,H,Y,x.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function le(P,x,H){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let J=be(P,x),se=x.source;t.bindTexture(Y,P.__webglTexture,i.TEXTURE0+H);let ae=n.get(se);if(se.version!==ae.__version||J===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let te=Ke.getPrimaries(Ke.workingColorSpace),me=x.colorSpace===Si?null:Ke.getPrimaries(x.colorSpace),ye=x.colorSpace===Si||te===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=m(x.image,!1,s.maxTextureSize);ee=Dt(x,ee);let ue=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type),fe=v(x.internalFormat,ue,Pe,x.normalized,x.colorSpace,x.isVideoTexture);oe(Y,x);let he,Ne=x.mipmaps,Oe=x.isVideoTexture!==!0,Ge=ae.__version===void 0||J===!0,z=se.dataReady,pe=b(x,ee);if(x.isDepthTexture)fe=S(x.format===zi,x.type),Ge&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,ue,Pe,null));else if(x.isDataTexture)if(Ne.length>0){Oe&&Ge&&t.texStorage2D(i.TEXTURE_2D,pe,fe,Ne[0].width,Ne[0].height);for(let te=0,me=Ne.length;te<me;te++)he=Ne[te],Oe?z&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,ue,Pe,he.data):t.texImage2D(i.TEXTURE_2D,te,fe,he.width,he.height,0,ue,Pe,he.data);x.generateMipmaps=!1}else Oe?(Ge&&t.texStorage2D(i.TEXTURE_2D,pe,fe,ee.width,ee.height),z&&Q(x,ee,ue,Pe)):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,ue,Pe,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,fe,Ne[0].width,Ne[0].height,ee.depth);for(let te=0,me=Ne.length;te<me;te++)if(he=Ne[te],x.format!==vn)if(ue!==null)if(Oe){if(z)if(x.layerUpdates.size>0){let ye=Fh(he.width,he.height,x.format,x.type);for(let ne of x.layerUpdates){let Ue=he.data.subarray(ne*ye/he.data.BYTES_PER_ELEMENT,(ne+1)*ye/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ne,he.width,he.height,1,ue,Ue)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ee.depth,ue,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,fe,he.width,he.height,ee.depth,0,he.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ee.depth,ue,Pe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,fe,he.width,he.height,ee.depth,0,ue,Pe,he.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Oe&&Ge&&t.texStorage2D(i.TEXTURE_2D,pe,fe,Ne[0].width,Ne[0].height);for(let te=0,me=Ne.length;te<me;te++)he=Ne[te],x.format!==vn?ue!==null?Oe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(i.TEXTURE_2D,te,fe,he.width,he.height,0,he.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?z&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,he.width,he.height,ue,Pe,he.data):t.texImage2D(i.TEXTURE_2D,te,fe,he.width,he.height,0,ue,Pe,he.data)}else if(x.isDataArrayTexture)if(Oe){if(Ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,fe,ee.width,ee.height,ee.depth),z)if(x.layerUpdates.size>0){let te=Fh(ee.width,ee.height,x.format,x.type);for(let me of x.layerUpdates){let ye=ee.data.subarray(me*te/ee.data.BYTES_PER_ELEMENT,(me+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,ue,Pe,ye)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Pe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,ue,Pe,ee.data);else if(x.isData3DTexture)Oe?(Ge&&t.texStorage3D(i.TEXTURE_3D,pe,fe,ee.width,ee.height,ee.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Pe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,ue,Pe,ee.data);else if(x.isFramebufferTexture){if(Ge)if(Oe)t.texStorage2D(i.TEXTURE_2D,pe,fe,ee.width,ee.height);else{let te=ee.width,me=ee.height;for(let ye=0;ye<pe;ye++)t.texImage2D(i.TEXTURE_2D,ye,fe,te,me,0,ue,Pe,null),te>>=1,me>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ee.parentNode!==te){te.appendChild(ee),u.add(x),te.onpaint=me=>{let ye=me.changedElements;for(let ne of u)ye.includes(ne.image)&&(ne.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ye=i.RGBA,ne=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,ne,Ue,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Oe&&Ge){let te=tt(Ne[0]);t.texStorage2D(i.TEXTURE_2D,pe,fe,te.width,te.height)}for(let te=0,me=Ne.length;te<me;te++)he=Ne[te],Oe?z&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue,Pe,he):t.texImage2D(i.TEXTURE_2D,te,fe,ue,Pe,he);x.generateMipmaps=!1}else if(Oe){if(Ge){let te=tt(ee);t.texStorage2D(i.TEXTURE_2D,pe,fe,te.width,te.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Pe,ee)}else t.texImage2D(i.TEXTURE_2D,0,fe,ue,Pe,ee);p(x)&&A(Y),ae.__version=se.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Fe(P,x,H){if(x.image.length!==6)return;let Y=be(P,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let se=n.get(J);if(J.version!==se.__version||Y===!0){t.activeTexture(i.TEXTURE0+H);let ae=Ke.getPrimaries(Ke.workingColorSpace),j=x.colorSpace===Si?null:Ke.getPrimaries(x.colorSpace),ee=x.colorSpace===Si||ae===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Pe=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let ne=0;ne<6;ne++)!ue&&!Pe?fe[ne]=m(x.image[ne],!0,s.maxCubemapSize):fe[ne]=Pe?x.image[ne].image:x.image[ne],fe[ne]=Dt(x,fe[ne]);let he=fe[0],Ne=r.convert(x.format,x.colorSpace),Oe=r.convert(x.type),Ge=v(x.internalFormat,Ne,Oe,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,pe=se.__version===void 0||Y===!0,te=J.dataReady,me=b(x,he);oe(i.TEXTURE_CUBE_MAP,x);let ye;if(ue){z&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ge,he.width,he.height);for(let ne=0;ne<6;ne++){ye=fe[ne].mipmaps;for(let Ue=0;Ue<ye.length;Ue++){let Re=ye[Ue];x.format!==vn?Ne!==null?z?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,0,0,Re.width,Re.height,Ne,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,Ge,Re.width,Re.height,0,Re.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,0,0,Re.width,Re.height,Ne,Oe,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,Ge,Re.width,Re.height,0,Ne,Oe,Re.data)}}}else{if(ye=x.mipmaps,z&&pe){ye.length>0&&me++;let ne=tt(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Pe){z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe[ne].width,fe[ne].height,Ne,Oe,fe[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,fe[ne].width,fe[ne].height,0,Ne,Oe,fe[ne].data);for(let Ue=0;Ue<ye.length;Ue++){let xt=ye[Ue].image[ne].image;z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,0,0,xt.width,xt.height,Ne,Oe,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,Ge,xt.width,xt.height,0,Ne,Oe,xt.data)}}else{z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,Oe,fe[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,Ne,Oe,fe[ne]);for(let Ue=0;Ue<ye.length;Ue++){let Re=ye[Ue];z?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,0,0,Ne,Oe,Re.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,Ge,Ne,Oe,Re.image[ne])}}}p(x)&&A(i.TEXTURE_CUBE_MAP),se.__version=J.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function ve(P,x,H,Y,J,se){let ae=r.convert(H.format,H.colorSpace),j=r.convert(H.type),ee=v(H.internalFormat,ae,j,H.normalized,H.colorSpace),ue=n.get(x),Pe=n.get(H);if(Pe.__renderTarget=x,!ue.__hasExternalTextures){let fe=Math.max(1,x.width>>se),he=Math.max(1,x.height>>se);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,se,ee,fe,he,x.depth,0,ae,j,null):t.texImage2D(J,se,ee,fe,he,0,ae,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),dt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,Pe.__webglTexture,0,mt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,Pe.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(P,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){let Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,se=S(x.stencilBuffer,J),ae=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),se,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,P)}else{let Y=x.textures;for(let J=0;J<Y.length;J++){let se=Y[J],ae=r.convert(se.format,se.colorSpace),j=r.convert(se.type),ee=v(se.internalFormat,ae,j,se.normalized,se.colorSpace);dt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(x),ee,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(x),ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(P,x,H){let Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),oe(i.TEXTURE_CUBE_MAP,x.depthTexture);let ue=r.convert(x.depthTexture.format),Pe=r.convert(x.depthTexture.type),fe;x.depthTexture.format===Yn?fe=i.DEPTH_COMPONENT24:x.depthTexture.format===zi&&(fe=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,x.width,x.height,0,ue,Pe,null)}}else G(x.depthTexture,0);let se=J.__webglTexture,ae=mt(x),j=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ee=x.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yn)dt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,se,0);else if(x.depthTexture.format===zi)dt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,se,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(P){let x=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)Tt(x.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?Tt(x.__webglFramebuffer[0],P,0):Tt(x.__webglFramebuffer,P,0)}else if(H){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),Xe(x.__webglDepthbuffer[Y],P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Xe(x.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(P,x,H){let Y=n.get(P);x!==void 0&&ve(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&$e(P)}function it(P){let x=P.texture,H=n.get(P),Y=n.get(x);P.addEventListener("dispose",y);let J=P.textures,se=P.isWebGLCubeRenderTarget===!0,ae=J.length>1;if(ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),se){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let ee=0;ee<x.mipmaps.length;ee++)H.__webglFramebuffer[j][ee]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ae)for(let j=0,ee=J.length;j<ee;j++){let ue=n.get(J[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&dt(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let ee=J[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let ue=r.convert(ee.format,ee.colorSpace),Pe=r.convert(ee.type),fe=v(ee.internalFormat,ue,Pe,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),he=mt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,fe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),oe(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ve(H.__webglFramebuffer[j][ee],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else ve(H.__webglFramebuffer[j],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,ee=J.length;j<ee;j++){let ue=J[j],Pe=n.get(ue),fe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Pe.__webglTexture),oe(fe,ue),ve(H.__webglFramebuffer,P,ue,i.COLOR_ATTACHMENT0+j,fe,0),p(ue)&&A(fe)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,Y.__webglTexture),oe(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ve(H.__webglFramebuffer[ee],P,x,i.COLOR_ATTACHMENT0,j,ee);else ve(H.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,j,0);p(x)&&A(j),t.unbindTexture()}P.depthBuffer&&$e(P)}function He(P){let x=P.textures;for(let H=0,Y=x.length;H<Y;H++){let J=x[H];if(p(J)){let se=C(P),ae=n.get(J).__webglTexture;t.bindTexture(se,ae),A(se),t.unbindTexture()}}}let st=[],ut=[];function Mt(P){if(P.samples>0){if(dt(P)===!1){let x=P.textures,H=P.width,Y=P.height,J=i.COLOR_BUFFER_BIT,se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(P),j=x.length>1;if(j)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ee=P.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);let Pe=n.get(x[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,H,Y,0,0,H,Y,J,i.NEAREST),l===!0&&(st.length=0,ut.length=0,st.push(i.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(st.push(se),ut.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ue]);let Pe=n.get(x[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function mt(P){return Math.min(s.maxSamples,P.samples)}function dt(P){let x=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function k(P){let x=o.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function Dt(P,x){let H=P.colorSpace,Y=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==rn&&H!==Si&&(Ke.getTransfer(H)===at?(Y!==vn||J!==pn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",H)),x}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.getTextureUnits=E,this.setTextureUnits=T,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=et,this.setupRenderTarget=it,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zv(i,e){function t(n,s=Si){let r,o=Ke.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bh)return i.BYTE;if(n===Th)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Qa)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===vn)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===co||n===lo||n===ho||n===uo)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===ac||n===cc||n===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===fo||n===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hc||n===uc)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fc)return r.COMPRESSED_R11_EAC;if(n===pc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gc||n===_c||n===xc||n===yc||n===vc||n===Sc||n===Mc||n===bc||n===Tc||n===Ec||n===Ac||n===wc||n===Cc||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Ic||n===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pc)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Nc||n===po||n===Uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:Jv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends $n{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Jh,p={},A=t.getContextAttributes(),C=null,v=null,S=[],b=[],R=new Ce,y=null,w=null,L=new bt;L.viewport=new lt;let F=new bt;F.viewport=new lt;let I=[L,F],U=new Ya,E=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=S[$];return Q===void 0&&(Q=new Vs,S[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=S[$];return Q===void 0&&(Q=new Vs,S[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=S[$];return Q===void 0&&(Q=new Vs,S[$]=Q),Q.getHandSpace()};function N($){let Q=b.indexOf($.inputSource);if(Q===-1)return;let le=S[Q];le!==void 0&&(le.update($.inputSource,$.frame,c||o),le.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let $=0;$<S.length;$++){let Q=b[$];Q!==null&&(b[$]=null,S[$].disconnect(Q))}E=null,T=null,m.reset();for(let $ in p)delete p[$];if(e.setRenderTarget(C),f=null,d=null,u=null,s=null,v=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Fe=null,ve=null;A.depth&&(ve=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=A.stencil?zi:Yn,Fe=A.stencil?or:zn);let Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new hn(d.textureWidth,d.textureHeight,{format:vn,type:pn,depthTexture:new Oi(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new hn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G($){for(let Q=0;Q<$.removed.length;Q++){let le=$.removed[Q],Fe=b.indexOf(le);Fe>=0&&(b[Fe]=null,S[Fe].disconnect(le))}for(let Q=0;Q<$.added.length;Q++){let le=$.added[Q],Fe=b.indexOf(le);if(Fe===-1){for(let Xe=0;Xe<S.length;Xe++)if(Xe>=b.length){b.push(le),Fe=Xe;break}else if(b[Xe]===null){b[Xe]=le,Fe=Xe;break}if(Fe===-1)break}let ve=S[Fe];ve&&ve.connect(le)}}let V=new D,q=new D;function Z($,Q,le){V.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);let Fe=V.distanceTo(q),ve=Q.projectionMatrix.elements,Xe=le.projectionMatrix.elements,Tt=ve[14]/(ve[10]-1),$e=ve[14]/(ve[10]+1),et=(ve[9]+1)/ve[5],it=(ve[9]-1)/ve[5],He=(ve[8]-1)/ve[0],st=(Xe[8]+1)/Xe[0],ut=Tt*He,Mt=Tt*st,mt=Fe/(-He+st),dt=mt*-He;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(dt),$.translateZ(mt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let k=Tt+mt,Dt=$e+mt,tt=ut-dt,P=Mt+(Fe-dt),x=et*$e/Dt*k,H=it*$e/Dt*k;$.projectionMatrix.makePerspective(tt,P,x,H,k,Dt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,le=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(le=m.depthFar)),U.near=F.near=L.near=Q,U.far=F.far=L.far=le,(E!==U.near||T!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),E=U.near,T=U.far),U.layers.mask=$.layers.mask|6,L.layers.mask=U.layers.mask&-5,F.layers.mask=U.layers.mask&-3;let Fe=$.parent,ve=U.cameras;ce(U,Fe);for(let Xe=0;Xe<ve.length;Xe++)ce(ve[Xe],Fe);ve.length===2?Z(U,L,F):U.projectionMatrix.copy(L.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),de($,U,Fe)};function de($,Q,le){le===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(le.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ts*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return p[$]};let ke=null;function oe($,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Fe=!1;le.length!==U.cameras.length&&(U.cameras.length=0,Fe=!0);for(let $e=0;$e<le.length;$e++){let et=le[$e],it=null;if(f!==null)it=f.getViewport(et);else{let st=u.getViewSubImage(d,et);it=st.viewport,$e===0&&(e.setRenderTargetTextures(v,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(v))}let He=I[$e];He===void 0&&(He=new bt,He.layers.enable($e),He.viewport=new lt,I[$e]=He),He.matrix.fromArray(et.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(et.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(it.x,it.y,it.width,it.height),$e===0&&(U.matrix.copy(He.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Fe===!0&&U.cameras.push(He)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let $e=u.getDepthInformation(le[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<le.length;$e++){let et=le[$e].camera;if(et){let it=p[et];it||(it=new Xr,p[et]=it);let He=u.getCameraImage(et);it.sourceTexture=He}}}}for(let le=0;le<S.length;le++){let Fe=b[le],ve=S[le];Fe!==null&&ve!==void 0&&ve.update(Fe,Q,c||o)}ke&&ke($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let be=new zp;be.setAnimationLoop(oe),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}},Qv=new Be,qp=new Ve;qp.set(-1,0,0,0,1,0,0,0,1);function eS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,C,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=e.get(p),C=A.envMap,v=A.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(v)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",A));let R=S.program;n.updateUBOMapping(v,R);let y=e.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function h(v){let S=u();v.__bindingPointIndex=S;let b=i.createBuffer(),R=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=s[v.id],b=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,w=b.length;y<w;y++){let L=b[y];if(Array.isArray(L))for(let F=0,I=L.length;F<I;F++)f(L[F],y,F,R);else f(L,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,b,R){if(_(v,S,b,R)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let L=0;for(let F=0;F<w.length;F++){let I=w[F],U=p(I);g(I,v.__data,L),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(L+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function _(v,S,b,R){let y=v.value,w=S+"_"+b;if(R[w]===void 0)return typeof y=="number"||typeof y=="boolean"?R[w]=y:ArrayBuffer.isView(y)?R[w]=y.slice():R[w]=y.clone(),!0;{let L=R[w];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return R[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function m(v){let S=v.uniforms,b=0,R=16;for(let w=0,L=S.length;w<L;w++){let F=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,U=F.length;I<U;I++){let E=F[I],T=Array.isArray(E.value)?E.value:[E.value];for(let N=0,O=T.length;N<O;N++){let G=T[N],V=p(G),q=b%R,Z=q%V.boundary,ce=q+Z;b+=Z,ce!==0&&R-ce<V.storage&&(b+=R-ce),E.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,b+=V.storage}}}let y=b%R;return y>0&&(b+=R-y),v.__size=b,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),S}function A(v){let S=v.target;S.removeEventListener("dispose",A);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function C(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var nS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function iS(){return ni===null&&(ni=new qs(nS,16,16,Vi,Vn),ni.name="DFG_LUT",ni.minFilter=Rt,ni.magFilter=Rt,ni.wrapS=Tn,ni.wrapT=Tn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Vc=class{constructor(e={}){let{canvas:t=up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,m=new Set([rc,sc,ic]),p=new Set([pn,zn,rr,or,ec,tc]),A=new Uint32Array(4),C=new Int32Array(4),v=new D,S=null,b=null,R=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,F=!1,I=null,U=null,E=null,T=null;this._outputColorSpace=At;let N=0,O=0,G=null,V=-1,q=null,Z=new lt,ce=new lt,de=null,ke=new De(0),oe=0,be=t.width,$=t.height,Q=1,le=null,Fe=null,ve=new lt(0,0,be,$),Xe=new lt(0,0,be,$),Tt=!1,$e=new Ys,et=!1,it=!1,He=new Be,st=new D,ut=new lt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function dt(){return G===null?Q:1}let k=n;function Dt(M,B){return t.getContext(M,B)}let tt,P,x,H,Y,J,se,ae,j,ee,ue,Pe,fe,he,Ne,Oe,Ge,z,pe,te,me,ye,ne;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),k===null){let B="webgl2";if(k=Dt(B,M),k===null)throw Dt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(M){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),ze("WebGLRenderer: "+M.message),M}function Ue(){tt=new hy(k),tt.init(),me=new Zv(k,tt),P=new ey(k,tt,e,me),x=new $v(k,tt),P.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),U=k.createFramebuffer(),E=k.createFramebuffer(),T=k.createFramebuffer(),H=new fy(k),Y=new Nv,J=new Kv(k,tt,x,Y,P,me,H),se=new ly(L),ae=new m0(k),ye=new jx(k,ae),j=new uy(k,ae,H,ye),ee=new my(k,j,ae,ye,H),z=new py(k,P,J),Ne=new ty(Y),ue=new Dv(L,se,tt,P,ye,Ne),Pe=new eS(L,Y),fe=new Ov,he=new Hv(tt),Ge=new Jx(L,se,x,ee,g,l),Oe=new Yv(L,ee,P),ne=new tS(k,H,P,x),pe=new Qx(k,tt,H),te=new dy(k,tt,H),H.programs=ue.programs,L.capabilities=P,L.extensions=tt,L.properties=Y,L.renderLists=fe,L.shadowMap=Oe,L.state=x,L.info=H}_!==pn&&(w=new _y(_,t.width,t.height,a,s,r));let Re=new jh(L,k);this.xr=Re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(be,$,!1))},this.getSize=function(M){return M.set(be,$)},this.setSize=function(M,B,K=!0){if(Re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}be=M,$=B,t.width=Math.floor(M*Q),t.height=Math.floor(B*Q),K===!0&&(t.style.width=M+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(be*Q,$*Q).floor()},this.setDrawingBufferSize=function(M,B,K){be=M,$=B,Q=K,t.width=Math.floor(M*K),t.height=Math.floor(B*K),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(_===pn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,B,K,W){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,B,K,W),x.viewport(Z.copy(ve).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(Xe)},this.setScissor=function(M,B,K,W){M.isVector4?Xe.set(M.x,M.y,M.z,M.w):Xe.set(M,B,K,W),x.scissor(ce.copy(Xe).multiplyScalar(Q).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(M){x.setScissorTest(Tt=M)},this.setOpaqueSort=function(M){le=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,K=!0){let W=0;if(M){let X=!1;if(G!==null){let xe=G.texture.format;X=m.has(xe)}if(X){let xe=G.texture.type,Me=p.has(xe),_e=Ge.getClearColor(),Ae=Ge.getClearAlpha(),Ie=_e.r,qe=_e.g,je=_e.b;Me?(A[0]=Ie,A[1]=qe,A[2]=je,A[3]=Ae,k.clearBufferuiv(k.COLOR,0,A)):(C[0]=Ie,C[1]=qe,C[2]=je,C[3]=Ae,k.clearBufferiv(k.COLOR,0,C))}else W|=k.COLOR_BUFFER_BIT}B&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Ge.dispose(),fe.dispose(),he.dispose(),Y.dispose(),se.dispose(),ee.dispose(),ye.dispose(),ne.dispose(),ue.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ud),Re.removeEventListener("sessionend",Od),Yi.stop()};function xt(M){M.preventDefault(),Dr("WebGLRenderer: Context Lost."),F=!0}function rt(){Dr("WebGLRenderer: Context Restored."),F=!1;let M=H.autoReset,B=Oe.enabled,K=Oe.autoUpdate,W=Oe.needsUpdate,X=Oe.type;Ue(),H.autoReset=M,Oe.enabled=B,Oe.autoUpdate=K,Oe.needsUpdate=W,Oe.type=X}function Pn(M){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gn(M){let B=M.target;B.removeEventListener("dispose",Gn),Gm(B)}function Gm(M){Wm(M),Y.remove(M)}function Wm(M){let B=Y.get(M).programs;B!==void 0&&(B.forEach(function(K){ue.releaseProgram(K)}),M.isShaderMaterial&&ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,K,W,X,xe){B===null&&(B=Mt);let Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,_e=Ym(M,B,K,W,X);x.setMaterial(W,Me);let Ae=K.index,Ie=1;if(W.wireframe===!0){if(Ae=j.getWireframeAttribute(K),Ae===void 0)return;Ie=2}let qe=K.drawRange,je=K.attributes.position,we=qe.start*Ie,ot=(qe.start+qe.count)*Ie;xe!==null&&(we=Math.max(we,xe.start*Ie),ot=Math.min(ot,(xe.start+xe.count)*Ie)),Ae!==null?(we=Math.max(we,0),ot=Math.min(ot,Ae.count)):je!=null&&(we=Math.max(we,0),ot=Math.min(ot,je.count));let Nt=ot-we;if(Nt<0||Nt===1/0)return;ye.setup(X,W,_e,K,Ae);let St,gt=pe;if(Ae!==null&&(St=ae.get(Ae),gt=te,gt.setIndex(St)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*dt()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(X.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),x.setLineWidth(qt*dt()),X.isLineSegments?gt.setMode(k.LINES):X.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else X.isPoints?gt.setMode(k.POINTS):X.isSprite&&gt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qt=X._multiDrawStarts,Se=X._multiDrawCounts,nn=X._multiDrawCount,nt=Ae?ae.get(Ae).bytesPerElement:1,Mn=Y.get(W).currentProgram.getUniforms();for(let Wn=0;Wn<nn;Wn++)Mn.setValue(k,"_gl_DrawID",Wn),gt.render(qt[Wn]/nt,Se[Wn])}else if(X.isInstancedMesh)gt.renderInstances(we,Nt,X.count);else if(K.isInstancedBufferGeometry){let qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Se=Math.min(K.instanceCount,qt);gt.renderInstances(we,Nt,Se)}else gt.render(we,Nt)};function Nd(M,B,K,W){I!==null&&M.isNodeMaterial&&I.setObject(W,M),et===!0&&Ne.setState(M,K,!1),M.transparent===!0&&M.side===Ht&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,zo(M,B,W),M.side=ei,M.needsUpdate=!0,zo(M,B,W),M.side=Ht):zo(M,B,W)}this.compile=function(M,B,K=null){K===null&&(K=M),I!==null&&I.renderStart(M,B,K),b=he.get(K),b.init(B),y.push(b),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),M!==K&&M.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),it=this.localClippingEnabled,et=Ne.init(this.clippingPlanes,it),et===!0&&Ne.setGlobalState(this.clippingPlanes,B),I!==null&&Oe.render(b.state.shadowsArray,K,B);let W=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){let _e=xe[Me];Nd(_e,K,B,X),W.add(_e)}else Nd(xe,K,B,X),W.add(xe)}),b=y.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(M,B,K=null){let W=this.compile(M,B,K);return new Promise(X=>{function xe(){if(W.forEach(function(Me){let Ae=Y.get(Me).currentProgram;(Ae===void 0||Ae.isReady())&&W.delete(Me)}),W.size===0){X(M);return}setTimeout(xe,10)}tt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ml=null;function Xm(M){Ml&&Ml(M)}function Ud(){Yi.stop()}function Od(){Yi.start()}let Yi=new zp;Yi.setAnimationLoop(Xm),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(M){Ml=M,Re.setAnimationLoop(M),M===null?Yi.stop():Yi.start()},Re.addEventListener("sessionstart",Ud),Re.addEventListener("sessionend",Od),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;I!==null&&I.renderStart(M,B);let K=Re.enabled===!0&&Re.isPresenting===!0,W=w!==null&&(G===null||K)&&w.begin(L,G);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(B),B=Re.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,B,G),b=he.get(M,y.length),b.init(B),b.state.textureUnits=J.getTextureUnits(),y.push(b),He.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$e.setFromProjectionMatrix(He,On,B.reversedDepth),it=this.localClippingEnabled,et=Ne.init(this.clippingPlanes,it),S=fe.get(M,R.length),S.init(),R.push(S),Re.enabled===!0&&Re.isPresenting===!0){let Me=L.xr.getDepthSensingMesh();Me!==null&&bl(Me,B,-1/0,L.sortObjects)}bl(M,B,0,L.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),L.sortObjects===!0&&S.sort(le,Fe),mt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,mt&&Ge.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Ne.beginShadows();let X=b.state.shadowsArray;if(Oe.render(X,M,B),et===!0&&Ne.endShadows(),(W&&w.hasRenderPass())===!1){let Me=S.opaque,_e=S.transmissive;if(b.setupLights(),B.isArrayCamera){let Ae=B.cameras;if(_e.length>0)for(let Ie=0,qe=Ae.length;Ie<qe;Ie++){let je=Ae[Ie];Bd(Me,_e,M,je)}mt&&Ge.render(M);for(let Ie=0,qe=Ae.length;Ie<qe;Ie++){let je=Ae[Ie];Fd(S,M,je,je.viewport)}}else _e.length>0&&Bd(Me,_e,M,B),mt&&Ge.render(M),Fd(S,M,B)}G!==null&&O===0&&(J.updateMultisampleRenderTarget(G),J.updateRenderTargetMipmap(G)),W&&w.end(L),M.isScene===!0&&M.onAfterRender(L,M,B),ye.resetDefaultState(),V=-1,q=null,y.pop(),y.length>0?(b=y[y.length-1],J.setTextureUnits(b.state.textureUnits),et===!0&&Ne.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,I!==null&&I.renderEnd()};function bl(M,B,K,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($e)){W&&ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(He);let Me=ee.update(M),_e=M.material;_e.visible&&S.push(M,Me,_e,K,ut.z,null,B)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($e))){let Me=ee.update(M),_e=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ut.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ut.copy(Me.boundingSphere.center)),ut.applyMatrix4(M.matrixWorld).applyMatrix4(He)),Array.isArray(_e)){let Ae=Me.groups;for(let Ie=0,qe=Ae.length;Ie<qe;Ie++){let je=Ae[Ie],we=_e[je.materialIndex];we&&we.visible&&S.push(M,Me,we,K,ut.z,je,B)}}else _e.visible&&S.push(M,Me,_e,K,ut.z,null,B)}}let xe=M.children;for(let Me=0,_e=xe.length;Me<_e;Me++)bl(xe[Me],B,K,W)}function Fd(M,B,K,W){let{opaque:X,transmissive:xe,transparent:Me}=M;b.setupLightsView(K),et===!0&&Ne.setGlobalState(L.clippingPlanes,K),W&&x.viewport(Z.copy(W)),X.length>0&&ko(X,B,K),xe.length>0&&ko(xe,B,K),Me.length>0&&ko(Me,B,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Bd(M,B,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let we=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new hn(1,1,{generateMipmaps:!0,type:we?Vn:pn,minFilter:kn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let xe=b.state.transmissionRenderTarget[W.id],Me=W.viewport||Z;xe.setSize(Me.z*L.transmissionResolutionScale,Me.w*L.transmissionResolutionScale);let _e=L.getRenderTarget(),Ae=L.getActiveCubeFace(),Ie=L.getActiveMipmapLevel();L.setRenderTarget(xe),L.getClearColor(ke),oe=L.getClearAlpha(),oe<1&&L.setClearColor(16777215,.5),L.clear(),mt&&Ge.render(K);let qe=L.toneMapping;L.toneMapping=Bn;let je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),et===!0&&Ne.setGlobalState(L.clippingPlanes,W),ko(M,K,W),J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ot=0,Nt=B.length;ot<Nt;ot++){let St=B[ot],{object:gt,geometry:qt,material:Se,group:nn}=St;if(Se.side===Ht&&gt.layers.test(W.layers)){let nt=Se.side;Se.side=Wt,Se.needsUpdate=!0,kd(gt,K,W,qt,Se,nn),Se.side=nt,Se.needsUpdate=!0,we=!0}}we===!0&&(J.updateMultisampleRenderTarget(xe),J.updateRenderTargetMipmap(xe))}L.setRenderTarget(_e,Ae,Ie),L.setClearColor(ke,oe),je!==void 0&&(W.viewport=je),L.toneMapping=qe}function ko(M,B,K){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,xe=M.length;X<xe;X++){let Me=M[X],{object:_e,geometry:Ae,group:Ie}=Me,qe=Me.material;qe.allowOverride===!0&&W!==null&&(qe=W),_e.layers.test(K.layers)&&kd(_e,B,K,Ae,qe,Ie)}}function kd(M,B,K,W,X,xe){I!==null&&X.isNodeMaterial&&I.setObject(M,X),M.onBeforeRender(L,B,K,W,X,xe),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(L,B,K,W,M,xe),X.transparent===!0&&X.side===Ht&&X.forceSinglePass===!1?(X.side=Wt,X.needsUpdate=!0,L.renderBufferDirect(K,B,W,X,M,xe),X.side=ei,X.needsUpdate=!0,L.renderBufferDirect(K,B,W,X,M,xe),X.side=Ht):L.renderBufferDirect(K,B,W,X,M,xe),M.onAfterRender(L,B,K,W,X,xe)}function zo(M,B,K){B.isScene!==!0&&(B=Mt);let W=Y.get(M),X=b.state.lights,xe=b.state.shadowsArray,Me=X.state.version,_e=ue.getParameters(M,X.state,xe,B,K,b.state.lightProbeGridArray),Ae=ue.getProgramCacheKey(_e),Ie=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=se.get(M.envMap||W.environment,qe),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",Gn),Ie=new Map,W.programs=Ie);let je=Ie.get(Ae);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Me)return Vd(M,_e),je}else _e.uniforms=ue.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,K,_e),M.onBeforeCompile(_e,L),je=ue.acquireProgram(_e,Ae),Ie.set(Ae,je),W.uniforms=_e.uniforms;let we=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=Ne.uniform),Vd(M,_e),W.needsLights=Km(M),W.lightsStateVersion=Me,W.needsLights&&(we.ambientLightColor.value=X.state.ambient,we.lightProbe.value=X.state.probe,we.sunLights.value=X.state.sun,we.sunLightShadows.value=X.state.sunShadow,we.directionalLights.value=X.state.directional,we.directionalLightShadows.value=X.state.directionalShadow,we.spotLights.value=X.state.spot,we.spotLightShadows.value=X.state.spotShadow,we.rectAreaLights.value=X.state.rectArea,we.ltc_1.value=X.state.rectAreaLTC1,we.ltc_2.value=X.state.rectAreaLTC2,we.pointLights.value=X.state.point,we.pointLightShadows.value=X.state.pointShadow,we.hemisphereLights.value=X.state.hemi,we.sunShadowMatrix.value=X.state.sunShadowMatrix,we.sunShadowCascade.value=X.state.sunShadowCascade,we.directionalShadowMatrix.value=X.state.directionalShadowMatrix,we.spotLightMatrix.value=X.state.spotLightMatrix,we.spotLightMap.value=X.state.spotLightMap,we.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=je,W.uniformsList=null,je}function zd(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=ur.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Vd(M,B){let K=Y.get(M);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function qm(M,B){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let K=0,W=M.length;K<W;K++){let X=M[K];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function Ym(M,B,K,W,X){B.isScene!==!0&&(B=Mt),J.resetTextureUnits();let xe=B.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,_e=G===null?L.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ke.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ie=se.get(W.envMap||Me,Ae),qe=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color,St=Bn;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(St=L.toneMapping);let gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qt=gt!==void 0?gt.length:0,Se=Y.get(W),nn=b.state.lights;if(et===!0&&(it===!0||M!==q)){let yt=M===q&&W.id===V;Ne.setState(W,M,yt)}let nt=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==nn.state.version||Se.outputColorSpace!==_e||X.isBatchedMesh&&Se.batching===!1||!X.isBatchedMesh&&Se.batching===!0||X.isBatchedMesh&&Se.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Se.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Se.instancing===!1||!X.isInstancedMesh&&Se.instancing===!0||X.isSkinnedMesh&&Se.skinning===!1||!X.isSkinnedMesh&&Se.skinning===!0||X.isInstancedMesh&&Se.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Se.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Se.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Se.instancingMorph===!1&&X.morphTexture!==null||Se.envMap!==Ie||W.fog===!0&&Se.fog!==xe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ne.numPlanes||Se.numIntersection!==Ne.numIntersection)||Se.vertexAlphas!==qe||Se.vertexTangents!==je||Se.morphTargets!==we||Se.morphNormals!==ot||Se.morphColors!==Nt||Se.toneMapping!==St||Se.morphTargetsCount!==qt||!!Se.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Se.__version=W.version);let Mn=Se.currentProgram;nt===!0&&(Mn=zo(W,B,X),I&&W.isNodeMaterial&&I.onUpdateProgram(W,Mn,Se));let Wn=!1,Ti=!1,ys=!1,ft=Mn.getUniforms(),Et=Se.uniforms;if(x.useProgram(Mn.program)&&(Wn=!0,Ti=!0,ys=!0),W.id!==V&&(V=W.id,Ti=!0),Se.needsLights){let yt=qm(b.state.lightProbeGridArray,X);Se.lightProbeGrid!==yt&&(Se.lightProbeGrid=yt,Ti=!0)}if(Wn||q!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(k,"projectionMatrix",M.projectionMatrix),ft.setValue(k,"viewMatrix",M.matrixWorldInverse);let Ai=ft.map.cameraPosition;Ai!==void 0&&Ai.setValue(k,st.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&ft.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Ti=!0,ys=!0)}if(Se.needsLights&&(nn.state.sunShadowMap.length>0&&ft.setValue(k,"sunShadowMap",nn.state.sunShadowMap,J),nn.state.directionalShadowMap.length>0&&ft.setValue(k,"directionalShadowMap",nn.state.directionalShadowMap,J),nn.state.spotShadowMap.length>0&&ft.setValue(k,"spotShadowMap",nn.state.spotShadowMap,J),nn.state.pointShadowMap.length>0&&ft.setValue(k,"pointShadowMap",nn.state.pointShadowMap,J)),X.isSkinnedMesh){ft.setOptional(k,X,"bindMatrix"),ft.setOptional(k,X,"bindMatrixInverse");let yt=X.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ft.setValue(k,"boneTexture",yt.boneTexture,J))}X.isBatchedMesh&&(ft.setOptional(k,X,"batchingTexture"),ft.setValue(k,"batchingTexture",X._matricesTexture,J),ft.setOptional(k,X,"batchingIdTexture"),ft.setValue(k,"batchingIdTexture",X._indirectTexture,J),ft.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(k,"batchingColorTexture",X._colorsTexture,J));let Ei=K.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&z.update(X,K,Mn),(Ti||Se.receiveShadow!==X.receiveShadow)&&(Se.receiveShadow=X.receiveShadow,ft.setValue(k,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Et.envMapIntensity.value=B.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=iS()),Ti){if(ft.setValue(k,"toneMappingExposure",L.toneMappingExposure),Se.needsLights&&$m(Et,ys),xe&&W.fog===!0&&Pe.refreshFogUniforms(Et,xe),Pe.refreshMaterialUniforms(Et,W,Q,$,b.state.transmissionRenderTarget[M.id]),Se.needsLights&&Se.lightProbeGrid){let yt=Se.lightProbeGrid;Et.probesSH.value=yt.texture,Et.probesMin.value.copy(yt.boundingBox.min),Et.probesMax.value.copy(yt.boundingBox.max),Et.probesResolution.value.copy(yt.resolution)}ur.upload(k,zd(Se),Et,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ur.upload(k,zd(Se),Et,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(k,"center",X.center),ft.setValue(k,"modelViewMatrix",X.modelViewMatrix),ft.setValue(k,"normalMatrix",X.normalMatrix),ft.setValue(k,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let yt=W.uniformsGroups;for(let Ai=0,vs=yt.length;Ai<vs;Ai++){let Gd=yt[Ai];ne.update(Gd,Mn),ne.bind(Gd,Mn)}}return Mn}function $m(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Km(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(M,B,K){let W=Y.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=B,Y.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let K=Y.get(M);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,K=0){G=M,N=B,O=K;let W=null,X=!1,xe=!1;if(M){let _e=Y.get(M);if(_e.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),Z.copy(M.viewport),ce.copy(M.scissor),de=M.scissorTest,x.viewport(Z),x.scissor(ce),x.setScissorTest(de),V=-1;return}else if(_e.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(_e.__hasExternalTextures)J.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let qe=M.depthTexture;if(_e.__boundDepthTexture!==qe){if(qe!==null&&Y.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);let Ie=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[B])?W=Ie[B][K]:W=Ie[B],X=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?W=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?W=Ie[K]:W=Ie,Z.copy(M.viewport),ce.copy(M.scissor),de=M.scissorTest}else Z.copy(ve).multiplyScalar(Q).floor(),ce.copy(Xe).multiplyScalar(Q).floor(),de=Tt;if(K!==0&&(W=U),x.bindFramebuffer(k.FRAMEBUFFER,W)&&x.drawBuffers(M,W),x.viewport(Z),x.scissor(ce),x.setScissorTest(de),X){let _e=Y.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e.__webglTexture,K)}else if(xe){let _e=B;for(let Ae=0;Ae<M.textures.length;Ae++){let Ie=Y.get(M.textures[Ae]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ae,Ie.__webglTexture,K,_e)}}else if(M!==null&&K!==0){let _e=Y.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,K)}V=-1};function Hd(M){let B=Y.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=P.textureFormatReadable(M.format),B.__typeReadable=P.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,K,W,X,xe,Me,_e=0){if(!(M&&M.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){x.bindFramebuffer(k.FRAMEBUFFER,Ae);try{let Ie=M.textures[_e],qe=Ie.format,je=Ie.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);let we=Hd(Ie);if(we.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&K>=0&&K<=M.height-X&&k.readPixels(B,K,W,X,me.convert(qe),me.convert(je),xe)}finally{let Ie=G!==null?Y.get(G).__webglFramebuffer:null;x.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,B,K,W,X,xe,Me,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(B>=0&&B<=M.width-W&&K>=0&&K<=M.height-X){x.bindFramebuffer(k.FRAMEBUFFER,Ae);let Ie=M.textures[_e],qe=Ie.format,je=Ie.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);let we=Hd(Ie);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(B,K,W,X,me.convert(qe),me.convert(je),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Nt=G!==null?Y.get(G).__webglFramebuffer:null;x.bindFramebuffer(k.FRAMEBUFFER,Nt);let St=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fp(k,St,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ot),k.deleteSync(St),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,K=0){let W=Math.pow(2,-K),X=Math.floor(M.image.width*W),xe=Math.floor(M.image.height*W),Me=B!==null?B.x:0,_e=B!==null?B.y:0;J.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Me,_e,X,xe),x.unbindTexture()},this.copyTextureToTexture=function(M,B,K=null,W=null,X=0,xe=0){let Me,_e,Ae,Ie,qe,je,we,ot,Nt,St=M.isCompressedTexture?M.mipmaps[xe]:M.image;if(K!==null)Me=K.max.x-K.min.x,_e=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,Ie=K.min.x,qe=K.min.y,je=K.isBox3?K.min.z:0;else{let Et=Math.pow(2,-X);Me=Math.floor(St.width*Et),_e=Math.floor(St.height*Et),M.isDataArrayTexture?Ae=St.depth:M.isData3DTexture?Ae=Math.floor(St.depth*Et):Ae=1,Ie=0,qe=0,je=0}W!==null?(we=W.x,ot=W.y,Nt=W.z):(we=0,ot=0,Nt=0);let gt=me.convert(B.format),qt=me.convert(B.type),Se;B.isData3DTexture?(J.setTexture3D(B,0),Se=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(J.setTexture2DArray(B,0),Se=k.TEXTURE_2D_ARRAY):(J.setTexture2D(B,0),Se=k.TEXTURE_2D),x.activeTexture(k.TEXTURE0),x.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let nn=x.getParameter(k.UNPACK_ROW_LENGTH),nt=x.getParameter(k.UNPACK_IMAGE_HEIGHT),Mn=x.getParameter(k.UNPACK_SKIP_PIXELS),Wn=x.getParameter(k.UNPACK_SKIP_ROWS),Ti=x.getParameter(k.UNPACK_SKIP_IMAGES);x.pixelStorei(k.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),x.pixelStorei(k.UNPACK_SKIP_ROWS,qe),x.pixelStorei(k.UNPACK_SKIP_IMAGES,je);let ys=M.isDataArrayTexture||M.isData3DTexture,ft=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let Et=Y.get(M),Ei=Y.get(B),yt=Y.get(Et.__renderTarget),Ai=Y.get(Ei.__renderTarget);x.bindFramebuffer(k.READ_FRAMEBUFFER,yt.__webglFramebuffer),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let vs=0;vs<Ae;vs++)ys&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,X,je+vs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,xe,Nt+vs)),k.blitFramebuffer(Ie,qe,Me,_e,we,ot,Me,_e,k.DEPTH_BUFFER_BIT,k.NEAREST);x.bindFramebuffer(k.READ_FRAMEBUFFER,null),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||Y.has(M)){let Et=Y.get(M),Ei=Y.get(B);x.bindFramebuffer(k.READ_FRAMEBUFFER,E),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,T);for(let yt=0;yt<Ae;yt++)ys?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Et.__webglTexture,X,je+yt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Et.__webglTexture,X),ft?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ei.__webglTexture,xe,Nt+yt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ei.__webglTexture,xe),X!==0?k.blitFramebuffer(Ie,qe,Me,_e,we,ot,Me,_e,k.COLOR_BUFFER_BIT,k.NEAREST):ft?k.copyTexSubImage3D(Se,xe,we,ot,Nt+yt,Ie,qe,Me,_e):k.copyTexSubImage2D(Se,xe,we,ot,Ie,qe,Me,_e);x.bindFramebuffer(k.READ_FRAMEBUFFER,null),x.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ft?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(Se,xe,we,ot,Nt,Me,_e,Ae,gt,qt,St.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Se,xe,we,ot,Nt,Me,_e,Ae,gt,St.data):k.texSubImage3D(Se,xe,we,ot,Nt,Me,_e,Ae,gt,qt,St):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,we,ot,Me,_e,gt,qt,St.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,we,ot,St.width,St.height,gt,St.data):k.texSubImage2D(k.TEXTURE_2D,xe,we,ot,Me,_e,gt,qt,St);x.pixelStorei(k.UNPACK_ROW_LENGTH,nn),x.pixelStorei(k.UNPACK_IMAGE_HEIGHT,nt),x.pixelStorei(k.UNPACK_SKIP_PIXELS,Mn),x.pixelStorei(k.UNPACK_SKIP_ROWS,Wn),x.pixelStorei(k.UNPACK_SKIP_IMAGES,Ti),xe===0&&B.generateMipmaps&&k.generateMipmap(Se),x.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){N=0,O=0,G=null,x.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Wc=class extends Ui{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Zt;e.deleteAttribute("uv");let t=new Gt({side:Wt}),n=new Gt,s=new rs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Qe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new An(e,n,6),a=new pt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Qe(e,pr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Qe(e,pr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Qe(e,pr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Qe(e,pr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Qe(e,pr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Qe(e,pr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pr(i){return new jr({color:0,emissive:16777215,emissiveIntensity:i})}function $p(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ht,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Yp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let g=Yp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Yp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ot(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Qh(i,e){if(e===Rh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ar||e===mo){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ar)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var vo=new D;function wn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;vo.copy(e),vo[n]=0,vo.normalize();let c=.5*o/(o+a),h=1-vo.angleTo(i)/l;return Math.sign(vo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Xc=class i extends Zt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new D,c=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new D,m=.5/o;for(let p=0,A=0;p<u.length;p+=3,A+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[A+0]=wn(_,c,"z","y",r,n),f[A+1]=1-wn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[A+0]=1-wn(_,c,"z","y",r,n),f[A+1]=1-wn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[A+0]=1-wn(_,c,"x","z",r,e),f[A+1]=wn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[A+0]=1-wn(_,c,"x","z",r,e),f[A+1]=1-wn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[A+0]=1-wn(_,c,"x","y",r,e),f[A+1]=1-wn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[A+0]=wn(_,c,"x","y",r,e),f[A+1]=1-wn(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var RT=Math.PI*2,Mo=(i,e,t)=>Math.max(e,Math.min(t,i)),bo=i=>Math.atan2(Math.sin(i),Math.cos(i)),Sn=7.5,Hi=10,Gi=3,qc=4,Pt={gentra:{name:"Gentra",subtitle:"1.5 \xB7 mexanika",length:4.515,width:1.725,height:1.445,wheelbase:2.6,wheelRadius:.3,maxSpeed:52,acceleration:5.1,braking:12.5,steering:.53},malibu:{name:"Malibu",subtitle:"2.0 Turbo \xB7 avtomat",length:4.923,width:1.854,height:1.473,wheelbase:2.83,wheelRadius:.335,maxSpeed:61,acceleration:6.8,braking:13.2,steering:.49},cobalt:{name:"Cobalt",subtitle:"2014 \xB7 LTZ",length:4.479,width:1.735,height:1.514,wheelbase:2.62,wheelRadius:.322,maxSpeed:49,acceleration:4.9,braking:12.4,steering:.53}},ycTracks=[{name:"Toshkent Ring",sub:"Shahar halqasi \xB7 11 burilish",pts:[[-20,100],[75,100],[135,50],[115,-45],[65,-95],[-10,-92],[-35,-45],[-87,-65],[-145,-25],[-140,55],[-100,100]]},{name:"Chimyon dovoni",sub:"Tog\u2018 yo\u2018li \xB7 17 burilish",pts:[[-40,112],[40,112],[110,100],[150,50],[112,8],[60,30],[20,-5],[70,-45],[140,-50],[120,-105],[30,-108],[-40,-80],[-70,-25],[-120,-55],[-155,-10],[-135,50],[-100,95]]},{name:"Samarqand GP",sub:"Tezkor trassa \xB7 14 burilish",pts:[[-30,115],[60,115],[135,90],[158,25],[140,-45],[85,-100],[10,-108],[-70,-100],[-135,-70],[-158,0],[-110,35],[-55,10],[-20,45],[-75,80]]}],ycTrackId=(()=>{try{let i=+localStorage.getItem("yolchi-track");return Number.isInteger(i)&&i>=0&&i<3?i:0}catch{return 0}})(),ycTrack=ycTracks[ycTrackId],So=ycTrack.pts;window.__ycTracks={list:ycTracks,id:ycTrackId,set(i){try{localStorage.setItem("yolchi-track",String(i)),sessionStorage.setItem("yolchi-step","mode")}catch{}location.reload()}};function eu(i){let e=So.length,t=(i%1+1)%1*e,n=Math.floor(t),s=t-n,r=So[(n+e-1)%e],o=So[n],a=So[(n+1)%e],l=So[(n+2)%e];return[0,1].map(c=>.5*(2*o[c]+(-r[c]+a[c])*s+(2*r[c]-5*o[c]+4*a[c]-l[c])*s*s+(-r[c]+3*o[c]-3*a[c]+l[c])*s*s*s))}var vt=Array.from({length:660},(i,e)=>{let t=eu(e/660),n=eu((e-.1)/660),s=eu((e+.1)/660),r=Math.hypot(s[0]-n[0],s[1]-n[1]);return{x:t[0],z:t[1],tx:(s[0]-n[0])/r,tz:(s[1]-n[1])/r,s:0}}),Qt=0;for(let i=0;i<vt.length;i++){vt[i].s=Qt;let e=vt[(i+1)%vt.length];Qt+=Math.hypot(e.x-vt[i].x,e.z-vt[i].z)}var fs=Qt;function Hn(i){i=(i%Qt+Qt)%Qt;let e=0,t=vt.length-1;for(;e<t;){let h=Math.ceil((e+t)/2);vt[h].s<=i?e=h:t=h-1}let n=vt[e],s=vt[(e+1)%vt.length],r=e===vt.length-1?Qt-n.s:s.s-n.s,o=(i-n.s)/r,a=n.tx+(s.tx-n.tx)*o,l=n.tz+(s.tz-n.tz)*o,c=Math.hypot(a,l);return{x:n.x+(s.x-n.x)*o,z:n.z+(s.z-n.z)*o,tx:a/c,tz:l/c,s:i}}function tu(i,e){let t={distance:1/0};for(let n=0;n<vt.length;n++){let s=vt[n],r=vt[(n+1)%vt.length],o=r.x-s.x,a=r.z-s.z,l=o*o+a*a,c=Mo(((i-s.x)*o+(e-s.z)*a)/l,0,1),h=s.x+o*c,u=s.z+a*c,d=Math.hypot(i-h,e-u);if(d<t.distance){let f=Math.sqrt(l),g=o/f,_=a/f;t={x:h,z:u,distance:d,tx:g,tz:_,side:(i-h)*-_+(e-u)*g,s:(s.s+c*f)%Qt}}}return t}var ds=Array.from({length:12},(i,e)=>Hn(Qt*e/12));function Kp(i,e=0){let t=Pt[i.car]||Pt.gentra,n=Hn(-11-Math.floor(e/2)*6.7),s=e%2?2.65:-2.65;return{id:i.id,name:i.name,car:i.car||"gentra",color:i.color||"#e5e7eb",x:n.x-n.tz*s,z:n.z+n.tx*s,yaw:Math.atan2(-n.tx,-n.tz),speed:0,steer:0,travel:0,lap:0,nextGate:0,started:!1,finished:!1,finishTime:0,penalty:0,lastGate:0,progress:-11-Math.floor(e/2)*6.7,offroad:!1,braking:!1,hits:0,hitCooldown:0,resetCooldown:0,wheelbase:t.wheelbase}}function To(i={}){return{gas:i.gas===!0,reverse:i.reverse===!0,left:i.left===!0,right:i.right===!0,brake:i.brake===!0}}function sS(i,e,t){if(i.finished)return;let n=ds[i.nextGate],s=(e.x-n.x)*n.tx+(e.z-n.z)*n.tz,r=(i.x-n.x)*n.tx+(i.z-n.z)*n.tz,o=Math.abs((i.x-n.x)*-n.tz+(i.z-n.z)*n.tx);s<0&&r>=0&&o<Hi+.6&&(i.nextGate===0&&(i.started?(i.lap++,i.lap>=Gi&&(i.finished=!0,i.finishTime=t+i.penalty,i.speed*=.5)):i.started=!0),i.lastGate=i.nextGate,i.nextGate=(i.nextGate+1)%ds.length);let a=tu(i.x,i.z),l=i.started?i.lap*Qt:-Qt,c=i.started?i.nextGate===0?11:i.nextGate-1:-1,h=a.s;i.started&&i.nextGate===1&&a.s>Qt-15&&(h=0),i.started&&(h=Mo(h,c*Qt/12,Math.min(Qt,(c+1)*Qt/12))),i.progress=i.finished?Gi*Qt:l+h}function nu(i,e,t,n=0){if(!Number.isFinite(t)||t<=0)return;t=Math.min(t,.05);let s=To(e),r=Pt[i.car]||Pt.gentra,o={x:i.x,z:i.z};i.hitCooldown=Math.max(0,i.hitCooldown-t),i.resetCooldown=Math.max(0,i.resetCooldown-t);let a=tu(i.x,i.z);i.offroad=a.distance>Sn+.1,i.braking=s.brake||s.reverse&&i.speed>.6||i.finished;let l=((s.left?1:0)-(s.right?1:0))*r.steering/(1+Math.abs(i.speed)/19);i.steer+=(l-i.steer)*(1-Math.exp(-t*7));let c=0;i.finished?c=-Math.sign(i.speed)*5:s.brake?c=-Math.sign(i.speed)*r.braking:s.gas?c=i.speed<-.6?r.braking:r.acceleration*(1-.55*Math.max(0,i.speed)/r.maxSpeed):s.reverse&&(c=i.speed>.6?-r.braking:-3.4);let h=(.15+.0028*i.speed*i.speed+(i.offroad?1.5:0))*Math.sign(i.speed),u=i.speed;i.speed+=(c-h)*t,(s.brake||i.finished||!s.gas&&!s.reverse)&&u*i.speed<0&&(i.speed=0),i.speed=Mo(i.speed,-8,i.offroad?24:r.maxSpeed),Math.abs(i.speed)<.08&&!s.gas&&!s.reverse&&(i.speed=0),i.yaw=bo(i.yaw+i.speed/r.wheelbase*Math.tan(i.steer)*t*(s.brake&&Math.abs(i.speed)>12?1.2:1)),i.x-=Math.sin(i.yaw)*i.speed*t,i.z-=Math.cos(i.yaw)*i.speed*t,i.travel+=i.speed*t;let d=tu(i.x,i.z);if(d.distance>Hi-.9){let nx=(i.x-d.x)/d.distance,nz=(i.z-d.z)/d.distance,wx=-nz,wz=nx,hx=-Math.sin(i.yaw),hz=-Math.cos(i.yaw),vn=(hx*nx+hz*nz)*Math.sign(i.speed);i.x=d.x+nx*(Hi-.9),i.z=d.z+nz*(Hi-.9),i.speed*=1-Math.min(.5,t*.12);if(vn>0){let g=Math.sign(hx*wx+hz*wz)||1;i.yaw=bo(i.yaw+bo(Math.atan2(-wx*g,-wz*g)-i.yaw)*Math.min(1,t*6)),i.speed*=1-Math.min(.5,t*1.5)*vn,i.hitCooldown===0&&vn>.25&&Math.abs(i.speed)>4&&(i.speed*=1-.45*vn,i.hits++,i.hitCooldown=.8)}}sS(i,o,n)}var ycBotCfg={};function ycBots(){let N=["Sardor","Jasur","Bekzod","Aziz","Dilshod","Otabek","Rustam","Sherzod"].sort(()=>Math.random()-.5),C=["#28313e","#36799b","#ac393f","#c5c0a5","#e5e7eb"].sort(()=>Math.random()-.5),K=Object.keys(Pt);return[.8,.88,.95].map((pace,k)=>(ycBotCfg["bot"+k]={pace:pace+Math.random()*.03,lane:[-2.2,2.2,0][k]},{name:N[k],car:K[Math.floor(Math.random()*K.length)],color:C[k]}))}function ycBotInput(r,k){let a=tu(r.x,r.z),v=Math.abs(r.speed),p=Hn(a.s+7+v*.45),X=p.x-p.tz*k.lane,Z=p.z+p.tx*k.lane,d=bo(Math.atan2(-(X-r.x),-(Z-r.z))-r.yaw),h0=Math.atan2(-a.tx,-a.tz),K=0;for(let q of[12,24,38]){let D=q+v*.8,pp=Hn(a.s+D);K=Math.max(K,Math.abs(bo(Math.atan2(-pp.tx,-pp.tz)-h0))/D)}let c=Pt[r.car]||Pt.gentra,vm=K>1e-4?19*(c.steering/Math.atan(K*c.wheelbase*1.35)-1):99;return vm=Mo(vm,10,c.maxSpeed)*k.pace,{gas:v<vm&&Math.abs(d)<1.2,brake:v>vm+3,left:d>.04,right:d<-.04,reverse:!1}}function Zp(i){let O=[-1.35,0,1.35],L=1.8;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],s=i[t];if(Math.abs(n.x-s.x)>6.5||Math.abs(n.z-s.z)>6.5)continue;let nf=[-Math.sin(n.yaw),-Math.cos(n.yaw)],sf=[-Math.sin(s.yaw),-Math.cos(s.yaw)],B=null;for(let a of O)for(let b of O){let r=n.x+nf[0]*a-(s.x+sf[0]*b),o=n.z+nf[1]*a-(s.z+sf[1]*b),q=Math.hypot(r,o);q<L&&(!B||q<B.q)&&(B={q,r,o,a,b})}if(!B)continue;let c=B.q>.001?B.r/B.q:nf[1],h=B.q>.001?B.o/B.q:-nf[0],u=(L-B.q)/2+.01;n.x+=c*u,n.z+=h*u,s.x-=c*u,s.z-=h*u;let al=nf[0]*sf[0]+nf[1]*sf[1],vn=n.speed,vs=s.speed;if(al>.3&&B.a>0&&B.b<0&&vn>vs)n.speed=vs+(vn-vs)*.25,s.speed=vs+(vn-vs)*.4;else if(al>.3&&B.b>0&&B.a<0&&vs>vn)s.speed=vn+(vs-vn)*.25,n.speed=vn+(vs-vn)*.4;else if(al<=.3){let k=n.hitCooldown===0||s.hitCooldown===0?.7:.985;n.speed*=k,s.speed*=k}else n.speed*=.998,s.speed*=.998;if(al<=.3||Math.abs(vn-vs)>2)for(let d of[n,s])d.hitCooldown===0&&(d.hits++,d.hitCooldown=.65)}}function iu(i){if(i.resetCooldown>0||i.finished)return!1;let e=i.started?Hn(ds[i.lastGate].s+4):Hn(-12);return i.x=e.x,i.z=e.z,i.yaw=Math.atan2(-e.tx,-e.tz),i.speed=0,i.steer=0,i.penalty+=5,i.resetCooldown=4,!0}function su(i){return[...i].sort((e,t)=>e.finished&&t.finished?e.finishTime-t.finishTime:e.finished?-1:t.finished?1:t.progress-e.progress)}function si(i={},e){return{id:e,name:typeof i.name=="string"&&i.name.replace(/[\u0000-\u001f\u007f<>]/g,"").trim().slice(0,18)||"Haydovchi",car:Object.hasOwn(Pt,i.car)?i.car:"gentra",color:/^#[0-9a-f]{6}$/i.test(i.color||"")?i.color:"#e5e7eb"}}function Jp(i){let e={};for(let t of["id","name","car","color","x","z","yaw","speed","steer","travel","lap","nextGate","started","finished","finishTime","penalty","lastGate","progress","offroad","braking","hits"])e[t]=i[t];return e}function jp(i="#e5e7eb"){let e=new wt;e.name="Gentra_PDF_reference_v3";let t=(E,T,N=0,O=.5)=>{let G=new Gt({color:T,metalness:N,roughness:O});return G.name=E,G},n=new Jt({color:i,metalness:.32,roughness:.25,clearcoat:1,clearcoatRoughness:.12});n.name="Body_paint";let s=t("Tinted_glass",2307133,.3,.14);s.side=Ht;let r=t("Grille_and_window_rubber",1053719,.1,.65),o=t("Tire_rubber",1513497,0,.88),a=t("Polished_trim",12831696,.88,.23),l=t("Panel_gaps",3488832,.1,.62),c=t("Alloy_wheels",10200748,.72,.3),h=t("Bowtie_gold",12952397,.8,.28),u=t("Tail_lamp_red",9902120,.15,.22);u.emissive.set(15734823),u.emissiveIntensity=.3;let d=t("Headlamp_reflector",14017773,.65,.2);d.emissive.set(13165567),d.emissiveIntensity=.22;let f=t("Indicator",14523193,.15,.3),g=t("Plate_and_reverse_lens",14869469,.12,.42),_=(E,T,N,O=e)=>{let G=new Qe(E,T);return G.name=N,G.castShadow=!0,G.receiveShadow=!0,O.add(G),G},m=(E,T,N,O,G=e,V=.015)=>{let q=_(V?new Xc(...E,3,Math.min(V,...E.map(Z=>Z/2))):new Zt(...E),N,O,G);return q.position.set(...T),q},p=(E,T,N,O=.005,G=e)=>{let V=E.map(de=>new D(...de)),q=new Zs(V),Z=new Kt().setFromPoints(V),ce=new dn;return ce.getPoint=(de,ke=new D)=>q.getPoint(de,ke).clamp(Z.min,Z.max),_(new Jr(ce,Math.max(12,E.length*5),O,5,!1),T,N,G)};function A(E,T,N){T.side=Ht;let O=new ht,G=[];for(let V=1;V<E.length-1;V++)G.push(0,V,V+1);return O.setAttribute("position",new We(E.flat(),3)),O.setIndex(G),O.computeVertexNormals(),_(O,T,N)}function C(E,T,N,O,G,V,q=0){let Z=[],ce=[];for(let oe=0;oe<=16;oe++)for(let be=0;be<=16;be++){let $=be/16,Q=oe/16;for(let le=0;le<3;le++)Z.push((1-Q)*((1-$)*E[le]+$*T[le])+Q*((1-$)*O[le]+$*N[le])+(le===1?q*Math.sin(Math.PI*$)*Math.sin(Math.PI*Q):0))}for(let oe=0;oe<16;oe++)for(let be=0;be<16;be++){let $=oe*17+be;ce.push($,$+16+2,$+1,$,$+16+1,$+16+2)}let ke=new ht;return ke.setAttribute("position",new We(Z,3)),ke.setIndex(ce),ke.computeVertexNormals(),_(ke,G,V)}let v=[[-2.2,.665,.735],[-2.12,.78,.815],[-1.9,.825,.85],[-1.3,.8625,.92],[-.85,.854,.99],[.3,.858,1.004],[1.3,.8625,1.008],[1.65,.843,.985],[2.1,.815,.928],[2.27,.757,.875],[2.315,.695,.8]];function S(E){let T=1;for(;T<v.length-1&&E>v[T][0];)T++;let N=v[T-1],O=v[T],G=(E-N[0])/(O[0]-N[0]);return[cr.lerp(N[1],O[1],G),cr.lerp(N[2],O[2],G)]}let b=[],R=[],y=240,w=16;for(let E=0;E<=y;E++){let T=-2.2+4.515*E/y,[N,O]=S(T),G=.185;for(let q of[-1.3,1.3]){let Z=T-q;Math.abs(Z)<.347&&(G=Math.max(G,.298+Math.sqrt(.347**2-Z**2)))}let V=[[-.68,.17],[-.93,G],[-1,Math.max(G,.44)],[-1,Math.max(G,O-.15)],[-.986,O-.065],[-.91,O-.011],[-.64,O+.007],[0,O+.023],[.64,O+.007],[.91,O-.011],[.986,O-.065],[1,Math.max(G,O-.15)],[1,Math.max(G,.44)],[.93,G],[.68,.17],[0,.17]];for(let[q,Z]of V)b.push(q*N,Z,T+(E===0?.045*Math.min(1,Math.max(0,Math.abs(Z-.44)-.001)/.15):E===y?-.035*Math.min(1,Math.max(0,Math.abs(Z-.44)-.001)/.15):0))}for(let E=0;E<y;E++)for(let T=0;T<w;T++){let N=E*w+T,O=E*w+(T+1)%w,G=O+w,V=N+w;R.push(N,G,O,N,V,G)}for(let E of[0,y]){let T=E*w;for(let N=1;N<w-1;N++)E?R.push(T,T+N+1,T+N):R.push(T,T+N,T+N+1)}let L=new ht;L.setAttribute("position",new We(b,3)),L.setIndex(R),L.computeVertexNormals(),_(L,n,"Body_4515x1725"),C([-.65,1.375,-.38],[.65,1.375,-.38],[.634,1.385,.7],[-.634,1.385,.7],n,"Roof",.065),C([-.805,1.007,-.91],[.805,1.007,-.91],[.641,1.376,-.383],[-.641,1.376,-.383],s,"Windshield",.014),C([-.625,1.386,.7],[.625,1.386,.7],[.785,1.035,1.44],[-.785,1.035,1.44],s,"Rear_windshield",.018);for(let E of[-1,1]){let T=(oe,be,$)=>[E*oe,be,$],N=E<0?"Left":"Right",O=[T(.808,1.005,-.94),T(.659,1.383,-.4),T(.641,1.394,.71),T(.8,1.024,1.51)];p(O,n,N+"_A_roof_C_pillars",.031),A([T(.646,1.384,.68),T(.801,1.025,1.49),T(.812,1.018,1.2),T(.674,1.324,.79)],n,N+"_C_pillar");let G=[T(.796,1.025,-.876),T(.652,1.358,-.378),T(.647,1.384,.225),T(.808,1.026,.244)],V=[T(.808,1.027,.322),T(.646,1.387,.307),T(.638,1.369,.679),T(.779,1.03,1.068)];for(let[oe,be]of[[G,"Front_door_glass"],[V,"Rear_door_glass"]])A(E<0?oe:[...oe].reverse(),s,N+"_"+be),p([...oe,oe[0]],r,N+"_"+be+"_seal",.008);let q=[T(.784,1.032,1.105),T(.652,1.344,.743),T(.798,1.035,1.272)];A(E<0?q:[...q].reverse(),s,N+"_Quarter_glass"),p([...q,q[0]],r,N+"_Quarter_seal",.009),p([T(.813,1.03,.279),T(.65,1.39,.265)],r,N+"_B_pillar",.03),p([T(.807,1.018,-.92),T(.818,1.02,.3),T(.81,1.022,1.3)],r,N+"_Beltline",.006);for(let[oe,be]of[[-.9,"Front_door_leading"],[.285,"Door_divider"]])p([T(.812,1.012,oe),T(.858,.76,oe+.006),T(.854,.39,oe+.018),T(.827,.215,oe+.035)],l,N+"_"+be,.003);p([T(.804,1.026,1.3),T(.858,.82,1.34),T(.83,.67,.99),T(.845,.4,.88),T(.827,.213,.89)],l,N+"_Rear_door_cut",.0035),p([T(.84,.215,-.845),T(.86,.206,.28),T(.838,.215,.87)],l,N+"_Door_lower_gap",.0035),p([T(.865,.505,-.82),T(.867,.508,.24)],n,N+"_Front_side_molding",.018),p([T(.867,.508,.33),T(.86,.523,.95)],n,N+"_Rear_side_molding",.018);for(let oe of[-.025,.91])m([.017,.035,.168],T(.862,.894,oe),l,N+"_Handle_recess"),m([.029,.031,.146],T(.879,.91,oe-.004),n,N+"_Door_handle");for(let oe of[-1.3,1.3]){let be=[];for(let $=0;$<=48;$++){let Q=Math.PI*$/48,le=oe+.348*Math.cos(Q);be.push(T(S(le)[0]+.001,.298+.348*Math.sin(Q),le))}p(be,n,N+"_Wheel_arch",.011)}m([.045,.065,.15],T(.824,1.041,-.81),r,N+"_Mirror_mount");let Z=m([.21,.12,.2],T(.913,1.082,-.825),n,N+"_Mirror",e,.045);Z.rotation.y=E*.12,m([.13,.071,.009],T(.918,1.088,-.716),s,N+"_Mirror_glass");let ce=[T(.375,.692,-2.181),T(.48,.838,-2.163),T(.715,.907,-2.102),T(.789,.873,-2.036),T(.803,.777,-2.031),T(.713,.721,-2.107)];A(E<0?[...ce].reverse():ce,a,N+"_Headlamp_housing"),p([...ce,ce[0]],r,N+"_Headlamp_gasket",.007);for(let[oe,be,$,Q]of[[.579,.783,-2.157,.055],[.732,.806,-2.09,.049]]){let le=_(new Js(Q,24,12),d,N+"_Headlamp_optic");le.position.set(E*oe,be,$-.006),le.scale.z=.18}p([T(.427,.715,-2.18),T(.6,.729,-2.16),T(.761,.764,-2.079)],d,N+"_Lamp_lower_reflector",.009),m([.031,.07,.018],T(.786,.827,-2.052),f,N+"_Front_indicator");let de=[T(.49,.326,-2.169),T(.57,.291,-2.168),T(.79,.326,-2.107),T(.79,.388,-2.11),T(.54,.378,-2.169)];A(E<0?de:[...de].reverse(),r,N+"_Fog_recess"),p([...de,de[0]],n,N+"_Fog_surround",.012),m([.199,.045,.012],T(.666,.345,-2.156),a,N+"_Rectangular_fog_light",e,.009);let ke=[T(.608,.562,2.306),T(.79,.59,2.246),T(.82,.785,2.203),T(.779,.962,2.172),T(.701,.977,2.23)];A(E<0?ke:[...ke].reverse(),u,N+"_Vertical_tail_lamp"),p([...ke,ke[0]],l,N+"_Tail_lamp_gasket",.006);for(let oe of[.707,.821])m([.066,.088,.018],T(.724,oe,2.295),g,N+"_Tail_clear_lens"),_(new qr(.021,20),r,N+"_Tail_optic").position.set(E*.724,oe,2.306)}for(let[E,T]of[[[[-.375,.817,-2.19],[.375,.817,-2.19],[.354,.774,-2.199],[-.354,.774,-2.199]],"Upper_grille"],[[[-.348,.743,-2.199],[.348,.743,-2.199],[.287,.669,-2.197],[-.287,.669,-2.197]],"Lower_grille"]])A(E,r,T),p([...E,E[0]],a,T+"_chrome",.009);for(let E of[.696,.722,.798])m([E>.76?.66:.565,.007,.009],[0,E,-2.195],a,"Grille_slat",e,0);A([[-.478,.285,-2.18],[.478,.285,-2.18],[.384,.341,-2.195],[-.384,.341,-2.195]],r,"Lower_bumper_intake");for(let E of[.302,.324])m([.73,.007,.01],[0,E,-2.192],r,"Lower_intake_slat",e,0);function F(E,T,N=!1){let O=[[-.074,T+.018,E],[-.032,T+.018,E],[-.032,T+.036,E],[.032,T+.036,E],[.032,T+.018,E],[.074,T+.018,E],[.067,T-.014,E],[.031,T-.014,E],[.031,T-.031,E],[-.032,T-.031,E],[-.032,T-.014,E],[-.083,T-.014,E]],G=A(N?O:[...O].reverse(),h,N?"Rear_Chevrolet_badge":"Front_Chevrolet_badge");G.material.side=Ht}F(-2.199,.759),F(2.303,.891,!0);for(let E of[-1,1])p([[E*.375,.841,-2.15],[E*.52,.902,-1.57],[E*.703,1.011,-.936]],l,"Hood_panel_gap",.0028);p([[-.727,1.01,-.934],[0,1.025,-.943],[.727,1.01,-.934]],l,"Hood_rear_seam",.003);for(let E of[-.36,.31])p([[E-.17,1.025,-.886],[E+.16,1.047,-.877]],r,"Windshield_wiper",.008);p([[-.686,.952,2.236],[-.575,.601,2.306],[-.45,.542,2.31],[0,.53,2.313],[.45,.542,2.31],[.575,.601,2.306],[.686,.952,2.236]],l,"Trunk_opening",.004),m([.74,.176,.016],[0,.722,2.306],l,"Rear_plate_recess",e,.025),m([.91,.036,.038],[0,.834,2.288],n,"Trunk_handle_molding",e,.016);for(let[E,T]of[[-2.199,.472],[2.314,.72]]){m([.43,.105,.003],[0,T,E],g,"Track_plate",e,.004);for(let N=0;N<7;N++)m([.024,.047,.002],[-.15+N*.05,T,E+(E<0?-5e-4:5e-4)],r,"Plate_character",e,0)}p([[-.755,.286,2.237],[0,.252,2.312],[.755,.286,2.237]],n,"Rear_bumper_lower_line",.008),m([1.28,.15,.38],[0,.945,-.71],r,"Dashboard");for(let E of[-.37,.37])m([.45,.41,.18],[E,.995,.16],r,"Front_seat",e,.06),m([.25,.15,.13],[E,1.245,.16],r,"Headrest",e,.04);let I=[],U=[];for(let E of[-1.3,1.3])for(let T of[-1,1]){let N=new wt;N.name=(E<0?"Front":"Rear")+(T<0?"_Left":"_Right")+"_steer",N.position.set(T*.74,.29775,E),e.add(N);let O=new wt;O.name="Wheel_"+N.name,N.add(O),I.push(O),E<0&&U.push(N);let G=_(new Zn(.29775,.29775,.195,64),o,"195_55_R15_tire",O);G.rotation.z=Math.PI/2;for(let V of[-1,1]){let q=V*.098,Z=_(new js(.255,.041,12,64),o,"Rounded_sidewall",O);Z.rotation.y=Math.PI/2,Z.position.x=q-V*.018;let ce=_(new Zn(.1905,.1905,.014,48),r,"Rim_inner",O);ce.rotation.z=Math.PI/2,ce.position.x=q;let de=_(new js(.183,.009,8,64),c,"15_inch_rim_lip",O);de.rotation.y=Math.PI/2,de.position.x=q+V*.01;for(let oe=0;oe<5;oe++){let be=oe*Math.PI*2/5,$=m([.02,.047,.143],[q+V*.009,Math.sin(be)*.103,Math.cos(be)*.103],c,"Five_spoke_alloy",O,.01);$.rotation.x=-be}let ke=_(new Zn(.049,.049,.019,24),c,"Wheel_hub",O);ke.rotation.z=Math.PI/2,ke.position.x=q+V*.012;for(let oe=0;oe<5;oe++){let be=oe*Math.PI*2/5;_(new Js(.007,8,6),a,"Lug_nut",O).position.set(q+V*.024,Math.sin(be)*.031,Math.cos(be)*.031)}}}e.updateMatrixWorld(!0);for(let E of e.children){if(!E.isMesh)continue;let T=new Kt().setFromObject(E);T.min.z<-2.2&&(E.position.z+=-2.2-T.min.z),T.max.z>2.315&&(E.position.z-=T.max.z-2.315)}return e.userData={kind:"gentra",wheels:I,pivots:U,paint:n,red:u,lamp:d,spec:{...Pt.gentra,wheelRadius:.29775},referenceRevision:"PDF-2026-10-02",track:1.48},e}function Qp(i){let e=new Map,t=new Map,n=i.clone();return em(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function em(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)em(i.children[n],e.children[n],t)}var gr=class extends Qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new Yc(t,Je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Yc(t,Je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=vi.extractUrlBase(e);o=vi.resolveURL(c,this.path)}else o=vi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===rm){try{o[Je.KHR_BINARY_GLTF]=new Eu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Lu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new lu;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Au(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new wu;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new Cu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function rS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function It(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},cu=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],rn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rs(h),c.distance=u;break;case"spot":c=new io(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},lu=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},hu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},uu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(r,r)}return Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},fu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},pu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,At)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},mu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],rn),Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,At)),Promise.all(s)}},yu=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},vu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Su=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Mu=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},bu=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Yc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Tu=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Cn.TRIANGLES&&c.mode!==Cn.TRIANGLE_STRIP&&c.mode!==Cn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let _=new Be,m=new D,p=new _n,A=new D(1,1,1),C=new An(g.geometry,g.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&A.fromBufferAttribute(l.SCALE,S),C.setMatrixAt(S,_.compose(m,p,A));let v=null;for(let S in l)if(S==="_COLOR_0"){let b=l[S];C.instanceColor=new pi(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let R=C.geometry;v=new ht,v.name=R.name;for(let y in R.attributes)v.setAttribute(y,R.attributes[y]);for(let y in R.morphAttributes)v.morphAttributes[y]=R.morphAttributes[y];R.index!==null&&v.setIndex(R.index),v.morphTargetsRelative=R.morphTargetsRelative;for(let y of R.groups)v.addGroup(y.start,y.count,y.materialIndex);R.boundingBox!==null&&(v.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(v.boundingSphere=R.boundingSphere.clone()),v.drawRange.start=R.drawRange.start,v.drawRange.count=R.drawRange.count,v.userData=Object.assign({},R.userData),C.geometry=v}let b=l[S];v.setAttribute(S,new pi(b.array,b.itemSize,b.normalized))}pt.prototype.copy.call(C,g),this.parser.assignFinalMaterial(C),f.push(C)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},rm="glTF",Eo=12,tm={JSON:1313821514,BIN:5130562},Eu=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Eo,r=new DataView(e,Eo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===tm.JSON){let c=new Uint8Array(e,Eo+o,a);this.content=n.decode(c)}else if(l===tm.BIN){let c=Eo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Au=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Pu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Pu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=mr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,rn,d)})})}},wu=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Cu=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},$c=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,A=1-m,C=p-d+u;for(let v=0;v!==a;v++){let S=o[_+v+a],b=o[_+v+l]*h,R=o[g+v+a],y=o[g+v]*h;r[v]=A*S+C*b+m*R+p*y}return r}},oS=new _n,Ru=class extends $c{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return oS.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nm={9728:Ct,9729:Rt,9984:ja,9985:sr,9986:cs,9987:kn},im={33071:Tn,33648:Ni,10497:En},ru={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aS={CUBICSPLINE:void 0,LINEAR:es,STEP:Qi},ou={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),i.DefaultMaterial}function ps(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function hS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uS(i){let e,t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+au(t.attributes):e=i.indices+":"+au(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+au(i.targets[n]);return e}function au(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Iu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var fS=new Be,Lu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new to(this.options.manager):this.textureLoader=new so(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ps(r,a,s),ri(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(vi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ru[s.type],a=mr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ot(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=ru[s.type],c=mr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,C=t.cache.get(A);C||(_=new c(a,p*f,s.count*f/h),C=new Gs(_,f/h),t.cache.add(A,C)),m=new Ws(C,l,d%f/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Ot(_,l,g);if(s.sparse!==void 0){let p=ru.SCALAR,A=mr[s.sparse.indices.componentType],C=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new A(o[1],C,s.sparse.count*p),b=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,y=S.length;R<y;R++){let w=S[R];if(m.setX(w,b[R*l]),l>=2&&m.setY(w,b[R*l+1]),l>=3&&m.setZ(w,b[R*l+2]),l>=4&&m.setW(w,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=nm[d.magFilter]||Rt,h.minFilter=nm[d.minFilter]||kn,h.wrapS=im[d.wrapS]||En,h.wrapT=im[d.wrapT]||En,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ct&&h.minFilter!==Rt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Bt(_);m.needsUpdate=!0,d(m)}),t.load(vi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),ri(u,o),u.userData.mimeType=o.mimeType||dS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ks,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new $s,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Gt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){let u=s[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],rn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,At)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);let h=r.alphaMode||ou.OPAQUE;if(h===ou.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ou.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==an&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==an){let u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&o!==an&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ri(u,r),t.associations.set(u,{materials:e}),r.extensions&&ps(s,u,r),u})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return sm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=uS(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=sm(new ht,c,t),c.mode===Cn.TRIANGLE_STRIP?d=d.then(f=>Qh(f,mo)):c.mode===Cn.TRIANGLE_FAN&&(d=d.then(f=>Qh(f,ar))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?cS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=o[f],p,A=c[f];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0){let C=r.isSkinnedMesh===!0,v=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");C&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=C&&v?new Br(_,A):new Qe(_,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Cn.LINES)p=new zr(_,A);else if(m.mode===Cn.LINE_STRIP)p=new is(_,A);else if(m.mode===Cn.LINE_LOOP)p=new Vr(_,A);else if(m.mode===Cn.POINTS)p=new Hr(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ri(p,r),m.extensions&&ps(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ps(s,u[0],r),u[0];let d=new wt;r.extensions&&ps(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(cr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Be;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let C=0,v=d.length;C<v;C++){let S=d[C],b=f[C],R=g[C],y=_[C],w=m[C];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let L=n._createAnimationTracks(S,b,R,y,w);if(L)for(let F=0;F<L.length;F++)p.push(L[F])}let A=new eo(r,void 0,p);return ri(A,s),A})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Xs:c.length>1?h=new wt:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ri(h,r),r.extensions&&ps(n,h,r),r.matrix!==void 0){let u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),ri(r,n),n.extensions&&ps(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Qp(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof on||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Wi[r.path]===Wi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Wi[r.path]){case Wi.weights:h=gi;break;case Wi.rotation:h=_i;break;case Wi.translation:case Wi.scale:h=Fi;break;default:n.itemSize===1?h=gi:h=Fi;break}let u=s.interpolation!==void 0?aS[s.interpolation]:es,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let _=new h(l[f]+"."+Wi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Iu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?Ru:$c;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function pS(i,e,t){let n=e.attributes,s=new Kt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){let h=Iu(mr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Iu(mr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new un;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function sm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Pu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ke.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),ri(i,e),pS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lS(i,e.targets,t):i})}var mS="/assets/malibu-premier.glb.gz",Kc;function Du(){return Kc||(Kc=gS().catch(i=>{throw Kc=null,i})),Kc}async function gS(){let i=new AbortController,e=setTimeout(()=>i.abort(),9e4);try{let t=await fetch(mS,{signal:i.signal});if(!t.ok)throw new Error(`Malibu asset: HTTP ${t.status}`);let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895){if(typeof DecompressionStream>"u")throw new Error("Bu brauzer siqilgan 3D modelni ocholmaydi. Brauzerni yangilang.");n=await new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}let r=(await new gr().parseAsync(n,"")).scene.getObjectByName("Malibu_Premier_2019");if(!r)throw new Error("Malibu model tuzilmasi topilmadi.");return r}finally{clearTimeout(e)}}function om(i="#e5e7eb"){let e=new wt;return e.name="malibu_vehicle",e.userData={kind:"malibu",color:i,wheels:[],pivots:[],reds:[],lamps:[],spec:Pt.malibu,sharedGeometry:!0,disposed:!1,loaded:!1},e.userData.ready=Du().then(t=>(e.userData.disposed||_S(e,t),e)),e}function _S(i,e){let t=e.clone(!0),n=i.userData,s=new Map;t.traverse(r=>{if(!r.isMesh)return;let o=r.material,a=r.userData.role||"trim",l=o.uuid+":"+a,c=s.get(l);c||(c=o.clone(),s.set(l,c),o.name==="carpaint_mat"&&(c.color.set(n.color),c.metalness=.62,c.roughness=.23,c.clearcoat=1,c.clearcoatRoughness=.15,n.paint=c),o.name==="tyre"&&(c.roughness=.84,c.metalness=.03),o.name==="glass"&&(c.transmission=0,c.color.set(10399669),c.opacity=.23,c.roughness=.09,c.metalness=.16,c.depthWrite=!1),c.transparent&&(c.depthWrite=!1,c.forceSinglePass=!0),a==="headlamp"&&(c.emissive.set(14741503),c.emissiveIntensity=1.2,n.lamps.push(c)),a==="brakelamp"&&(c.emissive.set(16717348),c.emissiveIntensity=.35,n.reds.push(c))),r.material=c,r.castShadow=!c.transparent,r.receiveShadow=!0});for(let r of["Front","Rear"])for(let o of["Left","Right"]){let a=t.getObjectByName(`Wheel_${r}_${o}`),l=t.getObjectByName(`${r}_${o}_steer`);if(!a||!l)throw new Error("Malibu g\u2018ildiraklari topilmadi.");n.wheels.push(a),r==="Front"&&n.pivots.push(l)}return n.spec={...Pt.malibu,wheelRadius:t.userData.wheelRadius},n.loaded=!0,i.add(t),i.updateMatrixWorld(!0),i}var xS="/assets/cobalt-ltz-2014.glb.gz",Zc;function Nu(){return Zc||(Zc=yS().catch(i=>{throw Zc=null,i})),Zc}async function yS(){let i=new AbortController,e=setTimeout(()=>i.abort(),9e4);try{let t=await fetch(xS,{signal:i.signal});if(!t.ok)throw new Error(`Cobalt asset: HTTP ${t.status}`);let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895){if(typeof DecompressionStream>"u")throw new Error("Bu brauzer siqilgan 3D modelni ocholmaydi. Brauzerni yangilang.");n=await new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}let r=(await new gr().parseAsync(n,"")).scene.getObjectByName("Cobalt_LTZ_2014");if(!r)throw new Error("Cobalt model tuzilmasi topilmadi.");return r}finally{clearTimeout(e)}}function am(i="#e5e7eb"){let e=new wt;return e.name="cobalt_vehicle",e.userData={kind:"cobalt",color:i,wheels:[],pivots:[],reds:[],lamps:[],spec:Pt.cobalt,sharedGeometry:!0,disposed:!1,loaded:!1},e.userData.ready=Nu().then(t=>(e.userData.disposed||vS(e,t),e)),e}function vS(i,e){let t=e.clone(!0),n=i.userData,s=new Map;t.traverse(r=>{if(!r.isMesh)return;let o=r.material,a=r.userData.role||"trim",l=o.uuid+":"+a,c=s.get(l);c||(c=o.clone(),s.set(l,c),o.name==="Realistic_Car_Paint"&&(c.color.set(n.color),c.metalness=.48,c.roughness=.25,c.clearcoat=1,c.clearcoatRoughness=.16,n.paint=c),o.name.startsWith("roda.")&&(c.metalness=.72,c.roughness=.27),o.name.startsWith("escape.")&&(c.metalness=.86,c.roughness=.2),o.name.startsWith("bump_front")&&(c.color.set(1514013),c.roughness=.78,c.metalness=.03),a==="tire"&&(c.color.set(1579548),c.roughness=.9,c.metalness=.02),(o.name==="Car_windshield_glass"||a==="lampglass")&&(c.transmission=0,c.transparent=!0,c.color.set(a==="lampglass"?14149613:9020849),c.opacity=a==="lampglass"?.12:.2,c.roughness=.08,c.metalness=.1),c.transparent&&(c.depthWrite=!1,c.forceSinglePass=!0),a==="headlamp"&&(c.color.set(15266047),c.emissive.set(14478079),c.emissiveIntensity=1.2,n.lamps.push(c)),a==="brakelamp"&&(c.color.set(11800864),c.emissive.set(16717348),c.emissiveIntensity=.35,n.reds.push(c))),r.material=c,r.castShadow=!c.transparent,r.receiveShadow=!0});for(let r of["Front","Rear"])for(let o of["Left","Right"]){let a=t.getObjectByName(`Wheel_${r}_${o}`),l=t.getObjectByName(`${r}_${o}_steer`);if(!a||!l)throw new Error("Cobalt g\u2018ildiraklari topilmadi.");n.wheels.push(a),r==="Front"&&n.pivots.push(l)}return n.spec={...Pt.cobalt,wheelRadius:t.userData.wheelRadius},n.loaded=!0,i.add(t),i.updateMatrixWorld(!0),i}var gZS="/assets/gentra.glb.gz",gZc;function gZN(){return gZc||(gZc=gZy().catch(i=>{throw gZc=null,i})),gZc}async function gZy(){let i=new AbortController,e=setTimeout(()=>i.abort(),9e4);try{let t=await fetch(gZS,{signal:i.signal});if(!t.ok)throw new Error(`Gentra asset: HTTP ${t.status}`);let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895){if(typeof DecompressionStream>"u")throw new Error("Bu brauzer siqilgan 3D modelni ocholmaydi. Brauzerni yangilang.");n=await new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}let r=(await new gr().parseAsync(n,"")).scene.getObjectByName("Gentra");if(!r)throw new Error("Gentra model tuzilmasi topilmadi.");return r}finally{clearTimeout(e)}}function gZa(i="#e5e7eb"){let e=new wt;return e.name="gentra_vehicle",e.userData={kind:"gentra",color:i,wheels:[],pivots:[],reds:[],lamps:[],spec:Pt.gentra,sharedGeometry:!0,disposed:!1,loaded:!1},e.userData.ready=gZN().then(t=>(e.userData.disposed||gZv(e,t),e)),e}function gZv(i,e){let t=e.clone(!0),n=i.userData,s=new Map;t.traverse(r=>{if(!r.isMesh)return;let o=r.material,a=r.userData.role||"trim",l=o.uuid+":"+a,c=s.get(l);c||(c=o.clone(),s.set(l,c),o.name==="primary"&&(c.color.set(n.color),c.metalness=.48,c.roughness=.25,c.clearcoat=1,c.clearcoatRoughness=.16,n.paint=c),o.name.startsWith("roda.")&&(c.metalness=.72,c.roughness=.27),o.name.startsWith("escape.")&&(c.metalness=.86,c.roughness=.2),o.name.startsWith("bump_front")&&(c.color.set(1514013),c.roughness=.78,c.metalness=.03),a==="tire"&&(c.color.set(1579548),c.roughness=.9,c.metalness=.02),(o.name==="Car_windshield_glass"||a==="lampglass")&&(c.transmission=0,c.transparent=!0,c.color.set(a==="lampglass"?14149613:9020849),c.opacity=a==="lampglass"?.12:.2,c.roughness=.08,c.metalness=.1),c.transparent&&(c.depthWrite=!1,c.forceSinglePass=!0),a==="headlamp"&&(c.color.set(15266047),c.emissive.set(14478079),c.emissiveIntensity=1.2,n.lamps.push(c)),a==="brakelamp"&&(c.color.set(11800864),c.emissive.set(16717348),c.emissiveIntensity=.35,n.reds.push(c))),r.material=c,r.castShadow=!c.transparent,r.receiveShadow=!0});for(let r of["Front","Rear"])for(let o of["Left","Right"]){let a=t.getObjectByName(`Wheel_${r}_${o}`),l=t.getObjectByName(`${r}_${o}_steer`);if(!a||!l)throw new Error("Gentra g\u2018ildiraklari topilmadi.");n.wheels.push(a),r==="Front"&&n.pivots.push(l)}return n.spec={...Pt.gentra,wheelRadius:t.userData.wheelRadius},n.loaded=!0,i.add(t),i.updateMatrixWorld(!0),i}function Uu(i="gentra",e="#e5e7eb"){if(i==="malibu")return om(e);if(i==="cobalt")return am(e);if(i==="gentra")return gZa(e);let t=jp(e);t.updateMatrixWorld(!0);for(let n of t.userData.wheels)cm(n);return cm(t,new Set(t.userData.wheels.map(n=>n.parent))),t.userData.loaded=!0,t.userData.color=e,t}async function lm(i){await Promise.all([i.some(e=>e.car==="malibu")&&Du(),i.some(e=>e.car==="cobalt")&&Nu(),i.some(e=>e.car==="gentra")&&gZN()])}function Ou(i,e){i.userData.color=e,i.userData.paint?.color.set(e)}function cm(i,e=new Set){let t=new Map,n=new Be().copy(i.matrixWorld).invert();function s(r){if(!e.has(r)){if(r.isMesh){let o=r.material.uuid,a=t.get(o);a||(a={material:r.material,geometries:[],meshes:[]},t.set(o,a));let l=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(let c of Object.keys(l.attributes))["position","normal"].includes(c)||l.deleteAttribute(c);l.applyMatrix4(new Be().multiplyMatrices(n,r.matrixWorld)),a.geometries.push(l),a.meshes.push(r)}for(let o of r.children)s(o)}}s(i);for(let r of t.values()){let o=$p(r.geometries);if(!o)continue;let a=new Qe(o,r.material);a.castShadow=!0,a.receiveShadow=!0,i.add(a);for(let l of r.meshes)l.removeFromParent();for(let l of r.geometries)l.dispose()}}function hm(i,e,t=!0){let n=i.userData;for(let s of n.wheels)s.rotation.x=-(e.travel||0)/n.spec.wheelRadius;for(let s of n.pivots)s.rotation.y=e.steer||0;for(let s of n.reds||(n.red?[n.red]:[]))s.emissiveIntensity=e.braking?3:.35;for(let s of n.lamps||(n.lamp?[n.lamp]:[]))s.emissiveIntensity=t?1.5:.03}function Jc(i){i.userData.disposed=!0;let e=new Set,t=new Set;i.traverse(n=>{n.geometry&&t.add(n.geometry);for(let s of Array.isArray(n.material)?n.material:n.material?[n.material]:[])e.add(s)}),i.userData.sharedGeometry||t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose()),i.removeFromParent()}function um(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Wr(n);return s.colorSpace=At,s}/* ===== Yo'lchi poyga: har bir trassaning o'z manzarasi (Toshkent / Chimyon / Samarqand) ===== */
function ycScenery(e, id) {
  let mats = {}, M = (c, r = .85, m = 0, flat = !1) => mats[c + "|" + r + m + flat] || (mats[c + "|" + r + m + flat] = new Gt({ color: c, roughness: r, metalness: m, flatShading: flat }));
  let add = (geo, mat, x, y, z, par = e, ry = 0) => { let o = new Qe(geo, mat); return o.position.set(x, y, z), o.rotation.y = ry, par.add(o), o };
  let grp = (x, z, face = !0, sc = 1) => { let g = new wt; return g.position.set(x, 0, z), g.rotation.y = face ? Math.atan2(-x, -z) : 0, g.scale.setScalar(sc), e.add(g), g };
  let rnd = (s => () => (s = s * 1664525 + 1013904223 >>> 0, s / 4294967296))(id * 977 + 31);
  let TURQ = 2075573, BLUE = 1859496, SAND = 14204044, SAND2 = 13216886, WHITE = 15921906;
  let dome = (g, x, y, z, r, c = TURQ, sy = 1.15) => { let d = add(new Js(r, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), M(c, .45, .1), x, y, z, g); d.scale.y = sy; add(new Zn(.12 * r, .12 * r, r * .5, 6), M(15781194, .4, .6), x, y + r * sy + r * .2, z, g); return d };
  let minaret = (g, x, z, h, r, body = SAND, cap = TURQ) => { add(new Zn(r * .78, r, h, 10), M(body), x, h / 2, z, g); add(new Zn(r * 1.25, r * 1.05, h * .05, 10), M(cap, .5), x, h * .86, z, g); add(new Zn(r * 1.1, r * .8, h * .035, 10), M(BLUE, .5), x, h * .45, z, g); dome(g, x, h, z, r * .95, cap, 1.3) };
  // koshinli peshtoq (portal) teksturasi
  let tile = um(256, 384, (c, W, H) => {
    c.fillStyle = "#d9c08a", c.fillRect(0, 0, W, H);
    c.fillStyle = "#1c5aa0", c.fillRect(10, 10, W - 20, H - 10); c.fillStyle = "#1fa9b6";
    for (let y = 18; y < H; y += 22) for (let x = 18; x < W - 18; x += 22) (x / 22 + y / 22 | 0) % 2 && c.fillRect(x, y, 13, 13);
    c.fillStyle = "#f1cf5a"; for (let y = 29; y < H; y += 44) for (let x = 29; x < W - 22; x += 44) c.beginPath(), c.arc(x, y, 3.2, 0, 7), c.fill();
    c.fillStyle = "#e9dcb4", c.fillRect(42, 70, W - 84, H - 70);
    c.fillStyle = "#11314e", c.beginPath(), c.moveTo(58, H), c.lineTo(58, 190), c.quadraticCurveTo(62, 120, W / 2, 86), c.quadraticCurveTo(W - 62, 120, W - 58, 190), c.lineTo(W - 58, H), c.closePath(), c.fill();
    c.strokeStyle = "#1fa9b6", c.lineWidth = 7, c.stroke();
    c.fillStyle = "#1c5aa0", c.fillRect(42, 70, W - 84, 9)
  }), tileM = new an({ map: tile });
  let wallT = um(256, 64, (c, W, H) => { c.fillStyle = "#d9c08a", c.fillRect(0, 0, W, H); for (let k = 0; k < 6; k++) { let x = 10 + k * 42; c.fillStyle = "#1c5aa0", c.fillRect(x, 8, 30, 52), c.fillStyle = "#11314e", c.beginPath(), c.moveTo(x + 4, 60), c.lineTo(x + 4, 30), c.quadraticCurveTo(x + 15, 8, x + 26, 30), c.lineTo(x + 26, 60), c.fill() } c.fillStyle = "#1fa9b6", c.fillRect(0, 0, W, 5) }), wallM = new an({ map: wallT });
  let madrasa = (x, z, sc = 1, turn = 0) => { let g = grp(x, z, !0, sc); g.rotation.y += turn; add(new Zt(64, 13, 16), wallM, 0, 6.5, -4, g); add(new Zt(24, 30, 7), tileM, 0, 15, 5.5, g); for (let k of [-1, 1]) minaret(g, k * 34, 5, 34, 2.1), add(new Zn(5.6, 5.6, 6, 14), M(SAND2), k * 20, 16, -6, g), dome(g, k * 20, 19, -6, 6.2, TURQ, 1.25); return g };
  let board = (text, dist, side, sub) => {
    let p = Hn(dist), x = p.x - p.tz * side * 15.5, z = p.z + p.tx * side * 15.5, ry = Math.atan2(p.tx, p.tz);
    let t = um(512, 144, (c, W, H) => { c.fillStyle = "#10262f", c.fillRect(0, 0, W, H); c.fillStyle = "#1fa9b6"; for (let k = 0; k < W; k += 24) c.beginPath(), c.moveTo(k, H), c.lineTo(k + 12, H - 14), c.lineTo(k + 24, H), c.fill(); c.fillStyle = "#d6fa65", c.fillRect(0, 0, W, 8); c.fillStyle = "#f3f6ee", c.font = "bold 62px Arial", c.textAlign = "center", c.fillText(text, W / 2, 78); c.fillStyle = "#9fc3c9", c.font = "bold 22px Arial", c.fillText(sub, W / 2, 112) });
    add(new Zt(11, 3.1, .25), new an({ map: t }), x, 6.2, z, e, ry); for (let k of [-1, 1]) add(new Zt(.3, 6, .3), M(2569019), x + Math.cos(ry) * k * 4.6, 3, z - Math.sin(ry) * k * 4.6)
  };
  let L = Qt;
  if (id === 0) {
    // Toshkent teleminorasi
    let t = grp(215, 150, !1, 1.15), st = M(7044229, .5, .5), dk = M(3950160, .5, .4);
    add(new Zn(3.2, 15, 44, 3), st, 0, 22, 0, t); add(new Zn(1.5, 3.4, 60, 12), M(12174798, .6), 0, 70, 0, t);
    add(new Zn(8, 6, 5, 18), dk, 0, 62, 0, t); add(new Zn(6.2, 8, 2.4, 18), M(11585228, .3, .3), 0, 65.6, 0, t); add(new Zn(5, 4, 3.5, 16), dk, 0, 84, 0, t);
    for (let k = 0; k < 6; k++) add(new Zn(.55 - k * .06, .65 - k * .06, 8, 8), M(k % 2 ? 15790320 : 13382451, .6), 0, 104 + k * 8, 0, t);
    // "O'zbekiston" mehmonxonasi — panjarali egik fasad
    let ft = um(128, 256, (c, W, H) => { c.fillStyle = "#3d4a55", c.fillRect(0, 0, W, H); c.strokeStyle = "#e3dccb", c.lineWidth = 7; for (let y = 0; y <= H; y += 21.3) c.strokeRect(-4, y, W + 8, 21.3); for (let x = 0; x <= W; x += 32) c.beginPath(), c.moveTo(x, 0), c.lineTo(x, H), c.stroke() }), fm_ = new an({ map: ft });
    let h = grp(30, 228, !0);
    for (let k = -4; k <= 4; k++) { let a = k * .16; add(new Zt(10.4, 44, 9), fm_, Math.sin(a) * 62, 22, 62 - Math.cos(a) * 62 - 6, h, a * -1) }
    add(new Zt(70, 5, 16), M(14408667), 0, 2.5, 2, h);
    // Minor masjidi — oq, feruza gumbazli
    let m = grp(-232, 30, !0);
    add(new Zt(40, 12, 22), M(WHITE, .6), 0, 6, 0, m); add(new Zt(16, 21, 6), M(WHITE, .6), 0, 10.5, 11, m); add(new Zt(9, 14, .4), M(TURQ, .5), 0, 8, 14.1, m);
    add(new Zn(9, 9, 5, 18), M(WHITE, .6), 0, 14.5, -1, m); dome(m, 0, 17, -1, 9.6, TURQ, 1.1);
    for (let k of [-1, 1]) minaret(m, k * 25, 9, 36, 1.9, WHITE, TURQ);
    // Amir Temur xiyoboni tomondagi soatli minoralar va gumbaz
    let f = grp(120, -215, !0); add(new Zn(26, 26, 9, 24), M(WHITE, .6), 0, 4.5, 0, f); dome(f, 0, 9, 0, 24, 2265011, .55);
    board("TOSHKENT", L * .13, 1, "O‘ZBEKISTON POYTAXTI"); board("TOSHKENT CITY", L * .52, -1, "YO‘LCHI GRAN-PRI"); board("TOSHKENT", L * .8, 1, "CHORSU · MINOR · TELEMINORA")
  }
  if (id === 1) {
    // Chimyon: qorli tog'lar halqasi, kanat yo'li, tog' uylari
    for (let k = 0; k < 18; k++) {
      let a = k / 18 * Math.PI * 2 + rnd() * .2, R = 330 + rnd() * 130, r = 85 + rnd() * 80, hh = 75 + rnd() * 105, x = Math.cos(a) * R, z = Math.sin(a) * R, ry = rnd() * 6;
      add(new Yr(r, hh, 7), M([7307354, 8356720, 6583900][k % 3], .95, 0, !0), x, hh / 2 - 2, z, e, ry); add(new Yr(r * .4, hh * .4, 7), M(16185078, .7, 0, !0), x, hh * .8 - 1.9, z, e, ry)
    }
    for (let k = 0; k < 12; k++) { let a = k / 12 * Math.PI * 2 + .2, R = 235 + rnd() * 50, r = 45 + rnd() * 30, hh = 28 + rnd() * 30; add(new Yr(r, hh, 8), M(5999692, .95, 0, !0), Math.cos(a) * R, hh / 2 - 3, Math.sin(a) * R, e, rnd() * 6) }
    let c0 = [150, 205], c1 = [330, 330], N = 7, steel = M(9279907, .5, .5), prev = null;
    for (let k = 0; k < N; k++) { let u = k / (N - 1), x = c0[0] + (c1[0] - c0[0]) * u, z = c0[1] + (c1[1] - c0[1]) * u, top = 14 + u * 95; add(new Zn(.5, .9, top, 6), steel, x, top / 2, z); add(new Zt(5, .5, .5), steel, x, top, z, e, Math.PI / 4);
      if (prev) { let dx = x - prev[0], dz = z - prev[2], dy = top - prev[1], len = Math.hypot(dx, dy, dz), cb = add(new Zn(.09, .09, len, 4), M(1973790), (x + prev[0]) / 2, (top + prev[1]) / 2 - .2, (z + prev[2]) / 2); cb.rotation.set(0, Math.atan2(dx, dz), 0), cb.rotateX(Math.acos(dy / len));
        for (let j of [.3, .7]) { let cx = prev[0] + dx * j, cy = prev[1] + dy * j - 2.4, cz = prev[2] + dz * j; add(new Zt(1.6, 1.5, 1.2), M([14035494, 2075573, 15781194][(k + (j > .5)) % 3], .5), cx, cy, cz); add(new Zn(.05, .05, 2, 4), steel, cx, cy + 1.6, cz) } }
      prev = [x, top, z] }
    for (let k = 0; k < 9; k++) { let a = .5 + k * .68, R = 196 + rnd() * 22, g = grp(Math.cos(a) * R, Math.sin(a) * R, !0, 1 + rnd() * .4); add(new Zt(9, 4.5, 7), M([9136190, 14207920, 7556676][k % 3]), 0, 2.25, 0, g); let rf = add(new Yr(7.6, 4.2, 4), M(8010542, .8, 0, !0), 0, 6.6, 0, g); rf.rotation.y = Math.PI / 4, rf.scale.set(1, 1, .82) }
    board("CHIMYON", L * .1, 1, "TOG‘ DOVONI · 1 600 M"); board("BELDIRSOY", L * .45, -1, "KANAT YO‘LI"); board("CHORVOQ", L * .78, 1, "KO‘L TOMONGA")
  }
  if (id === 2) {
    // Samarqand: Registon (uch madrasa), Go'ri Amir, Bibixonim
    madrasa(10, 232); madrasa(-78, 205, .82, -1.25); madrasa(98, 205, .82, 1.25);
    let pl = grp(10, 190, !0); add(new Zt(120, .4, 46), M(14798269, .9), 0, .1, 0, pl);
    let g = grp(238, -20, !0); add(new Zn(15, 15, 13, 8), M(SAND), 0, 6.5, 0, g); add(new Zn(9.5, 9.5, 12, 20), M(SAND2), 0, 19, 0, g); add(new Zn(9.9, 9.9, 2.4, 20), M(BLUE, .5), 0, 23.5, 0, g);
    let gd = dome(g, 0, 25, 0, 10.6, TURQ, 1.45); for (let k = 0; k < 16; k++) { let a = k / 16 * Math.PI * 2, rb = add(new Js(1.5, 6, 8, 0, Math.PI * 2, 0, Math.PI / 2), M(1675684, .45), Math.cos(a) * 9.6, 25, Math.sin(a) * 9.6, g); rb.scale.y = 9.2 }
    add(new Zt(20, 24, 5), tileM, 0, 12, 17, g); for (let k of [-1, 1]) minaret(g, k * 22, 12, 40, 2.2);
    let b = grp(-236, -40, !0); add(new Zt(34, 40, 9), tileM, 0, 20, 8, b); add(new Zt(70, 12, 30), wallM, 0, 6, -10, b); add(new Zn(11, 11, 12, 18), M(SAND2), 0, 22, -12, b); dome(b, 0, 28, -12, 12, TURQ, 1.3); for (let k of [-1, 1]) minaret(b, k * 21, 8, 46, 2.6);
    let s2 = grp(-60, -232, !0); add(new Zt(26, 28, 7), tileM, 0, 14, 4, s2); for (let k = -2; k <= 2; k++) k && (add(new Zn(5, 5, 5, 14), M(SAND2), k * 14, 9, -6, s2), dome(s2, k * 14, 11.5, -6, 5.6, k % 2 ? BLUE : TURQ, 1.3)); add(new Zt(74, 9, 14), wallM, 0, 4.5, -6, s2);
    board("SAMARQAND", L * .1, 1, "REGISTON MAYDONI"); board("REGISTON", L * .42, -1, "ULUG‘BEK · SHERDOR · TILLAKORI"); board("SAMARQAND", L * .74, 1, "GO‘RI AMIR · BIBIXONIM")
  }
}

function dm(i){let e=new wt;i.add(e);let t={},n=(I,U,E=.8,T=0)=>t[I]||(t[I]=new Gt({color:U,roughness:E,metalness:T}));function s(I,U,E,T,N,O=0){let G=new Qe(new Zt(...I),N);return G.position.set(U,E,T),G.rotation.y=O,G.castShadow=!0,G.receiveShadow=!0,e.add(G),G}let r=n("grass",[7832951,6584914,13218940][ycTrackId]),o=n("road",4147276,.94),a=n("concrete",11515056),l=n("dark",2569019),c=n("metal",8295579,.45,.65),h=n("white",14539984),u=n("red",11755080),d=n("glass",5007475,.3,.5),f=new Qe(new Jn(1700,1700),r);f.rotation.x=-Math.PI/2,f.position.y=-.04,f.receiveShadow=!0,e.add(f);let g=um(128,128,(I,U,E)=>{I.fillStyle="#555c5e",I.fillRect(0,0,U,E);let T=904;for(let N=0;N<7e3;N++)T=T*1664525+1013904223>>>0,I.fillStyle=T%2?"#41484b":"#697070",I.fillRect(T%U,(T>>>8)%E,1,1)});g.wrapS=g.wrapT=En,o.map=g;function _(I,U,E,T,N=!1){let O=[],G=[],V=[],q=[];for(let de=0;de<=vt.length;de++){let ke=vt[de%vt.length];for(let oe of[I,U]){O.push(ke.x-ke.tz*oe,E,ke.z+ke.tx*oe),G.push(oe/4,de/3);let be=new De(Math.floor(de/4)%2?15130831:12409672);V.push(be.r,be.g,be.b)}if(de<vt.length){let oe=de*2;q.push(oe,oe+1,oe+2,oe+1,oe+3,oe+2)}}let Z=new ht;Z.setAttribute("position",new We(O,3)),Z.setAttribute("uv",new We(G,2)),Z.setIndex(q),Z.computeVertexNormals(),N&&(Z.setAttribute("color",new We(V,3)),T=new Gt({vertexColors:!0,roughness:.88}));let ce=new Qe(Z,T);return ce.receiveShadow=!0,e.add(ce),ce}_(-Hi-1,Hi+1,.002,a),_(-Sn,Sn,.023,o),_(-Sn-1,-Sn,.028,u,!0),_(Sn,Sn+1,.028,u,!0),_(-Sn+.12,-Sn+.22,.032,h),_(Sn-.22,Sn-.12,.032,h);let m=Math.ceil(fs/3),p=new An(new Zt(.14,.8,.14),c,m*2),A=new An(new Zt(.08,.27,3.15),c,m*2),C=new pt;for(let I=0;I<m;I++){let U=Hn(I*fs/m);for(let E=0;E<2;E++){let T=E?1:-1;C.position.set(U.x-U.tz*T*Hi,.4,U.z+U.tx*T*Hi),C.rotation.y=Math.atan2(U.tx,U.tz),C.updateMatrix(),p.setMatrixAt(I*2+E,C.matrix),C.position.y=.63,C.updateMatrix(),A.setMatrixAt(I*2+E,C.matrix)}}e.add(p,A);for(let I=5;I<fs;I+=12){let U=Hn(I);s([.13,.009,4],U.x,.038,U.z,h,Math.atan2(U.tx,U.tz))}let v=Hn(0),S=Math.atan2(v.tx,v.tz);for(let I=0;I<20;I++)for(let U=0;U<2;U++){let E=s([.75,.015,.7],v.x+v.tx*(U*.7-.35)-v.tz*(I*.75-7.125),.04,v.z+v.tz*(U*.7-.35)+v.tx*(I*.75-7.125),(I+U)%2?h:l,S);E.castShadow=!1}for(let I of[-1,1])s([.35,6,.35],v.x-v.tz*I*9,3,v.z+v.tx*I*9,l);let b=s([18.5,1.7,.38],v.x,5.7,v.z,l,S),R=um(1024,128,(I,U,E)=>{I.fillStyle="#152830",I.fillRect(0,0,U,E),I.fillStyle="#edf3e9",I.font="bold 64px Arial",I.textAlign="center",I.fillText("YO\u2018LCHI  /  "+ycTrack.name.toUpperCase(),U/2,88),I.fillStyle="#d6fa65",I.fillRect(24,25,12,78)});for(let I of[-1,1]){let U=new Qe(new Jn(15,1.45),new an({map:R}));U.rotation.y=S+(I<0?Math.PI:0),U.position.set(v.x+v.tx*.205*I,5.7,v.z+v.tz*.205*I),e.add(U)}if(!ycTrackId){s([74,.12,16],5,0,126,a),s([48,5,12],14,2.5,141,n("wall",13027774)),s([50,.3,13],14,5.05,141,l),s([42,1.45,.1],14,3.6,134.94,d);for(let I=-5;I<34;I+=6)s([4,2.4,.12],I,1.2,134.92,l);for(let I=0;I<4;I++)s([36,.25,2.3],-73,1+I*.6,133+I*2.2,a);}let y=17,w=()=>(y=y*1664525+1013904223>>>0,y/4294967296);for(let I=0;I<(ycTrackId===1?0:32);I++){let U=I/32*Math.PI*2,E=270+w()*130,T=Math.cos(U)*E,N=Math.sin(U)*E,O=ycTrackId?4+w()*7:9+w()*52,G=12+w()*20,V=11+w()*15;s([G,O,V],T,O/2,N,n("building"+I,ycTrackId?[14204044,13216886,15127471,12425067][I%4]:[9610150,9148825,11055532,7638426][I%4]));if(!ycTrackId)for(let q=3;q<O;q+=4)s([G+.03,.75,V+.03],T,q,N,d)}let L=new An(new Yr(3,10,7),n("tree",4088665),85),F=new An(new Zn(.32,.42,3,6),n("trunk",6446923),85);for(let I=0;I<85;I++){let U=I/85*Math.PI*2,E=190+w()*70;C.position.set(Math.cos(U)*E,7,Math.sin(U)*E),C.rotation.set(0,w()*6,0),C.scale.setScalar(.65+w()*.7),C.updateMatrix(),L.setMatrixAt(I,C.matrix),C.position.y=1.5,C.scale.setScalar(1),C.updateMatrix(),F.setMatrixAt(I,C.matrix)}e.add(L,F);for(let I=0;I<22;I++){let U=Hn(I*fs/22),E=I%2?1:-1,T=U.x-U.tz*E*13,N=U.z+U.tx*E*13;s([.12,9,.12],T,4.5,N,c),s([2.5,.09,.12],T,9,N,c),s([.8,.1,.28],T-1,8.93,N,h)}ycScenery(e,ycTrackId);return e}function fm(i,e={}){let t=e.width||1200,n=e.height||720,s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d"),o=r.createImageData(t,n),a=new Float32Array(t*n);a.fill(1/0);let l=new bt(e.fov||34,t/n,.1,e.far||100);l.position.set(...e.camera||[-6.4,2.8,-6.8]),l.lookAt(...e.target||[0,.65,0]),l.updateMatrixWorld(),i.rotation.y=e.rotation??-.16,i.updateMatrixWorld(!0);let c=new D(-.4,.8,-.5).normalize(),h=new Map,u=[],d=new Be().multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),f=new D,g=new D,_=new D;function m(S){if(!S?.image)return null;if(h.has(S))return h.get(S);let b=S.image,R=document.createElement("canvas");R.width=Math.min(1024,b.width),R.height=Math.min(1024,b.height);let y=R.getContext("2d",{willReadFrequently:!0});y.drawImage(b,0,0,R.width,R.height),S.updateMatrix();let w={data:y.getImageData(0,0,R.width,R.height).data,width:R.width,height:R.height,texture:S};return h.set(S,w),w}function p(S,b){if(b===En)return S-Math.floor(S);if(b===Ni){let R=(S%2+2)%2;return R>1?2-R:R}return Math.max(0,Math.min(.999999,S))}function A(S,b,R,y,w,L){let F=b*8,I=R*8,U=y*8;if(S[F+3]<=0||S[I+3]<=0||S[U+3]<=0)return;let E=S[F],T=S[F+1],N=S[I],O=S[I+1],G=S[U],V=S[U+1],q=(O-V)*(E-G)+(G-N)*(T-V);if(Math.abs(q)<1e-4)return;let Z=Math.max(0,Math.floor(Math.min(E,N,G))),ce=Math.min(t-1,Math.ceil(Math.max(E,N,G))),de=Math.max(0,Math.floor(Math.min(T,O,V))),ke=Math.min(n-1,Math.ceil(Math.max(T,O,V))),oe=(O-V)/q,be=(G-N)/q,$=(V-T)/q,Q=(E-G)/q,le=w.color,Fe=w.opacity,ve=w.transparent&&Fe<1,Xe=le.r,Tt=le.g,$e=le.b,et=w.emissive,it=(w.emissiveIntensity||0)*.12,He=L?.texture.matrix.elements;for(let st=de;st<=ke;st++){let ut=((O-V)*(Z+.5-G)+(G-N)*(st+.5-V))/q,Mt=((V-T)*(Z+.5-G)+(E-G)*(st+.5-V))/q;for(let mt=Z;mt<=ce;mt++,ut+=oe,Mt+=$){let dt=1-ut-Mt;if(ut<-1e-5||Mt<-1e-5||dt<-1e-5)continue;let k=ut*S[F+2]+Mt*S[I+2]+dt*S[U+2],Dt=st*t+mt;if(k>=a[Dt]||k<0||k>1)continue;let tt=ut*S[F+4]+Mt*S[I+4]+dt*S[U+4],P=ut*S[F+7]+Mt*S[I+7]+dt*S[U+7],x=1,H=1,Y=1;if(L){let j=ut*S[F+3]+Mt*S[I+3]+dt*S[U+3],ee=(ut*S[F+5]+Mt*S[I+5]+dt*S[U+5])/j,ue=(ut*S[F+6]+Mt*S[I+6]+dt*S[U+6])/j,Pe=p(He[0]*ee+He[3]*ue+He[6],L.texture.wrapS),fe=p(He[1]*ee+He[4]*ue+He[7],L.texture.wrapT);L.texture.flipY&&(fe=1-fe);let he=(Math.min(L.height-1,Math.floor(fe*L.height))*L.width+Math.min(L.width-1,Math.floor(Pe*L.width)))*4;x=L.data[he]/255,H=L.data[he+1]/255,Y=L.data[he+2]/255}let J=Dt*4,se=o.data,ae=[Math.min(255,255*(Xe*x*tt+P+et.r*it)),Math.min(255,255*(Tt*H*tt+P+et.g*it)),Math.min(255,255*($e*Y*tt+P+et.b*it))];if(ve){for(let j=0;j<3;j++)se[J+j]=ae[j]*Fe+se[J+j]*(1-Fe);se[J+3]=Math.min(255,255*Fe+se[J+3]*(1-Fe))}else se[J]=ae[0],se[J+1]=ae[1],se[J+2]=ae[2],se[J+3]=255,a[Dt]=k}}}i.traverse(S=>{if(!S.isMesh)return;let b=S.geometry,R=b.attributes.position,y=b.attributes.normal,w=b.attributes.uv,L=new Float32Array(R.count*8),F=new Ve().getNormalMatrix(S.matrixWorld),I=new Be().multiplyMatrices(d,S.matrixWorld).elements,U=S.material.clone();U.color.convertLinearToSRGB(),U.emissive.convertLinearToSRGB();let E=m(S.material.map);for(let O=0;O<R.count;O++){let G=R.getX(O),V=R.getY(O),q=R.getZ(O),Z=I[3]*G+I[7]*V+I[11]*q+I[15],ce=O*8;L[ce]=((I[0]*G+I[4]*V+I[8]*q+I[12])/Z*.5+.5)*t,L[ce+1]=(1-((I[1]*G+I[5]*V+I[9]*q+I[13])/Z*.5+.5))*n,L[ce+2]=(I[2]*G+I[6]*V+I[10]*q+I[14])/Z*.5+.5,L[ce+3]=1/Z,f.fromBufferAttribute(y,O).applyMatrix3(F).normalize(),g.set(G,V,q).applyMatrix4(S.matrixWorld),_.copy(l.position).sub(g).normalize().add(c).normalize(),L[ce+4]=.48+Math.max(0,f.dot(c))*.5,L[ce+5]=(w?.getX(O)||0)/Z,L[ce+6]=(w?.getY(O)||0)/Z,L[ce+7]=Math.pow(Math.max(0,f.dot(_)),24)*(U.metalness||0)*.28}let T=b.index?.array,N=T?.length||R.count;for(let O=0;O<N;O+=3){let G=T?T[O]:O,V=T?T[O+1]:O+1,q=T?T[O+2]:O+2;U.transparent&&U.opacity<1?u.push({vertices:L,a:G,b:V,c:q,material:U,texture:E,z:L[G*8+2]+L[V*8+2]+L[q*8+2]}):A(L,G,V,q,U,E)}}),u.sort((S,b)=>b.z-S.z);for(let S of u)A(S.vertices,S.a,S.b,S.c,S.material,S.texture);let C=document.createElement("canvas");C.width=t,C.height=n,C.getContext("2d").putImageData(o,0,0),r.save(),r.translate(t*.5,n*.69),r.scale(1,.23);let v=r.createRadialGradient(0,0,20,0,0,t*.27);return v.addColorStop(0,"#0009"),v.addColorStop(1,"#0000"),r.fillStyle=v,r.fillRect(-t/2,-t/2,t,t),r.restore(),r.drawImage(C,0,0),s}var jc=class{constructor(e,t={}){this.events=t,this.canvas=e,this.cars=new Map,this.cameraMode=0,this.lights=!0,this.garage=!0,this.profile={car:"gentra",color:"#e5e7eb"},this.width=innerWidth,this.height=innerHeight,this.cameraTarget=new D,this.softTarget=new D,this.lastTarget=null;try{if(new URLSearchParams(location.search).get("view")==="2d")throw new Error("light view");this.renderer=new Vc({canvas:e,antialias:!0,powerPreference:"high-performance"})}catch{this.fallback=!0,this.ctx=e.getContext("2d"),document.body.classList.add("light-view")}if(this.renderer){let n=this.renderer;n.setPixelRatio(Math.min(devicePixelRatio,matchMedia("(pointer:coarse)").matches?1.25:1.6)),n.toneMapping=oo,n.toneMappingExposure=1.08,n.shadowMap.enabled=!0,n.shadowMap.type=$a,this.scene=new Ui,this.scene.background=new De([12242900,12051943,14208681][ycTrackId]),this.scene.fog=new Hs([12242900,12051943,14208681][ycTrackId],ycTrackId===1?260:190,ycTrackId===1?900:720),this.scene.add(new er(15267071,6910563,2.2)),this.sun=new yi(16772564,3.1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),Object.assign(this.sun.shadow.camera,{near:1,far:160,left:-27,right:27,top:27,bottom:-27}),this.sun.shadow.normalBias=.025,this.sun.shadow.bias=-1e-4,this.scene.add(this.sun,this.sun.target),dm(this.scene),this.garageScene=new Ui,this.garageScene.background=new De(1516073),this.garageScene.fog=new Hs(1516073,15,60),this.garageScene.add(new er(14349055,3490378,2.8));let s=new yi(16773341,4);s.position.set(-5,8,-3),this.garageScene.add(s);let r=new yi(10277631,3.5);r.position.set(6,3,4),this.garageScene.add(r);let o=new dr(n),a=new Wc,l=o.fromScene(a,.035).texture;this.scene.environment=l,this.scene.environmentIntensity=.75,this.garageScene.environment=l,this.garageScene.environmentIntensity=1.1,a.dispose(),o.dispose();let c=new Qe(new Jn(300,300),new Gt({color:2701118,roughness:.59,metalness:.35}));c.rotation.x=-Math.PI/2,c.position.y=-.025,this.garageScene.add(c);let h=new Qe(new Zr(3.6,3.62,120),new an({color:5400418,side:Ht}));h.rotation.x=-Math.PI/2,h.position.y=.002,this.garageScene.add(h),this.camera=new bt(47,1,.1,1e3),this.garageCamera=new bt(36,1,.1,200)}this.setProfile(this.profile),this.resize(),addEventListener("resize",()=>this.resize())}setProfile(e){if(this.profile={...e},this.softwarePreview=null,this.preview?.userData.kind===e.car&&!this.preview.userData.loadError){Ou(this.preview,e.color);return}this.preview&&Jc(this.preview);let t=this.preview=Uu(e.car,e.color);this.garageScene&&this.garageScene.add(t),this.events.modelStatus?.(e.car,t.userData.loaded?"ready":"loading"),t.userData.ready&&t.userData.ready.then(()=>{this.preview===t&&(this.softwarePreview=null,this.events.modelStatus?.(e.car,"ready"))}).catch(n=>{this.preview===t&&(t.userData.loadError=!0,this.events.modelStatus?.(e.car,"error",n))})}prepareCars(e){return lm(e)}resize(){if(this.width=innerWidth,this.height=innerHeight,this.renderer){this.renderer.setSize(this.width,this.height,!1);for(let e of[this.camera,this.garageCamera])e.aspect=this.width/this.height,e.updateProjectionMatrix()}else{let e=Math.min(devicePixelRatio,1.5);this.canvas.width=this.width*e,this.canvas.height=this.height*e,this.ctx.setTransform(e,0,0,e,0,0)}this.softwarePreview=null}mode(e){this.cameraMode=e%3,this.lastTarget=null}draw(e,t,n,s,r){if(this.garage=!["countdown","racing","finished","paused"].includes(n),this.fallback){this.draw2D(e,t,s);return}if(this.garage){this.preview.rotation.y=Math.sin(r*.15)*.08-.17,this.garageCamera.position.set(-7.2,3.2,-7.3),this.garageCamera.lookAt(this.width>820?-1.65:0,.61,0),this.renderer.render(this.garageScene,this.garageCamera);return}let o=new Set(e.map(l=>l.id));for(let[l,c]of this.cars)o.has(l)||(Jc(c),this.cars.delete(l));for(let l of e){let c=this.cars.get(l.id);c&&c.userData.kind!==l.car&&(Jc(c),this.cars.delete(l.id),c=null),c||(c=Uu(l.car,l.color),c.position.set(l.x,0,l.z),c.rotation.y=l.yaw,this.scene.add(c),this.cars.set(l.id,c),c.userData.ready?.catch(u=>this.events.modelError?.(u))),c.userData.color!==l.color&&Ou(c,l.color);let h=1-Math.exp(-s*(l.id===t?25:15));Math.hypot(c.position.x-l.x,c.position.z-l.z)>12?c.position.set(l.x,0,l.z):(c.position.x+=(l.x-c.position.x)*h,c.position.z+=(l.z-c.position.z)*h),c.rotation.y+=bo(l.yaw-c.rotation.y)*h,hm(c,l,this.lights),c.visible=!(this.cameraMode===1&&l.id===t)}let a=e.find(l=>l.id===t)||e[0];if(a){let l=this.cars.get(a.id),c=l?.position||new D(a.x,0,a.z),h=l?.rotation.y??a.yaw,u=Math.sin(h),d=Math.cos(h),f=new D(c.x-u*5,.7,c.z-d*5),g=new D;if(this.cameraMode===1)g.set(c.x-u*.45,1.24,c.z-d*.45),f.set(c.x-u*45,1.15,c.z-d*45),this.camera.fov=74;else if(this.cameraMode===2)g.set(c.x,36,c.z+5),f.set(c.x,0,c.z),this.camera.fov=52;else{let m=Math.abs(a.speed)*.045;g.set(c.x+u*(8+m),3.65+m*.2,c.z+d*(8+m)),this.camera.fov=51+Math.abs(a.speed)*.15}let _=this.lastTarget?1-Math.exp(-s*(this.cameraMode===1?30:7)):1;this.camera.position.lerp(g,_),this.softTarget.lerp(f,_),this.camera.lookAt(this.softTarget),this.camera.updateProjectionMatrix(),this.lastTarget=a.id,this.sun.position.set(c.x-35,60,c.z+25),this.sun.target.position.copy(c)}this.renderer.render(this.scene,this.camera)}draw2D(e,t){let n=this.ctx,s=this.width,r=this.height;if(n.clearRect(0,0,s,r),this.garage){let g=n.createRadialGradient(s*.73,r*.5,10,s*.6,r*.5,s*.8);g.addColorStop(0,"#30444a"),g.addColorStop(1,"#121d25"),n.fillStyle=g,n.fillRect(0,0,s,r),this.softwarePreview||(this.softwarePreview=this.renderSoftwareCar());let _=Math.min(s*.68,1e3),m=s>820?s*.7:s*.5,p=s>820?r*.54:r*.36;n.drawImage(this.softwarePreview,m-_/2,p-_*.3,_,_*.6);return}let o=e.find(g=>g.id===t)||e[0];if(!o)return;let a=this.cameraMode===2?Math.min(s/380,r/285):Math.min(s,r)/65,l=this.cameraMode===2?0:o.x,c=this.cameraMode===2?10:o.z,h=this.cameraMode===2?0:o.yaw;n.fillStyle="#6b7e70",n.fillRect(0,0,s,r),n.save(),n.translate(s/2,r/2),n.scale(a,a),n.rotate(h),n.translate(-l,-c),n.lineJoin="round";let u=()=>{n.beginPath(),vt.forEach((g,_)=>_?n.lineTo(g.x,g.z):n.moveTo(g.x,g.z)),n.closePath()};u(),n.strokeStyle="#a5aea1",n.lineWidth=22,n.stroke(),u(),n.strokeStyle="#bb705d",n.lineWidth=17,n.stroke(),u(),n.strokeStyle="#3c474e",n.lineWidth=15,n.stroke(),u(),n.strokeStyle="#b6bcab",n.lineWidth=.14,n.setLineDash([4,8]),n.stroke(),n.setLineDash([]);let d=Hn(0);n.save(),n.translate(d.x,d.z),n.rotate(Math.atan2(d.tz,d.tx));for(let g=0;g<2;g++)for(let _=0;_<20;_++)n.fillStyle=(g+_)%2?"#eee9d9":"#16272c",n.fillRect(g*.7-.7,_*.75-7.5,.7,.75);n.restore();let f=ds[o.nextGate];f&&!o.finished&&(n.save(),n.translate(f.x,f.z),n.rotate(Math.atan2(f.tz,f.tx)),n.fillStyle="#d1ee6266",n.fillRect(-.2,-7.2,.4,14.4),n.restore());for(let g of e){n.save(),n.translate(g.x,g.z),n.rotate(-g.yaw);let _=Pt[g.car]||Pt.gentra;n.fillStyle="#0e1a2577",n.beginPath(),n.roundRect(-_.width/2+.12,-_.length/2+.13,_.width,_.length,.28),n.fill(),n.fillStyle="#151b1e";for(let m of[-1,1])for(let p of[-1,1])n.fillRect(m*.87-.1,p*_.wheelbase/2-.32,.2,.64);n.fillStyle=g.color,n.beginPath(),n.roundRect(-_.width/2,-_.length/2,_.width,_.length,.3),n.fill(),n.fillStyle="#213e50",n.beginPath(),n.roundRect(-_.width*.39,-.95,_.width*.78,2.2,.26),n.fill(),n.fillStyle=g.color,n.fillRect(-_.width*.36,-.35,_.width*.72,1),n.fillStyle="#e0efff";for(let m of[-.58,.58])n.fillRect(m-.19,-_.length/2+.1,.36,.1);n.fillStyle=g.braking?"#ff484f":"#971e2a";for(let m of[-.58,.58])n.fillRect(m-.17,_.length/2-.15,.34,.1);n.restore(),n.save(),n.translate(g.x,g.z),n.rotate(h),n.font="600 "+12/a+"px Drive,Arial",n.textAlign="center",n.lineWidth=3/a,n.strokeStyle="#0c1e2a",n.strokeText(g.name,0,-3.25),n.fillStyle=g.id===t?"#dbfa81":"#fff",n.fillText(g.name,0,-3.25),n.restore()}n.restore()}renderSoftwareCar(){return fm(this.preview)}};var Fu=class{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){let e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){let e=[];for(let t of this._parts)e.push(t);return SS(e).buffer}};function SS(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i){let r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function zu(i){return new Bu(i).unpack()}function Vu(i){let e=new ku,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}var Bu=class{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){let e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){let e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){let e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){let e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){let e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){let e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){let e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){let e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){let e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);let t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){let t=this.read(e),n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){let t={};for(let n=0;n<e;n++){let s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){let e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){let e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){let t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}},ku=class{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{let t=e.constructor;if(e instanceof Array){let n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){let n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){let n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){let t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){let t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){let t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");let n=s=>{if(s<t){let r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);let n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,l=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(l)}pack_object(e){let t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");let s=r=>{if(r<t.length){let o=t[r];if(e.hasOwnProperty(o)){this.pack(o);let a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){let t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){let t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){let t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Fu,this._textEncoder=new TextEncoder}};var mm=!0,gm=!0;function _r(i,e,t){let n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function oi(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Ao("Unable to polyfill events");return}let s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,l){if(a!==e)return r.apply(this,arguments);let c=h=>{let u=t(h);u&&(l.handleEvent?l.handleEvent(u):l(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(l,c),r.apply(this,[a,c])};let o=s.removeEventListener;s.removeEventListener=function(a,l){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(l))return o.apply(this,arguments);let c=this._eventMap[e].get(l);return this._eventMap[e].delete(l),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,c])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function _m(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(mm=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function xm(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(gm=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Ao(){if(typeof window=="object"){if(mm)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function xr(i,e){gm&&console.warn(i+" is deprecated, please use "+e+" instead.")}function ym(i){let e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;let{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){let n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){let s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(_r(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(_r(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(_r(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=_r(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function pm(i){return Object.prototype.toString.call(i)==="[object Object]"}function Gu(i){return pm(i)?Object.keys(i).reduce(function(e,t){let n=pm(i[t]),s=n?Gu(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Hu(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Hu(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Hu(i,i.get(s),t)})}))}function Wu(i,e,t){let n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;let r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&Hu(i,a,s)})}),s}var tl={};Vo(tl,{fixNegotiationNeeded:()=>Zu,shimAddTrackRemoveTrack:()=>Ku,shimAddTrackRemoveTrackWithNative:()=>Sm,shimGetSendersWithDtmf:()=>Yu,shimGetUserMedia:()=>Qc,shimMediaStream:()=>Xu,shimOnTrack:()=>qu,shimPeerConnection:()=>el,shimSenderReceiverGetStats:()=>$u});var vm=Ao;function Qc(i,e){if(e.version>=64)return;let t=i&&i.navigator;if(!t.mediaDevices)return;let n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;let l={};return Object.keys(a).forEach(c=>{if(c==="require"||c==="advanced"||c==="mediaSource")return;let h=typeof a[c]=="object"?a[c]:{ideal:a[c]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);let u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){l.optional=l.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",c)]=h.ideal,l.optional.push(d),d={},d[u("max",c)]=h.ideal,l.optional.push(d)):(d[u("",c)]=h.ideal,l.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[u("",c)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[u(d,c)]=h[d])})}),a.advanced&&(l.optional=(l.optional||[]).concat(a.advanced)),l},s=function(a,l){if(e.version>=61)return l(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){let c=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),c(a.audio,"autoGainControl","googAutoGainControl"),c(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let c=a.video.facingMode;c=c&&(typeof c=="object"?c:{ideal:c});let h=e.version<66;if(c&&(c.exact==="user"||c.exact==="environment"||c.ideal==="user"||c.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(c.exact==="environment"||c.ideal==="environment"?u=["back","rear"]:(c.exact==="user"||c.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let f=d.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=c.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),vm("chrome: "+JSON.stringify(a)),l(a)})}a.video=n(a.video)}return vm("chrome: "+JSON.stringify(a)),l(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,l,c){s(a,h=>{t.webkitGetUserMedia(h,l,u=>{c&&c(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){let a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(l){return s(l,c=>a(c).then(h=>{if(c.audio&&!h.getAudioTracks().length||c.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Xu(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function qu(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(l=>l.track&&l.track.id===r.track.id):o={track:r.track};let a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(l=>l.track&&l.track.id===r.id):o={track:r};let a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else oi(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Yu(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){let e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};let s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,l){let c=s.apply(this,arguments);return c||(c=e(this,a),this._senders.push(c)),c};let r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);let l=this._senders.indexOf(a);l!==-1&&this._senders.splice(l,1)}}let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{let a=this._senders.find(l=>l.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){let e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function $u(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){let n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){let o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});let s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){let o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){let o=this;return this._pc.getStats().then(a=>Wu(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){let n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){let r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),oi(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){let r=this;return this._pc.getStats().then(o=>Wu(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;let t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){let s=arguments[0],r,o,a;return this.getSenders().forEach(l=>{l.track===s&&(r?a=!0:r=l)}),this.getReceivers().forEach(l=>(l.track===s&&(o?a=!0:o=l),l.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Sm(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};let l=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(l)===-1&&this._shimmedLocalStreams[a.id].push(l):this._shimmedLocalStreams[a.id]=[a,l],l};let t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(c=>{if(this.getSenders().find(u=>u.track===c))throw new DOMException("Track already exists.","InvalidAccessError")});let a=this.getSenders();t.apply(this,arguments);let l=this.getSenders().filter(c=>a.indexOf(c)===-1);this._shimmedLocalStreams[o.id]=[o].concat(l)};let n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};let s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{let l=this._shimmedLocalStreams[a].indexOf(o);l!==-1&&this._shimmedLocalStreams[a].splice(l,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function Ku(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Sm(i);let t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){let h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};let n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){let u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};let s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");let d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};let g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{let _=new i.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(c,h){let u=h.sdp;return Object.keys(c._reverseStreams||[]).forEach(d=>{let f=c._reverseStreams[d],g=c._streams[f.id];u=u.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(c,h){let u=h.sdp;return Object.keys(c._reverseStreams||[]).forEach(d=>{let f=c._reverseStreams[d],g=c._streams[f.id];u=u.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(c){let h=i.RTCPeerConnection.prototype[c],u={[c](){let d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{let _=r(this,g);d[0].apply(null,[_])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[c]=u[c]});let a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};let l=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){let c=l.get.apply(this);return c.type===""?c:r(this,c)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(_=>h.track===_)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function el(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Zu(i,e){e.version>102||oi(i,"negotiationneeded",t=>{let n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}var sl={};Vo(sl,{shimAddTransceiver:()=>id,shimCreateAnswer:()=>od,shimCreateOffer:()=>rd,shimGetDisplayMedia:()=>Mm,shimGetParameters:()=>sd,shimGetStats:()=>ju,shimGetUserMedia:()=>nl,shimOnTrack:()=>Ju,shimPeerConnection:()=>il,shimRTCDataChannel:()=>nd,shimReceiverGetStats:()=>ed,shimRemoveStream:()=>td,shimSenderGetStats:()=>Qu});function nl(i,e){let t=i&&i.navigator;if(!t.mediaDevices)return;let n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){xr("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){let s=function(o,a,l){a in o&&!(l in o)&&(o[l]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){let o=n.prototype.getSettings;n.prototype.getSettings=function(){let a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){let o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Mm(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){let s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Ju(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function il(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){let n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function ju(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;let t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){let[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(l=>{if(e.version<53&&!o)try{l.forEach(c=>{c.type=t[c.type]||c.type})}catch(c){if(c.name!=="TypeError")throw c;l.forEach((h,u)=>{l.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return l}).then(o,a)}}function Qu(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;let e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){let s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});let t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){let s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function ed(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;let e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){let n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),oi(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function td(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){xr("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function nd(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function id(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];let r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});let o=t.apply(this,arguments);if(r){let{sender:a}=o,l=a.getParameters();(!("encodings"in l)||l.encodings.length===1&&Object.keys(l.encodings[0]).length===0)&&(l.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(l).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function sd(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;let t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){let s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function rd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function od(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;let t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}var rl={};Vo(rl,{shimAudioContext:()=>pd,shimCallbacksAPI:()=>ld,shimConstraints:()=>bm,shimCreateOfferLegacy:()=>fd,shimGetUserMedia:()=>hd,shimLocalStreamsAPI:()=>ad,shimRTCIceServerUrls:()=>ud,shimRemoteStreamsAPI:()=>cd,shimTrackEventTransceiver:()=>dd});function ad(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){let e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);let n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);let s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function cd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);let r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});let e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){let n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);let o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function ld(i){if(typeof i!="object"||!i.RTCPeerConnection)return;let e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,h){let u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(c,h),Promise.resolve()):d},e.createAnswer=function(c,h){let u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(c,h),Promise.resolve()):d};let a=function(l,c,h){let u=s.apply(this,[l]);return h?(u.then(c,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(l,c,h){let u=r.apply(this,[l]);return h?(u.then(c,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(l,c,h){let u=o.apply(this,[l]);return h?(u.then(c,h),Promise.resolve()):u},e.addIceCandidate=a}function hd(i){let e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){let t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(bm(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}.bind(e))}function bm(i){return i&&i.video!==void 0?Object.assign({},i,{video:Gu(i.video)}):i}function ud(i){if(!i.RTCPeerConnection)return;let e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){let r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(xr("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function dd(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function fd(i){let e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);let s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);let r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function pd(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}var _d={};Vo(_d,{removeExtmapAllowMixed:()=>cl,shimAddIceCandidateNullOrEmpty:()=>Po,shimConnectionState:()=>al,shimMaxMessageSize:()=>Co,shimParameterlessSetLocalDescription:()=>Io,shimRTCIceCandidate:()=>wo,shimRTCIceCandidateRelayProtocol:()=>ol,shimSendThrowTypeError:()=>Ro});var yr=Wd(gd());function wo(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;let e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){let s=new e(n),r=yr.default.parseCandidate(n.candidate);for(let o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,oi(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function ol(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||oi(i,"icecandidate",e=>{if(e.candidate){let t=yr.default.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Co(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});let t=function(a){if(!a||!a.sdp)return!1;let l=yr.default.splitSections(a.sdp);return l.shift(),l.some(c=>{let h=yr.default.parseMLine(c);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){let l=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(l===null||l.length<2)return-1;let c=parseInt(l[1],10);return c!==c?-1:c},s=function(a){let l=65536;return e.browser==="firefox"&&(e.version<57?a===-1?l=16384:l=2147483637:e.version<60?l=e.version===57?65535:65536:l=2147483637),l},r=function(a,l){let c=65536;e.browser==="firefox"&&e.version===57&&(c=65535);let h=yr.default.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?c=parseInt(h[0].substring(19),10):e.browser==="firefox"&&l!==-1&&(c=2147483637),c},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){let{sdpSemantics:l}=this.getConfiguration();l==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){let l=n(arguments[0]),c=s(l),h=r(arguments[0],l),u;c===0&&h===0?u=Number.POSITIVE_INFINITY:c===0||h===0?u=Math.max(c,h):u=Math.min(c,h);let d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function Ro(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){let o=s.send;s.send=function(){let l=arguments[0],c=l.length||l.size||l.byteLength;if(s.readyState==="open"&&r.sctp&&c>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}let n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){let r=n.apply(this,arguments);return t(r,this),r},oi(i,"datachannel",s=>(t(s.channel,s.target),s))}function al(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;let e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{let n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{let r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;let o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function cl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;let t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){let r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Po(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Io(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;let t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}var MS=Wd(gd());function Tm({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){let t=Ao,n=ym(i),s={browserDetails:n,commonShim:_d,extractVersion:_r,disableLog:_m,disableWarnings:xm,sdp:MS};switch(n.browser){case"chrome":if(!tl||!el||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=tl,Po(i,n),Io(i,n),Qc(i,n),Xu(i,n),el(i,n),qu(i,n),Ku(i,n),Yu(i,n),$u(i,n),Zu(i,n),wo(i,n),ol(i,n),al(i,n),Co(i,n),Ro(i,n),cl(i,n);break;case"firefox":if(!sl||!il||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=sl,Po(i,n),Io(i,n),nl(i,n),il(i,n),ju(i,n),Ju(i,n),td(i,n),Qu(i,n),ed(i,n),nd(i,n),id(i,n),sd(i,n),rd(i,n),od(i,n),wo(i,n),al(i,n),Co(i,n),Ro(i,n);break;case"safari":if(!rl||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=rl,Po(i,n),Io(i,n),ud(i,n),fd(i,n),ld(i,n),ad(i,n),cd(i,n),dd(i,n),hd(i,n),pd(i,n),wo(i,n),ol(i,n),Co(i,n),Ro(i,n),cl(i,n);break;default:t("Unsupported browser!");break}return s}var bS=Tm({window:typeof window>"u"?void 0:window}),xd=bS;function gs(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}var hl=class{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{let t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU),r=0,o=0;for(;o<n;){let a=Math.min(n,o+this.chunkedMTU),l=e.slice(o,a),c={__peerData:this._dataCount,n:r,data:l,total:s};t.push(c),o=a,r++}return this._dataCount++,t}}};function TS(i){let e=0;for(let s of i)e+=s.byteLength;let t=new Uint8Array(e),n=0;for(let s of i)t.set(s,n),n+=s.byteLength;return t}var yd=xd.default||xd,Lo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){let i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return yd.browserDetails.browser}getVersion(){return yd.browserDetails.version||0}isUnifiedPlanSupported(){let i=this.getBrowser(),e=yd.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},ES=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Am=()=>Math.random().toString(36).slice(2),Em={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},vd=class extends hl{noop(){}blobToArrayBuffer(e,t){let n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Em,this.browser=Lo.getBrowser(),this.browserVersion=Lo.getVersion(),this.pack=Vu,this.unpack=zu,this.supports=(function(){let t={browser:Lo.isBrowserSupported(),webRTC:Lo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Em),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!Lo.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=ES,this.randomToken=Am}},Xt=new vd,AS="PeerJS: ";var Sd=class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){let n=[AS,...t];for(let s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}},Te=new Sd,Rd={},wS=Object.prototype.hasOwnProperty,cn="~";function No(){}Object.create&&(No.prototype=Object.create(null),new No().__proto__||(cn=!1));function CS(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function wm(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new CS(t,n||i,s),o=cn?cn+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function ll(i,e){--i._eventsCount===0?i._events=new No:delete i._events[e]}function tn(){this._events=new No,this._eventsCount=0}tn.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)wS.call(t,n)&&e.push(cn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};tn.prototype.listeners=function(e){var t=cn?cn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};tn.prototype.listenerCount=function(e){var t=cn?cn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};tn.prototype.emit=function(e,t,n,s,r,o){var a=cn?cn+e:e;if(!this._events[a])return!1;var l=this._events[a],c=arguments.length,h,u;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,n),!0;case 4:return l.fn.call(l.context,t,n,s),!0;case 5:return l.fn.call(l.context,t,n,s,r),!0;case 6:return l.fn.call(l.context,t,n,s,r,o),!0}for(u=1,h=new Array(c-1);u<c;u++)h[u-1]=arguments[u];l.fn.apply(l.context,h)}else{var d=l.length,f;for(u=0;u<d;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),c){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,n);break;case 4:l[u].fn.call(l[u].context,t,n,s);break;default:if(!h)for(f=1,h=new Array(c-1);f<c;f++)h[f-1]=arguments[f];l[u].fn.apply(l[u].context,h)}}return!0};tn.prototype.on=function(e,t,n){return wm(this,e,t,n,!1)};tn.prototype.once=function(e,t,n){return wm(this,e,t,n,!0)};tn.prototype.removeListener=function(e,t,n,s){var r=cn?cn+e:e;if(!this._events[r])return this;if(!t)return ll(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&ll(this,r);else{for(var a=0,l=[],c=o.length;a<c;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&l.push(o[a]);l.length?this._events[r]=l.length===1?l[0]:l:ll(this,r)}return this};tn.prototype.removeAllListeners=function(e){var t;return e?(t=cn?cn+e:e,this._events[t]&&ll(this,t)):(this._events=new No,this._eventsCount=0),this};tn.prototype.off=tn.prototype.removeListener;tn.prototype.addListener=tn.prototype.on;tn.prefixed=cn;tn.EventEmitter=tn;Rd=tn;var _s={};gs(_s,"ConnectionType",()=>qi);gs(_s,"PeerErrorType",()=>Ft);gs(_s,"BaseConnectionErrorType",()=>Md);gs(_s,"DataConnectionErrorType",()=>Pd);gs(_s,"SerializationType",()=>gl);gs(_s,"SocketEventType",()=>Xi);gs(_s,"ServerMessageType",()=>en);var qi=(function(i){return i.Data="data",i.Media="media",i})({}),Ft=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Md=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),Pd=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),gl=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),Xi=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),en=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({}),Cm="1.5.5",bd=class extends Rd.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];let a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;let n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Cm),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),Te.log("Server message received:",r)}catch{Te.log("Invalid server message",s.data);return}this.emit(Xi.Message,r)},this._socket.onclose=s=>{this._disconnected||(Te.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Xi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Te.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Te.log("Cannot send heartbeat, because socket closed");return}let e=JSON.stringify({type:en.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){let e=[...this._messagesQueue];this._messagesQueue=[];for(let t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Xi.Error,"Invalid message");return}if(!this._wsOpen())return;let t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}},ul=class{constructor(e){this.connection=e}startConnection(e){let t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===qi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){let n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Te.log("Creating RTCPeerConnection.");let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){let t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;Te.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Te.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:en.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Te.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Md.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Te.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Md.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Te.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Te.log("Listening for data channel"),e.ondatachannel=o=>{Te.log("Received data channel");let a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},Te.log("Listening for remote stream"),e.ontrack=o=>{Te.log("Received remote stream");let a=o.streams[0],l=r.getConnection(t,n);if(l.type===qi.Media){let c=l;this._addStreamToMediaConnection(a,c)}}}cleanup(){Te.log("Cleaning up PeerConnection to "+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t=e.signalingState!=="closed",n=!1,s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);Te.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Te.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===qi.Data){let r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:en.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Ft.WebRTC,s),Te.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Ft.WebRTC,n),Te.log("Failed to createOffer, ",n)}}async _makeAnswer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createAnswer();Te.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Te.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:en.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Ft.WebRTC,s),Te.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Ft.WebRTC,n),Te.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);let n=this.connection.peerConnection,s=this.connection.provider;Te.log("Setting remote description",t);let r=this;try{await n.setRemoteDescription(t),Te.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(Ft.WebRTC,o),Te.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Te.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Te.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Ft.WebRTC,t),Te.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Te.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Te.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Te.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}},dl=class extends Rd.EventEmitter{emitError(e,t){Te.error("Error:",t),this.emit("error",new Td(`${e}`,t))}},Td=class extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}},fl=class extends dl{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}},pl=class i extends fl{static#e=this.ID_PREFIX="mc_";get type(){return qi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||i.ID_PREFIX+Xt.randomToken(),this._negotiator=new ul(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Te.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Te.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Te.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){let t=e.type,n=e.payload;switch(e.type){case en.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case en.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Te.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Te.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});let n=this.provider._getMessages(this.connectionId);for(let s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}},Ed=class{constructor(e){this._options=e}_buildRequest(e){let t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Cm),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{let e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Te.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Xt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{let e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Xt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Te.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}},ml=class i extends fl{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return qi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||i.ID_PREFIX+Am(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new ul(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Te.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Te.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Te.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Pd.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){let t=e.payload;switch(e.type){case en.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case en.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Te.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}},Uo=class extends ml{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ml.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Te.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;let e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}},Do=class extends Uo{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new hl,this.serialization=gl.Binary,this._chunkedData={}}_handleDataMessage({data:e}){let t=zu(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){let t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];let s=TS(n.data);this._handleDataMessage({data:s})}}_send(e,t){let n=Vu(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){let t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){let t=this.chunker.chunk(e);Te.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(let n of t)this.send(n,!0)}},Ad=class extends Uo{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=gl.None}},wd=class extends Uo{_handleDataMessage({data:e}){let t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){let n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Xt.chunkedMTU){this.emitError(Pd.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=gl.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}};var Cd=class i extends dl{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){let e=Object.create(null);for(let[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Ad,json:wd,binary:Do,"binary-utf8":Do,default:Do},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Xt.CLOUD_HOST,port:Xt.CLOUD_PORT,path:"/",key:i.DEFAULT_KEY,token:Xt.randomToken(),config:Xt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Xt.CLOUD_HOST?this._options.secure=Xt.isSecure():this._options.host==Xt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Te.setLogFunction(this._options.logFunction),Te.logLevel=this._options.debug||0,this._api=new Ed(t),this._socket=this._createServerConnection(),!Xt.supports.audioVideo&&!Xt.supports.data){this._delayedAbort(Ft.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Xt.validateId(n)){this._delayedAbort(Ft.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Ft.ServerError,s))}_createServerConnection(){let e=new bd(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Xi.Message,t=>{this._handleMessage(t)}),e.on(Xi.Error,t=>{this._abort(Ft.SocketError,t)}),e.on(Xi.Disconnected,()=>{this.disconnected||(this.emitError(Ft.Network,"Lost connection to server."),this.disconnect())}),e.on(Xi.Close,()=>{this.disconnected||this._abort(Ft.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){let t=e.type,n=e.payload,s=e.src;switch(t){case en.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case en.Error:this._abort(Ft.ServerError,n.msg);break;case en.IdTaken:this._abort(Ft.UnavailableID,`ID "${this.id}" is taken`);break;case en.InvalidKey:this._abort(Ft.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case en.Leave:Te.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case en.Expire:this.emitError(Ft.PeerUnavailable,`Could not connect to peer ${s}`);break;case en.Offer:{let r=n.connectionId,o=this.getConnection(s,r);if(o&&(o.close(),Te.warn(`Offer received for existing Connection ID:${r}`)),n.type===qi.Media){let l=new pl(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=l,this._addConnection(s,o),this.emit("call",l)}else if(n.type===qi.Data){let l=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=l,this._addConnection(s,o),this.emit("connection",l)}else{Te.warn(`Received malformed connection type:${n.type}`);return}let a=this._getMessages(r);for(let l of a)o.handleMessage(l);break}default:{if(!n){Te.warn(`You received a malformed message from ${s} of type ${t}`);return}let r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):Te.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){let t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Te.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Ft.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}let n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Te.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Ft.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Te.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}let s=new pl(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){Te.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){let t=this._connections.get(e.peer);if(t){let n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){let n=this._connections.get(e);if(!n)return null;for(let s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Te.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Te.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){let t=this._connections.get(e);if(t)for(let n of t)n.close()}disconnect(){if(this.disconnected)return;let e=this.id;Te.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Te.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Te.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Ft.ServerError,t))}};var Rm=Cd;var Oo=3,Pm="bts-drive-v3-";function xl(i){return String(i||"").toUpperCase().replace(/[^A-Z2-9]/g,"").slice(0,8)}function RS(){let i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",e=crypto.getRandomValues(new Uint8Array(8));return Array.from(e,t=>i[t%i.length]).join("")}var Im={"peer-unavailable":"Xona topilmadi. Kodni tekshiring yoki mezbon yangi xona ochsin.",network:"Serverga ulanib bo\u2018lmadi. Internetni tekshirib, qayta urinib ko\u2018ring.","server-error":"Ulanish xizmati javob bermayapti. Birozdan keyin qayta urinib ko\u2018ring.","socket-error":"Ulanish uzildi. Internetni tekshirib, qayta urinib ko\u2018ring.","unavailable-id":"Bu xona kodi band. Yangi xona yaratib ko\u2018ring.","browser-incompatible":"Bu brauzer onlayn ulanishni qo\u2018llamaydi. Chrome yoki Edge\u2019da oching.",webrtc:"Do\u2018stingiz bilan ulanish o\u2018rnatilmadi. Boshqa internet tarmog\u2018ida urinib ko\u2018ring."},_l=class{constructor(e={}){this.events=e,this.players=new Map,this.connections=new Map,this.inputs=new Map,this.states=[],this.phase="menu",this.code="",this.id="",this.isHost=!1,this.startAt=0,this.offset=0,this.rtt=0,this.lastSend=0,this.lastHost=0,this.epoch=0,this.predict=null,this.sequence=0,this.closed=!0}now(){return Date.now()+this.offset}changed(){this.events.change?.(this)}error(e){this.events.error?.(e)}packet(e,t){try{e?.open&&(e.dataChannel?.bufferedAmount||0)<131072&&e.send(t)}catch{}}broadcast(e){for(let t of this.connections.values())this.packet(t,e)}roomPacket(){return{t:"room",v:Oo,track:ycTrackId,code:this.code,phase:this.phase,players:[...this.players.values()],startAt:this.startAt,now:Date.now(),epoch:this.epoch}}sendRoom(){this.isHost&&this.broadcast(this.roomPacket()),this.changed()}async openPeer(e){this.closed=!1;let t={...Xt.defaultConfig,iceServers:Xt.defaultConfig.iceServers.map(r=>{let o=Array.isArray(r.urls)?r.urls:[r.urls];return{...r,urls:[...o,...o.filter(a=>a.startsWith("turn:")&&!a.includes("?")).map(a=>a+"?transport=tcp")]}})},n=new Rm(e,{debug:1,config:t});this.peer=n;let s=new Promise((r,o)=>{let a=setTimeout(()=>{o(new Error("Ulanish vaqti tugadi. Internetni tekshirib, qayta urinib ko\u2018ring."))},18e3);n.once("open",l=>{clearTimeout(a),this.peer===n&&(this.id=l),r(l)}),n.once("error",l=>{clearTimeout(a),o(new Error(Im[l.type]||"Ulanish xatosi. Qayta urinib ko\u2018ring."))})});return n.on("error",r=>{!this.closed&&this.phase!=="connecting"&&this.error(Im[r.type]||"Ulanish uzildi. Xonaga qayta kiring.")}),n.on("disconnected",()=>{if(!this.closed&&!n.destroyed)try{n.reconnect()}catch{}}),this.heartbeat=setInterval(()=>{this.closed||(this.isHost?this.broadcast(this.roomPacket()):this.hostConnection?.open&&(this.packet(this.hostConnection,{t:"ping",at:Date.now()}),this.lastHost&&Date.now()-this.lastHost>13e3&&this.hostLost()))},1e3),s}async create(e){this.leave(!1);let t=this.sequence;this.phase="connecting",this.isHost=!0,this.code=arguments[1]||RS(),this.changed();try{if(await this.openPeer(Pm+this.code),t!==this.sequence)return null;let n={...si(e,this.id),ready:!0};return this.players.set(this.id,n),this.phase="lobby",this.peer.on("connection",s=>this.accept(s)),this.sendRoom(),this.code}catch(n){return t!==this.sequence||(this.leave(!1),this.error(n.message),this.changed()),null}}async join(e,t){this.leave(!1);let n=this.sequence;if(e=xl(e),e.length!==8)return this.error("Xona kodi 8 ta belgidan iborat."),!1;this.phase="connecting",this.code=e,this.isHost=!1,this.changed();try{if(await this.openPeer(),n!==this.sequence)return!1;this.peer.on("connection",r=>r.close());let s=this.peer.connect(Pm+e,{serialization:"json",reliable:!0,metadata:{v:Oo,profile:si(t,this.id)}});return this.hostConnection=s,s.on("iceStateChanged",r=>console.info("BTS WebRTC guest:",r)),await new Promise((r,o)=>{let a=!1,l=setTimeout(()=>o(new Error("Xonaga ulanib bo\u2018lmadi. Mezbon oynasi ochiq tursin; boshqa tarmoqda ham urinib ko\u2018ring.")),4e4);s.on("data",c=>{if(n===this.sequence){if(c?.t==="error"){clearTimeout(l),o(new Error(String(c.message||"Xonaga kirib bo\u2018lmadi.").slice(0,180)));return}c?.t==="room"&&c.v===Oo?(a=!0,clearTimeout(l),this.receive(c),r()):this.receive(c)}}),s.on("error",()=>{a||(clearTimeout(l),o(new Error("Xonaga ulanishda xato yuz berdi.")))}),s.on("close",()=>{clearTimeout(l),a?!this.closed&&n===this.sequence&&this.hostLost():o(new Error("Mezbon ulanishni yopdi."))})}),!0}catch(s){return n!==this.sequence||(this.leave(!1),this.error(s.message),this.changed()),!1}}accept(e){e.on("iceStateChanged",s=>console.info("BTS WebRTC host:",s)),e.on("open",()=>{let s="";if(e.metadata?.v!==Oo?s="O\u2018yin versiyasi mos emas. Sahifani yangilang.":this.phase!=="lobby"?s="Poyga boshlangan. Keyingi poygada qo\u2018shiling.":this.players.size>=qc?s="Xona to\u2018ldi. Eng ko\u2018pi bilan 4 kishi o\u2018ynaydi.":this.connections.has(e.peer)&&(s="Bu haydovchi allaqachon xonada."),s){this.packet(e,{t:"error",message:s}),setTimeout(()=>e.close(),900);return}this.connections.set(e.peer,e),this.players.set(e.peer,{...si(e.metadata.profile,e.peer),ready:!1}),this.inputs.set(e.peer,{input:{},at:0}),this.sendRoom()});let t=Date.now(),n=0;e.on("data",s=>{if(!this.connections.has(e.peer)||!s||typeof s!="object"||Array.isArray(s))return;let r=Date.now();if(r-t>=1e3&&(t=r,n=0),!(++n>95)){if(s.t==="input")this.inputs.set(e.peer,{input:To(s.input),at:r});else if(s.t==="ready"&&this.phase==="lobby"&&typeof s.ready=="boolean"){let o=this.players.get(e.peer);o&&o.ready!==s.ready&&(o.ready=s.ready,this.sendRoom())}else if(s.t==="ping"&&Number.isFinite(s.at))this.packet(e,{t:"pong",at:s.at,now:r});else if(s.t==="reset"&&this.phase==="racing"){let o=this.states.find(a=>a.id===e.peer);o&&iu(o)}}}),e.on("close",()=>{this.connections.get(e.peer)===e&&(this.connections.delete(e.peer),this.players.delete(e.peer),this.inputs.delete(e.peer),this.states=this.states.filter(s=>s.id!==e.peer),this.sendRoom())}),e.on("error",()=>{})}receive(e){if(!(!e||typeof e!="object"||Array.isArray(e))){if(this.lastHost=Date.now(),e.t==="pong"&&Number.isFinite(e.at)&&Number.isFinite(e.now)){this.rtt=Math.max(0,Date.now()-e.at);let t=e.now-(Date.now()+e.at)/2;this.offset=this.offset*.65+t*.35;return}if(e.t==="room"&&e.v===Oo&&Array.isArray(e.players)&&e.players.length<=qc){if(Number.isInteger(e.track)&&e.track>=0&&e.track<3&&e.track!==ycTrackId&&typeof e.code=="string"){try{localStorage.setItem("yolchi-track",String(e.track)),sessionStorage.setItem("yolchi-step","mode"),sessionStorage.setItem("yc-rejoin",e.code)}catch{}location.hash="room="+e.code,location.reload();return}let t=this.phase;this.players=new Map(e.players.filter(n=>typeof n?.id=="string"&&n.id.length<120).map(n=>[n.id,{...si(n,n.id),ready:n.ready===!0}])),Number.isFinite(e.now)&&!this.rtt&&(this.offset=e.now-Date.now()),["lobby","countdown","racing","finished","paused"].includes(e.phase)&&(this.phase=e.phase),Number.isFinite(e.startAt)&&(this.startAt=e.startAt),e.epoch!==this.epoch&&(this.epoch=e.epoch,this.predict=null),(t!==this.phase||this.phase==="lobby")&&this.changed();return}if(e.t==="state"&&Array.isArray(e.states)&&e.states.length<=qc){if(!e.states.every(r=>typeof r?.id=="string"&&r.id.length<120&&["x","z","yaw","speed","travel","progress","lap","nextGate","finishTime","penalty","steer"].every(o=>Number.isFinite(r[o]))&&Math.abs(r.x)<600&&Math.abs(r.z)<600&&Math.abs(r.speed)<100))return;let n=this.phase;this.states=e.states.map(r=>({...r,...si(r,r.id)})),["countdown","racing","finished","paused"].includes(e.phase)&&(this.phase=e.phase),this.startAt=e.startAt;let s=this.states.find(r=>r.id===this.id);if(s)if(!this.predict||e.epoch!==this.epoch||Math.hypot(s.x-this.predict.x,s.z-this.predict.z)>7)this.predict={...s,hitCooldown:0,resetCooldown:0};else{let r=this.predict.x*.65+s.x*.35,o=this.predict.z*.65+s.z*.35,a=this.predict.yaw+bo(s.yaw-this.predict.yaw)*.38;this.predict={...s,x:r,z:o,yaw:a,hitCooldown:0,resetCooldown:0}}this.epoch=e.epoch,n!==this.phase&&this.changed()}}}hostLost(){this.closed||(this.leave(!1),this.error("Mezbonning ulanishi uzildi. Yangi xona oching yoki qayta qo\u2018shiling."),this.changed())}solo(e){this.leave(!1),this.closed=!1,this.isHost=!0,this.id="solo",this.players.set(this.id,{...si(e,this.id),ready:!0}),(arguments[1]||[]).forEach((b,k)=>this.players.set("bot"+k,{...si(b,"bot"+k),ready:!0})),this.phase="lobby",this.start()}ready(e){if(this.phase==="lobby")if(this.isHost){let t=this.players.get(this.id);t&&(t.ready=e),this.sendRoom()}else this.packet(this.hostConnection,{t:"ready",ready:e})}canStart(){return this.isHost&&this.phase==="lobby"&&this.players.size>=(this.code?2:1)&&[...this.players.values()].every(e=>e.ready)}start(){return this.canStart()?(this.epoch++,this.states=[...this.players.values()].map((e,t)=>Kp(e,t)),this.startAt=Date.now()+4e3,this.firstFinish=0,this.phase="countdown",this.inputs.clear(),this.sendRoom(),this.sendState(),!0):!1}sendState(){this.broadcast({t:"state",states:this.states.map(Jp),phase:this.phase,startAt:this.startAt,now:Date.now(),epoch:this.epoch})}update(e,t){let n=Date.now();if(this.isHost){if(this.phase==="countdown"&&n>=this.startAt&&(this.phase="racing",this.sendRoom()),this.phase==="racing"){this.inputs.set(this.id,{input:To(t),at:n});let s=(n-this.startAt)/1e3;for(let r of this.states){let o=ycBotCfg[r.id]&&!this.code?{input:ycBotInput(r,ycBotCfg[r.id]),at:n}:this.inputs.get(r.id);nu(r,o&&n-o.at<500?o.input:{},e,s)}Zp(this.states),!this.firstFinish&&this.states.some(r=>r.finished)&&(this.firstFinish=n),(this.states.length&&this.states.every(r=>r.finished)||!this.code&&this.states.some(r=>r.id===this.id&&r.finished)||this.firstFinish&&n-this.firstFinish>9e4||s>900)&&(this.phase="finished",this.sendRoom(),this.sendState())}["countdown","racing","paused","finished"].includes(this.phase)&&n-this.lastSend>=50&&(this.lastSend=n,this.sendState())}else this.hostConnection?.open&&(n-this.lastSend>=40&&(this.lastSend=n,this.packet(this.hostConnection,{t:"input",input:To(t)})),this.predict&&this.phase==="racing"&&nu(this.predict,t,e,Math.max(0,(this.now()-this.startAt)/1e3)))}renderStates(){return this.isHost?this.states:this.states.map(e=>e.id===this.id&&this.predict?this.predict:e)}reset(){if(this.phase==="racing")if(this.isHost){let e=this.states.find(t=>t.id===this.id);e&&iu(e)}else this.packet(this.hostConnection,{t:"reset"})}visibility(e){if(!(!this.isHost||!["countdown","racing","paused"].includes(this.phase))){if(e&&this.phase!=="paused")this.resumePhase=this.phase,this.pausedAt=Date.now(),this.phase="paused",this.sendRoom(),this.sendState();else if(!e&&this.phase==="paused"){let t=Date.now()-this.pausedAt;this.startAt+=t,this.firstFinish&&(this.firstFinish+=t),this.phase=this.resumePhase,this.sendRoom(),this.sendState()}}}lobby(){if(this.isHost){this.phase="lobby",this.states=[],this.predict=null;for(let e of this.players.values())e.ready=e.id===this.id;this.sendRoom()}}leave(e=!0){this.sequence++,this.closed=!0,clearInterval(this.heartbeat),this.heartbeat=null;try{this.peer?.destroy()}catch{}this.peer=null,this.hostConnection=null,this.connections.clear(),this.players.clear(),this.inputs.clear(),this.states=[],this.predict=null,this.phase="menu",this.code="",this.id="",this.isHost=!1,this.offset=0,this.rtt=0,this.lastHost=0,this.lastSend=0,e&&this.changed()}};var re=i=>document.getElementById(i),bi={},vl=new Set,Sl=new Map,Lt={name:"Haydovchi",car:"cobalt",color:"#e5e7eb"},Rn,Ee,Lm,Id,Dm=!0,Ld=!1,zm={gentra:"1.5",malibu:"PREMIER \xB7 2019",cobalt:"LTZ \xB7 2014"};try{Lt={...Lt,...si(JSON.parse(localStorage.getItem("bts-racer")||"null")||Lt,"local")}}catch{}function Mi(i,e=!1){if(window.__ycQuiet&&e)return;re("toast").textContent=i,re("toast").classList.toggle("error",e),re("toast").hidden=!1,clearTimeout(Lm),Lm=setTimeout(()=>re("toast").hidden=!0,e?9e3:3500)}function Vm(i,e){if(i!==Lt.car)return;Dm=e==="ready";let t=Pt[i].name;re("model-status").hidden=i==="gentra",re("model-status-text").textContent=e==="ready"?`${t} \xB7 ${zm[i]} \xB7 model tayyor`:e==="loading"?`${t} yuklanmoqda\u2026 Birinchi yuklash biroz vaqt oladi.`:`${t} yuklanmadi. Internetni tekshirib, qayta urinib ko\u2018ring.`,re("retry-model").hidden=e!=="error",re("scene").setAttribute("aria-busy",String(e==="loading"));for(let n of["solo","create","join"])re(n).disabled=!Dm}async function Fo(i,e=[Lt]){if(!Ld){Ld=!0;try{await Rn.prepareCars(e),await i()}catch(t){console.error("Car model loading:",t),Mi("Mashina modeli yuklanmadi. Internetni tekshirib, qayta urinib ko\u2018ring.",!0)}finally{Ld=!1}}}function xs(){Lt=si({...Lt,name:re("nickname").value},"local"),re("nickname").value=Lt.name;try{localStorage.setItem("bts-racer",JSON.stringify(Lt))}catch{}return Lt}function ln(i,e,t){let n=document.createElement(i);return n.textContent=e,t&&(n.className=t),n}function Hm(i,e=1){if(!Number.isFinite(i))return"\u2014";let t=Math.floor(Math.max(0,i)/60),n=Math.max(0,i)%60;return String(t).padStart(2,"0")+":"+n.toFixed(e).padStart(e?3+e:2,"0")}function Bo(){vl.clear(),Sl.clear();for(let i of Object.keys(bi))bi[i]=!1;document.querySelectorAll("[data-drive]").forEach(i=>i.classList.remove("pressed"))}function PS(){let i=(...e)=>e.some(t=>vl.has(t));Object.assign(bi,{gas:i("KeyW","ArrowUp"),reverse:i("KeyS","ArrowDown"),left:i("KeyA","ArrowLeft"),right:i("KeyD","ArrowRight"),brake:i("Space")});for(let e of Sl.values())bi[e]=!0;if(re("help-dialog").open)for(let e of Object.keys(bi))bi[e]=!1;return bi}function yl(){for(let i of document.querySelectorAll("[data-car]")){let e=i.dataset.car===Lt.car;i.classList.toggle("selected",e),i.setAttribute("aria-pressed",String(e))}for(let i of document.querySelectorAll("[data-color]")){let e=i.dataset.color===Lt.color;i.classList.toggle("selected",e),i.setAttribute("aria-pressed",String(e))}re("car-title").replaceChildren(document.createTextNode(Lt.car.toUpperCase()),ln("span",zm[Lt.car])),re("car-tag").textContent=Lt.car==="gentra"?"Kundalik klassika.":`Siz yuborgan ${Pt[Lt.car].name} modeli.`,Rn.setProfile(Lt),Lt.car==="gentra"&&Vm("gentra","ready")}function IS(){let i=re("players");i.replaceChildren();let e=0;for(let n of Ee.players.values()){e++;let s=document.createElement("li"),r=ln("span",String(e).padStart(2,"0"),"player-avatar");r.style.setProperty("--car-color",n.color);let o=document.createElement("div");o.className="player-info",o.append(ln("b",n.name+(n.id===Ee.id?" \xB7 Siz":"")),ln("small",Pt[n.car].name+(n.id.startsWith("bts-drive-v3-")?" \xB7 Mezbon":""))),s.append(r,o,ln("span",n.ready?"TAYYOR \u2713":"KUTYAPTI","ready-status"+(n.ready?" ready":""))),i.append(s)}e<4&&i.append(ln("li",`${4-e} ta bo\u2018sh joy \xB7 do\u2018stlaringizni chaqiring`,"empty-player")),re("player-count").textContent=`${e} / 4`;let t=Ee.players.get(Ee.id);re("ready").textContent=t?.ready?"Tayyor \u2713 \xB7 bekor qilish":"Tayyor",re("ready").setAttribute("aria-pressed",String(!!t?.ready)),re("start").hidden=!Ee.isHost,re("start").disabled=!Ee.canStart(),re("lobby-hint").textContent=Ee.players.size<2?"Do\u2018stingizni kutyapmiz\u2026":Ee.canStart()?"Hamma tayyor. Start berishingiz mumkin.":Ee.isHost?"Hamma haydovchi \xABTayyor\xBBni bossin.":"Tayyor bo\u2018lsangiz, mezbon start beradi."}function LS(){let i=su(Ee.states);re("result-list").replaceChildren(),i.forEach((t,n)=>{let s=document.createElement("li"),r=document.createElement("div");r.className="player-info",r.append(ln("b",t.name+(t.id===Ee.id?" \xB7 Siz":"")),ln("small",Pt[t.car].name));let o=ln("div",t.finished?Hm(t.finishTime,2):"\u2014","result-time");o.append(ln("small",t.finished?t.penalty?`+${t.penalty} s jarima bilan`:"FINISH":`${Math.min(t.lap,Gi)} / ${Gi} aylana`)),s.append(ln("span",String(n+1).padStart(2,"0"),"place"),r,o),re("result-list").append(s)});let e=i[0]?.id===Ee.id&&i[0]?.finished;re("result-title").textContent=e?Ee.code?"G\u2018alaba sizniki!":"Aylanalar yakunlandi!":"Poyga yakunlandi.",re("rematch").hidden=!Ee.isHost,re("rematch-wait").hidden=Ee.isHost}function Nm(){let i=Ee.phase;document.body.dataset.phase=i,re("garage").hidden=!["menu","connecting","lobby"].includes(i),re("menu-panel").hidden=i==="lobby",re("lobby").hidden=i!=="lobby",re("connecting").hidden=i!=="connecting",re("hud").hidden=!["countdown","racing","paused","finished"].includes(i),re("results").hidden=i!=="finished",re("pause-notice").hidden=i!=="paused",i==="lobby"&&(re("room-code").textContent=Ee.code,IS()),i==="finished"&&LS(),i!=="racing"&&Bo(),["countdown","racing"].includes(i)&&(document.activeElement?.blur(),re("race-mode").textContent=Ee.code?"DO\u2018STLAR BILAN POYGA":"BOTLAR BILAN POYGA"),i==="menu"&&(Rn.lastTarget=null,re("invite-link").hidden=!0)}function Um(){Ee.leave(),Bo()}function Om(){Rn.mode(Rn.cameraMode+1),Mi(["Tashqi kamera","Kapot kamerasi","Yuqoridan ko\u2018rinish"][Rn.cameraMode])}function Fm(){Rn.lights=!Rn.lights,re("lights").setAttribute("aria-pressed",String(Rn.lights))}function Bm(){Bo(),re("help-dialog").showModal(),Ee.code||Ee.visibility(!0)}function km(){re("help-dialog").open&&re("help-dialog").close(),!document.hidden&&!Ee.code&&Ee.visibility(!1)}var Dd=class{constructor(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.osc=this.ctx.createOscillator(),this.overtone=this.ctx.createOscillator(),this.gain=this.ctx.createGain(),this.filter=this.ctx.createBiquadFilter(),this.osc.type="sawtooth",this.overtone.type="triangle",this.filter.type="lowpass",this.filter.frequency.value=450,this.osc.connect(this.filter),this.overtone.connect(this.filter),this.filter.connect(this.gain),this.gain.connect(this.ctx.destination),this.gain.gain.value=0,this.osc.start(),this.overtone.start(),this.enabled=!1}toggle(){return this.enabled=!this.enabled,this.ctx.resume(),this.enabled}update(e,t){let n=this.ctx.currentTime,s=e?Math.abs(e.speed)%11/11:0;this.osc.frequency.setTargetAtTime(45+s*60,n,.08),this.overtone.frequency.setTargetAtTime(90+s*120,n,.08),this.gain.gain.setTargetAtTime(this.enabled&&t&&!document.hidden?.022+(bi.gas?.018:0):0,n,.08)}};try{let a=function(h,u){if(e.clearRect(0,0,340,260),e.save(),e.translate(176,133),e.scale(.92,.92),e.lineJoin="round",e.beginPath(),vt.forEach((d,f)=>f?e.lineTo(d.x,d.z):e.moveTo(d.x,d.z)),e.closePath(),e.strokeStyle="#597974",e.lineWidth=9,e.stroke(),u&&!u.finished){let d=ds[u.nextGate];d&&(e.fillStyle="#d9ff75",e.beginPath(),e.arc(d.x,d.z,5,0,Math.PI*2),e.fill())}for(let d of h)e.beginPath(),e.arc(d.x,d.z,d.id===Ee.id?6:4,0,Math.PI*2),e.fillStyle=d.id===Ee.id?"#d9ff75":d.color,e.fill(),e.strokeStyle="#172a2d",e.lineWidth=2,e.stroke();e.restore()},l=function(h){let u=h.find(m=>m.id===Ee.id),d=Math.max(0,(Ee.now()-Ee.startAt)/1e3);u&&(re("lap").textContent=String(Math.min(Gi,u.lap+1)),re("speed").textContent=String(Math.round(Math.abs(u.speed)*3.6)),re("gear").textContent=u.speed<-.4?"R":u.speed<.6?"N":String(Math.min(6,1+Math.floor(u.speed/10))),re("current-car").textContent=u.car.toUpperCase(),re("revs").style.width=Mo(Math.abs(u.speed)%11/11*85+15,3,100)+"%",re("driving-status").textContent=u.finished?"FINISH \u2713":Ee.phase==="countdown"?"STARTNI KUTING":u.offroad?"TRASSAGA QAYTING":u.penalty?`+${u.penalty} S JARIMA`:ycTrack.name.toUpperCase(),re("race-time").textContent=Hm(u.finished?u.finishTime:d));let f=su(h),g=f.map(m=>m.id+":"+m.lap+":"+m.finished).join("|");g!==r&&(r=g,re("leaderboard").replaceChildren(),f.forEach((m,p)=>{let A=document.createElement("li");m.id===Ee.id&&(A.className="self");let C=document.createElement("i");C.style.setProperty("--car-color",m.color),A.append(ln("span",String(p+1).padStart(2,"0")),C,ln("b",m.name),ln("small",m.finished?"FINISH":`${Math.min(m.lap+1,Gi)}/${Gi}`)),re("leaderboard").append(A)})),re("ping").textContent=Ee.code?Ee.isHost?"MEZBON":Ee.rtt+" ms":"SOLO";let _="";Ee.phase==="countdown"?_=String(Math.max(1,Math.ceil((Ee.startAt-Ee.now())/1e3))):Ee.phase==="racing"&&d<.85&&(_="GAZ!"),_!==o&&(o=_,re("countdown").replaceChildren(),_&&re("countdown").append(ln("small",_==="GAZ!"?"OMAD!":"START"),document.createTextNode(_))),a(h,u),Id?.update(u,Ee.phase==="racing")},c=function(h){let u=Math.min(.12,(h-t)/1e3);t=h,n+=u,PS();let d=0;for(;n>=1/60&&d++<8;)Ee.update(1/60,bi),n-=1/60;let f=Ee.renderStates();Rn.draw(f,Ee.id,Ee.phase,u,h/1e3),h-s>70&&(s=h,l(f)),requestAnimationFrame(c)};Rn=new jc(re("scene"),{modelStatus:Vm,modelError:()=>Mi("Raqibning mashina modeli yuklanmadi. Internet aloqasini tekshiring.",!0)}),Ee=new _l({change:Nm,error:h=>Mi(h,!0)}),re("nickname").value=Lt.name,yl(),Rn.fallback&&(re("view-note").textContent="Bu brauzerda yengil 2D ko\u2018rinish yoqildi. 3D uchun qurilmangizda apparat tezlatishi yoqilgan Chrome yoki Edge\u2019dan foydalaning. Malibu va Cobalt \u2014 siz yuborgan modellar."),re("track-path").setAttribute("d",vt.map((h,u)=>`${u?"L":"M"}${h.x.toFixed(1)},${h.z.toFixed(1)}`).join(" ")+" Z"),re("track-length").textContent=(fs/1e3).toFixed(2)+" km",document.querySelectorAll("[data-car]").forEach(h=>h.addEventListener("click",()=>{Lt.car=h.dataset.car,xs(),yl()})),document.querySelectorAll("[data-color]").forEach(h=>h.addEventListener("click",()=>{Lt.color=h.dataset.color,xs(),yl()})),re("nickname").addEventListener("change",xs),re("retry-model").onclick=()=>yl(),re("solo").onclick=()=>{let B=ycBots();Fo(()=>Ee.solo(xs(),B),[Lt,...B])},window.__ycNet=()=>Ee,re("create").onclick=()=>Fo(()=>Ee.create(xs())),window.__ycQuick=()=>Fo(async()=>{let Q=["TEZKR222","TEZKR333","TEZKR444"],p=xs();window.__ycQuiet=!0;try{for(let c of Q)if(await Ee.join(c,p)){window.__ycQuiet=!1,Mi("Tezkor xonaga qo\u2018shildingiz. Mezbon startni bosadi.");return}for(let c of Q)if(await Ee.create(p,c)){window.__ycQuiet=!1,Mi("Tezkor xona ochildi \u2014 raqiblar kutilmoqda. Yetarli bo\u2018lganda START bosing.");return}}finally{window.__ycQuiet=!1}Mi("Tezkor xonalar band. Birozdan so\u2018ng urinib ko\u2018ring.",!0)}),re("join").onclick=()=>Fo(()=>Ee.join(re("room-input").value,xs())),re("room-input").addEventListener("input",()=>{re("room-input").value=xl(re("room-input").value)}),re("room-input").addEventListener("keydown",h=>{h.key==="Enter"&&re("join").click()});let i=xl(new URLSearchParams(location.hash.slice(1)).get("room"));i.length===8&&(()=>{try{if(sessionStorage.getItem("yc-rejoin")===i){sessionStorage.removeItem("yc-rejoin"),re("room-input").value=i,setTimeout(()=>re("join").click(),700);return!0}}catch{}})()||i.length===8&&(re("room-input").value=i,Mi("Xona kodi kiritildi. Ismingiz va mashinani tanlab, \xABQo\u2018shilish\xBBni bosing.")),re("cancel").onclick=Um;for(let h of["leave-lobby","leave-results","exit-race"])re(h).onclick=Um;re("ready").onclick=()=>Fo(()=>Ee.ready(!Ee.players.get(Ee.id)?.ready),[...Ee.players.values()]),re("start").onclick=()=>Fo(()=>Ee.start(),[...Ee.players.values()]),re("rematch").onclick=()=>Ee.code?Ee.lobby():Ee.solo(xs()),re("copy").onclick=async()=>{let h=new URL(location.href);h.hash="room="+Ee.code,h.search="";try{await navigator.clipboard.writeText(h.href),Mi("Taklif havolasi nusxalandi. Do\u2018stlaringizga yuboring.")}catch{re("invite-link").hidden=!1,re("invite-link").value=h.href,re("invite-link").select(),Mi("Havolani nusxalab, do\u2018stlaringizga yuboring.")}},re("camera").onclick=Om,re("lights").onclick=Fm,re("reset").onclick=()=>{Ee.phase==="racing"&&(Ee.reset(),Mi("Yo\u2018lga qaytish: +5 soniya jarima."))},re("help").onclick=Bm,re("close-help").onclick=km,re("help-dialog").addEventListener("cancel",h=>{h.preventDefault(),km()}),re("sound").onclick=()=>{try{Id??=new Dd,re("sound").setAttribute("aria-pressed",String(Id.toggle()))}catch{Mi("Bu brauzerda ovoz yoqilmadi.",!0)}},addEventListener("keydown",h=>{if(!(h.target instanceof HTMLInputElement||h.target instanceof HTMLTextAreaElement)){if(["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(h.code)){["racing","countdown"].includes(Ee.phase)&&!re("help-dialog").open&&(h.preventDefault(),vl.add(h.code));return}h.repeat||(h.code==="KeyC"&&Om(),h.code==="KeyL"&&Fm(),h.code==="KeyR"&&re("reset").click(),h.code==="Escape"&&!re("help-dialog").open&&Bm())}}),addEventListener("keyup",h=>vl.delete(h.code)),addEventListener("blur",Bo),document.addEventListener("visibilitychange",()=>{Bo(),Ee.visibility(document.hidden)}),addEventListener("pagehide",()=>Ee.leave(!1));for(let h of document.querySelectorAll("[data-drive]")){h.addEventListener("pointerdown",u=>{u.preventDefault(),!(Ee.phase!=="racing"&&Ee.phase!=="countdown")&&(h.setPointerCapture(u.pointerId),Sl.set(u.pointerId,h.dataset.drive),h.classList.add("pressed"))});for(let u of["pointerup","pointercancel","lostpointercapture"])h.addEventListener(u,d=>{Sl.delete(d.pointerId),h.classList.remove("pressed")})}let e=re("minimap").getContext("2d"),t=performance.now(),n=0,s=0,r="",o="";Nm(),requestAnimationFrame(c)}catch(i){console.error("BTS Drive Club:",i),re("fatal").hidden=!1}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
