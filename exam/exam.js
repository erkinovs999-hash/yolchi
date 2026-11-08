var ed=0,Pc=1,td=2;var na=1,Uo=2,js=3,jn=0,Bt=1,Dt=2,Qn=0,Qs=1,Lc=2,Nc=3,Dc=4,nd=5;var ss=100,id=101,sd=102,rd=103,ad=104,od=200,ld=201,cd=202,hd=203,Uc=204,Fc=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,_d=212,xd=213,yd=214,to=0,no=1,io=2,Ds=3,so=4,ro=5,ao=6,oo=7,Fo=0,vd=1,Md=2,Un=0,Oc=1,Bc=2,zc=3,ia=4,kc=5,Gc=6,Vc=7,yc="attached",Sd="detached",Hc=300,Di=301,rs=302,Oo=303,Bo=304,sa=306,qn=1e3,xn=1001,Ci=1002,wt=1003,zo=1004;var as=1005;var At=1006,er=1007;var Fn=1008;var an=1009,Wc=1010,Xc=1011,tr=1012,ko=1013,On=1014,fn=1015,Bn=1016,Go=1017,Vo=1018,nr=1020,qc=35902,Yc=35899,Kc=1021,Zc=1022,pn=1023,Yn=1026,Ui=1027,Ho=1028,Wo=1029,Fi=1030,Xo=1031;var qo=1033,ra=33776,aa=33777,oa=33778,la=33779,Yo=35840,Ko=35841,Zo=35842,Jo=35843,$o=36196,jo=37492,Qo=37496,el=37488,tl=37489,ca=37490,nl=37491,il=37808,sl=37809,rl=37810,al=37811,ol=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,_l=36492,xl=36494,yl=36495,vl=36283,Ml=36284,ha=36285,Sl=36286;var Yi=2300,Ki=2301,ja=2302,vc=2303,Mc=2400,Sc=2401,bc=2402,bd=2500;var Jc=0,ua=1,ir=2,Td=3200;var da=0,wd=1,xi="",yt="srgb",Zt="srgb-linear",Rr="linear",rt="srgb";var Qa=7680;var Ad=519,Ed=512,Rd=513,Cd=514,bl=515,Id=516,Pd=517,Tl=518,Ld=519,$c=35044;var jc="300 es",Ln=2e3,Us=2001;function np(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){let i=Fs("canvas");return i.style.display="block",i}var pu={},Os=null;function Cr(...i){let e="THREE."+i.shift();Os?Os("log",e,...i):console.log(e,...i)}function Dd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Dd(i);let e="THREE."+i.shift();if(Os)Os("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=Dd(i);let e="THREE."+i.shift();if(Os)Os("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){let e=i.join(" ");e in pu||(pu[e]=!0,Ce(...i))}function Ud(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Fd={[to]:no,[io]:ao,[so]:oo,[Ds]:ro,[no]:to,[ao]:io,[oo]:so,[ro]:Ds},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=1234567,Tr=Math.PI/180,Zi=180/Math.PI;function Nn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Qc(i,e){return(i%e+e)%e}function sp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rp(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function ap(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function op(i,e=1){return e-Math.abs(Qc(i,e*2)-e)}function lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function up(i,e){return i+Math.random()*(e-i)}function dp(i){return i*(.5-Math.random())}function fp(i){i!==void 0&&(mu=i);let e=mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(i){return i*Tr}function mp(i){return i*Zi}function gp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _p(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sr={DEG2RAD:Tr,RAD2DEG:Zi,generateUUID:Nn,clamp:Ze,euclideanModulo:Qc,mapLinear:sp,inverseLerp:rp,lerp:wr,damp:ap,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:hp,randFloat:up,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:_p,floorPowerOfTwo:xp,setQuaternionFromProperEuler:yp,normalize:at,denormalize:Pn},Se=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),R=Math.sin(S);p=Math.sin(p*S)/R,o=Math.sin(o*S)/R,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+y*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+y*o;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new D,gu=new un,ze=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],S=s[1],R=s[4],v=s[7],M=s[2],T=s[5],C=s[8];return r[0]=a*y+o*S+c*M,r[3]=a*m+o*R+c*T,r[6]=a*p+o*v+c*C,r[1]=l*y+h*S+u*M,r[4]=l*m+h*R+u*T,r[7]=l*p+h*v+u*C,r[2]=d*y+f*S+g*M,r[5]=d*m+f*R+g*T,r[8]=d*p+f*v+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new ze,_u=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){let i={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zt]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:_u,fromXYZ:xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}var Ke=vp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=Fs("canvas")),ys.width=e.width,ys.height=e.height;let s=ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mp=0,Bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var Sp=0,Zl=new D,Lt=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xn,s=xn,r=At,a=Fn,o=pn,c=an,l=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Nn(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ci:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ci:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Hc;Lt.DEFAULT_ANISOTROPY=1;var ot=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,v=(f+1)/2,M=(p+1)/2,T=(h+d)/4,C=(u+y)/4,_=(g+m)/4;return R>v&&R>M?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=C/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},co=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Lt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends co{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ir=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ho=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,y,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,Tp)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Si.crossVectors(n,cn),Si.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Si.crossVectors(n,cn)),Si.normalize(),Ea.crossVectors(cn,Si),s[0]=Si.x,s[4]=Ea.x,s[8]=cn.x,s[1]=Si.y,s[5]=Ea.y,s[9]=cn.y,s[2]=Si.z,s[6]=Ea.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],R=n[7],v=n[11],M=n[15],T=s[0],C=s[4],_=s[8],A=s[12],I=s[1],O=s[5],F=s[9],L=s[13],w=s[2],E=s[6],N=s[10],U=s[14],H=s[3],G=s[7],q=s[11],$=s[15];return r[0]=a*T+o*I+c*w+l*H,r[4]=a*C+o*O+c*E+l*G,r[8]=a*_+o*F+c*N+l*q,r[12]=a*A+o*L+c*U+l*$,r[1]=h*T+u*I+d*w+f*H,r[5]=h*C+u*O+d*E+f*G,r[9]=h*_+u*F+d*N+f*q,r[13]=h*A+u*L+d*U+f*$,r[2]=g*T+y*I+m*w+p*H,r[6]=g*C+y*O+m*E+p*G,r[10]=g*_+y*F+m*N+p*q,r[14]=g*A+y*L+m*U+p*$,r[3]=S*T+R*I+v*w+M*H,r[7]=S*C+R*O+v*E+M*G,r[11]=S*_+R*F+v*N+M*q,r[15]=S*A+R*L+v*U+M*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=c*f-l*d,R=o*f-l*u,v=o*d-c*u,M=a*f-l*h,T=a*d-c*h,C=a*u-o*h;return t*(y*S-m*R+p*v)-n*(g*S-m*M+p*T)+s*(g*R-y*M+p*C)-r*(g*v-y*T+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*o-n*a,R=t*c-s*a,v=t*l-r*a,M=n*c-s*o,T=n*l-r*o,C=s*l-r*c,_=h*y-u*g,A=h*m-d*g,I=h*p-f*g,O=u*m-d*y,F=u*p-f*y,L=d*p-f*m,w=S*L-R*F+v*O+M*I-T*A+C*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return e[0]=(o*L-c*F+l*O)*E,e[1]=(s*F-n*L-r*O)*E,e[2]=(y*C-m*T+p*M)*E,e[3]=(d*T-u*C-f*M)*E,e[4]=(c*I-a*L-l*A)*E,e[5]=(t*L-s*I+r*A)*E,e[6]=(m*v-g*C-p*R)*E,e[7]=(h*C-d*v+f*R)*E,e[8]=(a*F-o*I+l*_)*E,e[9]=(n*I-t*F-r*_)*E,e[10]=(g*T-y*v+p*S)*E,e[11]=(u*v-h*T-f*S)*E,e[12]=(o*A-a*O-c*_)*E,e[13]=(t*O-n*A+s*_)*E,e[14]=(y*R-g*M-m*S)*E,e[15]=(h*M-u*R+d*S)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,S=c*l,R=c*h,v=c*u,M=n.x,T=n.y,C=n.z;return s[0]=(1-(y+p))*M,s[1]=(f+v)*M,s[2]=(g-R)*M,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+R)*C,s[9]=(m-S)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),c=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let l=1/a,h=1/o,u=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Ln,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Us)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ln,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Ln)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Us)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vs=new D,En=new Fe,bp=new D(0,0,0),Tp=new D(1,1,1),Si=new D,Ea=new D,cn=new D,yu=new Fe,vu=new un,Zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wp=0,Mu=new D,Ms=new un,ii=new Fe,Ra=new D,gr=new D,Ap=new D,Ep=new un,Su=new D(1,0,0),bu=new D(0,1,0),Tu=new D(0,0,1),wu={type:"added"},Rp={type:"removed"},Ss={type:"childadded",child:null},Jl={type:"childremoved",child:null},dt=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Zn,n=new un,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(gr,Ra,this.up):ii.lookAt(Ra,gr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ii),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rp),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new D(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cp={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function $l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Qc(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$l(a,r,e+1/3),this.g=$l(a,r,e),this.b=$l(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Ke.workingToColorSpace(Gt.copy(this),e),Math.round(Ze(Gt.r*255,0,255))*65536+Math.round(Ze(Gt.g*255,0,255))*256+Math.round(Ze(Gt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Gt.copy(this),t);let n=Gt.r,s=Gt.g,r=Gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=yt){Ke.workingToColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,s=Gt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Ca);let n=wr(bi.h,Ca.h,t),s=wr(bi.s,Ca.s,t),r=wr(bi.l,Ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Ne;Ne.NAMES=Od;var Lr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ji=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new D,si=new D,jl=new D,ri=new D,bs=new D,Ts=new D,Au=new D,Ql=new D,ec=new D,tc=new D,nc=new ot,ic=new ot,sc=new ot,Ri=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),si.subVectors(n,t),jl.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(si),c=Rn.dot(jl),l=si.dot(si),h=si.dot(jl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return nc.setScalar(0),ic.setScalar(0),sc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,n),sc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nc,r.x),a.addScaledVector(ic,r.y),a.addScaledVector(sc,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),si.subVectors(e,t),Rn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Rn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),Ts.subVectors(r,n),Ql.subVectors(e,n);let c=bs.dot(Ql),l=Ts.dot(Ql);if(c<=0&&l<=0)return t.copy(n);ec.subVectors(e,s);let h=bs.dot(ec),u=Ts.dot(ec);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(bs,a);tc.subVectors(e,r);let f=bs.dot(tc),g=Ts.dot(tc);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ts,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Au.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Au,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Pa.subVectors(this.max,_r),ws.subVectors(e.a,_r),As.subVectors(e.b,_r),Es.subVectors(e.c,_r),Ti.subVectors(As,ws),wi.subVectors(Es,As),Vi.subVectors(ws,Es);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Vi.z,Vi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Vi.z,0,-Vi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Vi.y,Vi.x,0];return!rc(t,ws,As,Es,Pa)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,ws,As,Es,Pa))?!1:(La.crossVectors(Ti,wi),t=[La.x,La.y,La.z],rc(t,ws,As,Es,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ai=[new D,new D,new D,new D,new D,new D,new D,new D],Cn=new D,Ia=new Vt,ws=new D,As=new D,Es=new D,Ti=new D,wi=new D,Vi=new D,_r=new D,Pa=new D,La=new D,Hi=new D;function rc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=e.dot(Hi),l=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var It=new D,Na=new Se,Ip=0,Pt=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pp=new Vt,xr=new D,ac=new D,tn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(ac)),this.expandByPoint(xr.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lp=0,_n=new Fe,oc=new dt,Rs=new D,hn=new Vt,yr=new Vt,Ot=new D,lt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?Dr:Nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(hn.min,yr.min),hn.expandByPoint(Ot),Ot.addVectors(hn.max,yr.max),hn.expandByPoint(Ot)):(hn.expandByPoint(yr.min),hn.expandByPoint(yr.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ot.fromBufferAttribute(o,l),c&&(Rs.fromBufferAttribute(e,l),Ot.add(Rs)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new D,c[_]=new D;let l=new D,h=new D,u=new D,d=new Se,f=new Se,g=new Se,y=new D,m=new D;function p(_,A,I){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,I),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let O=1/(f.x*g.y-g.x*f.y);isFinite(O)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(O),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(O),o[_].add(y),o[A].add(y),o[I].add(y),c[_].add(m),c[A].add(m),c[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,A=S.length;_<A;++_){let I=S[_],O=I.start,F=I.count;for(let L=O,w=O+F;L<w;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let R=new D,v=new D,M=new D,T=new D;function C(_){M.fromBufferAttribute(s,_),T.copy(M);let A=o[_];R.copy(A),R.sub(M.multiplyScalar(M.dot(A))).normalize(),v.crossVectors(T,A);let O=v.dot(c[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,O)}for(let _=0,A=S.length;_<A;++_){let I=S[_],O=I.start,F=I.count;for(let L=O,w=O+F;L<w;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Pt(d,h,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Kt=new D,Gs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lc=new D,Np=new D,Dp=new ze,In=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=lc.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dp.getNormalMatrix(e),s=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Up=0,Jt=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Qs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new In().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var oi=new D,cc=new D,Da=new D,Ua=new D,$i=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){cc.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Ua.copy(this.origin).sub(cc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Da),o=Ua.dot(this.direction),c=-Ua.dot(Da),l=Ua.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cc).addScaledVector(Da,d),f}intersectSphere(e,t){if(e.radius<0)return null;oi.subVectors(e.center,this.origin);let n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,R=n.z-a.z,v=Math.abs(c),M=Math.abs(l),T=Math.abs(h),C,_,A,I,O,F,L,w,E,N,U,H;if(v>=M&&v>=T?(A=c,F=u,E=g,H=p,c>=0?(C=l,_=h,I=d,O=f,L=y,w=m,N=S,U=R):(C=h,_=l,I=f,O=d,L=m,w=y,N=R,U=S)):M>=T?(A=l,F=d,E=y,H=S,l>=0?(C=h,_=c,I=f,O=u,L=m,w=g,N=R,U=p):(C=c,_=h,I=u,O=f,L=g,w=m,N=p,U=R)):(A=h,F=f,E=m,H=R,h>=0?(C=c,_=l,I=u,O=d,L=g,w=y,N=p,U=S):(C=l,_=c,I=d,O=u,L=y,w=g,N=S,U=p)),A===0)return null;let G=C/A,q=_/A,$=1/A,ae=I-G*F,pe=O-q*F,Be=L-G*E,he=w-q*E,we=N-G*H,K=U-q*H,Q=we*he-K*Be,re=ae*K-pe*we,Ue=Be*pe-he*ae;if(s){if(Q<0||re<0||Ue<0)return null}else if((Q<0||re<0||Ue<0)&&(Q>0||re>0||Ue>0))return null;let ye=Q+re+Ue;if(ye===0)return null;let We=$*(Q*F+re*E+Ue*H);return(ye>0?We<0:We>0)?null:this.at(We/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Eu=new Fe,Wi=new $i,Fa=new tn,Ru=new D,Oa=new D,Ba=new D,za=new D,hc=new D,ka=new D,Cu=new D,Ga=new D,Ve=class extends dt{constructor(e=new lt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(hc.fromBufferAttribute(u,e),a?ka.addScaledVector(hc,h):ka.addScaledVector(hc.sub(t),h))}t.add(ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Fa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Fa,Ru)===null||Wi.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(Eu.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,M=R;v<M;v+=3){let T=o.getX(v),C=o.getX(v+1),_=o.getX(v+2);s=Va(this,p,e,n,l,h,u,T,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=o.getX(m),R=o.getX(m+1),v=o.getX(m+2);s=Va(this,a,e,n,l,h,u,S,R,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,M=R;v<M;v+=3){let T=v,C=v+1,_=v+2;s=Va(this,p,e,n,l,h,u,T,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,R=m+1,v=m+2;s=Va(this,a,e,n,l,h,u,S,R,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fp(i,e,t,n,s,r,a,o){let c;if(e.side===Bt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===jn,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:i}}function Va(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Oa),i.getVertexPosition(c,Ba),i.getVertexPosition(l,za);let h=Fp(i,e,t,n,Oa,Ba,za,Cu);if(h){let u=new D;Ri.getBarycoord(Cu,Oa,Ba,za,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,o,c,l,u,new Se)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,o,c,l,u,new Se)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};Ri.getNormal(Oa,Ba,za,d.normal),h.face=d,h.barycoord=u}return h}var vr=new ot,Iu=new ot,Pu=new ot,Op=new ot,Lu=new Fe,Ha=new D,uc=new tn,Nu=new Fe,dc=new $i,Ur=class extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(s),e.ray.intersectsSphere(uc)!==!1&&(Nu.copy(s).invert(),dc.copy(e.ray).applyMatrix4(Nu),!(this.boundingBox!==null&&dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Iu.fromBufferAttribute(s.attributes.skinIndex,e),Pu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(vr.copy(t),t.set(0,0,0,0)):(vr.set(...t,1),t.set(0,0,0)),vr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Pu.getComponent(r);if(a!==0){let o=Iu.getComponent(r);Lu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Op.copy(vr).applyMatrix4(Lu),a)}}return t.isVector4&&(t.w=vr.w),t.applyMatrix4(this.bindMatrixInverse)}},Vs=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hs=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=wt,h=wt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Du=new Fe,Bp=new Fe,Fr=class i{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Bp;Du.multiplyMatrices(o,t[r]),Du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hs(t,e,e,pn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new Vs),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},hi=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new Fe,Uu=new Fe,Wa=[],Fu=new Vt,zp=new Fe,Mr=new Ve,Sr=new tn,ui=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Fu.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Fu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cs),Sr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),e.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Uu.multiplyMatrices(n,Cs),Mr.matrixWorld=Uu,Mr.raycast(e,Wa);for(let a=0,o=Wa.length;a<o;a++){let c=Wa[a];c.instanceId=r,c.object=this,t.push(c)}Wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(s*this.count),s,this.count,Ho,fn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new tn,kp=new Se(.5,.5),Xa=new D,Ws=class{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],R=r[13],v=r[14],M=r[15];if(s[0].setComponents(l-a,f-h,p-g,M-S).normalize(),s[1].setComponents(l+a,f+h,p+g,M+S).normalize(),s[2].setComponents(l+o,f+u,p+y,M+R).normalize(),s[3].setComponents(l-o,f-u,p-y,M-R).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,M-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,M-v).normalize(),t===Ln)s[5].setComponents(l+c,f+d,p+m,M+v).normalize();else if(t===Us)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let t=kp.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xa.x=s.normal.x>0?e.max.x:e.min.x,Xa.y=s.normal.y>0?e.max.y:e.min.y,Xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new D,fo=new D,Ou=new Fe,br=new $i,qa=new tn,fc=new D,Bu=new D,ji=class extends dt{constructor(e=new lt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new Ge(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;Ou.copy(s).invert(),br.copy(e.ray).applyMatrix4(Ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),S=h.getX(y+1),R=Ya(this,e,br,c,p,S,y);R&&t.push(R)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Ya(this,e,br,c,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=Ya(this,e,br,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Ya(this,e,br,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ya(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(uo.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(uo,fo,fc,Bu)>n)return;fc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fc);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var zu=new D,ku=new D,Or=class extends ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zu.fromBufferAttribute(t,s),ku.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zu.distanceTo(ku);e.setAttribute("lineDistance",new Ge(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Br=class extends ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qs=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gu=new Fe,Tc=new $i,Ka=new tn,Za=new D,zr=class extends dt{constructor(e=new lt,t=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Gu.copy(s).invert(),Tc.copy(e.ray).applyMatrix4(Gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=l.getX(g);Za.fromBufferAttribute(u,m),Vu(Za,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Za.fromBufferAttribute(u,g),Vu(Za,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vu(i,e,t,n,s,r,a){let o=Tc.distanceSqToPoint(i);if(o<t){let c=new D;Tc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var kr=class extends Lt{constructor(e=[],t=Di,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qi=class extends Lt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ii=class extends Lt{constructor(e,t,n=On,s,r,a,o=wt,c=wt,l,h=Yn,u=1){if(h!==Yn&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},po=class extends Ii{constructor(e,t=On,n=Di,s,r,a=wt,o=wt,c,l=Yn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gr=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$t=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function g(y,m,p,S,R,v,M,T,C,_,A){let I=v/C,O=M/_,F=v/2,L=M/2,w=T/2,E=C+1,N=_+1,U=0,H=0,G=new D;for(let q=0;q<N;q++){let $=q*O-L;for(let ae=0;ae<E;ae++){let pe=ae*I-F;G[y]=pe*S,G[m]=$*R,G[p]=w,l.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[p]=T>0?1:-1,h.push(G.x,G.y,G.z),u.push(ae/C),u.push(1-q/_),U+=1}}for(let q=0;q<_;q++)for(let $=0;$<C;$++){let ae=d+$+E*q,pe=d+$+E*(q+1),Be=d+($+1)+E*(q+1),he=d+($+1)+E*q;c.push(ae,pe,he),c.push(pe,Be,he),H+=6}o.addGroup(f,H,A),f+=H,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Vr=class i extends lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,y=s+1,m=new D,p=new D;for(let S=0;S<=g;S++){let R=0,v=0,M=0,T=0;if(S<=n){let A=S/n,I=A*Math.PI/2;v=-h-e*Math.cos(I),M=e*Math.sin(I),T=-e*Math.cos(I),R=A*u}else if(S<=n+r){let A=(S-n)/r;v=-h+A*t,M=e,T=0,R=u+A*d}else{let A=(S-n-r)/n,I=A*Math.PI/2;v=h+e*Math.sin(I),M=e*Math.cos(I),T=e*Math.sin(I),R=u+d+A*u}let C=Math.max(0,Math.min(1,R/f)),_=0;S===0?_=.5/s:S===g&&(_=-.5/s);for(let A=0;A<=s;A++){let I=A/s,O=I*Math.PI*2,F=Math.sin(O),L=Math.cos(O);p.x=-M*L,p.y=v,p.z=M*F,o.push(p.x,p.y,p.z),m.set(-M*L,T,M*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(I+_,C)}if(S>0){let A=(S-1)*y;for(let I=0;I<s;I++){let O=A+I,F=A+I+1,L=S*y+I,w=S*y+I+1;a.push(O,F,L),a.push(F,w,L)}}}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},es=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new D,h=new Se;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Dn=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;S(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function S(){let v=new D,M=new D,T=0,C=(t-e)/n;for(let _=0;_<=r;_++){let A=[],I=_/r,O=I*(t-e)+e;for(let F=0;F<=s;F++){let L=F/s,w=L*c+o,E=Math.sin(w),N=Math.cos(w);M.x=O*E,M.y=-I*n+m,M.z=O*N,u.push(M.x,M.y,M.z),v.set(E,C,N).normalize(),d.push(v.x,v.y,v.z),f.push(L,1-I),A.push(g++)}y.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let I=y[A][_],O=y[A+1][_],F=y[A+1][_+1],L=y[A][_+1];(e>0||A!==0)&&(h.push(I,O,L),T+=3),(t>0||A!==r-1)&&(h.push(O,F,L),T+=3)}l.addGroup(p,T,0),p+=T}function R(v){let M=g,T=new Se,C=new D,_=0,A=v===!0?e:t,I=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),g++;let O=g;for(let F=0;F<=s;F++){let w=F/s*c+o,E=Math.cos(w),N=Math.sin(w);C.x=A*N,C.y=m*I,C.z=A*E,u.push(C.x,C.y,C.z),d.push(0,I,0),T.x=E*.5+.5,T.y=N*.5*I+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){let L=M+F,w=O+F;v===!0?h.push(w,w+1,L):h.push(w+1,w,L),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ys=class i extends Dn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let R=new D,v=new D,M=new D;for(let T=0;T<t.length;T+=3)f(t[T+0],R),f(t[T+1],v),f(t[T+2],M),c(R,v,M,S)}function c(S,R,v,M){let T=M+1,C=[];for(let _=0;_<=T;_++){C[_]=[];let A=S.clone().lerp(v,_/T),I=R.clone().lerp(v,_/T),O=T-_;for(let F=0;F<=O;F++)F===0&&_===T?C[_][F]=A:C[_][F]=A.clone().lerp(I,F/O)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){let I=Math.floor(A/2);A%2===0?(d(C[_][I+1]),d(C[_+1][I]),d(C[_][I])):(d(C[_][I+1]),d(C[_+1][I+1]),d(C[_+1][I]))}}function l(S){let R=new D;for(let v=0;v<r.length;v+=3)R.x=r[v+0],R.y=r[v+1],R.z=r[v+2],R.normalize().multiplyScalar(S),r[v+0]=R.x,r[v+1]=R.y,r[v+2]=R.z}function h(){let S=new D;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];let v=m(S)/2/Math.PI+.5,M=p(S)/Math.PI+.5;a.push(v,1-M)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let R=a[S+0],v=a[S+2],M=a[S+4],T=Math.max(R,v,M),C=Math.min(R,v,M);T>.9&&C<.1&&(R<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),M<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,R){let v=S*3;R.x=e[v+0],R.y=e[v+1],R.z=e[v+2]}function g(){let S=new D,R=new D,v=new D,M=new D,T=new Se,C=new Se,_=new Se;for(let A=0,I=0;A<r.length;A+=9,I+=6){S.set(r[A+0],r[A+1],r[A+2]),R.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),T.set(a[I+0],a[I+1]),C.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),M.copy(S).add(R).add(v).divideScalar(3);let O=m(M);y(T,I+0,S,O),y(C,I+2,R,O),y(_,I+4,v,O)}}function y(S,R,v,M){M<0&&S.x===1&&(a[R]=S.x-1),v.x===0&&v.z===0&&(a[R]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Se:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,c=new Fe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},go=class extends Hr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Hu=new D,Wu=new D,pc=new eh,mc=new eh,gc=new eh,Ks=class extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Wu.subVectors(s[0],s[1]).add(s[0]),l=Wu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),pc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),mc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),gc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),mc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),gc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(pc.calc(c),mc.calc(c),gc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Gp(i,e){let t=1-i;return t*t*e}function Vp(i,e){return 2*(1-i)*i*e}function Hp(i,e){return i*i*e}function Ar(i,e,t,n){return Gp(i,e)+Vp(i,t)+Hp(i,n)}function Wp(i,e){let t=1-i;return t*t*t*e}function Xp(i,e){let t=1-i;return 3*t*t*i*e}function qp(i,e){return 3*(1-i)*i*i*e}function Yp(i,e){return i*i*i*e}function Er(i,e,t,n,s){return Wp(i,e)+Xp(i,t)+qp(i,n)+Yp(i,s)}var _o=class extends sn{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(e,s.x,r.x,a.x,o.x),Er(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xo=class extends sn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(e,s.x,r.x,a.x,o.x),Er(e,s.y,r.y,a.y,o.y),Er(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yo=class extends sn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends sn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends sn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,s.x,r.x,a.x),Ar(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends sn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ar(e,s.x,r.x,a.x),Ar(e,s.y,r.y,a.y),Ar(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Xu(o,c.x,l.x,h.x,u.x),Xu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Kp=Object.freeze({__proto__:null,ArcCurve:go,CatmullRomCurve3:Ks,CubicBezierCurve:_o,CubicBezierCurve3:xo,EllipseCurve:Hr,LineCurve:yo,LineCurve3:vo,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:Wr,SplineCurve:So});var Xr=class i extends mo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var di=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let R=0;R<l;R++){let v=R*u-r;g.push(v,-S,0),y.push(0,0,1),m.push(R/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let R=S+l*p,v=S+l*(p+1),M=S+1+l*(p+1),T=S+1+l*p;f.push(R,v,T),f.push(v,M,T)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qr=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new D,g=new Se;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let S=p+m,R=S,v=S+n+1,M=S+n+2,T=S+1;o.push(R,v,T),o.push(v,M,T)}}this.setIndex(o),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Pi=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,d=new D,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let S=[],R=p/n,v=a+R*o,M=e*Math.cos(v),T=Math.sqrt(e*e-M*M),C=0;p===0&&a===0?C=.5/t:p===n&&c===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){let A=_/t,I=s+A*r;u.x=-T*Math.cos(I),u.y=M,u.z=T*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(A+C,1-R),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let R=h[p][S+1],v=h[p][S],M=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(R,v,T),(p!==n-1||c<Math.PI)&&f.push(v,M,T)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zs=class i extends lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new D,f=new D,g=new D;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,R=(s+1)*(y-1)+m,v=(s+1)*y+m;c.push(p,S,v),c.push(S,R,v)}this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Yr=class i extends lt{constructor(e=new Wr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new Se,h=new D,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function y(){for(let R=0;R<t;R++)m(R);m(r===!1?t:0),S(),p()}function m(R){h=e.getPointAt(R/t,h);let v=a.normals[R],M=a.binormals[R];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,_=Math.sin(C),A=-Math.cos(C);c.x=A*v.x+_*M.x,c.y=A*v.y+_*M.y,c.z=A*v.z+_*M.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=t;R++)for(let v=1;v<=s;v++){let M=(s+1)*(R-1)+(v-1),T=(s+1)*R+(v-1),C=(s+1)*R+v,_=(s+1)*(R-1)+v;g.push(M,T,_),g.push(T,C,_)}}function S(){for(let R=0;R<=t;R++)for(let v=0;v<=s;v++)l.x=R/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Kp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(qu(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(qu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=os(i[t]);for(let s in n)e[s]=n[s]}return e}function qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Bd={clone:os,merge:Wt},Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bo=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nt=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ht=class extends Nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Kr=class extends Jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Fo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},To=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wo=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ei(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function eo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function jp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Qp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends Jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,o=2*t-n;break;case bc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sc:a=e,c=2*n-t;break;case bc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,S=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,R=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+S*a[l+M]+R*a[c+M]+v*a[u+M];return r}},Eo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ro=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Co=class extends Jn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[l+g],m=a[c+g],p=f*d+g*2,S=u[p],R=u[p+1],v=e*d+g*2,M=h[v],T=h[v+1],C=tm(n,t,S,M,s);r[g]=zd(C,y,R,T,m)}return r}};function zd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function em(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function tm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=zd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=em(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ei(t,this.TimeBufferType),this.values=Ei(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ei(e.times,Array),values:Ei(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),eo(e.settings)&&(n.settings={inTangents:Ei(e.settings.inTangents,Array),outTangents:Ei(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Co(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Yi:t=this.InterpolantFactoryMethodDiscrete;break;case Ki:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break;case vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Ki;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;eo(this.settings)&&(Ku(this.settings.inTangents,e),Ku(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Oe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Oe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ip(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Oe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,eo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ku(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Ki;var fi=class extends rn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Yi;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="color";var pi=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};pi.prototype.ValueTypeName="number";var Io=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)un.slerpFlat(r,0,a,l-o,a,l,c);return r}},mi=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}};mi.prototype.ValueTypeName="quaternion";mi.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends rn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Yi;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};Li.prototype.ValueTypeName="vector";var Jr=class{constructor(e="",t=-1,n=[],s=bd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(im(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=jp(c);c=Yu(c,1,h),l=Yu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new pi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function nm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pi;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return Zr;case"quaternion":return mi;case"bool":case"boolean":return fi;case"string":return gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function im(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=nm(i.type);if(i.times===void 0){let n=[],s=[];Qp(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),eo(i.settings)&&(t.settings={inTangents:Ei(i.settings.inTangents,Float32Array),outTangents:Ei(i.settings.outTangents,Float32Array)}),t}var Xn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Zu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Zu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Po=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kd=new Po,$n=class{constructor(e){this.manager=e!==void 0?e:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$n.DEFAULT_MATERIAL_NAME="__DEFAULT";var li={},wc=class extends Error{constructor(e,t){super(e),this.response=t}},Js=class extends $n{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:s});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=li[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){S();function S(){u.read().then(({done:R,value:v})=>{if(R)p.close();else{y+=v.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let T=0,C=h.length;T<C;T++){let _=h[T];_.onProgress&&_.onProgress(M)}p.enqueue(v),S()}},R=>{p.error(R)})}}});return new Response(m)}else throw new wc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Xn.add(`file:${e}`,l);let h=li[e];delete li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=li[e];if(h===void 0)throw this.manager.itemError(e),l;delete li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Is=new WeakMap,Lo=class extends $n{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Xn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Is.get(a);u===void 0&&(u=[],Is.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Fs("img");function c(){h(),t&&t(this);let u=Is.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Is.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Xn.remove(`image:${e}`);let d=Is.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var $r=class extends $n{constructor(e){super(e)}load(e,t,n,s){let r=new Lt,a=new Lo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ts=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},jr=class extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_c=new Fe,Ju=new D,$u=new D,$s=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){_c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_c,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Us||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ja=new D,$a=new un,Wn=new D,Qr=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ja,$a,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,$a,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ja,$a,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,$a,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new D,ju=new Se,Qu=new Se,St=class extends Qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,ju,Qu),t.subVectors(Qu,ju)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ac=class extends $s{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ea=class extends ts{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ec=class extends $s{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0}},ns=class extends ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ni=class extends Qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rc=class extends $s{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Rc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var _i=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var xc=new WeakMap,ta=class extends $n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Xn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{xc.has(a)===!0?(s&&s(xc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),xc.set(c,l),Xn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Xn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ps=-90,Ls=1,No=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new St(Ps,Ls,e,t);s.layers=this.layers,this.add(s);let r=new St(Ps,Ls,e,t);r.layers=this.layers,this.add(r);let a=new St(Ps,Ls,e,t);a.layers=this.layers,this.add(a);let o=new St(Ps,Ls,e,t);o.layers=this.layers,this.add(o);let c=new St(Ps,Ls,e,t);c.layers=this.layers,this.add(c);let l=new St(Ps,Ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Do=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nh="\\[\\]\\.:\\/",sm=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",rm="[^"+nh.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",ih),om=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),hm=new RegExp("^"+am+om+lm+cm+"$"),um=["material","materials","bones","map"],Cc=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(e){let t=hm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Cc;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wy=new Float32Array(1);var Ic=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function sh(i,e,t,n){let s=dm(n);switch(t){case Kc:return i*e;case Ho:return i*e/s.components*s.byteLength;case Wo:return i*e/s.components*s.byteLength;case Fi:return i*e*2/s.components*s.byteLength;case Xo:return i*e*2/s.components*s.byteLength;case Zc:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case qo:return i*e*4/s.components*s.byteLength;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:case Jo:return Math.max(i,16)*Math.max(e,8)/4;case Yo:case Zo:return Math.max(i,8)*Math.max(e,8)/2;case $o:case jo:case el:case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:case ca:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _l:case xl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ha:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(i){switch(i){case an:case Wc:return{byteLength:1,components:1};case tr:case Xc:case Bn:return{byteLength:2,components:1};case Go:case Vo:return{byteLength:2,components:4};case On:case ko:case fn:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pm(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gm=`#ifdef USE_ALPHAHASH
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
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bm=`#define PI 3.141592653589793
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
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,km=`vec3 transformedNormal = objectNormal;
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
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
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
#endif`,fg=`uniform sampler2D dfgLUT;
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
}`,pg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_g=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,U0=`#define NORMAL
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
}`,F0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,B0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,V0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:mm,alphahash_pars_fragment:gm,alphamap_fragment:_m,alphamap_pars_fragment:xm,alphatest_fragment:ym,alphatest_pars_fragment:vm,aomap_fragment:Mm,aomap_pars_fragment:Sm,batching_pars_vertex:bm,batching_vertex:Tm,begin_vertex:wm,beginnormal_vertex:Am,bsdfs:Em,iridescence_fragment:Rm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Nm,color_fragment:Dm,color_pars_fragment:Um,color_pars_vertex:Fm,color_vertex:Om,common:Bm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:km,displacementmap_pars_vertex:Gm,displacementmap_vertex:Vm,emissivemap_fragment:Hm,emissivemap_pars_fragment:Wm,colorspace_fragment:Xm,colorspace_pars_fragment:qm,envmap_fragment:Ym,envmap_common_pars_fragment:Km,envmap_pars_fragment:Zm,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:og,envmap_vertex:$m,fog_vertex:jm,fog_pars_vertex:Qm,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:ag,lights_toon_fragment:lg,lights_toon_pars_fragment:cg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:dg,lights_physical_pars_fragment:fg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,lightprobes_pars_fragment:_g,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:Mg,map_fragment:Sg,map_pars_fragment:bg,map_particle_fragment:Tg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Rg,morphcolor_vertex:Cg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Pg,morphtarget_vertex:Lg,normal_fragment_begin:Ng,normal_fragment_maps:Dg,normal_pars_fragment:Ug,normal_pars_vertex:Fg,normal_vertex:Og,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Vg,opaque_fragment:Hg,packing:Wg,premultiplied_alpha_fragment:Xg,project_vertex:qg,dithering_fragment:Yg,dithering_pars_fragment:Kg,roughnessmap_fragment:Zg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:jg,shadowmap_vertex:Qg,shadowmask_pars_fragment:e0,skinbase_vertex:t0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:s0,specularmap_fragment:r0,specularmap_pars_fragment:a0,tonemapping_fragment:o0,tonemapping_pars_fragment:l0,transmission_fragment:c0,transmission_pars_fragment:h0,uv_pars_fragment:u0,uv_pars_vertex:d0,uv_vertex:f0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:_0,backgroundCube_frag:x0,cube_vert:y0,cube_frag:v0,depth_vert:M0,depth_frag:S0,distance_vert:b0,distance_frag:T0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:E0,linedashed_frag:R0,meshbasic_vert:C0,meshbasic_frag:I0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:N0,meshmatcap_frag:D0,meshnormal_vert:U0,meshnormal_frag:F0,meshphong_vert:O0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:k0,meshtoon_vert:G0,meshtoon_frag:V0,points_vert:H0,points_frag:W0,shadow_vert:X0,shadow_frag:q0,sprite_vert:Y0,sprite_frag:K0},me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ti={basic:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Wt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Wt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Wt([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Wt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Wt([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Wt([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Wt([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Wt([me.lights,me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ti.physical={uniforms:Wt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var wl={r:0,b:0,g:0},Z0=new Fe,hf=new ze;hf.set(-1,0,0,0,1,0,0,0,1);function J0(i,e,t,n,s,r){let a=new Ne(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let v=S.backgroundBlurriness>0;R=e.get(R,v)}return R}function g(S){let R=!1,v=f(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),R=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===sa)?(l===void 0&&(l=new Ve(new $t(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:os(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hf),l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==rt,(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ve(new di(2,2),new dn({name:"BackgroundMaterial",uniforms:os(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,R){S.getRGB(wl,th(i)),t.buffers.color.setClear(wl.r,wl.g,wl.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function $0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(O,F,L,w,E){let N=!1,U=u(O,w,L,F);r!==U&&(r=U,l(r.object)),N=f(O,w,L,E),N&&g(O,w,L,E),E!==null&&e.update(E,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,v(O,F,L,w),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))}function c(){return i.createVertexArray()}function l(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function u(O,F,L,w){let E=w.wireframe===!0,N=n[F.id];N===void 0&&(N={},n[F.id]=N);let U=O.isInstancedMesh===!0?O.id:0,H=N[U];H===void 0&&(H={},N[U]=H);let G=H[L.id];G===void 0&&(G={},H[L.id]=G);let q=G[E];return q===void 0&&(q=d(c()),G[E]=q),q}function d(O){let F=[],L=[],w=[];for(let E=0;E<t;E++)F[E]=0,L[E]=0,w[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:L,attributeDivisors:w,object:O,attributes:{},index:null}}function f(O,F,L,w){let E=r.attributes,N=F.attributes,U=0,H=L.getAttributes();for(let G in H)if(H[G].location>=0){let $=E[G],ae=N[G];if(ae===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;U++}return r.attributesNum!==U||r.index!==w}function g(O,F,L,w){let E={},N=F.attributes,U=0,H=L.getAttributes();for(let G in H)if(H[G].location>=0){let $=N[G];$===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&($=O.instanceColor));let ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),E[G]=ae,U++}r.attributes=E,r.attributesNum=U,r.index=w}function y(){let O=r.newAttributes;for(let F=0,L=O.length;F<L;F++)O[F]=0}function m(O){p(O,0)}function p(O,F){let L=r.newAttributes,w=r.enabledAttributes,E=r.attributeDivisors;L[O]=1,w[O]===0&&(i.enableVertexAttribArray(O),w[O]=1),E[O]!==F&&(i.vertexAttribDivisor(O,F),E[O]=F)}function S(){let O=r.newAttributes,F=r.enabledAttributes;for(let L=0,w=F.length;L<w;L++)F[L]!==O[L]&&(i.disableVertexAttribArray(L),F[L]=0)}function R(O,F,L,w,E,N,U){U===!0?i.vertexAttribIPointer(O,F,L,E,N):i.vertexAttribPointer(O,F,L,w,E,N)}function v(O,F,L,w){y();let E=w.attributes,N=L.getAttributes(),U=F.defaultAttributeValues;for(let H in N){let G=N[H];if(G.location>=0){let q=E[H];if(q===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(q=O.instanceColor)),q!==void 0){let $=q.normalized,ae=q.itemSize,pe=e.get(q);if(pe===void 0)continue;let Be=pe.buffer,he=pe.type,we=pe.bytesPerElement,K=he===i.INT||he===i.UNSIGNED_INT||q.gpuType===ko;if(q.isInterleavedBufferAttribute){let Q=q.data,re=Q.stride,Ue=q.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)p(G.location+ye,Q.meshPerAttribute);O.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<G.locationSize;ye++)m(G.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ye=0;ye<G.locationSize;ye++)R(G.location+ye,ae/G.locationSize,he,$,re*we,(Ue+ae/G.locationSize*ye)*we,K)}else{if(q.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q,q.meshPerAttribute);O.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Q=0;Q<G.locationSize;Q++)R(G.location+Q,ae/G.locationSize,he,$,ae*we,ae/G.locationSize*Q*we,K)}}else if(U!==void 0){let $=U[H];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(G.location,$);break;case 3:i.vertexAttrib3fv(G.location,$);break;case 4:i.vertexAttrib4fv(G.location,$);break;default:i.vertexAttrib1fv(G.location,$)}}}}S()}function M(){A();for(let O in n){let F=n[O];for(let L in F){let w=F[L];for(let E in w){let N=w[E];for(let U in N)h(N[U].object),delete N[U];delete w[E]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let F=n[O.id];for(let L in F){let w=F[L];for(let E in w){let N=w[E];for(let U in N)h(N[U].object),delete N[U];delete w[E]}}delete n[O.id]}function C(O){for(let F in n){let L=n[F];for(let w in L){let E=L[w];if(E[O.id]===void 0)continue;let N=E[O.id];for(let U in N)h(N[U].object),delete N[U];delete E[O.id]}}}function _(O){for(let F in n){let L=n[F],w=O.isInstancedMesh===!0?O.id:0,E=L[w];if(E!==void 0){for(let N in E){let U=E[N];for(let H in U)h(U[H].object),delete U[H];delete E[N]}delete L[w],Object.keys(L).length===0&&delete n[F]}}}function A(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function j0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Q0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&C!==fn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ce("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:v,maxSamples:M,samples:T}}function e_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new In,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,R=S*4,v=p.clippingState||null;c.value=v,v=h(g,d,R,f);for(let M=0;M!==R;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,v=f;R!==y;++R,v+=4)a.copy(u[R]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ar=4,t_=6,n_=20,i_=256,fa=new Ni,Gd=new Ne,rh=null,ah=0,oh=0,lh=!1,s_=new D,ls=new D,lr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=s_}=r;rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,ah,oh),this._renderer.xr.enabled=lh,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Bn,format:pn,colorSpace:Zt,depthBuffer:!1},s=Vd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=r_(r)),this._blurMaterial=o_(r,e,t),this._ggxMaterial=a_(r,e,t)}return s}_compileMaterial(e){let t=new Ve(new lt,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,s,r){let c=new St(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Gd),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new $t,new nn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Gd),p=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):v===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));let M=this._cubeSize;rr(s,v*M,R>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(y,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Di||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,fa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ar?n-g+ar:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,rr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,fa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,rr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,fa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-ar?s-this._lodMax+ar:0),d=4*(this._cubeSize-h);rr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,fa)}};function r_(i){let e=[],t=[],n=i,s=i-ar+1+t_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),y=new Float32Array(f*d*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,R=p>2?0:-1,v=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];g.set(v,f*d*p);for(let M=0;M<d;M++){let T=h[M*2]*2-1,C=h[M*2+1]*2-1;p===0?ls.set(1,C,T):p===1?ls.set(-T,1,-C):p===2?ls.set(-T,C,1):p===3?ls.set(-1,C,-T):p===4?ls.set(-T,-1,C):ls.set(T,C,-1),ls.toArray(y,(p*d+M)*f)}}let m=new lt;m.setAttribute("position",new Pt(g,f)),m.setAttribute("outputDirection",new Pt(y,f)),t.push(new Ve(m,null)),n>ar&&n--}return{lodMeshes:t,sizeLods:e}}function Vd(i,e,t){let n=new en(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function a_(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function o_(i,e,t){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Hd(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Wd(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var El=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $t(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Qn});r.uniforms.tEquirect.value=t;let a=new Ve(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=At),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function l_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Oo||f===Bo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new El(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Oo||f===Bo,y=f===Di||f===rs;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new lr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new lr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Oo?d.mapping=Di:f===Bo&&(d.mapping=rs),d}function c(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function c_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qi("WebGLRenderer: "+n+" extension not supported."),s}}}function h_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let R=0,v=S.length;R<v;R+=3){let M=S[R+0],T=S[R+1],C=S[R+2];d.push(M,T,T,C,C,M)}}else{let S=g.array;y=g.version;for(let R=0,v=S.length/3-1;R<v;R+=3){let M=R+0,T=R+1,C=R+2;d.push(M,T,T,C,C,M)}}let m=new(g.count>=65535?Dr:Nr)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function u_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function d_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function f_(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let v=o.attributes.position.count*R,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*M*4*u),C=new Ir(T,v,M,u);C.type=fn,C.needsUpdate=!0;let _=R*4;for(let I=0;I<u;I++){let O=m[I],F=p[I],L=S[I],w=v*M*4*I;for(let E=0;E<O.count;E++){let N=E*_;f===!0&&(s.fromBufferAttribute(O,E),T[w+N+0]=s.x,T[w+N+1]=s.y,T[w+N+2]=s.z,T[w+N+3]=0),g===!0&&(s.fromBufferAttribute(F,E),T[w+N+4]=s.x,T[w+N+5]=s.y,T[w+N+6]=s.z,T[w+N+7]=0),y===!0&&(s.fromBufferAttribute(L,E),T[w+N+8]=s.x,T[w+N+9]=s.y,T[w+N+10]=s.z,T[w+N+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Se(v,M)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function p_(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var m_={[Oc]:"LINEAR_TONE_MAPPING",[Bc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[ia]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function g_(i,e,t,n,s,r){let a=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new lt;l.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let h=new bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ve(l,h),d=new Ni(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],R=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),c!==null&&c.setSize(v,M);for(let T=0;T<S.length;T++){let C=S[T];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){S=v,R=S.length>0&&S[0].isRenderPass===!0;let M=a.width,T=a.height;S.length>0&&o===null&&(o=new en(M,T,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new en(M,T,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let _=S[C];_.setSize&&_.setSize(M,T)}},this.begin=function(v,M){if(y||v.toneMapping===Un&&S.length===0)return!1;if(p=M,M!==null){let T=M.width,C=M.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return R===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Un,!0},this.hasRenderPass=function(){return R},this.end=function(v,M){v.toneMapping=m,y=!0;let T=a,C=o;for(let _=0;_<S.length;_++){let A=S[_];A.enabled!==!1&&(A.render(v,C,T,M),A.needsSwap!==!1&&(T=C,C=C===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},Ke.getTransfer(f)===rt&&(h.defines.SRGB_TRANSFER="");let _=m_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(u,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var uf=new Lt,uh=new Ii(1,1),df=new Ir,ff=new ho,pf=new kr,Xd=[],qd=[],Yd=new Float32Array(16),Kd=new Float32Array(9),Zd=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Il(i,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function __(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function M_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Zd.set(n),i.uniformMatrix2fv(this.addr,!1,Zd),Ft(t,n)}}function S_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Kd.set(n),i.uniformMatrix3fv(this.addr,!1,Kd),Ft(t,n)}}function b_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),Ft(t,n)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function R_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uh.compareFunction=t.isReversedDepthBuffer()?Tl:bl,r=uh):r=uf,t.setTexture2D(e||r,s)}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ff,s)}function D_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pf,s)}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||df,s)}function F_(i){switch(i){case 5126:return __;case 35664:return x_;case 35665:return y_;case 35666:return v_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return T_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return E_;case 5125:return R_;case 36294:return C_;case 36295:return I_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return U_}}function O_(i,e){i.uniform1fv(this.addr,e)}function B_(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function z_(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function k_(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function G_(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V_(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function H_(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W_(i,e){i.uniform1iv(this.addr,e)}function X_(i,e){i.uniform2iv(this.addr,e)}function q_(i,e){i.uniform3iv(this.addr,e)}function Y_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function Z_(i,e){i.uniform2uiv(this.addr,e)}function J_(i,e){i.uniform3uiv(this.addr,e)}function $_(i,e){i.uniform4uiv(this.addr,e)}function j_(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uh:a=uf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Q_(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ff,r[a])}function ex(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pf,r[a])}function tx(i,e,t){let n=this.cache,s=e.length,r=Il(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||df,r[a])}function nx(i){switch(i){case 5126:return O_;case 35664:return B_;case 35665:return z_;case 35666:return k_;case 35674:return G_;case 35675:return V_;case 35676:return H_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return K_;case 36294:return Z_;case 36295:return J_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}var dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}},fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nx(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ch=/(\w+)(\])?(\[|\.)?/g;function Jd(i,e){i.seq.push(e),i.map[e.id]=e}function ix(i,e,t){let n=i.name,s=n.length;for(ch.lastIndex=0;;){let r=ch.exec(n),a=ch.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jd(t,l===void 0?new dh(o,i,e):new fh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ph(o),Jd(t,u)),t=u}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ix(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $d(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var sx=37297,rx=0;function ax(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var jd=new ze;function ox(i){Ke._getMatrix(jd,Ke.workingColorSpace,i);let e=`mat3( ${jd.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ax(i.getShaderSource(e),o)}else return r}function lx(i,e){let t=ox(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var cx={[Oc]:"Linear",[Bc]:"Reinhard",[zc]:"Cineon",[ia]:"ACESFilmic",[Gc]:"AgX",[Vc]:"Neutral",[kc]:"Custom"};function hx(i,e){let t=cx[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Al=new D;function ux(){Ke.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function fx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function px(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ma(i){return i!==""}function ef(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(mx,_x)}var gx=new Map;function _x(i,e){let t=qe[e];if(t===void 0){let n=gx.get(e);if(n!==void 0)t=qe[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mh(t)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(xx,yx)}function yx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var vx={[na]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Mx(i){return vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sx={[Di]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE_UV"};function bx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tx={[rs]:"ENVMAP_MODE_REFRACTION"};function wx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ax={[Fo]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[Md]:"ENVMAP_BLENDING_ADD"};function Ex(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ax[i.combine]||"ENVMAP_BLENDING_NONE"}function Rx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Mx(t),l=bx(t),h=wx(t),u=Ex(t),d=Rx(t),f=dx(t),g=fx(r),y=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(m=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?qe.tonemapping_pars_fragment:"",t.toneMapping!==Un?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,lx("linearToOutputTexel",t.outputColorSpace),ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=mh(a),a=ef(a,t),a=tf(a,t),o=mh(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=S+m+a,v=S+p+o,M=$d(s,s.VERTEX_SHADER,R),T=$d(s,s.FRAGMENT_SHADER,v);s.attachShader(y,M),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(O){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",L=s.getShaderInfoLog(M)||"",w=s.getShaderInfoLog(T)||"",E=F.trim(),N=L.trim(),U=w.trim(),H=!0,G=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,T);else{let q=Qd(s,M,"vertex"),$=Qd(s,T,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+E+`
`+q+`
`+$)}else E!==""?Ce("WebGLProgram: Program Info Log:",E):(N===""||U==="")&&(G=!1);G&&(O.diagnostics={runnable:H,programLog:E,vertexShader:{log:N,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(M),s.deleteShader(T),_=new or(s,y),A=px(s,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,sx)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=T,this}var Ix=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _h(e),t.set(e,n)),n}},_h=class{constructor(e){this.id=Ix++,this.code=e,this.usedTimes=0}};function Px(i){return i===Fi||i===ca||i===ha}function Lx(i,e,t,n,s,r){let a=new Pr,o=new gh,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,A,I,O,F,L){let w=O.fog,E=F.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?O.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||N,U),G=H&&H.mapping===sa?H.image.height:null,q=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let $=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,ae=$!==void 0?$.length:0,pe=0;E.morphAttributes.position!==void 0&&(pe=1),E.morphAttributes.normal!==void 0&&(pe=2),E.morphAttributes.color!==void 0&&(pe=3);let Be,he,we,K;if(q){let gt=ti[q];Be=gt.vertexShader,he=gt.fragmentShader}else{Be=_.vertexShader,he=_.fragmentShader;let gt=o.getVertexShaderStage(_),it=o.getFragmentShaderStage(_);o.update(_,gt,it),we=gt.id,K=it.id}let Q=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,We=!!_.map,bt=!!_.matcap,Ye=!!H,je=!!_.aoMap,tt=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,nt=!!_.normalMap,ct=!!_.displacementMap,vt=!!_.emissiveMap,ft=!!_.metalnessMap,ht=!!_.roughnessMap,z=_.anisotropy>0,Rt=_.clearcoat>0,Qe=_.dispersion>0,P=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,Y=_.transmission>0,J=z&&!!_.anisotropyMap,ie=Rt&&!!_.clearcoatMap,se=Rt&&!!_.clearcoatNormalMap,j=Rt&&!!_.clearcoatRoughnessMap,ee=x&&!!_.iridescenceMap,ce=x&&!!_.iridescenceThicknessMap,Ee=V&&!!_.sheenColorMap,ue=V&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Ie=!!_.specularColorMap,De=!!_.specularIntensityMap,He=Y&&!!_.transmissionMap,k=Y&&!!_.thicknessMap,de=!!_.gradientMap,te=!!_.alphaMap,fe=_.alphaTest>0,xe=!!_.alphaHash,ne=!!_.extensions,Le=Un;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Ae={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:he,defines:_.defines,customVertexShaderID:we,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:bt,envMap:Ye,envMapMode:Ye&&H.mapping,envMapCubeUVHeight:G,aoMap:je,lightMap:tt,bumpMap:ke,normalMap:nt,displacementMap:ct,emissiveMap:vt,normalMapObjectSpace:nt&&_.normalMapType===wd,normalMapTangentSpace:nt&&_.normalMapType===da,packedNormalMap:nt&&_.normalMapType===da&&Px(_.normalMap.format),metalnessMap:ft,roughnessMap:ht,anisotropy:z,anisotropyMap:J,clearcoat:Rt,clearcoatMap:ie,clearcoatNormalMap:se,clearcoatRoughnessMap:j,dispersion:Qe,retroreflection:P,iridescence:x,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:V,sheenColorMap:Ee,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:Ie,specularIntensityMap:De,transmission:Y,transmissionMap:He,thicknessMap:k,gradientMap:de,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:fe,alphaHash:xe,combine:_.combine,mapUv:We&&g(_.map.channel),aoMapUv:je&&g(_.aoMap.channel),lightMapUv:tt&&g(_.lightMap.channel),bumpMapUv:ke&&g(_.bumpMap.channel),normalMapUv:nt&&g(_.normalMap.channel),displacementMapUv:ct&&g(_.displacementMap.channel),emissiveMapUv:vt&&g(_.emissiveMap.channel),metalnessMapUv:ft&&g(_.metalnessMap.channel),roughnessMapUv:ht&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(_.sheenRoughnessMap.channel),specularMapUv:oe&&g(_.specularMap.channel),specularColorMapUv:Ie&&g(_.specularColorMap.channel),specularIntensityMapUv:De&&g(_.specularIntensityMap.channel),transmissionMapUv:He&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:te&&g(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(nt||z),vertexNormals:!!E.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!E.attributes.uv&&(We||te),fog:!!w,useFog:_.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||E.attributes.normal===void 0&&nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:re,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:pe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dt,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)A.push(I),A.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(A,_),S(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){let A=f[_.type],I;if(A){let O=ti[A];I=Bd.clone(O.uniforms)}else I=_.uniforms;return I}function v(_,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new Cx(i,A,_,s),l.push(I),h.set(A,I)),I}function M(_){if(--_.usedTimes===0){let A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:C}}function Nx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function af(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function c(d,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let R=o(d,f,g,y,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function l(d,f,g,y,m,p){let S=o(d,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(d,f){t.length>1&&t.sort(d||Dx),n.length>1&&n.sort(f||rf),s.length>1&&s.sort(f||rf)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Ux(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new af,i.set(n,[a])):s>=r.length?(a=new af,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bx=0;function zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kx(i){let e=new Fx,t=Ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Fe,a=new Fe;function o(l){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,R=0,v=0,M=0,T=0,C=0,_=0,A=0,I=0;l.sort(zx);for(let F=0,L=l.length;F<L;F++){let w=l[F],E=w.color,N=w.intensity,U=w.distance,H=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Fi?H=w.shadow.map.texture:H=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=E.r*N,u+=E.g*N,d+=E.b*N;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],N);I++}else if(w.isSunLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let q=w.shadow,$=t.get(w);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=H;let ae=q.getViewportCount();for(let pe=0;pe<ae;pe++)n.sunShadowMatrix[y+pe]=q.getMatrix(pe),n.sunShadowCascade[y+pe]=q._cascadeData[pe];y+=ae,g++}n.sun[f]=G,f++}else if(w.isDirectionalLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let q=w.shadow,$=t.get(w);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=w.shadow.matrix,M++}n.directional[m]=G,m++}else if(w.isSpotLight){let G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(E).multiplyScalar(N),G.distance=U,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[S]=G;let q=w.shadow;if(w.map&&(n.spotLightMap[_]=w.map,_++,q.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[S]=q.matrix,w.castShadow){let $=t.get(w);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,n.spotShadow[S]=$,n.spotShadowMap[S]=H,C++}S++}else if(w.isRectAreaLight){let G=e.get(w);G.color.copy(E).multiplyScalar(N),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[R]=G,R++}else if(w.isPointLight){let G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){let q=w.shadow,$=t.get(w);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=w.shadow.matrix,T++}n.point[p]=G,p++}else if(w.isHemisphereLight){let G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(N),G.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[v]=G,v++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.sunLength!==f||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==S||O.rectAreaLength!==R||O.hemiLength!==v||O.numSunShadows!==g||O.numDirectionalShadows!==M||O.numPointShadows!==T||O.numSpotShadows!==C||O.numSpotMaps!==_||O.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=R,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,O.sunLength=f,O.directionalLength=m,O.pointLength=p,O.spotLength=S,O.rectAreaLength=R,O.hemiLength=v,O.numSunShadows=g,O.numDirectionalShadows=M,O.numPointShadows=T,O.numSpotShadows=C,O.numSpotMaps=_,O.numLightProbes=I,n.version=Bx++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let S=0,R=l.length;S<R;S++){let v=l[S];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(v.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function of(i){let e=new kx(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Gx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new of(i),e.set(s,[o])):r>=a.length?(o=new of(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`,Wx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Xx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],lf=new Fe,pa=new D,hh=new D;function qx(i,e,t){let n=new Ws,s=new Se,r=new Se,a=new ot,o=new To,c=new wo,l={},h=t.maxTextureSize,u={[jn]:Bt,[Bt]:jn,[Dt]:Dt},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Vx,fragmentShader:Hx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let p=this.type;this.render=function(T,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Uo&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=na);let A=i.getRenderTarget(),I=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let L=p!==this.type;L&&C.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(E=>E.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,E=T.length;w<E;w++){let N=T[w],U=N.shadow;if(U===void 0){Ce("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let H=U.getFrameExtents();s.multiply(H),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,U.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=G,U.map===null||L===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===js){if(N.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new en(s.x,s.y,{format:Fi,type:Bn,minFilter:At,magFilter:At,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new Ii(s.x,s.y,fn),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=Yn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=wt,U.map.depthTexture.magFilter=wt}else N.isPointLight?(U.map=new El(s.x),U.map.depthTexture=new po(s.x,On)):(U.map=new en(s.x,s.y),U.map.depthTexture=new Ii(s.x,s.y,On)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=Yn,this.type===na?(U.map.depthTexture.compareFunction=G?Tl:bl,U.map.depthTexture.minFilter=At,U.map.depthTexture.magFilter=At):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=wt,U.map.depthTexture.magFilter=wt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let q=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,_);for(let $=0;$<q;$++){let ae=U.getCamera($);if(N.isPointLight){let pe=U.camera,Be=U.matrix,he=N.distance||pe.far;he!==pe.far&&(pe.far=he,pe.updateProjectionMatrix()),pa.setFromMatrixPosition(N.matrixWorld),pe.position.copy(pa),hh.copy(pe.position),hh.add(Wx[$]),pe.up.copy(Xx[$]),pe.lookAt(hh),pe.updateMatrixWorld(),Be.makeTranslation(-pa.x,-pa.y,-pa.z),lf.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),U._frustum.setFromProjectionMatrix(lf,pe.coordinateSystem,pe.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,$),i.clear();else{$===0&&(i.setRenderTarget(U.map),i.clear());let pe=U.getViewport($);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a)}n=U.getFrustum($),v(C,_,ae,N,this.type)}U.isPointLightShadow!==!0&&this.type===js&&S(U,_),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,I,O)};function S(T,C){let _=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new en(s.x,s.y,{format:Fi,type:Bn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,_,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,_,f,y,null)}function R(T,C,_,A){let I=null,O=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)I=O;else if(I=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=I.uuid,L=C.uuid,w=l[F];w===void 0&&(w={},l[F]=w);let E=w[L];E===void 0&&(E=I.clone(),w[L]=E,C.addEventListener("dispose",M)),I=E}if(I.visible=C.visible,I.wireframe=C.wireframe,A===js?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:u[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=_}return I}function v(T,C,_,A,I){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===js)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);let L=e.update(T),w=T.material;if(Array.isArray(w)){let E=L.groups;for(let N=0,U=E.length;N<U;N++){let H=E[N],G=w[H.materialIndex];if(G&&G.visible){let q=R(T,G,A,I);T.onBeforeShadow(i,T,C,_,L,q,H),i.renderBufferDirect(_,null,L,q,T,H),T.onAfterShadow(i,T,C,_,L,q,H)}}}else if(w.visible){let E=R(T,w,A,I);T.onBeforeShadow(i,T,C,_,L,E,null),i.renderBufferDirect(_,null,L,E,T,null),T.onAfterShadow(i,T,C,_,L,E,null)}}let F=T.children;for(let L=0,w=F.length;L<w;L++)v(F[L],C,_,A,I)}function M(T){T.target.removeEventListener("dispose",M);for(let _ in l){let A=l[_],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Yx(i,e){function t(){let k=!1,de=new ot,te=null,fe=new ot(0,0,0,0);return{setMask:function(xe){te!==xe&&!k&&(i.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){k=xe},setClear:function(xe,ne,Le,Ae,gt){gt===!0&&(xe*=Ae,ne*=Ae,Le*=Ae),de.set(xe,ne,Le,Ae),fe.equals(de)===!1&&(i.clearColor(xe,ne,Le,Ae),fe.copy(de))},reset:function(){k=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let k=!1,de=!1,te=null,fe=null,xe=null;return{setReversed:function(ne){if(de!==ne){let Le=e.get("EXT_clip_control");ne?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=ne;let Ae=xe;xe=null,this.setClear(Ae)}},getReversed:function(){return de},setTest:function(ne){ne?Q(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(ne){te!==ne&&!k&&(i.depthMask(ne),te=ne)},setFunc:function(ne){if(de&&(ne=Fd[ne]),fe!==ne){switch(ne){case to:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ne}},setLocked:function(ne){k=ne},setClear:function(ne){xe!==ne&&(xe=ne,de&&(ne=1-ne),i.clearDepth(ne))},reset:function(){k=!1,te=null,fe=null,xe=null,de=!1}}}function s(){let k=!1,de=null,te=null,fe=null,xe=null,ne=null,Le=null,Ae=null,gt=null;return{setTest:function(it){k||(it?Q(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(it){de!==it&&!k&&(i.stencilMask(it),de=it)},setFunc:function(it,An,Vn){(te!==it||fe!==An||xe!==Vn)&&(i.stencilFunc(it,An,Vn),te=it,fe=An,xe=Vn)},setOp:function(it,An,Vn){(ne!==it||Le!==An||Ae!==Vn)&&(i.stencilOp(it,An,Vn),ne=it,Le=An,Ae=Vn)},setLocked:function(it){k=it},setClear:function(it){gt!==it&&(i.clearStencil(it),gt=it)},reset:function(){k=!1,de=null,te=null,fe=null,xe=null,ne=null,Le=null,Ae=null,gt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,R=null,v=null,M=null,T=null,C=null,_=new Ne(0,0,0),A=0,I=!1,O=null,F=null,L=null,w=null,E=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,H=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=H>=2);let q=null,$={},ae=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Be=new ot().fromArray(ae),he=new ot().fromArray(pe);function we(k,de,te,fe){let xe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(k,ne),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<te;Le++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(de+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ne}let K={};K[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Ds),ke(!1),nt(Pc),Q(i.CULL_FACE),je(Qn);function Q(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function re(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ue(k,de){return d[k]!==de?(i.bindFramebuffer(k,de),d[k]=de,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(k,de){let te=g,fe=!1;if(k){te=f.get(de),te===void 0&&(te=[],f.set(de,te));let xe=k.textures;if(te.length!==xe.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Le=xe.length;ne<Le;ne++)te[ne]=i.COLOR_ATTACHMENT0+ne;te.length=xe.length,fe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,fe=!0);fe&&i.drawBuffers(te)}function We(k){return y!==k?(i.useProgram(k),y=k,!0):!1}let bt={[ss]:i.FUNC_ADD,[id]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};bt[rd]=i.MIN,bt[ad]=i.MAX;let Ye={[od]:i.ZERO,[ld]:i.ONE,[cd]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[md]:i.SRC_ALPHA_SATURATE,[fd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[hd]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[pd]:i.ONE_MINUS_DST_COLOR,[dd]:i.ONE_MINUS_DST_ALPHA,[gd]:i.CONSTANT_COLOR,[_d]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function je(k,de,te,fe,xe,ne,Le,Ae,gt,it){if(k===Qn){m===!0&&(re(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),k!==nd){if(k!==p||it!==I){if((S!==ss||M!==ss)&&(i.blendEquation(i.FUNC_ADD),S=ss,M=ss),it)switch(k){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",k);break}else switch(k){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nc:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",k);break}R=null,v=null,T=null,C=null,_.set(0,0,0),A=0,p=k,I=it}return}xe=xe||de,ne=ne||te,Le=Le||fe,(de!==S||xe!==M)&&(i.blendEquationSeparate(bt[de],bt[xe]),S=de,M=xe),(te!==R||fe!==v||ne!==T||Le!==C)&&(i.blendFuncSeparate(Ye[te],Ye[fe],Ye[ne],Ye[Le]),R=te,v=fe,T=ne,C=Le),(Ae.equals(_)===!1||gt!==A)&&(i.blendColor(Ae.r,Ae.g,Ae.b,gt),_.copy(Ae),A=gt),p=k,I=!1}function tt(k,de){k.side===Dt?re(i.CULL_FACE):Q(i.CULL_FACE);let te=k.side===Bt;de&&(te=!te),ke(te),k.blending===Qs&&k.transparent===!1?je(Qn):je(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let fe=k.stencilWrite;o.setTest(fe),fe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(k){O!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),O=k)}function nt(k){k!==ed?(Q(i.CULL_FACE),k!==F&&(k===Pc?i.cullFace(i.BACK):k===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),F=k}function ct(k){k!==L&&(U&&i.lineWidth(k),L=k)}function vt(k,de,te){k?(Q(i.POLYGON_OFFSET_FILL),(w!==de||E!==te)&&(w=de,E=te,a.getReversed()&&(de=-de),i.polygonOffset(de,te))):re(i.POLYGON_OFFSET_FILL)}function ft(k){k?Q(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function ht(k){k===void 0&&(k=i.TEXTURE0+N-1),q!==k&&(i.activeTexture(k),q=k)}function z(k,de,te){te===void 0&&(q===null?te=i.TEXTURE0+N-1:te=q);let fe=$[te];fe===void 0&&(fe={type:void 0,texture:void 0},$[te]=fe),(fe.type!==k||fe.texture!==de)&&(q!==te&&(i.activeTexture(te),q=te),i.bindTexture(k,de||K[k]),fe.type=k,fe.texture=de)}function Rt(){let k=$[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function x(){try{i.texSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function V(){try{i.texSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function ie(){try{i.texStorage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function se(){try{i.texStorage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function j(){try{i.texImage2D(...arguments)}catch(k){Oe("WebGLState:",k)}}function ee(){try{i.texImage3D(...arguments)}catch(k){Oe("WebGLState:",k)}}function ce(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Ee(k,de){u[k]!==de&&(i.pixelStorei(k,de),u[k]=de)}function ue(k){Be.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function oe(k){he.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),he.copy(k))}function Ie(k,de){let te=l.get(de);te===void 0&&(te=new WeakMap,l.set(de,te));let fe=te.get(k);fe===void 0&&(fe=i.getUniformBlockIndex(de,k.name),te.set(k,fe))}function De(k,de){let fe=l.get(de).get(k);c.get(de)!==fe&&(i.uniformBlockBinding(de,fe,k.__bindingPointIndex),c.set(de,fe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,$={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,R=null,v=null,M=null,T=null,C=null,_=new Ne(0,0,0),A=0,I=!1,O=null,F=null,L=null,w=null,E=null,Be.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:re,bindFramebuffer:Ue,drawBuffers:ye,useProgram:We,setBlending:je,setMaterial:tt,setFlipSided:ke,setCullFace:nt,setLineWidth:ct,setPolygonOffset:vt,setScissorTest:ft,activeTexture:ht,bindTexture:z,unbindTexture:Rt,compressedTexImage2D:Qe,compressedTexImage3D:P,texImage2D:j,texImage3D:ee,pixelStorei:Ee,getParameter:ce,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:ie,texStorage3D:se,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:ue,viewport:oe,reset:He}}function Kx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,x){return g?new OffscreenCanvas(P,x):Fs("canvas")}function m(P,x,V){let Y=1,J=Qe(P);if((J.width>V||J.height>V)&&(Y=V/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ie=Math.floor(Y*J.width),se=Math.floor(Y*J.height);d===void 0&&(d=y(ie,se));let j=x?y(ie,se):d;return j.width=ie,j.height=se,j.getContext("2d").drawImage(P,0,0,ie,se),Ce("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ie+"x"+se+")."),j}else return"data"in P&&Ce("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function p(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,x,V,Y,J,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se;Y&&(se=e.get("EXT_texture_norm16"),se||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8),V===i.UNSIGNED_SHORT&&se&&(j=se.R16_EXT),V===i.SHORT&&se&&(j=se.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),x===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8),V===i.UNSIGNED_SHORT&&se&&(j=se.RG16_EXT),V===i.SHORT&&se&&(j=se.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&se&&(j=se.RGB16_EXT),V===i.SHORT&&se&&(j=se.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let ee=ie?Rr:Ke.getTransfer(J);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=ee===rt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&se&&(j=se.RGBA16_EXT),V===i.SHORT&&se&&(j=se.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(P,x){let V;return P?x===null||x===On||x===nr?V=i.DEPTH24_STENCIL8:x===fn?V=i.DEPTH32F_STENCIL8:x===tr&&(V=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===On||x===nr?V=i.DEPTH_COMPONENT24:x===fn?V=i.DEPTH_COMPONENT32F:x===tr&&(V=i.DEPTH_COMPONENT16),V}function T(P,x){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==wt&&P.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function C(P){let x=P.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(P){let x=P.target;x.removeEventListener("dispose",_),O(x)}function A(P){let x=n.get(P);if(x.__webglInit===void 0)return;let V=P.source,Y=f.get(V);if(Y){let J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(P),Object.keys(Y).length===0&&f.delete(V)}n.remove(P)}function I(P){let x=n.get(P);i.deleteTexture(x.__webglTexture);let V=P.source,Y=f.get(V);delete Y[x.__cacheKey],a.memory.textures--}function O(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=P.textures;for(let Y=0,J=V.length;Y<J;Y++){let ie=n.get(V[Y]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(P)}let F=0;function L(){F=0}function w(){return F}function E(P){F=P}function N(){let P=F;return P>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function U(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function H(P,x){let V=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let Y=P.image;if(Y===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{re(V,P,x);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function G(P,x){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){re(V,P,x);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function q(P,x){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){re(V,P,x);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function $(P,x){let V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){Ue(V,P,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let ae={[qn]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Ci]:i.MIRRORED_REPEAT},pe={[wt]:i.NEAREST,[zo]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[er]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Be={[Ed]:i.NEVER,[Ld]:i.ALWAYS,[Rd]:i.LESS,[bl]:i.LEQUAL,[Cd]:i.EQUAL,[Tl]:i.GEQUAL,[Id]:i.GREATER,[Pd]:i.NOTEQUAL};function he(P,x){if(x.type===fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===At||x.magFilter===er||x.magFilter===as||x.magFilter===Fn||x.minFilter===At||x.minFilter===er||x.minFilter===as||x.minFilter===Fn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ae[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ae[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ae[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==as&&x.minFilter!==Fn||x.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function we(P,x){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",C));let Y=x.source,J=f.get(Y);J===void 0&&(J={},f.set(Y,J));let ie=U(x);if(ie!==P.__cacheKey){J[ie]===void 0&&(J[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),J[ie].usedTimes++;let se=J[P.__cacheKey];se!==void 0&&(J[P.__cacheKey].usedTimes--,se.usedTimes===0&&I(x)),P.__cacheKey=ie,P.__webglTexture=J[ie].texture}return V}function K(P,x,V){return Math.floor(Math.floor(P/V)/x)}function Q(P,x,V,Y){let ie=P.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,Y,x.data);else{ie.sort((Ee,ue)=>Ee.start-ue.start);let se=0;for(let Ee=1;Ee<ie.length;Ee++){let ue=ie[se],oe=ie[Ee],Ie=ue.start+ue.count,De=K(oe.start,x.width,4),He=K(ue.start,x.width,4);oe.start<=Ie+1&&De===He&&K(oe.start+oe.count-1,x.width,4)===De?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,ie[se]=oe)}ie.length=se+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,ue=ie.length;Ee<ue;Ee++){let oe=ie[Ee],Ie=Math.floor(oe.start/4),De=Math.ceil(oe.count/4),He=Ie%x.width,k=Math.floor(Ie/x.width),de=De,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,He,k,de,te,V,Y,x.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function re(P,x,V){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let J=we(P,x),ie=x.source;t.bindTexture(Y,P.__webglTexture,i.TEXTURE0+V);let se=n.get(ie);if(ie.version!==se.__version||J===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let te=Ke.getPrimaries(Ke.workingColorSpace),fe=x.colorSpace===xi?null:Ke.getPrimaries(x.colorSpace),xe=x.colorSpace===xi||te===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ee=m(x.image,!1,s.maxTextureSize);ee=Rt(x,ee);let ce=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),ue=v(x.internalFormat,ce,Ee,x.normalized,x.colorSpace,x.isVideoTexture);he(Y,x);let oe,Ie=x.mipmaps,De=x.isVideoTexture!==!0,He=se.__version===void 0||J===!0,k=ie.dataReady,de=T(x,ee);if(x.isDepthTexture)ue=M(x.format===Ui,x.type),He&&(De?t.texStorage2D(i.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,ce,Ee,null));else if(x.isDataTexture)if(Ie.length>0){De&&He&&t.texStorage2D(i.TEXTURE_2D,de,ue,Ie[0].width,Ie[0].height);for(let te=0,fe=Ie.length;te<fe;te++)oe=Ie[te],De?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,oe.width,oe.height,ce,Ee,oe.data):t.texImage2D(i.TEXTURE_2D,te,ue,oe.width,oe.height,0,ce,Ee,oe.data);x.generateMipmaps=!1}else De?(He&&t.texStorage2D(i.TEXTURE_2D,de,ue,ee.width,ee.height),k&&Q(x,ee,ce,Ee)):t.texImage2D(i.TEXTURE_2D,0,ue,ee.width,ee.height,0,ce,Ee,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ue,Ie[0].width,Ie[0].height,ee.depth);for(let te=0,fe=Ie.length;te<fe;te++)if(oe=Ie[te],x.format!==pn)if(ce!==null)if(De){if(k)if(x.layerUpdates.size>0){let xe=sh(oe.width,oe.height,x.format,x.type);for(let ne of x.layerUpdates){let Le=oe.data.subarray(ne*xe/oe.data.BYTES_PER_ELEMENT,(ne+1)*xe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ne,oe.width,oe.height,1,ce,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ue,oe.width,oe.height,ee.depth,0,oe.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ee.depth,ce,Ee,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ue,oe.width,oe.height,ee.depth,0,ce,Ee,oe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{De&&He&&t.texStorage2D(i.TEXTURE_2D,de,ue,Ie[0].width,Ie[0].height);for(let te=0,fe=Ie.length;te<fe;te++)oe=Ie[te],x.format!==pn?ce!==null?De?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ue,oe.width,oe.height,0,oe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,oe.width,oe.height,ce,Ee,oe.data):t.texImage2D(i.TEXTURE_2D,te,ue,oe.width,oe.height,0,ce,Ee,oe.data)}else if(x.isDataArrayTexture)if(De){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ue,ee.width,ee.height,ee.depth),k)if(x.layerUpdates.size>0){let te=sh(ee.width,ee.height,x.format,x.type);for(let fe of x.layerUpdates){let xe=ee.data.subarray(fe*te/ee.data.BYTES_PER_ELEMENT,(fe+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ee.width,ee.height,1,ce,Ee,xe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ee,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,ce,Ee,ee.data);else if(x.isData3DTexture)De?(He&&t.texStorage3D(i.TEXTURE_3D,de,ue,ee.width,ee.height,ee.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ee,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,ce,Ee,ee.data);else if(x.isFramebufferTexture){if(He)if(De)t.texStorage2D(i.TEXTURE_2D,de,ue,ee.width,ee.height);else{let te=ee.width,fe=ee.height;for(let xe=0;xe<de;xe++)t.texImage2D(i.TEXTURE_2D,xe,ue,te,fe,0,ce,Ee,null),te>>=1,fe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ee.parentNode!==te){te.appendChild(ee),u.add(x),te.onpaint=fe=>{let xe=fe.changedElements;for(let ne of u)xe.includes(ne.image)&&(ne.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let xe=i.RGBA,ne=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,ne,Le,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(De&&He){let te=Qe(Ie[0]);t.texStorage2D(i.TEXTURE_2D,de,ue,te.width,te.height)}for(let te=0,fe=Ie.length;te<fe;te++)oe=Ie[te],De?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ce,Ee,oe):t.texImage2D(i.TEXTURE_2D,te,ue,ce,Ee,oe);x.generateMipmaps=!1}else if(De){if(He){let te=Qe(ee);t.texStorage2D(i.TEXTURE_2D,de,ue,te.width,te.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ee,ee)}else t.texImage2D(i.TEXTURE_2D,0,ue,ce,Ee,ee);p(x)&&S(Y),se.__version=ie.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Ue(P,x,V){if(x.image.length!==6)return;let Y=we(P,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);let ie=n.get(J);if(J.version!==ie.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);let se=Ke.getPrimaries(Ke.workingColorSpace),j=x.colorSpace===xi?null:Ke.getPrimaries(x.colorSpace),ee=x.colorSpace===xi||se===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!ce&&!Ee?ue[ne]=m(x.image[ne],!0,s.maxCubemapSize):ue[ne]=Ee?x.image[ne].image:x.image[ne],ue[ne]=Rt(x,ue[ne]);let oe=ue[0],Ie=r.convert(x.format,x.colorSpace),De=r.convert(x.type),He=v(x.internalFormat,Ie,De,x.normalized,x.colorSpace),k=x.isVideoTexture!==!0,de=ie.__version===void 0||Y===!0,te=J.dataReady,fe=T(x,oe);he(i.TEXTURE_CUBE_MAP,x);let xe;if(ce){k&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,He,oe.width,oe.height);for(let ne=0;ne<6;ne++){xe=ue[ne].mipmaps;for(let Le=0;Le<xe.length;Le++){let Ae=xe[Le];x.format!==pn?Ie!==null?k?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,He,Ae.width,Ae.height,0,Ae.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ae.width,Ae.height,Ie,De,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,He,Ae.width,Ae.height,0,Ie,De,Ae.data)}}}else{if(xe=x.mipmaps,k&&de){xe.length>0&&fe++;let ne=Qe(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ie,De,ue[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,ue[ne].width,ue[ne].height,0,Ie,De,ue[ne].data);for(let Le=0;Le<xe.length;Le++){let gt=xe[Le].image[ne].image;k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,gt.width,gt.height,Ie,De,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,He,gt.width,gt.height,0,Ie,De,gt.data)}}else{k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,De,ue[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,Ie,De,ue[ne]);for(let Le=0;Le<xe.length;Le++){let Ae=xe[Le];k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,Ie,De,Ae.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,He,Ie,De,Ae.image[ne])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),ie.__version=J.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function ye(P,x,V,Y,J,ie){let se=r.convert(V.format,V.colorSpace),j=r.convert(V.type),ee=v(V.internalFormat,se,j,V.normalized,V.colorSpace),ce=n.get(x),Ee=n.get(V);if(Ee.__renderTarget=x,!ce.__hasExternalTextures){let ue=Math.max(1,x.width>>ie),oe=Math.max(1,x.height>>ie);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ie,ee,ue,oe,x.depth,0,se,j,null):t.texImage2D(J,ie,ee,ue,oe,0,se,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ht(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,Ee.__webglTexture,0,ft(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,Ee.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(P,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){let Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,ie=M(x.stencilBuffer,J),se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(x),ie,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(x),ie,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ie,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,P)}else{let Y=x.textures;for(let J=0;J<Y.length;J++){let ie=Y[J],se=r.convert(ie.format,ie.colorSpace),j=r.convert(ie.type),ee=v(ie.internalFormat,se,j,ie.normalized,ie.colorSpace);ht(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(x),ee,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(x),ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(P,x,V){let Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),he(i.TEXTURE_CUBE_MAP,x.depthTexture);let ce=r.convert(x.depthTexture.format),Ee=r.convert(x.depthTexture.type),ue;x.depthTexture.format===Yn?ue=i.DEPTH_COMPONENT24:x.depthTexture.format===Ui&&(ue=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,x.width,x.height,0,ce,Ee,null)}}else H(x.depthTexture,0);let ie=J.__webglTexture,se=ft(x),j=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ee=x.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yn)ht(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,ie,0);else if(x.depthTexture.format===Ui)ht(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(P){let x=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)bt(x.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?bt(x.__webglFramebuffer[0],P,0):bt(x.__webglFramebuffer,P,0)}else if(V){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),We(x.__webglDepthbuffer[Y],P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),We(x.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(P,x,V){let Y=n.get(P);x!==void 0&&ye(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ye(P)}function tt(P){let x=P.texture,V=n.get(P),Y=n.get(x);P.addEventListener("dispose",_);let J=P.textures,ie=P.isWebGLCubeRenderTarget===!0,se=J.length>1;if(se||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,a.memory.textures++),ie){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let ee=0;ee<x.mipmaps.length;ee++)V.__webglFramebuffer[j][ee]=i.createFramebuffer()}else V.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)V.__webglFramebuffer[j]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(se)for(let j=0,ee=J.length;j<ee;j++){let ce=n.get(J[j]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ht(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let ee=J[j];V.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[j]);let ce=r.convert(ee.format,ee.colorSpace),Ee=r.convert(ee.type),ue=v(ee.internalFormat,ce,Ee,ee.normalized,ee.colorSpace,P.isXRRenderTarget===!0),oe=ft(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ue,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,V.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),We(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),he(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ye(V.__webglFramebuffer[j][ee],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else ye(V.__webglFramebuffer[j],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let j=0,ee=J.length;j<ee;j++){let ce=J[j],Ee=n.get(ce),ue=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ee.__webglTexture),he(ue,ce),ye(V.__webglFramebuffer,P,ce,i.COLOR_ATTACHMENT0+j,ue,0),p(ce)&&S(ue)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,Y.__webglTexture),he(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ee=0;ee<x.mipmaps.length;ee++)ye(V.__webglFramebuffer[ee],P,x,i.COLOR_ATTACHMENT0,j,ee);else ye(V.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,j,0);p(x)&&S(j),t.unbindTexture()}P.depthBuffer&&Ye(P)}function ke(P){let x=P.textures;for(let V=0,Y=x.length;V<Y;V++){let J=x[V];if(p(J)){let ie=R(P),se=n.get(J).__webglTexture;t.bindTexture(ie,se),S(ie),t.unbindTexture()}}}let nt=[],ct=[];function vt(P){if(P.samples>0){if(ht(P)===!1){let x=P.textures,V=P.width,Y=P.height,J=i.COLOR_BUFFER_BIT,ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(P),j=x.length>1;if(j)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let ee=P.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ce]);let Ee=n.get(x[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,J,i.NEAREST),c===!0&&(nt.length=0,ct.length=0,nt.push(i.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(nt.push(ie),ct.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,se.__webglColorRenderbuffer[ce]);let Ee=n.get(x[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ft(P){return Math.min(s.maxSamples,P.samples)}function ht(P){let x=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(P){let x=a.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function Rt(P,x){let V=P.colorSpace,Y=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Zt&&V!==xi&&(Ke.getTransfer(V)===rt?(Y!==pn||J!==an)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",V)),x}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.getTextureUnits=w,this.setTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=je,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zx(i,e){function t(n,s=xi){let r,a=Ke.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===pn)return i.RGBA;if(n===Yn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===ra||n===aa||n===oa||n===la)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Ko||n===Zo||n===Jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===jo||n===Qo||n===el||n===tl||n===ca||n===nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o||n===jo)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ca)return r.COMPRESSED_RG11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===xl||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===Ml||n===ha||n===Sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dn({vertexShader:Jx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new xh,p={},S=t.getContextAttributes(),R=null,v=null,M=[],T=[],C=new Se,_=null,A=null,I=new St;I.viewport=new ot;let O=new St;O.viewport=new ot;let F=[I,O],L=new Do,w=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=M[K];return Q===void 0&&(Q=new zs,M[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=M[K];return Q===void 0&&(Q=new zs,M[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=M[K];return Q===void 0&&(Q=new zs,M[K]=Q),Q.getHandSpace()};function N(K){let Q=T.indexOf(K.inputSource);if(Q===-1)return;let re=M[Q];re!==void 0&&(re.update(K.inputSource,K.frame,l||a),re.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let K=0;K<M.length;K++){let Q=T[K];Q!==null&&(T[K]=null,M[K].disconnect(Q))}w=null,E=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(R),f=null,d=null,u=null,s=null,v=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ue=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=S.stencil?Ui:Yn,Ue=S.stencil?nr:On);let We={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new en(d.textureWidth,d.textureHeight,{format:pn,type:an,depthTexture:new Ii(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let re={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new en(f.framebufferWidth,f.framebufferHeight,{format:pn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(K){for(let Q=0;Q<K.removed.length;Q++){let re=K.removed[Q],Ue=T.indexOf(re);Ue>=0&&(T[Ue]=null,M[Ue].disconnect(re))}for(let Q=0;Q<K.added.length;Q++){let re=K.added[Q],Ue=T.indexOf(re);if(Ue===-1){for(let We=0;We<M.length;We++)if(We>=T.length){T.push(re),Ue=We;break}else if(T[We]===null){T[We]=re,Ue=We;break}if(Ue===-1)break}let ye=M[Ue];ye&&ye.connect(re)}}let G=new D,q=new D;function $(K,Q,re){G.setFromMatrixPosition(Q.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);let Ue=G.distanceTo(q),ye=Q.projectionMatrix.elements,We=re.projectionMatrix.elements,bt=ye[14]/(ye[10]-1),Ye=ye[14]/(ye[10]+1),je=(ye[9]+1)/ye[5],tt=(ye[9]-1)/ye[5],ke=(ye[8]-1)/ye[0],nt=(We[8]+1)/We[0],ct=bt*ke,vt=bt*nt,ft=Ue/(-ke+nt),ht=ft*-ke;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ht),K.translateZ(ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let z=bt+ft,Rt=Ye+ft,Qe=ct-ht,P=vt+(Ue-ht),x=je*Ye/Rt*z,V=tt*Ye/Rt*z;K.projectionMatrix.makePerspective(Qe,P,x,V,z,Rt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,re=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(re=m.depthFar)),L.near=O.near=I.near=Q,L.far=O.far=I.far=re,(w!==L.near||E!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),w=L.near,E=L.far),L.layers.mask=K.layers.mask|6,I.layers.mask=L.layers.mask&-5,O.layers.mask=L.layers.mask&-3;let Ue=K.parent,ye=L.cameras;ae(L,Ue);for(let We=0;We<ye.length;We++)ae(ye[We],Ue);ye.length===2?$(L,I,O):L.projectionMatrix.copy(I.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),pe(K,L,Ue)};function pe(K,Q,re){re===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Zi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let Be=null;function he(K,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ue=!1;re.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let Ye=0;Ye<re.length;Ye++){let je=re[Ye],tt=null;if(f!==null)tt=f.getViewport(je);else{let nt=u.getViewSubImage(d,je);tt=nt.viewport,Ye===0&&(e.setRenderTargetTextures(v,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(v))}let ke=F[Ye];ke===void 0&&(ke=new St,ke.layers.enable(Ye),ke.viewport=new ot,F[Ye]=ke),ke.matrix.fromArray(je.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(je.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(tt.x,tt.y,tt.width,tt.height),Ye===0&&(L.matrix.copy(ke.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(ke)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Ye=u.getDepthInformation(re[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(ye&&ye.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Ye=0;Ye<re.length;Ye++){let je=re[Ye].camera;if(je){let tt=p[je];tt||(tt=new Gr,p[je]=tt);let ke=u.getCameraImage(je);tt.sourceTexture=ke}}}}for(let re=0;re<M.length;re++){let Ue=T[re],ye=M[re];Ue!==null&&ye!==void 0&&ye.update(Ue,Q,l||a)}Be&&Be(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let we=new cf;we.setAnimationLoop(he),this.setAnimationLoop=function(K){Be=K},this.dispose=function(){}}},jx=new Fe,mf=new ze;mf.set(-1,0,0,0,1,0,0,0,1);function Qx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,R,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,R):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),R=S.envMap,v=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ey(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let T=M.program;n.uniformBlockBinding(v,T)}function l(v,M){let T=s[v.id];T===void 0&&(m(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",S));let C=M.program;n.updateUBOMapping(v,C);let _=e.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){let M=u();v.__bindingPointIndex=M;let T=i.createBuffer(),C=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=s[v.id],T=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,A=T.length;_<A;_++){let I=T[_];if(Array.isArray(I))for(let O=0,F=I.length;O<F;O++)f(I[O],_,O,C);else f(I,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,T,C){if(y(v,M,T,C)===!0){let _=v.__offset,A=v.value;if(Array.isArray(A)){let I=0;for(let O=0;O<A.length;O++){let F=A[O],L=p(F);g(F,v.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,M,T){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,T)}function y(v,M,T,C){let _=v.value,A=M+"_"+T;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{let I=C[A];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(v){let M=v.uniforms,T=0,C=16;for(let A=0,I=M.length;A<I;A++){let O=Array.isArray(M[A])?M[A]:[M[A]];for(let F=0,L=O.length;F<L;F++){let w=O[F],E=Array.isArray(w.value)?w.value:[w.value];for(let N=0,U=E.length;N<U;N++){let H=E[N],G=p(H),q=T%C,$=q%G.boundary,ae=q+$;T+=$,ae!==0&&C-ae<G.storage&&(T+=C-ae),w.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=T,T+=G.storage}}}let _=T%C;return _>0&&(T+=C-_),v.__size=T,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",v),M}function S(v){let M=v.target;M.removeEventListener("dispose",S);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function R(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}var ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function ny(){return ei===null&&(ei=new Hs(ty,16,16,Fi,Bn),ei.name="DFG_LUT",ei.minFilter=At,ei.magFilter=At,ei.wrapS=xn,ei.wrapT=xn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var Rl=class{constructor(e={}){let{canvas:t=Nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([qo,Xo,Wo]),p=new Set([an,On,tr,nr,Go,Vo]),S=new Uint32Array(4),R=new Int32Array(4),v=new D,M=null,T=null,C=[],_=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,F=null,L=null,w=null,E=null;this._outputColorSpace=yt;let N=0,U=0,H=null,G=-1,q=null,$=new ot,ae=new ot,pe=null,Be=new Ne(0),he=0,we=t.width,K=t.height,Q=1,re=null,Ue=null,ye=new ot(0,0,we,K),We=new ot(0,0,we,K),bt=!1,Ye=new Ws,je=!1,tt=!1,ke=new Fe,nt=new D,ct=new ot,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function ht(){return H===null?Q:1}let z=n;function Rt(b,B){return t.getContext(b,B)}let Qe,P,x,V,Y,J,ie,se,j,ee,ce,Ee,ue,oe,Ie,De,He,k,de,te,fe,xe,ne;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",An,!1),z===null){let B="webgl2";if(z=Rt(B,b),z===null)throw Rt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(b){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",An,!1),Oe("WebGLRenderer: "+b.message),b}function Le(){Qe=new c_(z),Qe.init(),fe=new Zx(z,Qe),P=new Q0(z,Qe,e,fe),x=new Yx(z,Qe),P.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),L=z.createFramebuffer(),w=z.createFramebuffer(),E=z.createFramebuffer(),V=new d_(z),Y=new Nx,J=new Kx(z,Qe,x,Y,P,fe,V),ie=new l_(I),se=new pm(z),xe=new $0(z,se),j=new h_(z,se,V,xe),ee=new p_(z,j,se,xe,V),k=new f_(z,P,J),Ie=new e_(Y),ce=new Lx(I,ie,Qe,P,xe,Ie),Ee=new Qx(I,Y),ue=new Ux,oe=new Gx(Qe),He=new J0(I,ie,x,ee,g,c),De=new qx(I,ee,P),ne=new ey(z,V,P,x),de=new j0(z,Qe,V),te=new u_(z,Qe,V),V.programs=ce.programs,I.capabilities=P,I.extensions=Qe,I.properties=Y,I.renderLists=ue,I.shadowMap=De,I.state=x,I.info=V}y!==an&&(A=new g_(y,t.width,t.height,o,s,r));let Ae=new yh(I,z);this.xr=Ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=Qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(we,K,!1))},this.getSize=function(b){return b.set(we,K)},this.setSize=function(b,B,Z=!0){if(Ae.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}we=b,K=B,t.width=Math.floor(b*Q),t.height=Math.floor(B*Q),Z===!0&&(t.style.width=b+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(we*Q,K*Q).floor()},this.setDrawingBufferSize=function(b,B,Z){we=b,K=B,Q=Z,t.width=Math.floor(b*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(y===an){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,B,Z,W){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,B,Z,W),x.viewport($.copy(ye).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(We)},this.setScissor=function(b,B,Z,W){b.isVector4?We.set(b.x,b.y,b.z,b.w):We.set(b,B,Z,W),x.scissor(ae.copy(We).multiplyScalar(Q).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(b){x.setScissorTest(bt=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){Ue=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,Z=!0){let W=0;if(b){let X=!1;if(H!==null){let _e=H.texture.format;X=m.has(_e)}if(X){let _e=H.texture.type,Me=p.has(_e),ge=He.getClearColor(),be=He.getClearAlpha(),Re=ge.r,Xe=ge.g,$e=ge.b;Me?(S[0]=Re,S[1]=Xe,S[2]=$e,S[3]=be,z.clearBufferuiv(z.COLOR,0,S)):(R[0]=Re,R[1]=Xe,R[2]=$e,R[3]=be,z.clearBufferiv(z.COLOR,0,R))}else W|=z.COLOR_BUFFER_BIT}B&&(W|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",An,!1),He.dispose(),ue.dispose(),oe.dispose(),Y.dispose(),ie.dispose(),ee.dispose(),xe.dispose(),ne.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ru),Ae.removeEventListener("sessionend",au),Gi.stop()};function gt(b){b.preventDefault(),Cr("WebGLRenderer: Context Lost."),O=!0}function it(){Cr("WebGLRenderer: Context Restored."),O=!1;let b=V.autoReset,B=De.enabled,Z=De.autoUpdate,W=De.needsUpdate,X=De.type;Le(),V.autoReset=b,De.enabled=B,De.autoUpdate=Z,De.needsUpdate=W,De.type=X}function An(b){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vn(b){let B=b.target;B.removeEventListener("dispose",Vn),Zf(B)}function Zf(b){Jf(b),Y.remove(b)}function Jf(b){let B=Y.get(b).programs;B!==void 0&&(B.forEach(function(Z){ce.releaseProgram(Z)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,Z,W,X,_e){B===null&&(B=vt);let Me=X.isMesh&&X.matrixWorld.determinantAffine()<0,ge=Qf(b,B,Z,W,X);x.setMaterial(W,Me);let be=Z.index,Re=1;if(W.wireframe===!0){if(be=j.getWireframeAttribute(Z),be===void 0)return;Re=2}let Xe=Z.drawRange,$e=Z.attributes.position,Te=Xe.start*Re,st=(Xe.start+Xe.count)*Re;_e!==null&&(Te=Math.max(Te,_e.start*Re),st=Math.min(st,(_e.start+_e.count)*Re)),be!==null?(Te=Math.max(Te,0),st=Math.min(st,be.count)):$e!=null&&(Te=Math.max(Te,0),st=Math.min(st,$e.count));let Ct=st-Te;if(Ct<0||Ct===1/0)return;xe.setup(X,W,ge,Z,be);let xt,pt=de;if(be!==null&&(xt=se.get(be),pt=te,pt.setIndex(xt)),X.isMesh)W.wireframe===!0?(x.setLineWidth(W.wireframeLinewidth*ht()),pt.setMode(z.LINES)):pt.setMode(z.TRIANGLES);else if(X.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),x.setLineWidth(zt*ht()),X.isLineSegments?pt.setMode(z.LINES):X.isLineLoop?pt.setMode(z.LINE_LOOP):pt.setMode(z.LINE_STRIP)}else X.isPoints?pt.setMode(z.POINTS):X.isSprite&&pt.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let zt=X._multiDrawStarts,ve=X._multiDrawCounts,Yt=X._multiDrawCount,et=be?se.get(be).bytesPerElement:1,gn=Y.get(W).currentProgram.getUniforms();for(let Hn=0;Hn<Yt;Hn++)gn.setValue(z,"_gl_DrawID",Hn),pt.render(zt[Hn]/et,ve[Hn])}else if(X.isInstancedMesh)pt.renderInstances(Te,Ct,X.count);else if(Z.isInstancedBufferGeometry){let zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ve=Math.min(Z.instanceCount,zt);pt.renderInstances(Te,Ct,ve)}else pt.render(Te,Ct)};function su(b,B,Z,W){F!==null&&b.isNodeMaterial&&F.setObject(W,b),je===!0&&Ie.setState(b,Z,!1),b.transparent===!0&&b.side===Dt&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,Aa(b,B,W),b.side=jn,b.needsUpdate=!0,Aa(b,B,W),b.side=Dt):Aa(b,B,W)}this.compile=function(b,B,Z=null){Z===null&&(Z=b),F!==null&&F.renderStart(b,B,Z),T=oe.get(Z),T.init(B),_.push(T),Z.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),b!==Z&&b.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),tt=this.localClippingEnabled,je=Ie.init(this.clippingPlanes,tt),je===!0&&Ie.setGlobalState(this.clippingPlanes,B),F!==null&&De.render(T.state.shadowsArray,Z,B);let W=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _e=X.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){let ge=_e[Me];su(ge,Z,B,X),W.add(ge)}else su(_e,Z,B,X),W.add(_e)}),T=_.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(b,B,Z=null){let W=this.compile(b,B,Z);return new Promise(X=>{function _e(){if(W.forEach(function(Me){let be=Y.get(Me).currentProgram;(be===void 0||be.isReady())&&W.delete(Me)}),W.size===0){X(b);return}setTimeout(_e,10)}Qe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Wl=null;function $f(b){Wl&&Wl(b)}function ru(){Gi.stop()}function au(){Gi.start()}let Gi=new cf;Gi.setAnimationLoop($f),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){Wl=b,Ae.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Ae.addEventListener("sessionstart",ru),Ae.addEventListener("sessionend",au),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;F!==null&&F.renderStart(b,B);let Z=Ae.enabled===!0&&Ae.isPresenting===!0,W=A!==null&&(H===null||Z)&&A.begin(I,H);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(B),B=Ae.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,B,H),T=oe.get(b,_.length),T.init(B),T.state.textureUnits=J.getTextureUnits(),_.push(T),ke.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ye.setFromProjectionMatrix(ke,Ln,B.reversedDepth),tt=this.localClippingEnabled,je=Ie.init(this.clippingPlanes,tt),M=ue.get(b,C.length),M.init(),C.push(M),Ae.enabled===!0&&Ae.isPresenting===!0){let Me=I.xr.getDepthSensingMesh();Me!==null&&Xl(Me,B,-1/0,I.sortObjects)}Xl(b,B,0,I.sortObjects),M.finish(),F!==null&&F.updateLights(T.state.lightsArray),I.sortObjects===!0&&M.sort(re,Ue),ft=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ft&&He.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Ie.beginShadows();let X=T.state.shadowsArray;if(De.render(X,b,B),je===!0&&Ie.endShadows(),(W&&A.hasRenderPass())===!1){let Me=M.opaque,ge=M.transmissive;if(T.setupLights(),B.isArrayCamera){let be=B.cameras;if(ge.length>0)for(let Re=0,Xe=be.length;Re<Xe;Re++){let $e=be[Re];lu(Me,ge,b,$e)}ft&&He.render(b);for(let Re=0,Xe=be.length;Re<Xe;Re++){let $e=be[Re];ou(M,b,$e,$e.viewport)}}else ge.length>0&&lu(Me,ge,b,B),ft&&He.render(b),ou(M,b,B)}H!==null&&U===0&&(J.updateMultisampleRenderTarget(H),J.updateRenderTargetMipmap(H)),W&&A.end(I),b.isScene===!0&&b.onAfterRender(I,b,B),xe.resetDefaultState(),G=-1,q=null,_.pop(),_.length>0?(T=_[_.length-1],J.setTextureUnits(T.state.textureUnits),je===!0&&Ie.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,F!==null&&F.renderEnd()};function Xl(b,B,Z,W){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ye)){W&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ke);let Me=ee.update(b),ge=b.material;ge.visible&&M.push(b,Me,ge,Z,ct.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ye))){let Me=ee.update(b),ge=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ct.copy(Me.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(ke)),Array.isArray(ge)){let be=Me.groups;for(let Re=0,Xe=be.length;Re<Xe;Re++){let $e=be[Re],Te=ge[$e.materialIndex];Te&&Te.visible&&M.push(b,Me,Te,Z,ct.z,$e,B)}}else ge.visible&&M.push(b,Me,ge,Z,ct.z,null,B)}}let _e=b.children;for(let Me=0,ge=_e.length;Me<ge;Me++)Xl(_e[Me],B,Z,W)}function ou(b,B,Z,W){let{opaque:X,transmissive:_e,transparent:Me}=b;T.setupLightsView(Z),je===!0&&Ie.setGlobalState(I.clippingPlanes,Z),W&&x.viewport($.copy(W)),X.length>0&&wa(X,B,Z),_e.length>0&&wa(_e,B,Z),Me.length>0&&wa(Me,B,Z),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function lu(b,B,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Te=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new en(1,1,{generateMipmaps:!0,type:Te?Bn:an,minFilter:Fn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let _e=T.state.transmissionRenderTarget[W.id],Me=W.viewport||$;_e.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);let ge=I.getRenderTarget(),be=I.getActiveCubeFace(),Re=I.getActiveMipmapLevel();I.setRenderTarget(_e),I.getClearColor(Be),he=I.getClearAlpha(),he<1&&I.setClearColor(16777215,.5),I.clear(),ft&&He.render(Z);let Xe=I.toneMapping;I.toneMapping=Un;let $e=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),je===!0&&Ie.setGlobalState(I.clippingPlanes,W),wa(b,Z,W),J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let st=0,Ct=B.length;st<Ct;st++){let xt=B[st],{object:pt,geometry:zt,material:ve,group:Yt}=xt;if(ve.side===Dt&&pt.layers.test(W.layers)){let et=ve.side;ve.side=Bt,ve.needsUpdate=!0,cu(pt,Z,W,zt,ve,Yt),ve.side=et,ve.needsUpdate=!0,Te=!0}}Te===!0&&(J.updateMultisampleRenderTarget(_e),J.updateRenderTargetMipmap(_e))}I.setRenderTarget(ge,be,Re),I.setClearColor(Be,he),$e!==void 0&&(W.viewport=$e),I.toneMapping=Xe}function wa(b,B,Z){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,_e=b.length;X<_e;X++){let Me=b[X],{object:ge,geometry:be,group:Re}=Me,Xe=Me.material;Xe.allowOverride===!0&&W!==null&&(Xe=W),ge.layers.test(Z.layers)&&cu(ge,B,Z,be,Xe,Re)}}function cu(b,B,Z,W,X,_e){F!==null&&X.isNodeMaterial&&F.setObject(b,X),b.onBeforeRender(I,B,Z,W,X,_e),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(I,B,Z,W,b,_e),X.transparent===!0&&X.side===Dt&&X.forceSinglePass===!1?(X.side=Bt,X.needsUpdate=!0,I.renderBufferDirect(Z,B,W,X,b,_e),X.side=jn,X.needsUpdate=!0,I.renderBufferDirect(Z,B,W,X,b,_e),X.side=Dt):I.renderBufferDirect(Z,B,W,X,b,_e),b.onAfterRender(I,B,Z,W,X,_e)}function Aa(b,B,Z){B.isScene!==!0&&(B=vt);let W=Y.get(b),X=T.state.lights,_e=T.state.shadowsArray,Me=X.state.version,ge=ce.getParameters(b,X.state,_e,B,Z,T.state.lightProbeGridArray),be=ce.getProgramCacheKey(ge),Re=W.programs;W.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let Xe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;W.envMap=ie.get(b.envMap||W.environment,Xe),W.envMapRotation=W.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Vn),Re=new Map,W.programs=Re);let $e=Re.get(be);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===Me)return uu(b,ge),$e}else ge.uniforms=ce.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,Z,ge),b.onBeforeCompile(ge,I),$e=ce.acquireProgram(ge,be),Re.set(be,$e),W.uniforms=ge.uniforms;let Te=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=Ie.uniform),uu(b,ge),W.needsLights=tp(b),W.lightsStateVersion=Me,W.needsLights&&(Te.ambientLightColor.value=X.state.ambient,Te.lightProbe.value=X.state.probe,Te.sunLights.value=X.state.sun,Te.sunLightShadows.value=X.state.sunShadow,Te.directionalLights.value=X.state.directional,Te.directionalLightShadows.value=X.state.directionalShadow,Te.spotLights.value=X.state.spot,Te.spotLightShadows.value=X.state.spotShadow,Te.rectAreaLights.value=X.state.rectArea,Te.ltc_1.value=X.state.rectAreaLTC1,Te.ltc_2.value=X.state.rectAreaLTC2,Te.pointLights.value=X.state.point,Te.pointLightShadows.value=X.state.pointShadow,Te.hemisphereLights.value=X.state.hemi,Te.sunShadowMatrix.value=X.state.sunShadowMatrix,Te.sunShadowCascade.value=X.state.sunShadowCascade,Te.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Te.spotLightMatrix.value=X.state.spotLightMatrix,Te.spotLightMap.value=X.state.spotLightMap,Te.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=$e,W.uniformsList=null,$e}function hu(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=or.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function uu(b,B){let Z=Y.get(b);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function jf(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let Z=0,W=b.length;Z<W;Z++){let X=b[Z];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function Qf(b,B,Z,W,X){B.isScene!==!0&&(B=vt),J.resetTextureUnits();let _e=B.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,ge=H===null?I.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ke.workingColorSpace,be=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Re=ie.get(W.envMap||Me,be),Xe=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!Z.morphAttributes.position,st=!!Z.morphAttributes.normal,Ct=!!Z.morphAttributes.color,xt=Un;W.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(xt=I.toneMapping);let pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,zt=pt!==void 0?pt.length:0,ve=Y.get(W),Yt=T.state.lights;if(je===!0&&(tt===!0||b!==q)){let _t=b===q&&W.id===G;Ie.setState(W,b,_t)}let et=!1;W.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Yt.state.version||ve.outputColorSpace!==ge||X.isBatchedMesh&&ve.batching===!1||!X.isBatchedMesh&&ve.batching===!0||X.isBatchedMesh&&ve.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&ve.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&ve.instancing===!1||!X.isInstancedMesh&&ve.instancing===!0||X.isSkinnedMesh&&ve.skinning===!1||!X.isSkinnedMesh&&ve.skinning===!0||X.isInstancedMesh&&ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ve.instancingMorph===!1&&X.morphTexture!==null||ve.envMap!==Re||W.fog===!0&&ve.fog!==_e||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ie.numPlanes||ve.numIntersection!==Ie.numIntersection)||ve.vertexAlphas!==Xe||ve.vertexTangents!==$e||ve.morphTargets!==Te||ve.morphNormals!==st||ve.morphColors!==Ct||ve.toneMapping!==xt||ve.morphTargetsCount!==zt||!!ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ve.__version=W.version);let gn=ve.currentProgram;et===!0&&(gn=Aa(W,B,X),F&&W.isNodeMaterial&&F.onUpdateProgram(W,gn,ve));let Hn=!1,yi=!1,_s=!1,ut=gn.getUniforms(),Tt=ve.uniforms;if(x.useProgram(gn.program)&&(Hn=!0,yi=!0,_s=!0),W.id!==G&&(G=W.id,yi=!0),ve.needsLights){let _t=jf(T.state.lightProbeGridArray,X);ve.lightProbeGrid!==_t&&(ve.lightProbeGrid=_t,yi=!0)}if(Hn||q!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(z,"projectionMatrix",b.projectionMatrix),ut.setValue(z,"viewMatrix",b.matrixWorldInverse);let Mi=ut.map.cameraPosition;Mi!==void 0&&Mi.setValue(z,nt.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&ut.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,yi=!0,_s=!0)}if(ve.needsLights&&(Yt.state.sunShadowMap.length>0&&ut.setValue(z,"sunShadowMap",Yt.state.sunShadowMap,J),Yt.state.directionalShadowMap.length>0&&ut.setValue(z,"directionalShadowMap",Yt.state.directionalShadowMap,J),Yt.state.spotShadowMap.length>0&&ut.setValue(z,"spotShadowMap",Yt.state.spotShadowMap,J),Yt.state.pointShadowMap.length>0&&ut.setValue(z,"pointShadowMap",Yt.state.pointShadowMap,J)),X.isSkinnedMesh){ut.setOptional(z,X,"bindMatrix"),ut.setOptional(z,X,"bindMatrixInverse");let _t=X.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ut.setValue(z,"boneTexture",_t.boneTexture,J))}X.isBatchedMesh&&(ut.setOptional(z,X,"batchingTexture"),ut.setValue(z,"batchingTexture",X._matricesTexture,J),ut.setOptional(z,X,"batchingIdTexture"),ut.setValue(z,"batchingIdTexture",X._indirectTexture,J),ut.setOptional(z,X,"batchingColorTexture"),X._colorsTexture!==null&&ut.setValue(z,"batchingColorTexture",X._colorsTexture,J));let vi=Z.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&k.update(X,Z,gn),(yi||ve.receiveShadow!==X.receiveShadow)&&(ve.receiveShadow=X.receiveShadow,ut.setValue(z,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Tt.envMapIntensity.value=B.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=ny()),yi){if(ut.setValue(z,"toneMappingExposure",I.toneMappingExposure),ve.needsLights&&ep(Tt,_s),_e&&W.fog===!0&&Ee.refreshFogUniforms(Tt,_e),Ee.refreshMaterialUniforms(Tt,W,Q,K,T.state.transmissionRenderTarget[b.id]),ve.needsLights&&ve.lightProbeGrid){let _t=ve.lightProbeGrid;Tt.probesSH.value=_t.texture,Tt.probesMin.value.copy(_t.boundingBox.min),Tt.probesMax.value.copy(_t.boundingBox.max),Tt.probesResolution.value.copy(_t.resolution)}or.upload(z,hu(ve),Tt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(or.upload(z,hu(ve),Tt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(z,"center",X.center),ut.setValue(z,"modelViewMatrix",X.modelViewMatrix),ut.setValue(z,"normalMatrix",X.normalMatrix),ut.setValue(z,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let _t=W.uniformsGroups;for(let Mi=0,xs=_t.length;Mi<xs;Mi++){let fu=_t[Mi];ne.update(fu,gn),ne.bind(fu,gn)}}return gn}function ep(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function tp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(b,B,Z){let W=Y.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(b.texture).__webglTexture=B,Y.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let Z=Y.get(b);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,Z=0){H=b,N=B,U=Z;let W=null,X=!1,_e=!1;if(b){let ge=Y.get(b);if(ge.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(z.FRAMEBUFFER,ge.__webglFramebuffer),$.copy(b.viewport),ae.copy(b.scissor),pe=b.scissorTest,x.viewport($),x.scissor(ae),x.setScissorTest(pe),G=-1;return}else if(ge.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(ge.__hasExternalTextures)J.rebindTextures(b,Y.get(b.texture).__webglTexture,Y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Xe=b.depthTexture;if(ge.__boundDepthTexture!==Xe){if(Xe!==null&&Y.has(Xe)&&(b.width!==Xe.image.width||b.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}let be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);let Re=Y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[B])?W=Re[B][Z]:W=Re[B],X=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?W=Y.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?W=Re[Z]:W=Re,$.copy(b.viewport),ae.copy(b.scissor),pe=b.scissorTest}else $.copy(ye).multiplyScalar(Q).floor(),ae.copy(We).multiplyScalar(Q).floor(),pe=bt;if(Z!==0&&(W=L),x.bindFramebuffer(z.FRAMEBUFFER,W)&&x.drawBuffers(b,W),x.viewport($),x.scissor(ae),x.setScissorTest(pe),X){let ge=Y.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,Z)}else if(_e){let ge=B;for(let be=0;be<b.textures.length;be++){let Re=Y.get(b.textures[be]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+be,Re.__webglTexture,Z,ge)}}else if(b!==null&&Z!==0){let ge=Y.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,Z)}G=-1};function du(b){let B=Y.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=P.textureFormatReadable(b.format),B.__typeReadable=P.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,Z,W,X,_e,Me,ge=0){if(!(b&&b.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){x.bindFramebuffer(z.FRAMEBUFFER,be);try{let Re=b.textures[ge],Xe=Re.format,$e=Re.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Te=du(Re);if(Te.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-W&&Z>=0&&Z<=b.height-X&&z.readPixels(B,Z,W,X,fe.convert(Xe),fe.convert($e),_e)}finally{let Re=H!==null?Y.get(H).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,B,Z,W,X,_e,Me,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(B>=0&&B<=b.width-W&&Z>=0&&Z<=b.height-X){x.bindFramebuffer(z.FRAMEBUFFER,be);let Re=b.textures[ge],Xe=Re.format,$e=Re.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ge);let Te=du(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,st),z.bufferData(z.PIXEL_PACK_BUFFER,_e.byteLength,z.STREAM_READ),z.readPixels(B,Z,W,X,fe.convert(Xe),fe.convert($e),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ct=H!==null?Y.get(H).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Ct);let xt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ud(z,xt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,st),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_e),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(st),z.deleteSync(xt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,Z=0){let W=Math.pow(2,-Z),X=Math.floor(b.image.width*W),_e=Math.floor(b.image.height*W),Me=B!==null?B.x:0,ge=B!==null?B.y:0;J.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Me,ge,X,_e),x.unbindTexture()},this.copyTextureToTexture=function(b,B,Z=null,W=null,X=0,_e=0){let Me,ge,be,Re,Xe,$e,Te,st,Ct,xt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(Z!==null)Me=Z.max.x-Z.min.x,ge=Z.max.y-Z.min.y,be=Z.isBox3?Z.max.z-Z.min.z:1,Re=Z.min.x,Xe=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{let Tt=Math.pow(2,-X);Me=Math.floor(xt.width*Tt),ge=Math.floor(xt.height*Tt),b.isDataArrayTexture?be=xt.depth:b.isData3DTexture?be=Math.floor(xt.depth*Tt):be=1,Re=0,Xe=0,$e=0}W!==null?(Te=W.x,st=W.y,Ct=W.z):(Te=0,st=0,Ct=0);let pt=fe.convert(B.format),zt=fe.convert(B.type),ve;B.isData3DTexture?(J.setTexture3D(B,0),ve=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(J.setTexture2DArray(B,0),ve=z.TEXTURE_2D_ARRAY):(J.setTexture2D(B,0),ve=z.TEXTURE_2D),x.activeTexture(z.TEXTURE0),x.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);let Yt=x.getParameter(z.UNPACK_ROW_LENGTH),et=x.getParameter(z.UNPACK_IMAGE_HEIGHT),gn=x.getParameter(z.UNPACK_SKIP_PIXELS),Hn=x.getParameter(z.UNPACK_SKIP_ROWS),yi=x.getParameter(z.UNPACK_SKIP_IMAGES);x.pixelStorei(z.UNPACK_ROW_LENGTH,xt.width),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt.height),x.pixelStorei(z.UNPACK_SKIP_PIXELS,Re),x.pixelStorei(z.UNPACK_SKIP_ROWS,Xe),x.pixelStorei(z.UNPACK_SKIP_IMAGES,$e);let _s=b.isDataArrayTexture||b.isData3DTexture,ut=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Tt=Y.get(b),vi=Y.get(B),_t=Y.get(Tt.__renderTarget),Mi=Y.get(vi.__renderTarget);x.bindFramebuffer(z.READ_FRAMEBUFFER,_t.__webglFramebuffer),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let xs=0;xs<be;xs++)_s&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(b).__webglTexture,X,$e+xs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,_e,Ct+xs)),z.blitFramebuffer(Re,Xe,Me,ge,Te,st,Me,ge,z.DEPTH_BUFFER_BIT,z.NEAREST);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Y.has(b)){let Tt=Y.get(b),vi=Y.get(B);x.bindFramebuffer(z.READ_FRAMEBUFFER,w),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,E);for(let _t=0;_t<be;_t++)_s?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tt.__webglTexture,X,$e+_t):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tt.__webglTexture,X),ut?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vi.__webglTexture,_e,Ct+_t):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vi.__webglTexture,_e),X!==0?z.blitFramebuffer(Re,Xe,Me,ge,Te,st,Me,ge,z.COLOR_BUFFER_BIT,z.NEAREST):ut?z.copyTexSubImage3D(ve,_e,Te,st,Ct+_t,Re,Xe,Me,ge):z.copyTexSubImage2D(ve,_e,Te,st,Re,Xe,Me,ge);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ut?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(ve,_e,Te,st,Ct,Me,ge,be,pt,zt,xt.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(ve,_e,Te,st,Ct,Me,ge,be,pt,xt.data):z.texSubImage3D(ve,_e,Te,st,Ct,Me,ge,be,pt,zt,xt):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_e,Te,st,Me,ge,pt,zt,xt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_e,Te,st,xt.width,xt.height,pt,xt.data):z.texSubImage2D(z.TEXTURE_2D,_e,Te,st,Me,ge,pt,zt,xt);x.pixelStorei(z.UNPACK_ROW_LENGTH,Yt),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,et),x.pixelStorei(z.UNPACK_SKIP_PIXELS,gn),x.pixelStorei(z.UNPACK_SKIP_ROWS,Hn),x.pixelStorei(z.UNPACK_SKIP_IMAGES,yi),_e===0&&B.generateMipmaps&&z.generateMipmap(ve),x.unbindTexture()},this.initRenderTarget=function(b){Y.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){N=0,U=0,H=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Pl=class extends Ji{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new $t;e.deleteAttribute("uv");let t=new Nt({side:Bt}),n=new Nt,s=new ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ui(e,n,6),o=new dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Ve(e,hr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ve(e,hr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ve(e,hr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ve(e,hr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ve(e,hr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ve(e,hr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function hr(i){return new Kr({color:0,emissive:16777215,emissiveIntensity:i})}function _f(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new lt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=gf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][d]);let g=gf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function gf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Pt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+u,g,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function vh(i,e){if(e===Jc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ir||e===ua){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ir)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var ga=new D;function yn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ga.copy(e),ga[n]=0,ga.normalize();let l=.5*a/(a+o),h=1-ga.angleTo(i)/c;return Math.sign(ga[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Ll=class i extends $t{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new D,l=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,y=new D,m=.5/a;for(let p=0,S=0;p<u.length;p+=3,S+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:y.set(1,0,0),f[S+0]=yn(y,l,"z","y",r,n),f[S+1]=1-yn(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),f[S+0]=1-yn(y,l,"z","y",r,n),f[S+1]=1-yn(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),f[S+0]=1-yn(y,l,"x","z",r,e),f[S+1]=yn(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),f[S+0]=1-yn(y,l,"x","z",r,e),f[S+1]=1-yn(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),f[S+0]=1-yn(y,l,"x","y",r,e),f[S+1]=1-yn(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),f[S+0]=yn(y,l,"x","y",r,e),f[S+1]=1-yn(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var _S=Math.PI*2;var Xt={gentra:{name:"Gentra",subtitle:"1.5 \xB7 mexanika",length:4.515,width:1.725,height:1.445,wheelbase:2.6,wheelRadius:.3,maxSpeed:52,acceleration:5.1,braking:12.5,steering:.53},malibu:{name:"Malibu",subtitle:"2.0 Turbo \xB7 avtomat",length:4.923,width:1.854,height:1.473,wheelbase:2.83,wheelRadius:.335,maxSpeed:61,acceleration:6.8,braking:13.2,steering:.49},cobalt:{name:"Cobalt",subtitle:"2014 \xB7 LTZ",length:4.479,width:1.735,height:1.514,wheelbase:2.62,wheelRadius:.322,maxSpeed:49,acceleration:4.9,braking:12.4,steering:.53}},_a=[[-20,100],[75,100],[135,50],[115,-45],[65,-95],[-10,-92],[-35,-45],[-87,-65],[-145,-25],[-140,55],[-100,100]];function Mh(i){let e=_a.length,t=(i%1+1)%1*e,n=Math.floor(t),s=t-n,r=_a[(n+e-1)%e],a=_a[n],o=_a[(n+1)%e],c=_a[(n+2)%e];return[0,1].map(l=>.5*(2*a[l]+(-r[l]+o[l])*s+(2*r[l]-5*a[l]+4*o[l]-c[l])*s*s+(-r[l]+3*a[l]-3*o[l]+c[l])*s*s*s))}var vn=Array.from({length:660},(i,e)=>{let t=Mh(e/660),n=Mh((e-.1)/660),s=Mh((e+.1)/660),r=Math.hypot(s[0]-n[0],s[1]-n[1]);return{x:t[0],z:t[1],tx:(s[0]-n[0])/r,tz:(s[1]-n[1])/r,s:0}}),hs=0;for(let i=0;i<vn.length;i++){vn[i].s=hs;let e=vn[(i+1)%vn.length];hs+=Math.hypot(e.x-vn[i].x,e.z-vn[i].z)}function iy(i){i=(i%hs+hs)%hs;let e=0,t=vn.length-1;for(;e<t;){let h=Math.ceil((e+t)/2);vn[h].s<=i?e=h:t=h-1}let n=vn[e],s=vn[(e+1)%vn.length],r=e===vn.length-1?hs-n.s:s.s-n.s,a=(i-n.s)/r,o=n.tx+(s.tx-n.tx)*a,c=n.tz+(s.tz-n.tz)*a,l=Math.hypot(o,c);return{x:n.x+(s.x-n.x)*a,z:n.z+(s.z-n.z)*a,tx:o/l,tz:c/l,s:i}}var xS=Array.from({length:12},(i,e)=>iy(hs*e/12));function xf(i="#e5e7eb"){let e=new Mt;e.name="Gentra_PDF_reference_v3";let t=(w,E,N=0,U=.5)=>{let H=new Nt({color:E,metalness:N,roughness:U});return H.name=w,H},n=new Ht({color:i,metalness:.32,roughness:.25,clearcoat:1,clearcoatRoughness:.12});n.name="Body_paint";let s=t("Tinted_glass",2307133,.3,.14);s.side=Dt;let r=t("Grille_and_window_rubber",1053719,.1,.65),a=t("Tire_rubber",1513497,0,.88),o=t("Polished_trim",12831696,.88,.23),c=t("Panel_gaps",3488832,.1,.62),l=t("Alloy_wheels",10200748,.72,.3),h=t("Bowtie_gold",12952397,.8,.28),u=t("Tail_lamp_red",9902120,.15,.22);u.emissive.set(15734823),u.emissiveIntensity=.3;let d=t("Headlamp_reflector",14017773,.65,.2);d.emissive.set(13165567),d.emissiveIntensity=.22;let f=t("Indicator",14523193,.15,.3),g=t("Plate_and_reverse_lens",14869469,.12,.42),y=(w,E,N,U=e)=>{let H=new Ve(w,E);return H.name=N,H.castShadow=!0,H.receiveShadow=!0,U.add(H),H},m=(w,E,N,U,H=e,G=.015)=>{let q=y(G?new Ll(...w,3,Math.min(G,...w.map($=>$/2))):new $t(...w),N,U,H);return q.position.set(...E),q},p=(w,E,N,U=.005,H=e)=>{let G=w.map(pe=>new D(...pe)),q=new Ks(G),$=new Vt().setFromPoints(G),ae=new sn;return ae.getPoint=(pe,Be=new D)=>q.getPoint(pe,Be).clamp($.min,$.max),y(new Yr(ae,Math.max(12,w.length*5),U,5,!1),E,N,H)};function S(w,E,N){E.side=Dt;let U=new lt,H=[];for(let G=1;G<w.length-1;G++)H.push(0,G,G+1);return U.setAttribute("position",new Ge(w.flat(),3)),U.setIndex(H),U.computeVertexNormals(),y(U,E,N)}function R(w,E,N,U,H,G,q=0){let $=[],ae=[];for(let he=0;he<=16;he++)for(let we=0;we<=16;we++){let K=we/16,Q=he/16;for(let re=0;re<3;re++)$.push((1-Q)*((1-K)*w[re]+K*E[re])+Q*((1-K)*U[re]+K*N[re])+(re===1?q*Math.sin(Math.PI*K)*Math.sin(Math.PI*Q):0))}for(let he=0;he<16;he++)for(let we=0;we<16;we++){let K=he*17+we;ae.push(K,K+16+2,K+1,K,K+16+1,K+16+2)}let Be=new lt;return Be.setAttribute("position",new Ge($,3)),Be.setIndex(ae),Be.computeVertexNormals(),y(Be,H,G)}let v=[[-2.2,.665,.735],[-2.12,.78,.815],[-1.9,.825,.85],[-1.3,.8625,.92],[-.85,.854,.99],[.3,.858,1.004],[1.3,.8625,1.008],[1.65,.843,.985],[2.1,.815,.928],[2.27,.757,.875],[2.315,.695,.8]];function M(w){let E=1;for(;E<v.length-1&&w>v[E][0];)E++;let N=v[E-1],U=v[E],H=(w-N[0])/(U[0]-N[0]);return[sr.lerp(N[1],U[1],H),sr.lerp(N[2],U[2],H)]}let T=[],C=[],_=240,A=16;for(let w=0;w<=_;w++){let E=-2.2+4.515*w/_,[N,U]=M(E),H=.185;for(let q of[-1.3,1.3]){let $=E-q;Math.abs($)<.347&&(H=Math.max(H,.298+Math.sqrt(.347**2-$**2)))}let G=[[-.68,.17],[-.93,H],[-1,Math.max(H,.44)],[-1,Math.max(H,U-.15)],[-.986,U-.065],[-.91,U-.011],[-.64,U+.007],[0,U+.023],[.64,U+.007],[.91,U-.011],[.986,U-.065],[1,Math.max(H,U-.15)],[1,Math.max(H,.44)],[.93,H],[.68,.17],[0,.17]];for(let[q,$]of G)T.push(q*N,$,E+(w===0?.045*Math.min(1,Math.max(0,Math.abs($-.44)-.001)/.15):w===_?-.035*Math.min(1,Math.max(0,Math.abs($-.44)-.001)/.15):0))}for(let w=0;w<_;w++)for(let E=0;E<A;E++){let N=w*A+E,U=w*A+(E+1)%A,H=U+A,G=N+A;C.push(N,H,U,N,G,H)}for(let w of[0,_]){let E=w*A;for(let N=1;N<A-1;N++)w?C.push(E,E+N+1,E+N):C.push(E,E+N,E+N+1)}let I=new lt;I.setAttribute("position",new Ge(T,3)),I.setIndex(C),I.computeVertexNormals(),y(I,n,"Body_4515x1725"),R([-.65,1.375,-.38],[.65,1.375,-.38],[.634,1.385,.7],[-.634,1.385,.7],n,"Roof",.065),R([-.805,1.007,-.91],[.805,1.007,-.91],[.641,1.376,-.383],[-.641,1.376,-.383],s,"Windshield",.014),R([-.625,1.386,.7],[.625,1.386,.7],[.785,1.035,1.44],[-.785,1.035,1.44],s,"Rear_windshield",.018);for(let w of[-1,1]){let E=(he,we,K)=>[w*he,we,K],N=w<0?"Left":"Right",U=[E(.808,1.005,-.94),E(.659,1.383,-.4),E(.641,1.394,.71),E(.8,1.024,1.51)];p(U,n,N+"_A_roof_C_pillars",.031),S([E(.646,1.384,.68),E(.801,1.025,1.49),E(.812,1.018,1.2),E(.674,1.324,.79)],n,N+"_C_pillar");let H=[E(.796,1.025,-.876),E(.652,1.358,-.378),E(.647,1.384,.225),E(.808,1.026,.244)],G=[E(.808,1.027,.322),E(.646,1.387,.307),E(.638,1.369,.679),E(.779,1.03,1.068)];for(let[he,we]of[[H,"Front_door_glass"],[G,"Rear_door_glass"]])S(w<0?he:[...he].reverse(),s,N+"_"+we),p([...he,he[0]],r,N+"_"+we+"_seal",.008);let q=[E(.784,1.032,1.105),E(.652,1.344,.743),E(.798,1.035,1.272)];S(w<0?q:[...q].reverse(),s,N+"_Quarter_glass"),p([...q,q[0]],r,N+"_Quarter_seal",.009),p([E(.813,1.03,.279),E(.65,1.39,.265)],r,N+"_B_pillar",.03),p([E(.807,1.018,-.92),E(.818,1.02,.3),E(.81,1.022,1.3)],r,N+"_Beltline",.006);for(let[he,we]of[[-.9,"Front_door_leading"],[.285,"Door_divider"]])p([E(.812,1.012,he),E(.858,.76,he+.006),E(.854,.39,he+.018),E(.827,.215,he+.035)],c,N+"_"+we,.003);p([E(.804,1.026,1.3),E(.858,.82,1.34),E(.83,.67,.99),E(.845,.4,.88),E(.827,.213,.89)],c,N+"_Rear_door_cut",.0035),p([E(.84,.215,-.845),E(.86,.206,.28),E(.838,.215,.87)],c,N+"_Door_lower_gap",.0035),p([E(.865,.505,-.82),E(.867,.508,.24)],n,N+"_Front_side_molding",.018),p([E(.867,.508,.33),E(.86,.523,.95)],n,N+"_Rear_side_molding",.018);for(let he of[-.025,.91])m([.017,.035,.168],E(.862,.894,he),c,N+"_Handle_recess"),m([.029,.031,.146],E(.879,.91,he-.004),n,N+"_Door_handle");for(let he of[-1.3,1.3]){let we=[];for(let K=0;K<=48;K++){let Q=Math.PI*K/48,re=he+.348*Math.cos(Q);we.push(E(M(re)[0]+.001,.298+.348*Math.sin(Q),re))}p(we,n,N+"_Wheel_arch",.011)}m([.045,.065,.15],E(.824,1.041,-.81),r,N+"_Mirror_mount");let $=m([.21,.12,.2],E(.913,1.082,-.825),n,N+"_Mirror",e,.045);$.rotation.y=w*.12,m([.13,.071,.009],E(.918,1.088,-.716),s,N+"_Mirror_glass");let ae=[E(.375,.692,-2.181),E(.48,.838,-2.163),E(.715,.907,-2.102),E(.789,.873,-2.036),E(.803,.777,-2.031),E(.713,.721,-2.107)];S(w<0?[...ae].reverse():ae,o,N+"_Headlamp_housing"),p([...ae,ae[0]],r,N+"_Headlamp_gasket",.007);for(let[he,we,K,Q]of[[.579,.783,-2.157,.055],[.732,.806,-2.09,.049]]){let re=y(new Pi(Q,24,12),d,N+"_Headlamp_optic");re.position.set(w*he,we,K-.006),re.scale.z=.18}p([E(.427,.715,-2.18),E(.6,.729,-2.16),E(.761,.764,-2.079)],d,N+"_Lamp_lower_reflector",.009),m([.031,.07,.018],E(.786,.827,-2.052),f,N+"_Front_indicator");let pe=[E(.49,.326,-2.169),E(.57,.291,-2.168),E(.79,.326,-2.107),E(.79,.388,-2.11),E(.54,.378,-2.169)];S(w<0?pe:[...pe].reverse(),r,N+"_Fog_recess"),p([...pe,pe[0]],n,N+"_Fog_surround",.012),m([.199,.045,.012],E(.666,.345,-2.156),o,N+"_Rectangular_fog_light",e,.009);let Be=[E(.608,.562,2.306),E(.79,.59,2.246),E(.82,.785,2.203),E(.779,.962,2.172),E(.701,.977,2.23)];S(w<0?Be:[...Be].reverse(),u,N+"_Vertical_tail_lamp"),p([...Be,Be[0]],c,N+"_Tail_lamp_gasket",.006);for(let he of[.707,.821])m([.066,.088,.018],E(.724,he,2.295),g,N+"_Tail_clear_lens"),y(new es(.021,20),r,N+"_Tail_optic").position.set(w*.724,he,2.306)}for(let[w,E]of[[[[-.375,.817,-2.19],[.375,.817,-2.19],[.354,.774,-2.199],[-.354,.774,-2.199]],"Upper_grille"],[[[-.348,.743,-2.199],[.348,.743,-2.199],[.287,.669,-2.197],[-.287,.669,-2.197]],"Lower_grille"]])S(w,r,E),p([...w,w[0]],o,E+"_chrome",.009);for(let w of[.696,.722,.798])m([w>.76?.66:.565,.007,.009],[0,w,-2.195],o,"Grille_slat",e,0);S([[-.478,.285,-2.18],[.478,.285,-2.18],[.384,.341,-2.195],[-.384,.341,-2.195]],r,"Lower_bumper_intake");for(let w of[.302,.324])m([.73,.007,.01],[0,w,-2.192],r,"Lower_intake_slat",e,0);function O(w,E,N=!1){let U=[[-.074,E+.018,w],[-.032,E+.018,w],[-.032,E+.036,w],[.032,E+.036,w],[.032,E+.018,w],[.074,E+.018,w],[.067,E-.014,w],[.031,E-.014,w],[.031,E-.031,w],[-.032,E-.031,w],[-.032,E-.014,w],[-.083,E-.014,w]],H=S(N?U:[...U].reverse(),h,N?"Rear_Chevrolet_badge":"Front_Chevrolet_badge");H.material.side=Dt}O(-2.199,.759),O(2.303,.891,!0);for(let w of[-1,1])p([[w*.375,.841,-2.15],[w*.52,.902,-1.57],[w*.703,1.011,-.936]],c,"Hood_panel_gap",.0028);p([[-.727,1.01,-.934],[0,1.025,-.943],[.727,1.01,-.934]],c,"Hood_rear_seam",.003);for(let w of[-.36,.31])p([[w-.17,1.025,-.886],[w+.16,1.047,-.877]],r,"Windshield_wiper",.008);p([[-.686,.952,2.236],[-.575,.601,2.306],[-.45,.542,2.31],[0,.53,2.313],[.45,.542,2.31],[.575,.601,2.306],[.686,.952,2.236]],c,"Trunk_opening",.004),m([.74,.176,.016],[0,.722,2.306],c,"Rear_plate_recess",e,.025),m([.91,.036,.038],[0,.834,2.288],n,"Trunk_handle_molding",e,.016);for(let[w,E]of[[-2.199,.472],[2.314,.72]]){m([.43,.105,.003],[0,E,w],g,"Track_plate",e,.004);for(let N=0;N<7;N++)m([.024,.047,.002],[-.15+N*.05,E,w+(w<0?-5e-4:5e-4)],r,"Plate_character",e,0)}p([[-.755,.286,2.237],[0,.252,2.312],[.755,.286,2.237]],n,"Rear_bumper_lower_line",.008),m([1.28,.15,.38],[0,.945,-.71],r,"Dashboard");for(let w of[-.37,.37])m([.45,.41,.18],[w,.995,.16],r,"Front_seat",e,.06),m([.25,.15,.13],[w,1.245,.16],r,"Headrest",e,.04);let F=[],L=[];for(let w of[-1.3,1.3])for(let E of[-1,1]){let N=new Mt;N.name=(w<0?"Front":"Rear")+(E<0?"_Left":"_Right")+"_steer",N.position.set(E*.74,.29775,w),e.add(N);let U=new Mt;U.name="Wheel_"+N.name,N.add(U),F.push(U),w<0&&L.push(N);let H=y(new Dn(.29775,.29775,.195,64),a,"195_55_R15_tire",U);H.rotation.z=Math.PI/2;for(let G of[-1,1]){let q=G*.098,$=y(new Zs(.255,.041,12,64),a,"Rounded_sidewall",U);$.rotation.y=Math.PI/2,$.position.x=q-G*.018;let ae=y(new Dn(.1905,.1905,.014,48),r,"Rim_inner",U);ae.rotation.z=Math.PI/2,ae.position.x=q;let pe=y(new Zs(.183,.009,8,64),l,"15_inch_rim_lip",U);pe.rotation.y=Math.PI/2,pe.position.x=q+G*.01;for(let he=0;he<5;he++){let we=he*Math.PI*2/5,K=m([.02,.047,.143],[q+G*.009,Math.sin(we)*.103,Math.cos(we)*.103],l,"Five_spoke_alloy",U,.01);K.rotation.x=-we}let Be=y(new Dn(.049,.049,.019,24),l,"Wheel_hub",U);Be.rotation.z=Math.PI/2,Be.position.x=q+G*.012;for(let he=0;he<5;he++){let we=he*Math.PI*2/5;y(new Pi(.007,8,6),o,"Lug_nut",U).position.set(q+G*.024,Math.sin(we)*.031,Math.cos(we)*.031)}}}e.updateMatrixWorld(!0);for(let w of e.children){if(!w.isMesh)continue;let E=new Vt().setFromObject(w);E.min.z<-2.2&&(w.position.z+=-2.2-E.min.z),E.max.z>2.315&&(w.position.z-=E.max.z-2.315)}return e.userData={kind:"gentra",wheels:F,pivots:L,paint:n,red:u,lamp:d,spec:{...Xt.gentra,wheelRadius:.29775},referenceRevision:"PDF-2026-10-02",track:1.48},e}function yf(i){let e=new Map,t=new Map,n=i.clone();return vf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function vf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)vf(i.children[n],e.children[n],t)}var dr=class extends $n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Nl(t,Je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nl(t,Je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Gh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=_i.extractUrlBase(e);a=_i.resolveURL(l,this.path)}else a=_i.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wf){try{a[Je.KHR_BINARY_GLTF]=new Vh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Zh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:a[u]=new Ah;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[u]=new Hh(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[u]=new Wh;break;case Je.KHR_MESH_QUANTIZATION:a[u]=new Xh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function sy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Et(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wh=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Zt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new is(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ns(h),l.distance=u;break;case"spot":l=new ea(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Ah=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let s=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}},Eh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Rh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(r,r)}return Promise.all(s)}},Ch=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ih=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ph=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Zt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Lh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Nh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(r[0],r[1],r[2],Zt),Promise.all(s)}},Dh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Uh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(r[0],r[1],r[2],Zt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(s)}},Fh=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Oh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?Ht:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Bh=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},zh=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},kh=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Nl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Gh=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let y=new Fe,m=new D,p=new un,S=new D(1,1,1),R=new ui(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&S.fromBufferAttribute(c.SCALE,M),R.setMatrixAt(M,y.compose(m,p,S));let v=null;for(let M in c)if(M==="_COLOR_0"){let T=c[M];R.instanceColor=new hi(T.array,T.itemSize,T.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(v===null){let C=R.geometry;v=new lt,v.name=C.name;for(let _ in C.attributes)v.setAttribute(_,C.attributes[_]);for(let _ in C.morphAttributes)v.morphAttributes[_]=C.morphAttributes[_];C.index!==null&&v.setIndex(C.index),v.morphTargetsRelative=C.morphTargetsRelative;for(let _ of C.groups)v.addGroup(_.start,_.count,_.materialIndex);C.boundingBox!==null&&(v.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(v.boundingSphere=C.boundingSphere.clone()),v.drawRange.start=C.drawRange.start,v.drawRange.count=C.drawRange.count,v.userData=Object.assign({},C.userData),R.geometry=v}let T=c[M];v.setAttribute(M,new hi(T.array,T.itemSize,T.normalized))}dt.prototype.copy.call(R,g),this.parser.assignFinalMaterial(R),f.push(R)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},wf="glTF",xa=12,Mf={JSON:1313821514,BIN:5130562},Vh=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xa,r=new DataView(e,xa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Mf.JSON){let l=new Uint8Array(e,xa+a,o);this.content=n.decode(l)}else if(c===Mf.BIN){let l=xa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Yh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Yh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ur[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(f)},o,l,Zt,d)})})}},Wh=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Xh=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},Dl=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,y=g-l,m=-2*f+3*d,p=f-d,S=1-m,R=p-d+u;for(let v=0;v!==o;v++){let M=a[y+v+o],T=a[y+v+c]*h,C=a[g+v+o],_=a[g+v]*h;r[v]=S*M+R*T+m*C+p*_}return r}},ry=new un,qh=class extends Dl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ry.fromArray(r).normalize().toArray(r),r}},Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sf={9728:wt,9729:At,9984:zo,9985:er,9986:as,9987:Fn},bf={33071:xn,33648:Ci,10497:qn},Sh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ay={CUBICSPLINE:void 0,LINEAR:Ki,STEP:Yi},bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ly(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function cy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hy(i){let e,t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Th(t.attributes):e=i.indices+":"+Th(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Th(i.targets[n]);return e}function Th(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Kh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var dy=new Fe,Zh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new $r(this.options.manager):this.textureLoader=new ta(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return us(r,o,s),ni(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(_i.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Sh[s.type],o=ur[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Pt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Sh[s.type],l=ur[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,R=t.cache.get(S);R||(y=new l(o,p*f,s.count*f/h),R=new ks(y,f/h),t.cache.add(S,R)),m=new Gs(R,c,d%f/h,g)}else o===null?y=new l(s.count*c):y=new l(o,d,s.count*c),m=new Pt(y,c,g);if(s.sparse!==void 0){let p=Sh.SCALAR,S=ur[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,M=new S(a[1],R,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,_=M.length;C<_;C++){let A=M[C];if(m.setX(A,T[C*c]),c>=2&&m.setY(A,T[C*c+1]),c>=3&&m.setZ(A,T[C*c+2]),c>=4&&m.setW(A,T[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Sf[d.magFilter]||At,h.minFilter=Sf[d.minFilter]||Fn,h.wrapS=bf[d.wrapS]||qn,h.wrapT=bf[d.wrapT]||qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wt&&h.minFilter!==At,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Lt(y);m.needsUpdate=!0,d(m)}),t.load(_i.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ni(u,a),u.userData.mimeType=a.mimeType||uy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qs,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xs,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Nt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){let u=s[Je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Zt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,yt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Dt);let h=r.alphaMode||bh.OPAQUE;if(h===bh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===bh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==nn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==nn){let u=r.emissiveFactor;o.emissive=new Ne().setRGB(u[0],u[1],u[2],Zt)}return r.emissiveTexture!==void 0&&a!==nn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&us(s,u,r),u})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Tf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=hy(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Tf(new lt,l,t),l.mode===Mn.TRIANGLE_STRIP?d=d.then(f=>vh(f,ua)):l.mode===Mn.TRIANGLE_FAN&&(d=d.then(f=>vh(f,ir))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?oy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=a[f],p,S=l[f];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0){let R=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");R&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=R&&v?new Ur(y,S):new Ve(y,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Mn.LINES)p=new Or(y,S);else if(m.mode===Mn.LINE_STRIP)p=new ji(y,S);else if(m.mode===Mn.LINE_LOOP)p=new Br(y,S);else if(m.mode===Mn.POINTS)p=new zr(y,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&cy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ni(p,r),m.extensions&&us(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&us(s,u[0],r),u[0];let d=new Mt;r.extensions&&us(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(sr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ni(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Fe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let R=0,v=d.length;R<v;R++){let M=d[R],T=f[R],C=g[R],_=y[R],A=m[R];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let I=n._createAnimationTracks(M,T,C,_,A);if(I)for(let O=0;O<I.length;O++)p.push(I[O])}let S=new Jr(r,void 0,p);return ni(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Vs:l.length>1?h=new Mt:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ni(h,r),r.extensions&&us(n,h,r),r.matrix!==void 0){let u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Mt;n.name&&(r.name=s.createUniqueName(n.name)),ni(r,n),n.extensions&&us(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(yf(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Jt||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Oi[r.path]===Oi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Oi[r.path]){case Oi.weights:h=pi;break;case Oi.rotation:h=mi;break;case Oi.translation:case Oi.scale:h=Li;break;default:n.itemSize===1?h=pi:h=Li;break}let u=s.interpolation!==void 0?ay[s.interpolation]:Ki,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let y=new h(c[f]+"."+Oi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Kh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof mi?qh:Dl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fy(i,e,t){let n=e.attributes,s=new Vt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let h=Kh(ur[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=Kh(ur[d.componentType]);c.multiplyScalar(y)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new tn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Tf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Yh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ke.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),ni(i,e),fy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ly(i,e.targets,t):i})}var py="/assets/malibu-premier.glb.gz",Ul;function Af(){return Ul||(Ul=my().catch(i=>{throw Ul=null,i})),Ul}async function my(){let i=new AbortController,e=setTimeout(()=>i.abort(),9e4);try{let t=await fetch(py,{signal:i.signal});if(!t.ok)throw new Error(`Malibu asset: HTTP ${t.status}`);let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895){if(typeof DecompressionStream>"u")throw new Error("Bu brauzer siqilgan 3D modelni ocholmaydi. Brauzerni yangilang.");n=await new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}let r=(await new dr().parseAsync(n,"")).scene.getObjectByName("Malibu_Premier_2019");if(!r)throw new Error("Malibu model tuzilmasi topilmadi.");return r}finally{clearTimeout(e)}}function Ef(i="#e5e7eb"){let e=new Mt;return e.name="malibu_vehicle",e.userData={kind:"malibu",color:i,wheels:[],pivots:[],reds:[],lamps:[],spec:Xt.malibu,sharedGeometry:!0,disposed:!1,loaded:!1},e.userData.ready=Af().then(t=>(e.userData.disposed||gy(e,t),e)),e}function gy(i,e){let t=e.clone(!0),n=i.userData,s=new Map;t.traverse(r=>{if(!r.isMesh)return;let a=r.material,o=r.userData.role||"trim",c=a.uuid+":"+o,l=s.get(c);l||(l=a.clone(),s.set(c,l),a.name==="carpaint_mat"&&(l.color.set(n.color),l.metalness=.62,l.roughness=.23,l.clearcoat=1,l.clearcoatRoughness=.15,n.paint=l),a.name==="tyre"&&(l.roughness=.84,l.metalness=.03),a.name==="glass"&&(l.transmission=0,l.color.set(10399669),l.opacity=.23,l.roughness=.09,l.metalness=.16,l.depthWrite=!1),l.transparent&&(l.depthWrite=!1,l.forceSinglePass=!0),o==="headlamp"&&(l.emissive.set(14741503),l.emissiveIntensity=1.2,n.lamps.push(l)),o==="brakelamp"&&(l.emissive.set(16717348),l.emissiveIntensity=.35,n.reds.push(l))),r.material=l,r.castShadow=!l.transparent,r.receiveShadow=!0});for(let r of["Front","Rear"])for(let a of["Left","Right"]){let o=t.getObjectByName(`Wheel_${r}_${a}`),c=t.getObjectByName(`${r}_${a}_steer`);if(!o||!c)throw new Error("Malibu g\u2018ildiraklari topilmadi.");n.wheels.push(o),r==="Front"&&n.pivots.push(c)}return n.spec={...Xt.malibu,wheelRadius:t.userData.wheelRadius},n.loaded=!0,i.add(t),i.updateMatrixWorld(!0),i}var _y="/assets/cobalt-ltz-2014.glb.gz",Fl;function Rf(){return Fl||(Fl=xy().catch(i=>{throw Fl=null,i})),Fl}async function xy(){let i=new AbortController,e=setTimeout(()=>i.abort(),9e4);try{let t=await fetch(_y,{signal:i.signal});if(!t.ok)throw new Error(`Cobalt asset: HTTP ${t.status}`);let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895){if(typeof DecompressionStream>"u")throw new Error("Bu brauzer siqilgan 3D modelni ocholmaydi. Brauzerni yangilang.");n=await new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}let r=(await new dr().parseAsync(n,"")).scene.getObjectByName("Cobalt_LTZ_2014");if(!r)throw new Error("Cobalt model tuzilmasi topilmadi.");return r}finally{clearTimeout(e)}}function Cf(i="#e5e7eb"){let e=new Mt;return e.name="cobalt_vehicle",e.userData={kind:"cobalt",color:i,wheels:[],pivots:[],reds:[],lamps:[],spec:Xt.cobalt,sharedGeometry:!0,disposed:!1,loaded:!1},e.userData.ready=Rf().then(t=>(e.userData.disposed||yy(e,t),e)),e}function yy(i,e){let t=e.clone(!0),n=i.userData,s=new Map;t.traverse(r=>{if(!r.isMesh)return;let a=r.material,o=r.userData.role||"trim",c=a.uuid+":"+o,l=s.get(c);l||(l=a.clone(),s.set(c,l),a.name==="Realistic_Car_Paint"&&(l.color.set(n.color),l.metalness=.48,l.roughness=.25,l.clearcoat=1,l.clearcoatRoughness=.16,n.paint=l),a.name.startsWith("roda.")&&(l.metalness=.72,l.roughness=.27),a.name.startsWith("escape.")&&(l.metalness=.86,l.roughness=.2),a.name.startsWith("bump_front")&&(l.color.set(1514013),l.roughness=.78,l.metalness=.03),o==="tire"&&(l.color.set(1579548),l.roughness=.9,l.metalness=.02),(a.name==="Car_windshield_glass"||o==="lampglass")&&(l.transmission=0,l.transparent=!0,l.color.set(o==="lampglass"?14149613:9020849),l.opacity=o==="lampglass"?.12:.2,l.roughness=.08,l.metalness=.1),l.transparent&&(l.depthWrite=!1,l.forceSinglePass=!0),o==="headlamp"&&(l.color.set(15266047),l.emissive.set(14478079),l.emissiveIntensity=1.2,n.lamps.push(l)),o==="brakelamp"&&(l.color.set(11800864),l.emissive.set(16717348),l.emissiveIntensity=.35,n.reds.push(l))),r.material=l,r.castShadow=!l.transparent,r.receiveShadow=!0});for(let r of["Front","Rear"])for(let a of["Left","Right"]){let o=t.getObjectByName(`Wheel_${r}_${a}`),c=t.getObjectByName(`${r}_${a}_steer`);if(!o||!c)throw new Error("Cobalt g\u2018ildiraklari topilmadi.");n.wheels.push(o),r==="Front"&&n.pivots.push(c)}return n.spec={...Xt.cobalt,wheelRadius:t.userData.wheelRadius},n.loaded=!0,i.add(t),i.updateMatrixWorld(!0),i}var gZS="/assets/gentra.glb.gz",gZc;function gZN(){return gZc||(gZc=gZy().catch(i=>{throw gZc=null,i})),gZc}async function gZy(){let i=new AbortController,e=setTimeout(()=>i.abort(),9e4);try{let t=await fetch(gZS,{signal:i.signal});if(!t.ok)throw new Error(`Gentra asset: HTTP ${t.status}`);let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895){if(typeof DecompressionStream>"u")throw new Error("Bu brauzer siqilgan 3D modelni ocholmaydi. Brauzerni yangilang.");n=await new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}let r=(await new dr().parseAsync(n,"")).scene.getObjectByName("Gentra");if(!r)throw new Error("Gentra model tuzilmasi topilmadi.");return r}finally{clearTimeout(e)}}function gZa(i="#e5e7eb"){let e=new Mt;return e.name="gentra_vehicle",e.userData={kind:"gentra",color:i,wheels:[],pivots:[],reds:[],lamps:[],spec:Xt.gentra,sharedGeometry:!0,disposed:!1,loaded:!1},e.userData.ready=gZN().then(t=>(e.userData.disposed||gZv(e,t),e)),e}function gZv(i,e){let t=e.clone(!0),n=i.userData,s=new Map;t.traverse(r=>{if(!r.isMesh)return;let a=r.material,o=r.userData.role||"trim",c=a.uuid+":"+o,l=s.get(c);l||(l=a.clone(),s.set(c,l),a.name==="primary"&&(l.color.set(n.color),l.metalness=.48,l.roughness=.25,l.clearcoat=1,l.clearcoatRoughness=.16,n.paint=l),a.name.startsWith("roda.")&&(l.metalness=.72,l.roughness=.27),a.name.startsWith("escape.")&&(l.metalness=.86,l.roughness=.2),a.name.startsWith("bump_front")&&(l.color.set(1514013),l.roughness=.78,l.metalness=.03),o==="tire"&&(l.color.set(1579548),l.roughness=.9,l.metalness=.02),(a.name==="Car_windshield_glass"||o==="lampglass")&&(l.transmission=0,l.transparent=!0,l.color.set(o==="lampglass"?14149613:9020849),l.opacity=o==="lampglass"?.12:.2,l.roughness=.08,l.metalness=.1),l.transparent&&(l.depthWrite=!1,l.forceSinglePass=!0),o==="headlamp"&&(l.color.set(15266047),l.emissive.set(14478079),l.emissiveIntensity=1.2,n.lamps.push(l)),o==="brakelamp"&&(l.color.set(11800864),l.emissive.set(16717348),l.emissiveIntensity=.35,n.reds.push(l))),r.material=l,r.castShadow=!l.transparent,r.receiveShadow=!0});for(let r of["Front","Rear"])for(let a of["Left","Right"]){let o=t.getObjectByName(`Wheel_${r}_${a}`),c=t.getObjectByName(`${r}_${a}_steer`);if(!o||!c)throw new Error("Gentra g\u2018ildiraklari topilmadi.");n.wheels.push(o),r==="Front"&&n.pivots.push(c)}return n.spec={...Xt.gentra,wheelRadius:t.userData.wheelRadius},n.loaded=!0,i.add(t),i.updateMatrixWorld(!0),i}function Pf(i="gentra",e="#e5e7eb"){if(i==="malibu")return Ef(e);if(i==="cobalt")return Cf(e);if(i==="gentra")return gZa(e);let t=xf(e);t.updateMatrixWorld(!0);for(let n of t.userData.wheels)If(n);return If(t,new Set(t.userData.wheels.map(n=>n.parent))),t.userData.loaded=!0,t.userData.color=e,t}function If(i,e=new Set){let t=new Map,n=new Fe().copy(i.matrixWorld).invert();function s(r){if(!e.has(r)){if(r.isMesh){let a=r.material.uuid,o=t.get(a);o||(o={material:r.material,geometries:[],meshes:[]},t.set(a,o));let c=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(let l of Object.keys(c.attributes))["position","normal"].includes(l)||c.deleteAttribute(l);c.applyMatrix4(new Fe().multiplyMatrices(n,r.matrixWorld)),o.geometries.push(c),o.meshes.push(r)}for(let a of r.children)s(a)}}s(i);for(let r of t.values()){let a=_f(r.geometries);if(!a)continue;let o=new Ve(a,r.material);o.castShadow=!0,o.receiveShadow=!0,i.add(o);for(let c of r.meshes)c.removeFromParent();for(let c of r.geometries)c.dispose()}}function Lf(i,e,t=!0){let n=i.userData;for(let s of n.wheels)s.rotation.x=-(e.travel||0)/n.spec.wheelRadius;for(let s of n.pivots)s.rotation.y=e.steer||0;for(let s of n.reds||(n.red?[n.red]:[]))s.emissiveIntensity=e.braking?3:.35;for(let s of n.lamps||(n.lamp?[n.lamp]:[]))s.emissiveIntensity=t?1.5:.03}function Nf(i){i.userData.disposed=!0;let e=new Set,t=new Set;i.traverse(n=>{n.geometry&&t.add(n.geometry);for(let s of Array.isArray(n.material)?n.material:n.material?[n.material]:[])e.add(s)}),i.userData.sharedGeometry||t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose()),i.removeFromParent()}function Df(i,e={}){let t=e.width||1200,n=e.height||720,s=document.createElement("canvas");s.width=t,s.height=n;let r=s.getContext("2d"),a=r.createImageData(t,n),o=new Float32Array(t*n);o.fill(1/0);let c=new St(e.fov||34,t/n,.1,e.far||100);c.position.set(...e.camera||[-6.4,2.8,-6.8]),c.lookAt(...e.target||[0,.65,0]),c.updateMatrixWorld(),i.rotation.y=e.rotation??-.16,i.updateMatrixWorld(!0);let l=new D(-.4,.8,-.5).normalize(),h=new Map,u=[],d=new Fe().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),f=new D,g=new D,y=new D;function m(M){if(!M?.image)return null;if(h.has(M))return h.get(M);let T=M.image,C=document.createElement("canvas");C.width=Math.min(1024,T.width),C.height=Math.min(1024,T.height);let _=C.getContext("2d",{willReadFrequently:!0});_.drawImage(T,0,0,C.width,C.height),M.updateMatrix();let A={data:_.getImageData(0,0,C.width,C.height).data,width:C.width,height:C.height,texture:M};return h.set(M,A),A}function p(M,T){if(T===qn)return M-Math.floor(M);if(T===Ci){let C=(M%2+2)%2;return C>1?2-C:C}return Math.max(0,Math.min(.999999,M))}function S(M,T,C,_,A,I){let O=T*8,F=C*8,L=_*8;if(M[O+3]<=0||M[F+3]<=0||M[L+3]<=0)return;let w=M[O],E=M[O+1],N=M[F],U=M[F+1],H=M[L],G=M[L+1],q=(U-G)*(w-H)+(H-N)*(E-G);if(Math.abs(q)<1e-4)return;let $=Math.max(0,Math.floor(Math.min(w,N,H))),ae=Math.min(t-1,Math.ceil(Math.max(w,N,H))),pe=Math.max(0,Math.floor(Math.min(E,U,G))),Be=Math.min(n-1,Math.ceil(Math.max(E,U,G))),he=(U-G)/q,we=(H-N)/q,K=(G-E)/q,Q=(w-H)/q,re=A.color,Ue=A.opacity,ye=A.transparent&&Ue<1,We=re.r,bt=re.g,Ye=re.b,je=A.emissive,tt=(A.emissiveIntensity||0)*.12,ke=I?.texture.matrix.elements;for(let nt=pe;nt<=Be;nt++){let ct=((U-G)*($+.5-H)+(H-N)*(nt+.5-G))/q,vt=((G-E)*($+.5-H)+(w-H)*(nt+.5-G))/q;for(let ft=$;ft<=ae;ft++,ct+=he,vt+=K){let ht=1-ct-vt;if(ct<-1e-5||vt<-1e-5||ht<-1e-5)continue;let z=ct*M[O+2]+vt*M[F+2]+ht*M[L+2],Rt=nt*t+ft;if(z>=o[Rt]||z<0||z>1)continue;let Qe=ct*M[O+4]+vt*M[F+4]+ht*M[L+4],P=ct*M[O+7]+vt*M[F+7]+ht*M[L+7],x=1,V=1,Y=1;if(I){let j=ct*M[O+3]+vt*M[F+3]+ht*M[L+3],ee=(ct*M[O+5]+vt*M[F+5]+ht*M[L+5])/j,ce=(ct*M[O+6]+vt*M[F+6]+ht*M[L+6])/j,Ee=p(ke[0]*ee+ke[3]*ce+ke[6],I.texture.wrapS),ue=p(ke[1]*ee+ke[4]*ce+ke[7],I.texture.wrapT);I.texture.flipY&&(ue=1-ue);let oe=(Math.min(I.height-1,Math.floor(ue*I.height))*I.width+Math.min(I.width-1,Math.floor(Ee*I.width)))*4;x=I.data[oe]/255,V=I.data[oe+1]/255,Y=I.data[oe+2]/255}let J=Rt*4,ie=a.data,se=[Math.min(255,255*(We*x*Qe+P+je.r*tt)),Math.min(255,255*(bt*V*Qe+P+je.g*tt)),Math.min(255,255*(Ye*Y*Qe+P+je.b*tt))];if(ye){for(let j=0;j<3;j++)ie[J+j]=se[j]*Ue+ie[J+j]*(1-Ue);ie[J+3]=Math.min(255,255*Ue+ie[J+3]*(1-Ue))}else ie[J]=se[0],ie[J+1]=se[1],ie[J+2]=se[2],ie[J+3]=255,o[Rt]=z}}}i.traverse(M=>{if(!M.isMesh)return;let T=M.geometry,C=T.attributes.position,_=T.attributes.normal,A=T.attributes.uv,I=new Float32Array(C.count*8),O=new ze().getNormalMatrix(M.matrixWorld),F=new Fe().multiplyMatrices(d,M.matrixWorld).elements,L=M.material.clone();L.color.convertLinearToSRGB(),L.emissive.convertLinearToSRGB();let w=m(M.material.map);for(let U=0;U<C.count;U++){let H=C.getX(U),G=C.getY(U),q=C.getZ(U),$=F[3]*H+F[7]*G+F[11]*q+F[15],ae=U*8;I[ae]=((F[0]*H+F[4]*G+F[8]*q+F[12])/$*.5+.5)*t,I[ae+1]=(1-((F[1]*H+F[5]*G+F[9]*q+F[13])/$*.5+.5))*n,I[ae+2]=(F[2]*H+F[6]*G+F[10]*q+F[14])/$*.5+.5,I[ae+3]=1/$,f.fromBufferAttribute(_,U).applyMatrix3(O).normalize(),g.set(H,G,q).applyMatrix4(M.matrixWorld),y.copy(c.position).sub(g).normalize().add(l).normalize(),I[ae+4]=.48+Math.max(0,f.dot(l))*.5,I[ae+5]=(A?.getX(U)||0)/$,I[ae+6]=(A?.getY(U)||0)/$,I[ae+7]=Math.pow(Math.max(0,f.dot(y)),24)*(L.metalness||0)*.28}let E=T.index?.array,N=E?.length||C.count;for(let U=0;U<N;U+=3){let H=E?E[U]:U,G=E?E[U+1]:U+1,q=E?E[U+2]:U+2;L.transparent&&L.opacity<1?u.push({vertices:I,a:H,b:G,c:q,material:L,texture:w,z:I[H*8+2]+I[G*8+2]+I[q*8+2]}):S(I,H,G,q,L,w)}}),u.sort((M,T)=>T.z-M.z);for(let M of u)S(M.vertices,M.a,M.b,M.c,M.material,M.texture);let R=document.createElement("canvas");R.width=t,R.height=n,R.getContext("2d").putImageData(a,0,0),r.save(),r.translate(t*.5,n*.69),r.scale(1,.23);let v=r.createRadialGradient(0,0,20,0,0,t*.27);return v.addColorStop(0,"#0009"),v.addColorStop(1,"#0000"),r.fillStyle=v,r.fillRect(-t/2,-t/2,t,t),r.restore(),r.drawImage(R,0,0),s}/* ===== Yo'lchi avtodromi — real sxema asosida (B toifa, 10–21 mashqlar) ===== */
var ycRing = (() => {
  let p = [], X = 88, Z = 70, R = 14, S = 10;
  let arc = (cx, cz, a0, a1) => { for (let k = 1; k <= S; k++) { let a = a0 + (a1 - a0) * k / S; p.push([cx + R * Math.cos(a), cz + R * Math.sin(a)]) } };
  p.push([-X + R, Z], [X - R, Z]); arc(X - R, Z - R, Math.PI / 2, 0);
  p.push([X, -Z + R]); arc(X - R, -Z + R, 0, -Math.PI / 2);
  p.push([-X + R, -Z]); arc(-X + R, -Z + R, -Math.PI / 2, -Math.PI);
  p.push([-X, Z - R]); arc(-X + R, Z - R, Math.PI, Math.PI / 2);
  return p
})(),
  ycSerp = (u) => [10 + 78 * u, -30 + 16 * u + 8 * Math.sin(3 * Math.PI * u)],
  ycRoads = [
    { p: ycRing, hw: 4.5, dash: 1 },
    { p: [[-88, 8], [88, 8]], hw: 4.5, dash: 1 },
    { p: [[10, -70], [10, 70]], hw: 4.5, dash: 1 },
    { p: [[-50, -70], [-50, 46]], hw: 3.75 },
    { p: [[-88, 46], [10, 46]], hw: 4.5, dash: 1 },
    { p: [[10, 32], [44, 32]], hw: 3.5 },
    { p: [[36, 32], [36, 44]], hw: 3 },
    { p: Array.from({ length: 49 }, (_, k) => ycSerp(k / 48)), hw: 3.25 }
  ],
  ycPads = [{ x: -57, z: -40, w: 6.5, d: 3.3 }, { x: -43, z: -40, w: 6.5, d: 3.3 }, { x: -25, z: 52.3, w: 11, d: 3.6 }],
  ycGarage = { x: -57, z: -40, w: 6.5, d: 3.3, yaw: -Math.PI / 2 },
  Sn = { x: -25, z: 52.25, w: 8, d: 3.3, yaw: -Math.PI / 2 },
  ycPed = { x: -45, z0: 76.5, len: 13 },
  fr = [],
  vy = { x: -70, z: 72.2, yaw: -Math.PI / 2 },
  ycE = -Math.PI / 2, ycW = Math.PI / 2, ycS = Math.PI,
  on = [
    { id: "start", no: 10, name: "Harakatni boshlash", short: "Start", point: [-61, 72.2], spawn: vy, line: [-61, 72, ycE], hint: "Kamarni taqing, dvigatelni yoqing. Chap burilish ishorasini bering, ilashishni bosib 1-uzatmani qo‘shing, qo‘l tormozini tushiring va ilashishni sekin qo‘yib yuring.", type: "start" },
    { id: "pedestrian", no: 11, name: "Piyodalar o‘tish joyi", short: "Piyoda", point: [-45, 72.2], spawn: { x: -62, z: 72.2, yaw: ycE }, line: [-48.6, 72, ycE], gate: [-36, 72, ycE], hint: "Zebra oldidagi chiziqda to‘xtang. Piyoda o‘tib bo‘lgach, harakatni davom ettiring.", type: "crossing" },
    { id: "railway", no: 12, name: "Temir yo‘l kesishmasi", short: "Temir yo‘l", point: [-22.4, 72.2], r: 1.8, spawn: { x: -36, z: 72.2, yaw: ycE }, line: [-20, 72, ycE], gate: [-8, 72, ycE], hint: "STOP chizig‘i oldida to‘liq to‘xtang. 2 soniyadan so‘ng relslarni kesib o‘ting va chorrahadan chapga — shimolga buriling.", type: "stop" },
    { id: "uturn", no: 13, name: "Cheklangan joyda qayrilish", short: "Qayrilish", point: [39, 32], spawn: { x: 12.2, z: 58, yaw: 0 }, hint: "O‘ngdagi tor yo‘lakka kiring. Oxirida to‘xtab, R da yon cho‘ntakka orqa bilan kiring, so‘ng oldinga yurib qarama-qarshi tomonga chiqing.", type: "waypoints", points: [[39, 32], [36, 40.5], [18, 32]], rev: [0, 1, 0], radius: 2.6 },
    { id: "signal", no: 14, name: "Svetoforli chorraha", short: "Svetofor", point: [12.2, 21], spawn: { x: 12.2, z: 40, yaw: 0 }, line: [12, 19, 0], gate: [12, -1.5, 0], hint: "Qizil va sariqda stop-chiziq oldida kuting. Yashil yonganda chorrahadan to‘g‘riga o‘ting.", type: "signal" },
    { id: "serpentine", no: 15, name: "Ilon izi (serpantin)", short: "Ilon izi", point: ycSerp(.04), spawn: { x: 12.2, z: -10, yaw: 0 }, hint: "O‘ngga burilib, egri yo‘lakdan bordyurlarga tegmasdan o‘ting. Yashil nuqtalarni navbat bilan kuzating.", type: "waypoints", points: [.04, .25, .45, .65, .85, .99].map(ycSerp), radius: 3.4 },
    { id: "hill", no: 17, name: "Estakada (qiyalikda to‘xtash)", short: "Estakada", point: [90.2, -29], r: 1.6, spawn: { x: 90.2, z: -2, yaw: 0 }, gate: [90, -54, 0], hint: "Qiyalikdagi chiziqda to‘xtab, qo‘l tormozini torting. 2 soniya kuting, so‘ng orqaga sirpanmasdan davom eting.", type: "hill" },
    { id: "acceleration", no: 18, name: "Tezlikni oshirish", short: "Tezlik", point: [-24, -72.2], spawn: { x: 66, z: -72.2, yaw: ycW }, gate: [-30, -72, ycW], hint: "To‘g‘ri yo‘lda 2-uzatmaga o‘tib, 20 km/soatga yeting. Bu bo‘lakda eng yuqori tezlik — 40 km/soat.", type: "acceleration" },
    { id: "garage", no: 16, name: "Garajga orqa bilan kirish", short: "Garaj", point: [-57, -40], slot: ycGarage, spawn: { x: -51.9, z: -64, yaw: ycS }, hint: "Ichki yo‘lga buriling. Garaj qutisidan o‘tib to‘xtang, R da orqa bilan qutiga kiring, tekislab qo‘l tormozini torting.", type: "parking" },
    { id: "brake", no: 19, name: "Aniq to‘xtash", short: "To‘xtash", point: [-51.9, -14], line: [-51.9, -8, ycS], spawn: { x: -51.9, z: -32, yaw: ycS }, hint: "Sariq STOP chizig‘igacha yetib, tormoz bilan to‘liq to‘xtang. Chiziqdan o‘tib ketmang.", type: "hold" },
    { id: "parking", no: 20, name: "Parallel parkovka", short: "Parkovka", point: [-25, 52.25], slot: Sn, spawn: { x: -62, z: 48.2, yaw: ycE }, hint: "Joy yonidan o‘tib, R ga qo‘ying. Orqaga kirib, kuzovni chiziqlar ichida tekislang va qo‘l tormozini torting.", type: "parking" },
    { id: "finish", no: 21, name: "Finish", short: "Finish", point: [-3, 48.2], spawn: { x: -14, z: 48.2, yaw: ycE }, hint: "FINISH maydonchasida to‘liq to‘xtang. N ni tanlang va qo‘l tormozini torting.", type: "finish" }
  ],
  Ol = (i, e, t) => Math.max(e, Math.min(t, i)),
  Jh = i => Math.atan2(Math.sin(i), Math.cos(i));

function ycNear(R, i, e) {
  let t = { distance: 1 / 0 }, P = R.p;
  for (let n = 1; n < P.length; n++) {
    let s = P[n - 1], r = P[n], a = r[0] - s[0], o = r[1] - s[1], c = a * a + o * o, l = Ol(((i - s[0]) * a + (e - s[1]) * o) / c, 0, 1), h = s[0] + l * a, u = s[1] + l * o, d = Math.hypot(i - h, e - u);
    d < t.distance && (t = { x: h, z: u, distance: d, tx: a / Math.sqrt(c), tz: o / Math.sqrt(c) })
  }
  return t
}
function $h(i, e) { let t = { distance: 1 / 0 }; for (let R of ycRoads) { let q = ycNear(R, i, e); q.distance - R.hw < t.distance && (t = q, t.distance = q.distance - R.hw) } return t }
function va(i, e, t = 0) {
  for (let R of ycRoads) if (ycNear(R, i, e).distance <= R.hw - t) return !0;
  return ycPads.some(n => Math.abs(i - n.x) <= n.w / 2 - t && Math.abs(e - n.z) <= n.d / 2 - t)
}
function zn(i, e) { return Math.abs(i - 88) > 5 ? 0 : e <= -22 && e > -34 ? (-22 - e) * .13 : e <= -34 && e >= -40 ? 1.56 : e < -40 && e > -52 ? (e + 52) * .13 : 0 }
function ds(i) { let e = (i % 26 + 26) % 26; return e < 12 ? "red" : e < 15 ? "yellow" : "green" }
function jh(i, e) {
  let t = [];
  for (let n of [-e.width / 2, e.width / 2]) for (let s of [-e.length / 2, e.length / 2]) t.push({ x: i.x + n * Math.cos(i.yaw) + s * Math.sin(i.yaw), z: i.z - n * Math.sin(i.yaw) + s * Math.cos(i.yaw) });
  return t
}
function Bl(i, e) { let S = on[i.stage] && on[i.stage].slot || Sn; return Math.abs(Jh(i.yaw - S.yaw)) < .15 && jh(i, e).every(t => Math.abs(t.x - S.x) < S.w / 2 - .07 && Math.abs(t.z - S.z) < S.d / 2 - .07) }
function kn(i, e, t) { let [n, s, r] = t, a = -Math.sin(r), o = -Math.cos(r); return (i.x - n) * a + (i.z - s) * o < 0 && (e.x - n) * a + (e.z - s) * o >= 0 && Math.abs((e.x - n) * o - (e.z - s) * a) < 5 }
var ki = 250;

function Qh(i = 2048) {
  let e = document.createElement("canvas"); e.width = e.height = i;
  let t = e.getContext("2d"), n = i / ki;
  t.fillStyle = "#89967a", t.fillRect(0, 0, i, i), t.save(), t.translate(i / 2, i / 2), t.scale(n, n);
  let s = 82, r = () => (s = s * 1664525 + 1013904223 >>> 0, s / 4294967296);
  for (let l = 0; l < 12e3; l++) t.fillStyle = r() > .5 ? "#ffffff09" : "#23342209", t.fillRect(r() * 250 - 125, r() * 250 - 125, r() * 1.4, .15);
  t.lineJoin = "round", t.lineCap = "round";
  let path = p => { t.beginPath(); p.forEach((q, h) => h ? t.lineTo(...q) : t.moveTo(...q)) };
  for (let R of ycRoads) path(R.p), t.lineWidth = R.hw * 2 + 2, t.strokeStyle = "#c1c1b4", t.stroke();
  t.fillStyle = "#b7b7aa"; for (let l of ycPads) t.fillRect(l.x - l.w / 2 - 1, l.z - l.d / 2 - 1, l.w + 2, l.d + 2);
  for (let R of ycRoads) path(R.p), t.lineWidth = R.hw * 2, t.strokeStyle = "#e6e4d6", t.stroke();
  t.fillStyle = "#e6e4d6"; for (let l of ycPads) t.fillRect(l.x - l.w / 2, l.z - l.d / 2, l.w, l.d);
  for (let R of ycRoads) path(R.p), t.lineWidth = R.hw * 2 - .5, t.strokeStyle = "#555c5d", t.stroke();
  t.fillStyle = "#555c5d"; for (let l of ycPads) t.fillRect(l.x - l.w / 2 + .25, l.z - l.d / 2 + .25, l.w - .5, l.d - .5);
  for (let l = 0; l < 15e3; l++) { let h = r() * 200 - 100, u = r() * 170 - 85; va(h, u) && (t.fillStyle = r() > .5 ? "#ffffff08" : "#0000000b", t.fillRect(h, u, .1 + r() * .3, .1)) }
  // o'rta uzuq chiziqlar (boshqa yo'l ustida chizilmaydi)
  t.strokeStyle = "#e9e6d3", t.lineWidth = .13;
  for (let R of ycRoads) if (R.dash) for (let n = 1; n < R.p.length; n++) {
    let a = R.p[n - 1], b = R.p[n], L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    for (let g = 0; g < L; g += 6) {
      let g2 = Math.min(L, g + 2.6), m = (g + g2) / 2 / L, mx = a[0] + (b[0] - a[0]) * m, mz = a[1] + (b[1] - a[1]) * m;
      if (ycRoads.some(Q => Q !== R && ycNear(Q, mx, mz).distance < Q.hw + .4)) continue;
      t.beginPath(), t.moveTo(a[0] + (b[0] - a[0]) * g / L, a[1] + (b[1] - a[1]) * g / L), t.lineTo(a[0] + (b[0] - a[0]) * g2 / L, a[1] + (b[1] - a[1]) * g2 / L), t.stroke()
    }
  }
  let o = (l, h, u, d, f = "#f0eee1") => { t.fillStyle = f, t.fillRect(l - u / 2, h - d / 2, u, d) };
  let Y = "#e3c443";
  // 10 START, 21 FINISH
  o(-61, 72.25, .45, 4.5);
  t.fillStyle = "#ebe9d2", t.font = "bold 1.3px Arial", t.textAlign = "center";
  for (let [x, z, w] of [[-65, 72.25, "START"], [-65, 67.75, "START"], [-6.5, 48.25, "FINISH"], [-6.5, 43.75, "FINISH"]]) t.save(), t.translate(x, z), t.rotate(Math.PI / 2), t.fillText(w, 0, .45), t.restore();
  o(-3.2, 46, .45, 9), t.strokeStyle = "#f0eee1", t.lineWidth = .15, t.strokeRect(-9, 41.7, 6, 8.6);
  // 11 zebra (sariq-oq)
  for (let k = 0; k < 8; k++) o(-45, 66.1 + k * 1.15, 4, .58, k % 2 ? "#f0eee1" : Y);
  o(-48.6, 72.25, .45, 4.5);
  // 12 temir yo'l
  for (let l = 64; l < 76; l += .7) o(-15, l, 3.4, .32, "#6f6553");
  o(-15.7, 70, .12, 12.5, "#c0c8ca"), o(-14.3, 70, .12, 12.5, "#c0c8ca"), o(-20, 72.25, .45, 4.5);
  t.fillStyle = "#f0eee1", t.font = "bold 1.1px Arial"; t.save(), t.translate(-21.5, 72.25), t.rotate(Math.PI / 2), t.fillText("STOP", 0, .4), t.restore();
  // 14 chorraha: zebralar va stop-chiziqlar
  for (let k = 0; k < 8; k++) o(5.95 + k * 1.15, 15, .58, 3.2, k % 2 ? "#f0eee1" : Y), o(5.95 + k * 1.15, 1, .58, 3.2, k % 2 ? "#f0eee1" : Y), o(3.5 - 1.6 + .0, 3.9 + k * 1.15, 3.2, .58, k % 2 ? "#f0eee1" : Y), o(16.1, 3.9 + k * 1.15, 3.2, .58, k % 2 ? "#f0eee1" : Y);
  o(12.25, 19, 4.5, .45), o(7.75, -3, 4.5, .45), o(-.5, 10.25, .45, 4.5), o(20.5, 5.75, .45, 4.5);
  // 17 estakada: yon tomonlarda shtrix
  for (let l = -52; l < -22; l += .8) for (let x of [83.7, 92.3]) o(x, l, .35, .4, Math.round((l + 52) / .8) % 2 ? "#e8e5d4" : "#222c31");
  o(90.25, -31.2, 4.5, .4);
  // 16 garaj qutilari, 20 parkovka joyi (sariq chiziqlar)
  t.strokeStyle = Y, t.lineWidth = .14;
  for (let b of [ycPads[0], ycPads[1]]) t.strokeRect(b.x - b.w / 2 + .2, b.z - b.d / 2 + .15, b.w - .4, b.d - .3);
  t.strokeRect(Sn.x - Sn.w / 2, Sn.z - Sn.d / 2, Sn.w, Sn.d);
  t.fillStyle = Y, t.font = "bold 1.5px Arial"; t.fillText("P", Sn.x, Sn.z + .55);
  // 19 aniq to'xtash chizig'i
  o(-51.9, -11.8, 3.6, .45, Y); t.save(), t.translate(-51.9, -10.4), t.rotate(Math.PI), t.fillStyle = Y, t.font = "bold 1.1px Arial", t.fillText("STOP", 0, 0), t.restore();
  // 18 tezlik bo'lagi belgisi
  t.fillStyle = "#f0eee1", t.font = "bold 1.6px Arial"; t.save(), t.translate(40, -72.25), t.rotate(-Math.PI / 2), t.fillText("40", 0, .55), t.restore();
  // yo'nalish strelkalari (sariq, sxemadagidek)
  let c = (l, h, u, f = Y) => { t.save(), t.translate(l, h), t.rotate(-u), t.fillStyle = f, t.beginPath(), t.moveTo(0, -2), t.lineTo(-.9, -.6), t.lineTo(-.27, -.6), t.lineTo(-.27, 1.7), t.lineTo(.27, 1.7), t.lineTo(.27, -.6), t.lineTo(.9, -.6), t.closePath(), t.fill(), t.restore() };
  for (let a of [[-56, 72.25, ycE], [-30, 72.25, ycE], [2, 72.25, ycE], [12.25, 58, 0], [24, 32, ycE], [12.25, 26, 0], [12.25, -18, 0], [90.25, -6, 0], [90.25, -60, 0], [55, -72.25, ycW], [-10, -72.25, ycW], [-51.9, -58, ycS], [-51.9, -24, ycS], [-51.9, 30, ycS], [-70, 48.25, ycE], [-14, 48.25, ycE]]) c(...a);
  // mashq raqamlari (sxemadagidek doira ichida)
  t.textBaseline = "middle";
  for (let [x, z, k] of [[-70, 67.7, 10], [-41, 67.7, 11], [-24, 67.7, 12], [28, 32, 13], [7.7, 24, 14], [...ycSerp(.5), 15], [-50, -46, 16], [85.8, -38, 17], [-24, -67.75, 18], [-48, -18, 19], [-25, 43.7, 20], [-12, 43.7, 21]]) {
    t.fillStyle = "#eef1f5", t.beginPath(), t.arc(x, z, 1.25, 0, Math.PI * 2), t.fill(), t.strokeStyle = "#1d4f9c", t.lineWidth = .2, t.stroke(), t.fillStyle = "#1d4f9c", t.font = "bold 1.25px Arial", t.fillText(String(k), x, z + .05)
  }
  return t.restore(), e
}
var Qt = (i, e = .8) => new Nt({ color: i, roughness: e });
function jt(i, e, t, n, s, r, a, o) { let c = new Ve(new $t(e, t, n), o); return c.position.set(s, r, a), c.castShadow = !0, c.receiveShadow = !0, i.add(c), c }
function zi(i, e, t, n = 3, s = .04, r = Qt("#737d7c")) { let a = new Ve(new Dn(s, s, n, 8), r); return a.position.set(e, n / 2, t), a.castShadow = !0, i.add(a), a }
function Uf(i, { circle: e = !1, bg: t = "#184b80", size: n = 256 } = {}) {
  let s = document.createElement("canvas"); s.width = s.height = n;
  let r = s.getContext("2d");
  r.clearRect(0, 0, n, n), r.fillStyle = t, r.strokeStyle = "#eff3f1", r.lineWidth = 10, r.beginPath(), e ? (r.arc(128, 128, 117, 0, Math.PI * 2), r.fill(), r.stroke(), r.fillStyle = "#fbf8e7", r.beginPath(), r.arc(128, 128, 90, 0, Math.PI * 2), r.fill(), r.fillStyle = "#1d282e") : (r.roundRect(4, 4, 248, 248, 12), r.fill(), r.stroke(), r.fillStyle = "#fff"), r.font = `bold ${i.length > 5 ? 27 : i.length > 3 ? 70 : 92}px Arial`, r.textAlign = "center", r.textBaseline = "middle", r.fillText(i, 128, 132);
  let a = new Qi(s); return a.colorSpace = yt, a
}
function ycTri(txt) {
  let l = document.createElement("canvas"); l.width = l.height = 256; let h = l.getContext("2d");
  h.fillStyle = "#fff", h.strokeStyle = "#c53c32", h.lineWidth = 22, h.lineJoin = "round", h.beginPath(), h.moveTo(128, 22), h.lineTo(240, 222), h.lineTo(16, 222), h.closePath(), h.fill(), h.stroke(), h.fillStyle = "#1d282e", h.font = "bold 70px Arial", h.textAlign = "center", h.textBaseline = "middle", h.fillText(txt, 128, 160);
  let o = new Qi(l); return o.colorSpace = yt, o
}
function fs(i, e, t, n, s = 0, r = "info") {
  zi(i, e, t, 2.8);
  let a = r === "speed", o;
  if (r === "stop") {
    let l = document.createElement("canvas"); l.width = l.height = 256; let h = l.getContext("2d");
    h.fillStyle = "#c53c32", h.strokeStyle = "#fff", h.lineWidth = 8, h.beginPath();
    for (let u = 0; u < 8; u++) { let d = (u + .5) * Math.PI / 4, f = [128 + 119 * Math.sin(d), 128 + 119 * Math.cos(d)]; u ? h.lineTo(...f) : h.moveTo(...f) }
    h.closePath(), h.fill(), h.stroke(), h.fillStyle = "#fff", h.font = "bold 58px Arial", h.textAlign = "center", h.fillText("STOP", 128, 149), o = new Qi(l), o.colorSpace = yt
  } else o = r === "tri" ? ycTri(n) : Uf(n, { circle: a, bg: a ? "#bd352c" : "#235f88" });
  let c = new Ve(new di(.8, .8), new Nt({ map: o, transparent: !0, side: Dt, roughness: .55 }));
  return c.position.set(e, 2.35, t), c.rotation.y = s, i.add(c), c
}
function ycCurbs() {
  let h = [], G = new Map, P = 0;
  let add = (x, z, yaw) => {
    if (va(x, z, -.05)) return;
    let k = Math.round(x) + "," + Math.round(z);
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) { let c = G.get((Math.round(x) + dx) + "," + (Math.round(z) + dz)); if (c && c.some(q => Math.hypot(q.x - x, q.z - z) < .8)) return }
    let q = { parity: P++ % 2, x, z, y: zn(x, z) + .13, yaw }; h.push(q); (G.get(k) || G.set(k, []).get(k)).push(q)
  };
  for (let R of ycRoads) {
    let o = R.hw + .25, Pp = R.p;
    for (let n = 1; n < Pp.length; n++) {
      let w = Pp[n - 1], E = Pp[n], N = Math.hypot(E[0] - w[0], E[1] - w[1]), U = -(E[1] - w[1]) / N, H = (E[0] - w[0]) / N, yaw = Math.atan2(E[0] - w[0], E[1] - w[1]);
      for (let q of [-1, 1]) for (let g = 0; g < N; g += 1.05) add(w[0] + (E[0] - w[0]) * g / N + U * q * o, w[1] + (E[1] - w[1]) * g / N + H * q * o, yaw)
    }
    // uchlar va keskin burilishlar atrofida yoy
    let ends = [Pp[0], Pp[Pp.length - 1]];
    for (let n = 1; n < Pp.length - 1; n++) {
      let a = Pp[n - 1], b = Pp[n], c = Pp[n + 1], t1 = Math.atan2(b[1] - a[1], b[0] - a[0]), t2 = Math.atan2(c[1] - b[1], c[0] - b[0]);
      Math.abs(Jh(t2 - t1)) > .35 && ends.push(b)
    }
    for (let v of ends) for (let g = 0, M = Math.ceil(2 * Math.PI * o / 1.05); g < M; g++) { let a = g / M * Math.PI * 2; add(v[0] + Math.cos(a) * o, v[1] + Math.sin(a) * o, Math.atan2(-Math.sin(a), Math.cos(a))) }
  }
  for (let l of ycPads) {
    let x0 = l.x - l.w / 2 - .25, x1 = l.x + l.w / 2 + .25, z0 = l.z - l.d / 2 - .25, z1 = l.z + l.d / 2 + .25;
    for (let x = x0; x <= x1; x += 1.05) add(x, z0, Math.PI / 2), add(x, z1, Math.PI / 2);
    for (let z = z0; z <= z1; z += 1.05) add(x0, z, 0), add(x1, z, 0)
  }
  return h
}

function Ff(i) {
  let e = new Mt; e.name = "Yolchi real autodrome", i.add(e);
  let t = Qh(), n = new Qi(t); n.colorSpace = yt, n.anisotropy = 8;
  let s = new di(ki, ki, 400, 400); s.rotateX(-Math.PI / 2);
  let r = s.attributes.position;
  for (let L = 0; L < r.count; L++) r.setY(L, zn(r.getX(L), r.getZ(L)));
  s.computeVertexNormals();
  let a = new Ve(s, new Nt({ map: n, roughness: .96 })); a.receiveShadow = !0, e.add(a);
  let o = Qt("#dddcc7"), c = Qt("#343b3c"), l = Qt("#d8be58"), h = ycCurbs();
  for (let L = 0; L < 2; L++) {
    let w = h.filter(U => U.parity === L), E = new ui(new $t(.28, .25, 1.02), L ? l : c, w.length), N = new dt;
    w.forEach((U, H) => { N.position.set(U.x, U.y, U.z), N.rotation.y = U.yaw, N.updateMatrix(), E.setMatrixAt(H, N.matrix) }), E.castShadow = !0, E.receiveShadow = !0, e.add(E)
  }
  let d = Qt("#eceadb"), f = Qt("#e7e4d7"), g = new Nt({ color: "#385661", metalness: .6, roughness: .22 }), m = Qt("#737f80");
  // ma'muriy bino (janubda, panjaradan tashqarida)
  jt(e, 35, 5.5, 14, -25, 2.75, 98, f), jt(e, 36, .35, 15, -25, 5.55, 98, c);
  for (let L = -40; L < -9; L += 4) jt(e, 3.1, 2.9, .08, L, 2.8, 90.93, g), jt(e, .1, 4.8, .22, L + 1.65, 2.6, 90.8, o);
  jt(e, 5, .2, 4, -25, 3.7, 89, c);
  for (let L of [-27.3, -22.7]) zi(e, L, 87.3, 3.7, .05, c);
  let y = new Ve(new di(4.4, 1.1), new Nt({ map: Uf("AVTODROM", { bg: "#303b3c" }), roughness: .8 }));
  y.position.set(-25, 4.7, 90.89), y.rotation.y = Math.PI, e.add(y);
  for (let L = 0; L < 5; L++) { jt(e, 7.8, .15, 5, 25 + L * 10, 2.8, 98, c); for (let w of [-3.5, 3.5]) zi(e, 25 + L * 10 + w, 100, 2.8, .06, c); jt(e, 5, .35, .6, 25 + L * 10, .7, 100, o) }
  // panjara
  for (let L of [-84, 84]) { for (let w = -102; w <= 102; w += 4) zi(e, w, L, 1.65, .045, m); for (let w of [.55, 1.35]) jt(e, 204, .045, .045, 0, w, L, m) }
  for (let L of [-102, 102]) { for (let w = -84; w <= 84; w += 4) zi(e, L, w, 1.65, .045, m); for (let w of [.55, 1.35]) jt(e, .045, .045, 168, L, w, 0, m) }
  // daraxtlar: orolchalarda va panjara ortida
  let p = [], sd = 7, rnd = () => (sd = sd * 1664525 + 1013904223 >>> 0, sd / 4294967296);
  for (let x = -96; x <= 96; x += 10) for (let z = -78; z <= 78; z += 10) { let X = x + (rnd() - .5) * 6, Z = z + (rnd() - .5) * 6; !va(X, Z, -3.6) && Math.abs(X - 88) > 9 && rnd() < .55 && p.push([X, Z]) }
  for (let L = -80; L < 84; L += 14) p.push([-110, L], [110, L]);
  for (let L = -96; L < 100; L += 16) p.push([L, -92]);
  let S = [Qt("#566d49"), Qt("#687951"), Qt("#73805a")], R = Qt("#776346");
  p.slice(0, 130).forEach(([L, w], E) => {
    zi(e, L, w, 2.4, .16, R);
    for (let N = 0; N < 3; N++) { let U = new Ve(new Xr(1.65 + E * 7 % 6 / 10, 2), S[(E + N) % 3]); U.position.set(L + Math.sin(E + N) * .55, 3 + N * .62, w + Math.cos(E + N) * .55), U.scale.y = .86, U.castShadow = !0, e.add(U) }
  });
  // chiroq ustunlari
  for (let [L, w] of [[-96, 40], [-96, -30], [96, 40], [96, -30], [-40, 80], [40, 80], [-40, -80], [40, -80], [-20, 20], [30, -10], [-70, 25]]) zi(e, L, w, 7, .085, c), jt(e, 2.2, .12, .18, L + .8, 6.9, w, c), jt(e, .8, .1, .5, L + 1.5, 6.82, w, d);
  // belgilar
  fs(e, -56, 76, "20", ycE, "speed"), fs(e, -50, 76, "↟", ycE), fs(e, -40, 63.6, "↟", ycW),
  fs(e, -21.6, 76, "STOP", ycE, "stop"), fs(e, -32, 76, "✖", ycE, "tri"), fs(e, 2, 63.6, "✖", ycW, "tri"),
  fs(e, 15.8, 27, "20", 0, "speed"), fs(e, 15.8, 50, "↱", 0),
  fs(e, 93.8, -16, "12%", 0, "tri"), fs(e, 93.8, -27, "STOP", 0, "stop"),
  fs(e, 60, -75.8, "40", ycW, "speed"), fs(e, -36, -75.8, "20", ycW, "speed"),
  fs(e, -55.3, -52, "P", ycS), fs(e, -55.3, -16, "STOP", ycS, "stop"),
  fs(e, -33, 56.6, "P", ycE), fs(e, -12, 52, "FINISH", ycE);
  // svetoforlar (to'rt burchakda; ko'ndalang yo'nalishlar teskari fazada)
  let v = [];
  for (let [L, w, E, off] of [[16.2, 14.2, 0, 0], [3.8, 1.8, Math.PI, 0], [3.8, 14.2, -Math.PI / 2, 13], [16.2, 1.8, Math.PI / 2, 13]]) {
    zi(e, L, w, 3.9, .07, c);
    let N = new Mt; N.position.set(L, 3.4, w), N.rotation.y = E, e.add(N), jt(N, .48, 1.3, .3, 0, 0, 0, c);
    let U = [];
    for (let H = 0; H < 3; H++) { let G = new Nt({ color: ["#7e2d2d", "#826b26", "#28593d"][H], emissive: ["#ff3030", "#ffd14a", "#70ed8c"][H], emissiveIntensity: .02 }), q = new Ve(new es(.15, 24), G); q.position.set(0, .4 - H * .4, .16), N.add(q), U.push(G) }
    U.off = off, v.push(U)
  }
  // temir yo'l: relslar va shlagbaum ustunlari
  for (let L of [-15.7, -14.3]) jt(e, .09, .035, 12.5, L, .025, 70, m);
  for (let [L, w] of [[-18, 76.3], [-12, 63.7]]) { zi(e, L, w, 1.3, .09, Qt("#c53c32")); jt(e, .12, 4.2, .12, L, 3.3, w, Qt("#e8e3d6")) }
  // maqsad belgisi va piyoda
  let M = new Mt, T = new Ve(new qr(1.7, 1.85, 48), new nn({ color: "#d5ff83", transparent: !0, opacity: .8, side: Dt }));
  T.rotation.x = -Math.PI / 2, M.add(T);
  let C = new Ve(new Ys(.38, .6, 3), new nn({ color: "#d5ff83" })); C.rotation.z = Math.PI, C.position.y = 2.9, M.add(C), i.add(M);
  let _ = new Mt, A = Qt("#dfb77a"), I = Qt("#2c4757"), O = new Ve(new Vr(.18, .5, 4, 8), A); O.position.y = 1, _.add(O);
  let F = new Ve(new Pi(.14, 12, 8), Qt("#bd906c")); F.position.y = 1.57, _.add(F);
  for (let L of [-.1, .1]) jt(_, .12, .65, .15, L, .35, 0, I);
  return i.add(_), { root: e, canvas: t, lights: v, beacon: M, pedestrian: _ }
}

var mn={limit:100,collision:20,red:30,stop:20,speed:10,belt:10,signal:5,rollback:10,reset:10,stall:5};function Ma({car:i="cobalt",mode:e="exam",stage:t=0}={}){t=e==="practice"?Ol(t,0,on.length-1):0;let n=on[t].spawn;return{car:Object.hasOwn(Xt,i)?i:"cobalt",color:"#f1f0e9",...n,speed:0,steer:0,travel:0,braking:!1,gear:"N",lug:0,engine:e==="practice"||e==="free"||e==="city",belt:e==="practice"||e==="free"||e==="city",handbrake:!0,indicator:0,stage:t,initialStage:t,mode:e,elapsed:0,phase:"running",points:0,events:[],done:[],stageTime:0,hold:0,waypoint:0,reverseDistance:0,peakSpeed:0,stopSatisfied:!1,hillAnchor:null,rollback:!1,pedestrianTime:null,cooldowns:{},violations:{},collisions:0}}function bn(i,e,t,n,s=0){return i.phase!=="running"||i.mode==="free"||(i.cooldowns[e]||0)>0?!1:(i.points+=t,i.events.push({code:e,points:t,message:n,time:i.elapsed,stage:i.stage}),i.cooldowns[e]=s||1e9,i.mode!=="practice"&&i.mode!=="free"&&i.points>=mn.limit&&(i.phase="failed"),!0)}function Gn(i){if(i.phase==="running"){if(i.done.push({stage:i.stage,time:i.stageTime,points:i.points}),i.mode==="practice"||i.stage===on.length-1){i.phase="passed",i.speed=0;return}i.stage++,i.stageTime=0,i.hold=0,i.waypoint=0,i.stopSatisfied=!1,i.hillAnchor=null,i.reverseDistance=0,i.peakSpeed=0,i.rollback=!1}}var ycTrans=(()=>{try{return JSON.parse(localStorage.getItem("yolchi-settings")||"{}").trans==="auto"?"auto":"manual"}catch{return"manual"}})();var mtZ={D:{f:2.9,v:14,m:-.3,c:1.4},R:{f:-2,v:3.4,m:-.3,c:1.1},1:{f:3,v:4.4,m:-.3,c:1.4},2:{f:2.6,v:9,m:1},3:{f:2.6,v:14,m:2.6}};function mtC(){return ycTrans!=="auto"&&(ms.has("clutch")||Tn.has("ShiftLeft")||Tn.has("ShiftRight")||Tn.has("KeyZ"))}function mtG(i,e,c){if(!Object.hasOwn(mtZ,e)&&e!=="N"||e===i.gear||ycTrans==="auto"&&/[123]/.test(e)||ycTrans!=="auto"&&e==="D")return"";if(ycTrans!=="auto"&&e!=="N"&&i.engine&&!c)return"Uzatmani almashtirish uchun ilashishni bosib turing.";if(e==="R"&&Math.abs(i.speed)>.25)return"Orqaga uzatmadan oldin to\u2018liq to\u2018xtang.";if(e!=="R"&&e!=="N"&&i.speed<-.25||ycTrans==="auto"&&e==="R"&&i.speed>.25)return"Avval to\u2018liq to\u2018xtang.";if(e==="1"&&i.speed>6||e==="2"&&i.speed>10)return"Bu tezlik uchun uzatma juda past.";return i.gear=e,""}function mtM(i,e){let g=mtZ[i.gear];if(!g||!i.engine||e.clutch)return 0;let d=Math.sign(g.f),p=i.speed*d,a=0;e.gas?a=Math.abs(g.f)*Math.max(0,1-p/g.v):g.c&&p<g.c&&(a=Math.abs(g.f)*.45*(1-Math.max(0,p)/g.c));p>g.v&&(a-=(p-g.v)*1.5);!e.gas&&p>(g.c||0)&&(a-=.35);return a*d}function mtS(i,e,t){let g=mtZ[i.gear];if(!g||!i.engine||e.clutch||ycTrans==="auto"){i.lug=0;return}let p=i.speed*Math.sign(g.f),b=(i.handbrake||e.brake)&&p<.3||p<g.m;i.lug=b?(i.lug||0)+t:0,i.lug>.35&&(i.engine=!1,i.lug=0,bn(i,"stall",mn.stall,"Dvigatel o\u2018chib qoldi \xB7 ilashishni bosing",1))}function zf(i){let e=on[i.stage].spawn;Object.assign(i,e,{speed:0,steer:0,handbrake:!0,hold:0,waypoint:0,stopSatisfied:!1,reverseDistance:0,peakSpeed:0,hillAnchor:null,parkingReversed:!1,pedestrianTime:null}),bn(i,"reset",mn.reset,"Mashq boshiga qaytish",.1)}function ps(i){if(ycFree(i))return ycTarget(i);let e=on[i.stage];return e.points?e.points[Math.min(i.waypoint,e.points.length-1)]:e.point}function pr(i){return i.pedestrianTime!==null&&i.elapsed-i.pedestrianTime>=6}function kf(i){if(ycFree(i))return ycProg(i);let e=on[i.stage];return e.points?i.waypoint/e.points.length:["parking","hold","finish"].includes(e.type)?Math.min(1,i.hold/2):i.stopSatisfied?.65:Math.min(.5,i.hold/4)}function Of(i,e){return{x:i.x-Math.sin(i.yaw)*e.length/2,z:i.z-Math.cos(i.yaw)*e.length/2}}function My(i,e){return jh(i,e).every(t=>va(t.x,t.z))?fr.some(t=>{let n=t.x-i.x,s=t.z-i.z,r=n*Math.cos(i.yaw)-s*Math.sin(i.yaw),a=n*Math.sin(i.yaw)+s*Math.cos(i.yaw);return Math.abs(r)<e.width/2+t.r&&Math.abs(a)<e.length/2+t.r}):!0}function Gf(i,e,t){if(i.phase!=="running"||!Number.isFinite(t)||t<=0)return;let n=Math.min(t,.1);for(;n>0;){let s=Math.min(.016666666666666666,n);if(Sy(i,e,s),n-=s,i.phase!=="running")break}}function Sy(i,e,t){let n=Xt[i.car],s={x:i.x,z:i.z,yaw:i.yaw,speed:i.speed};i.elapsed+=t,i.stageTime+=t;for(let m of Object.keys(i.cooldowns))i.cooldowns[m]=Math.max(0,i.cooldowns[m]-t);let r=Math.max(-1,Math.min(1,(e.left?1:0)-(e.right?1:0)+(window.__yWheel||0)))*.6/(1+Math.abs(i.speed)*.045);i.steer+=(r-i.steer)*(1-Math.exp(-t*6)),i.braking=!!e.brake||i.handbrake;mtS(i,e,t);let a=zn(i.x-Math.sin(i.yaw),i.z-Math.cos(i.yaw)),o=zn(i.x+Math.sin(i.yaw),i.z+Math.cos(i.yaw)),c=-9.81*(a-o)/2,l=i.speed;if(i.handbrake)i.speed=Math.sign(i.speed)*Math.max(0,Math.abs(i.speed)-12*ycGrip*t);else if(e.brake)i.speed=Math.sign(i.speed)*Math.max(0,Math.abs(i.speed)-8.5*ycGrip*t);else{let m=c-Math.sign(i.speed)*(.18+.012*i.speed*i.speed);m+=mtM(i,e),i.speed+=m*t,!e.gas&&Math.abs(c)<.05&&l*i.speed<0&&(i.speed=0)}i.speed=Ol(i.speed,-3.5,13),Math.abs(i.speed)<.025&&i.braking&&(i.speed=0),i.yaw=Jh(i.yaw+i.speed/n.wheelbase*Math.tan(i.steer)*t),i.x-=Math.sin(i.yaw)*i.speed*t,i.z-=Math.cos(i.yaw)*i.speed*t,i.travel+=i.speed*t,My(i,n)&&(i.x=s.x,i.z=s.z,i.yaw=s.yaw,i.speed=0,Math.abs(s.speed)>.1&&bn(i,"collision",mn.collision,"Bordyur yoki konusga tegildi",3)&&i.collisions++),ycHit(i,s);let h=Math.abs(i.speed)*3.6,u=on[i.stage];i.peakSpeed=Math.max(i.peakSpeed,h),i.speed<-.05&&(i.reverseDistance+=-i.speed*t),h>1&&!i.belt&&bn(i,"belt",mn.belt,"Xavfsizlik kamari taqilmagan"),h>(i.mode==="city"||i.mode==="free"||u.type==="acceleration"?40.5:20.5)&&bn(i,"speed",mn.speed,"Belgilangan tezlik oshirildi",6);let d=Math.hypot(i.x-u.point[0],i.z-u.point[1]),f=Math.abs(i.speed)<.07,g=Of(i,n),y=Of(s,n);if(ycFree(i)){ycSy(i,s,t,n,y,g);return}let R=u.r||1.25;if(u.type==="start")kn(s,i,u.line)&&(i.indicator||bn(i,"start-signal",mn.signal,"Harakat oldidan burilish ishorasi berilmadi"),i.engine&&Gn(i));else if(u.type==="crossing")d<18&&i.pedestrianTime===null&&(i.pedestrianTime=i.elapsed),kn(y,g,u.line)&&!pr(i)&&bn(i,"pedestrian",mn.stop,"Piyodaga yo\u2018l berilmadi"),kn(s,i,u.gate)&&Gn(i);else if(u.type==="hill")d<R&&f&&i.handbrake?(i.hold+=t,i.hold>=2&&(i.stopSatisfied=!0,i.hillAnchor=i.z)):i.stopSatisfied||(i.hold=0),i.stopSatisfied&&i.hillAnchor!==null&&(i.hillAnchor=Math.min(i.hillAnchor,i.z),i.z-i.hillAnchor>.3&&!i.rollback&&(bn(i,"rollback",mn.rollback,"Estakadada 30 sm dan ortiq orqaga sirpanish"),i.rollback=!0)),kn(s,i,u.gate)&&(i.stopSatisfied||bn(i,"hill-stop",mn.stop,"Estakadada to\u2018xtash bajarilmadi"),Gn(i));else if(u.type==="waypoints"){let m=ps(i),rv=u.rev&&u.rev[i.waypoint];Math.hypot(i.x-m[0],i.z-m[1])<u.radius&&(!rv||i.gear==="R")&&(i.waypoint++,i.waypoint>=u.points.length&&Gn(i))}else if(u.type==="signal")kn(y,g,u.line)&&ds(i.elapsed)!=="green"&&bn(i,"red-light",mn.red,"Taqiqlovchi svetofor signalida chiziq kesildi"),kn(s,i,u.gate)&&Gn(i);else if(u.type==="stop")d<R&&f?(i.hold+=t,i.hold>=2&&(i.stopSatisfied=!0)):i.stopSatisfied||(i.hold=0),kn(y,g,u.line)&&!i.stopSatisfied&&bn(i,"railway-stop",mn.stop,"Temir yo\u2018l oldida to\u2018liq to\u2018xtalmadi"),kn(s,i,u.gate)&&Gn(i);else if(u.type==="acceleration")kn(s,i,u.gate)&&(i.peakSpeed<20&&bn(i,"min-speed",mn.speed,"Tezlanish bo\u2018lagida 20 km/soatga yetilmadi"),Gn(i));else if(u.type==="hold")i.hold=d<3&&f?i.hold+t:0,i.hold>=2?Gn(i):kn(s,i,u.line)&&(bn(i,"emergency-stop",mn.stop,"To\u2018xtash chizig\u2018idan o\u2018tib ketildi"),Gn(i));else if(u.type==="parking"){let m=Bl(i,n);m&&i.speed<-.05&&(i.parkingReversed=!0),m&&i.speed>.05&&(i.parkingReversed=!1);let p=m&&f&&i.handbrake&&i.reverseDistance>1.5&&i.parkingReversed;i.hold=p?i.hold+t:0,i.hold>=2&&Gn(i)}else u.type==="finish"&&(i.hold=d<3&&f&&i.handbrake&&i.gear==="N"?i.hold+t:0,i.hold>=2&&Gn(i))}var zl=class{constructor(e,t){this.canvas=e,this.onStatus=t,this.cameraMode=0,this.lastMode=-1,this.model=null,this.ready=!1,this.status="loading",this.camTarget=new D;try{if(new URLSearchParams(location.search).get("view")==="2d")throw Error("2D");this.renderer=new Rl({canvas:e,antialias:!0,powerPreference:"high-performance"})}catch{this.fallback=!0,this.ctx=e.getContext("2d"),this.map=Qh(1600),document.body.classList.add("light-view")}if(this.renderer){let n=this.renderer;n.setPixelRatio(Math.min(devicePixelRatio,matchMedia("(pointer:coarse)").matches?1.25:1.6)),n.outputColorSpace=yt,n.toneMapping=ia,n.toneMappingExposure=1.03,n.shadowMap.enabled=!0,n.shadowMap.type=Uo,this.scene=new Ji,this.scene.background=new Ne("#c2d7df"),this.scene.fog=new Lr("#c2d7df",170,380),this.scene.add(new jr("#e8f4ff","#7a8161",2.6)),this.sun=new is("#fff1d4",3.2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1536,1536),Object.assign(this.sun.shadow.camera,{near:1,far:190,left:-40,right:40,top:40,bottom:-40}),this.sun.shadow.bias=-15e-5,this.sun.shadow.normalBias=.025,this.scene.add(this.sun,this.sun.target);let s=new lr(n),r=new Pl;this.scene.environment=s.fromScene(r,.04).texture,this.scene.environmentIntensity=.7,r.dispose(),s.dispose(),this.world=Ff(this.scene),this.map=this.world.canvas,this.camera=new St(48,1,.08,550)}this.resize(),addEventListener("resize",()=>this.resize())}async setCar(e){this.model&&Nf(this.model),this.ready=!1,this.status="loading",this.previewImage=null,this.onStatus?.("loading");let t=this.model=Pf(e,"#f1f0e9");this.scene?.add(t);try{if(t.userData.ready&&await t.userData.ready,this.model!==t)return;this.ready=!0,this.status="ready",this.onStatus?.("ready"),this.fallback&&(this.previewImage=Df(t),t.rotation.y=0)}catch(n){if(this.model!==t)return;this.status="error",this.onStatus?.("error",n)}}resize(){if(this.width=innerWidth,this.height=innerHeight,this.renderer)this.renderer.setSize(this.width,this.height,!1),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix();else{let e=Math.min(devicePixelRatio,1.5);this.canvas.width=this.width*e,this.canvas.height=this.height*e,this.ctx.setTransform(e,0,0,e,0,0)}this.lastMode=-1}draw(e,t,n,s){if(this.fallback){this.draw2D(e,t,s);return}let r=new D(e.x,zn(e.x,e.z),e.z),a=Math.sin(e.yaw),o=Math.cos(e.yaw),c=ps(e);this.model&&(this.model.position.copy(r),this.model.rotation.set(Math.atan2(zn(e.x-a,e.z-o)-zn(e.x+a,e.z+o),2),e.yaw,0,"YXZ"),Lf(this.model,e,!0),this.model.visible=this.cameraMode!==1||t==="menu");let l=new D,h=new D;t==="menu"?(h.set(e.x-9,6.5,e.z+11),l.set(e.x+1.5,.6,e.z-2),this.camera.fov=42):this.cameraMode===1?(h.set(r.x-a*.4,r.y+1.27,r.z-o*.4),l.set(r.x-a*30,r.y+1.2,r.z-o*30),this.camera.fov=72):this.cameraMode===2?(h.set(r.x,r.y+34,r.z+2),l.copy(r),this.camera.fov=48):(h.set(r.x+a*8,r.y+4.8,r.z+o*8),l.set(r.x-a*3,r.y+.75,r.z-o*3),this.camera.fov=49);let u=t==="menu"?3:this.cameraMode,d=u!==this.lastMode?1:1-Math.exp(-n*6);this.lastMode=u,this.camera.position.lerp(h,d),this.camTarget.lerp(l,d),this.camera.lookAt(this.camTarget),this.camera.updateProjectionMatrix(),this.sun.position.set(r.x-28,r.y+65,r.z+30),this.sun.target.position.copy(r),this.world.beacon.visible=t!=="menu"&&e.phase==="running"&&e.mode!=="free",this.world.beacon.position.set(c[0],zn(...c)+.04,c[1]),this.world.beacon.children[1].position.y=2.9+Math.sin(s*3)*.14,this.world.lights.forEach(g=>g.forEach((y,m)=>y.emissiveIntensity=["red","yellow","green"][m]===ds(e.elapsed+(g.off||0))?3.5:.015));let f=this.world.pedestrian;if(f.visible=e.stage===1&&!pr(e),f.visible){let g=e.pedestrianTime===null?0:Math.min(1,(e.elapsed-e.pedestrianTime)/6);f.position.set(ycPed.x,0,ycPed.z0-g*ycPed.len),f.rotation.y=0}ycFx(this,e,n),this.renderer.render(this.scene,this.camera)}draw2D(e,t,n){let s=this.ctx,r=this.width,a=this.height;s.fillStyle="#bccbb1",s.fillRect(0,0,r,a);let o=t==="menu",c=o||this.cameraMode===2,l=c?Math.min((r>800?r-340:r)/205,(a-90)/172):Math.min(r,a)/44,h=o&&r>800?r*.65:r/2,u=o?a*.53:a*.55,d=c?0:e.x,f=c?0:e.z,g=c?0:e.yaw;s.save(),s.translate(h,u),s.scale(l,l),s.rotate(g),s.translate(-d,-f),s.drawImage(this.map,-ki/2,-ki/2,ki,ki);for(let y of fr)s.fillStyle="#ed8c45",s.beginPath(),s.arc(y.x,y.z,.26,0,Math.PI*2),s.fill();if(o)on.forEach((y,m)=>this.marker(s,y.point,m+1,l));else{let y=ps(e);s.strokeStyle="#d8ff89",s.lineWidth=.15,s.beginPath(),s.arc(...y,2+.15*Math.sin(n*3),0,Math.PI*2),s.stroke()}if(e.stage===1&&!pr(e)){let y=e.pedestrianTime===null?0:Math.min(1,(e.elapsed-e.pedestrianTime)/6);s.fillStyle="#e5b880",s.beginPath(),s.arc(ycPed.x,ycPed.z0-y*ycPed.len,.35,0,Math.PI*2),s.fill()}if(s.fillStyle={red:"#ff634e",yellow:"#f7da67",green:"#7cef8c"}[ds(e.elapsed)],s.beginPath(),s.arc(16.2,14.2,.7,0,Math.PI*2),s.fill(),this.car2D(s,e),s.restore(),o&&this.previewImage&&r>900){let y=Math.min(520,r*.36);s.drawImage(this.previewImage,r-y-12,a-y*.59,y,y*.6)}}marker(e,t,n,s){e.fillStyle="#182e2c",e.beginPath(),e.arc(...t,10/s,0,Math.PI*2),e.fill(),e.fillStyle="#eff2db",e.font=`600 ${10/s}px Arial`,e.textAlign="center",e.textBaseline="middle",e.fillText(String(n),...t)}car2D(e,t){let n=Xt[t.car];e.save(),e.translate(t.x,t.z),e.rotate(-t.yaw),e.fillStyle="#1f2a27";for(let s of[-n.width/2,n.width/2])for(let r of[-n.wheelbase/2,n.wheelbase/2])e.fillRect(s-.1,r-.3,.2,.6);e.fillStyle="#f2f0e8",e.beginPath(),e.roundRect(-n.width/2,-n.length/2,n.width,n.length,.3),e.fill(),e.fillStyle="#34515d",e.beginPath(),e.roundRect(-n.width*.4,-1,n.width*.8,2.2,.23),e.fill(),e.fillStyle="#ecebe5",e.fillRect(-n.width*.38,-.25,n.width*.76,.95),e.fillStyle=t.braking?"#ff604a":"#b64b44";for(let s of[-.63,.63])e.fillRect(s-.15,n.length/2-.14,.3,.12);t.indicator&&Math.sin(t.elapsed*9)>0&&(e.fillStyle="#ffd458",e.fillRect(t.indicator===1?-.84:.64,-n.length/2,.2,.15),e.fillRect(t.indicator===1?-.84:.64,n.length/2-.1,.2,.15)),e.restore()}drawMap(e,t){let n=e.getContext("2d"),s=e.width,r=e.height,a=Math.min(s/204,r/168);n.clearRect(0,0,s,r),n.fillStyle="#edf0e4",n.fillRect(0,0,s,r),n.save(),n.translate(s/2,r/2),n.scale(a,a),n.translate(0,0),n.drawImage(this.map,-125,-125,250,250);let o=ps(t);n.strokeStyle="#284f47",n.lineWidth=1.3,n.beginPath(),n.arc(...o,4.5,0,Math.PI*2),n.stroke(),n.save(),n.translate(t.x,t.z),n.rotate(-t.yaw),n.fillStyle="#183c37",n.strokeStyle="#f6f8ed",n.lineWidth=1,n.beginPath(),n.moveTo(0,-5),n.lineTo(-3.5,3),n.lineTo(0,1.7),n.lineTo(3.5,3),n.closePath(),n.fill(),n.stroke(),n.restore(),n.restore()}};var le=i=>document.getElementById(i),mr=i=>[...document.querySelectorAll(i)],wn="exam",qt="menu",Pe=Ma(),eu={},Tn=new Set,ms=window.__yDrive=new Set,Vf=performance.now(),Wf=0,Hf=0,tu=!1,Vl=!1,nu=i=>`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`,ln=new zl(le("scene"),i=>{let e=i==="ready";le("start").disabled=!e,le("start").firstElementChild.textContent=e?ycStartText():i==="error"?"Model yuklanmadi":"Model yuklanmoqda\u2026",le("model-status").textContent=e?"3D mashina tayyor \xB7 "+(ycTrans==="auto"?"avtomat":"mexanik")+" uzatma":i==="error"?"Faylni yuklab bo\u2018lmadi. Qayta urinib ko\u2018ring.":"3D mashina tayyorlanmoqda\u2026",le("retry-model").hidden=i!=="error"});le("render-note").hidden=!ln.fallback;for(let[i,e]of on.entries()){let t=document.createElement("option");t.value=i,t.textContent=`${e.no||String(i+1).padStart(2,"0")} \u2014 ${e.name}`,le("lesson").append(t)}ln.setCar("cobalt");function Sa(i){qt=i,document.body.dataset.phase=i,le("menu").hidden=i!=="menu",le("hud").hidden=i==="menu",le("overlay").hidden=!["paused","result"].includes(i),Xf()}function gs(i){le("toast").textContent=i,le("toast").hidden=!1,Wf=performance.now()+3500}function Xf(){Tn.clear(),ms.clear(),eu={},mr("[data-drive]").forEach(i=>i.classList.remove("active"))}function qf(){ln.ready&&(Pe=Ma({car:le("car").value,mode:wn,stage:Number(le("lesson").value)}),tu=!1,ycStart(),ln.lastMode=-1,Sa("running"),le("scene").focus(),Ta(),gs(ycStartToast()))}function ba(){qt==="running"&&(Sa("paused"),le("result-eyebrow").textContent="PAUZA",le("result-title").textContent="Biroz dam olamiz.",le("result-note").textContent="Vaqt to\u2018xtatildi. Tayyor bo\u2018lsangiz, shu joydan davom eting.",le("result-stats").hidden=!0,le("result-events").replaceChildren(),le("resume").hidden=!1,le("again").hidden=!0,le("resume").focus())}function iu(){qt==="paused"&&(Sa("running"),le("scene").focus())}function by(){if(tu)return;tu=!0,Sa("result");let i=Pe.phase==="passed";le("result-eyebrow").textContent=ycEyebrow(),le("result-title").textContent=i?wn==="practice"?"Mashq bajarildi.":"Marra sizniki.":"Yana bir urinib ko\u2018ramiz.",le("result-note").textContent=i?"Harakatlaringiz hisoblandi. Xatolarni ko\u2018rib, yana mashq qiling.":"100 jarima balli yig\u2018ildi. Shu mashqni alohida takrorlab ko\u2018rishingiz mumkin.",le("result-stats").hidden=!1,le("result-stats").replaceChildren();for(let[e,t]of[[nu(Pe.elapsed),"VAQT"],[Pe.points,"JARIMA BALLI"],[`${Pe.done.length}/${wn==="practice"?1:on.length}`,"BAJARILDI"]]){let n=document.createElement("div"),s=document.createElement("b"),r=document.createElement("span");s.textContent=e,r.textContent=t,n.append(s,r),le("result-stats").append(n)}le("result-events").replaceChildren();for(let e of Pe.events){let t=document.createElement("li"),n=document.createElement("span"),s=document.createElement("strong");n.textContent=`${nu(e.time)} \xB7 ${e.message}`,s.textContent=`+${e.points}`,t.append(n,s),le("result-events").append(t)}if(!Pe.events.length){let e=document.createElement("li");e.textContent="Jarimasiz bajarildi. Ajoyib natija!",le("result-events").append(e)}ycResult(i),le("resume").hidden=!0,le("again").hidden=!1,le("again").focus();try{localStorage.setItem("avto-last-result",JSON.stringify({car:Pe.car,mode:wn,points:Pe.points,seconds:Math.round(Pe.elapsed),passed:i,completed:Pe.done.length,at:Date.now()}))}catch{}}function kl(i){if(qt==="running"){if(i==="engine"&&Math.abs(Pe.speed)>.15){gs("Dvigatelni boshqarish uchun to\u2018xtang.");return}if(i==="engine"&&!Pe.engine&&Pe.gear!=="N"&&(ycTrans==="auto"||!mtC())){gs(ycTrans==="auto"?"Dvigatelni N da yoqing.":"Dvigatelni N da yoki ilashishni bosib yoqing.");return}Pe[i]=!Pe[i],Ta()}}function Gl(i){if(qt==="running"){let r=mtG(Pe,i,mtC());r&&gs(r),Ta()}}function Hl(i){qt==="running"&&(Pe.indicator=Pe.indicator===i?0:i,Ta())}function Yf(){ln.cameraMode=(ln.cameraMode+1)%3,gs(["Orqa kamera","Haydovchi ko\u2018rinishi","Tepadagi kamera"][ln.cameraMode])}function Ta(){let i=ycFree(Pe)?ycStage(Pe):on[Pe.stage],e=ps(Pe);le("task-title").textContent=(i.no?i.no+"-mashq \xB7 ":"")+i.name,le("task-hint").textContent=i.hint,le("stage-count").textContent=i.count?i.count(Pe):`${String(Pe.stage+1).padStart(2,"0")} / ${on.length}`,le("mode-label").textContent=ycModeLabel(),le("time").textContent=nu(Pe.elapsed),le("points").firstChild.textContent=`${Pe.points} `,le("limit").textContent=i.limit||(i.type==="acceleration"?"40":"20"),le("speed").textContent=Math.round(Math.abs(Pe.speed)*3.6),le("car-name").textContent=Xt[Pe.car].name.toUpperCase(),le("distance").textContent=`${Math.round(Math.hypot(Pe.x-e[0],Pe.z-e[1]))} m`,le("task-progress").style.width=`${kf(Pe)*100}%`;let t="YASHIL NUQTANI KUZATING";i.type==="crossing"?t=pr(Pe)?"YO\u2018L OCHIQ":Pe.pedestrianTime===null?"ZEBRAGA YAQINLASHING":"PIYODANI O\u2018TKAZING":i.type==="signal"?t={red:"QIZIL \xB7 TO\u2018XTANG",yellow:"SARIQ \xB7 KUTING",green:"YASHIL \xB7 YURING"}[ds(Pe.elapsed)]:i.type==="hill"||i.type==="stop"?t=Pe.stopSatisfied?"BAJARILDI \xB7 DAVOM ETING":`TO\u2018XTASH: ${Math.min(2,Pe.hold).toFixed(1)} / 2 S`:i.type==="parking"?t=Bl(Pe,Xt[Pe.car])?"TEKIS \xB7 QO\u2018L TORMOZINI TORTING":"R DA ORQAGA KIRING":i.type==="acceleration"?t=`ENG YUQORI: ${Math.round(Pe.peakSpeed)} KM/SOAT`:i.type==="finish"?t="TO\u2018XTANG \xB7 N \xB7 QO\u2018L TORMOZI":i.type==="start"?t=Pe.belt?Pe.engine?Pe.handbrake?"QO\u2018L TORMOZINI TUSHIRING":ycTrans==="auto"?"D \xB7 CHAP ISHORA \xB7 GAZ":eu.clutch?"1-UZATMA \xB7 CHAP ISHORA \xB7 GAZ":"ILASHISH \xB7 1-UZATMA \xB7 CHAP ISHORA":"DVIGATELNI YOQING":"KAMARNI TAQING":i.points&&(t=`NUQTA ${Pe.waypoint+1} / ${i.points.length}`),le("task-condition").textContent=i.cond?i.cond(Pe):t;for(let n of["belt","engine","handbrake"])le(n).setAttribute("aria-pressed",Pe[n]);le("left-signal").setAttribute("aria-pressed",Pe.indicator===1),le("right-signal").setAttribute("aria-pressed",Pe.indicator===-1),mr("[data-gear]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.gear===Pe.gear))}le("start").addEventListener("click",qf);le("again").addEventListener("click",qf);le("resume").addEventListener("click",iu);le("back").addEventListener("click",()=>{ycStop(),Sa("menu"),Pe=Ma({car:le("car").value}),ln.lastMode=-1});le("pause").addEventListener("click",ba);le("camera").addEventListener("click",Yf);le("reset").addEventListener("click",()=>{qt==="running"&&(zf(Pe),gs("Mashq boshiga qaytarildi \xB7 +10 ball"),ln.lastMode=-1)});for(let i of["belt","engine","handbrake"])le(i).addEventListener("click",()=>kl(i));le("left-signal").addEventListener("click",()=>Hl(1));le("right-signal").addEventListener("click",()=>Hl(-1));mr("[data-gear]").forEach(i=>i.addEventListener("click",()=>Gl(i.dataset.gear)));le("car").addEventListener("change",()=>{ycStop(),Pe=Ma({car:le("car").value}),ln.setCar(Pe.car)});le("retry-model").addEventListener("click",()=>{ln.setCar(le("car").value)});mr("[data-mode]").forEach(i=>i.addEventListener("click",()=>{wn=i.dataset.mode,mr("[data-mode]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.mode===wn)),le("lesson").hidden=wn!=="practice",ln.ready&&(le("start").firstElementChild.textContent=ycStartText())}));le("map-toggle").addEventListener("click",()=>{let i=!le("minimap").hidden;le("minimap").hidden=i,le("map-toggle").textContent=i?"+":"\u2212",le("map-toggle").setAttribute("aria-label",i?"Xaritani ochish":"Xaritani kichraytirish")});le("help").addEventListener("click",()=>{Vl=qt==="running",Vl&&ba(),le("help-dialog").showModal()});le("close-help").addEventListener("click",()=>le("help-dialog").close());le("help-dialog").addEventListener("close",()=>{Vl&&(Vl=!1,iu())});var Ty=new Set(["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","KeyZ"]);addEventListener("keydown",i=>{if(le("help-dialog").open)return;if(i.code==="Escape"){i.preventDefault(),qt==="running"?ba():iu();return}if(qt!=="running"||/INPUT|SELECT|TEXTAREA/.test(i.target.tagName)||(Ty.has(i.code)&&(i.preventDefault(),Tn.add(i.code)),i.repeat))return;let e={KeyB:()=>kl("belt"),KeyI:()=>kl("engine"),KeyP:()=>kl("handbrake"),KeyQ:()=>Hl(1),KeyE:()=>Hl(-1),KeyR:()=>Gl("R"),KeyN:()=>Gl("N"),KeyF:()=>Gl(ycTrans==="auto"?"D":"1"),Digit1:()=>Gl(ycTrans==="auto"?"D":"1"),Digit2:()=>Gl(ycTrans==="auto"?"D":"2"),Digit3:()=>Gl(ycTrans==="auto"?"D":"3"),Numpad1:()=>Gl(ycTrans==="auto"?"D":"1"),Numpad2:()=>Gl(ycTrans==="auto"?"D":"2"),Numpad3:()=>Gl(ycTrans==="auto"?"D":"3"),KeyC:Yf}[i.code];e&&(i.preventDefault(),e())});addEventListener("keyup",i=>Tn.delete(i.code));for(let i of mr("[data-drive]")){let e=i.dataset.drive,t=n=>{n.preventDefault(),ms.delete(e),i.classList.remove("active")};i.addEventListener("pointerdown",n=>{n.preventDefault(),qt==="running"&&(i.setPointerCapture(n.pointerId),ms.add(e),i.classList.add("active"))});for(let n of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(n,t);i.addEventListener("contextmenu",n=>n.preventDefault())}addEventListener("blur",()=>{Xf(),qt==="running"&&ba()});document.addEventListener("visibilitychange",()=>{document.hidden&&qt==="running"&&ba()});function Kf(i){let e=Math.min(.05,(i-Vf)/1e3);if(Vf=i,qt==="running"){let t=Pe.stage,n=Pe.events.length;if(eu={clutch:mtC(),gas:ms.has("gas")||Tn.has("KeyW")||Tn.has("ArrowUp"),brake:ms.has("brake")||Tn.has("KeyS")||Tn.has("ArrowDown")||Tn.has("Space"),left:ms.has("left")||Tn.has("KeyA")||Tn.has("ArrowLeft"),right:ms.has("right")||Tn.has("KeyD")||Tn.has("ArrowRight")},Gf(Pe,eu,e),ycTick(e),Pe.events.length>n){let s=Pe.events.at(-1);gs(`${s.message} \xB7 +${s.points} ball`)}else Pe.stage!==t&&(gs(`${on[t].name} \u2014 bajarildi`),Pe.indicator=0);Ta(),Pe.phase!=="running"&&by()}ln.draw(Pe,qt,e,i/1e3),qt!=="menu"&&i-Hf>150&&(ln.drawMap(le("minimap"),Pe),Hf=i),i>Wf&&(le("toast").hidden=!0),requestAnimationFrame(Kf)}/* ===== Yo'lchi: qo'shimcha rejimlar (erkin, shahar, vaqtga qarshi), ob-havo va trafik ===== */
var ycWx = (() => { try { return localStorage.getItem("yolchi-wx") || "day" } catch { return "day" } })(), ycGrip = 1, ycCity = { list: [] },
  ycTr = { cars: [], paths: null },
  ycPool = [[-30, 70, "Bozor"], [88, 30, "Shifoxona"], [40, -70, "Maktab"], [-88, -20, "Avtobus bekati"], [10, 52, "Bank"], [-62, 8, "Kutubxona"], [62, 8, "Bog‘"], [-50, 25, "Pochta"], [-30, -70, "Stadion"], [-60, 46, "Dorixona"]];
function ycFree(i) { return i.mode === "free" || i.mode === "city" }
function ycTarget(i) { if (i.mode === "city") { let c = ycCity.list[Math.min(i.cp || 0, ycCity.list.length - 1)]; return c ? [c[0], c[1]] : [i.x, i.z] } return [i.x, i.z] }
function ycProg(i) { return i.mode === "city" && ycCity.list.length ? (i.cp || 0) / ycCity.list.length : 0 }
function ycStage(i) {
  if (i.mode === "city") {
    let n = ycCity.list.length, c = ycCity.list[Math.min(i.cp || 0, n - 1)] || [0, 0, ""];
    return { name: "Shahar yo‘li", hint: "Belgilangan manzillarga qoidalarga rioya qilib yetib boring: svetofor, 40 km/soat, boshqa mashinalarga urilmang.", type: "city", limit: "40", count: () => `${String(Math.min((i.cp || 0) + 1, n)).padStart(2, "0")} / ${n}`, cond: () => `MANZIL: ${c[2].toUpperCase()}` }
  }
  return { name: "Erkin haydash", hint: "Avtodromda xohlagancha haydang. Jarima yo‘q, yo‘llarda boshqa mashinalar bor.", type: "free", limit: "40", count: () => "—", cond: () => "ERKIN \xB7 JARIMASIZ" }
}
function ycModeLabel() { return { exam: "IMTIHON", practice: "MASHQ REJIMI", time: "VAQTGA QARSHI", free: "ERKIN HAYDASH", city: "SHAHAR YO‘LI" }[wn] || "IMTIHON" }
function ycStartText() { return { exam: "Imtihonni boshlash", practice: "Mashqni boshlash", time: "Vaqtni boshlash", free: "Haydashni boshlash", city: "Shaharga chiqish" }[wn] || "Boshlash" }
function ycStartToast() { return { exam: "Tayyorlaning: kamar, dvigatel, chap ishora.", practice: "Mashq: ilashish + 1-uzatma, so‘ng qo‘l tormozini tushiring.", time: "Vaqt ketdi! Jarima ham vaqtga qo‘shiladi.", free: "Erkin haydash: ilashish + 1-uzatma, qo‘l tormozini tushiring.", city: "Birinchi manzil xaritada belgilangan." }[wn] }
function ycEyebrow() { return { practice: "MASHQ NATIJASI", time: "VAQTGA QARSHI", city: "SHAHAR YO‘LI", free: "ERKIN HAYDASH" }[wn] || "IMTIHON NATIJASI" }

/* ---- shahar rejimi: qizil chiroq va manzillar ---- */
var ycLines = [[[12, 19, 0], 0], [[8, -3, Math.PI], 0], [[-.5, 10, -Math.PI / 2], 13], [[20.5, 6, Math.PI / 2], 13]];
function ycSy(i, s, t, n, y, g) {
  if (i.mode !== "city") return;
  for (let [L, off] of ycLines) kn(y, g, L) && ds(i.elapsed + off) === "red" && bn(i, "red-light", mn.red, "Qizil chiroqda chorrahaga kirildi", 3);
  let c = ycCity.list[i.cp || 0];
  c && Math.hypot(i.x - c[0], i.z - c[1]) < 5.5 && (i.cp = (i.cp || 0) + 1, gs(`${c[2]} — yetib keldingiz`), i.cp >= ycCity.list.length && (i.phase = "passed", i.speed = 0))
}

/* ---- trafik: yo'laklar bo'ylab yopiq yo'nalishlar ---- */
function ycRound(C) {
  let out = [];
  for (let k = 0; k < C.length; k++) {
    let A = C[(k - 1 + C.length) % C.length], P = C[k], B = C[(k + 1) % C.length], r = P[2];
    let d1 = [P[0] - A[0], P[1] - A[1]], l1 = Math.hypot(...d1), d2 = [B[0] - P[0], B[1] - P[1]], l2 = Math.hypot(...d2);
    r = Math.min(r, l1 / 2, l2 / 2);
    let a = [P[0] - d1[0] / l1 * r, P[1] - d1[1] / l1 * r], b = [P[0] + d2[0] / l2 * r, P[1] + d2[1] / l2 * r];
    for (let q = 0; q <= 10; q++) { let u = q / 10, w = 1 - u; out.push([w * w * a[0] + 2 * w * u * P[0] + u * u * b[0], w * w * a[1] + 2 * w * u * P[1] + u * u * b[1]]) }
  }
  let P = [], L = [0], tot = 0;
  for (let k = 0; k < out.length; k++) { let p = out[k]; if (k && Math.hypot(p[0] - P.at(-1)[0], p[1] - P.at(-1)[1]) < .05) continue; P.push(p) }
  P.push(P[0]);
  for (let k = 1; k < P.length; k++) tot += Math.hypot(P[k][0] - P[k - 1][0], P[k][1] - P[k - 1][1]), L.push(tot);
  let path = { P, L, tot, stops: [] };
  // svetofor stop-chiziqlari (faqat markaziy chorrahaga yaqinlashish)
  for (let [pt, ph, dir] of [[[12.2, 19.5], 0, 0], [[-1, 10.2], 13, -Math.PI / 2], [[21, 5.8], 13, Math.PI / 2], [[7.8, -3.5], 0, Math.PI]]) {
    for (let s = 0; s < tot; s += .5) { let q = ycAt(path, s); if (Math.hypot(q.x - pt[0], q.z - pt[1]) < .8 && Math.abs(Jh(q.yaw - dir)) < .4) { path.stops.push({ s, off: ph }); break } }
  }
  return path
}
function ycAt(p, s) {
  s = (s % p.tot + p.tot) % p.tot;
  let lo = 0, hi = p.L.length - 1;
  for (; hi - lo > 1;) { let m = lo + hi >> 1; p.L[m] <= s ? lo = m : hi = m }
  let a = p.P[lo], b = p.P[hi], u = (s - p.L[lo]) / Math.max(1e-6, p.L[hi] - p.L[lo]), tx = b[0] - a[0], tz = b[1] - a[1];
  return { x: a[0] + tx * u, z: a[1] + tz * u, yaw: Math.atan2(-tx, -tz) }
}
function ycPaths() {
  if (ycTr.paths) return ycTr.paths;
  let o = 16.2, I = 11.8;
  return ycTr.paths = [
    [[-90.2, 72.2, o], [90.2, 72.2, o], [90.2, -72.2, o], [-90.2, -72.2, o]],
    [[85.8, 67.8, I], [-85.8, 67.8, I], [-85.8, -67.8, I], [85.8, -67.8, I]],
    [[-90.2, 72.2, o], [12.2, 72.2, 6], [12.2, -72.2, 6], [-90.2, -72.2, o]],
    [[12.2, 67.8, 4], [12.2, -67.8, 4], [85.8, -67.8, I], [85.8, 67.8, I]],
    [[-90.2, 10.2, 6], [90.2, 10.2, 6], [90.2, -72.2, o], [-90.2, -72.2, o]],
    [[85.8, 5.8, 4], [-85.8, 5.8, 4], [-85.8, -67.8, I], [85.8, -67.8, I]]
  ].map(ycRound)
}
var ycCols = ["#e5e7eb", "#28313e", "#ac393f", "#36799b", "#c5c0a5", "#f1f0e9", "#5b6b5e", "#d9a521"];
function ycStop() { for (let c of ycTr.cars) Nf(c.m); ycTr.cars = [] }
function ycTraffic(N) {
  ycStop(); if (!N || !ln.scene) return;
  let P = ycPaths(), plan = N >= 10 ? [3, 2, 1, 2, 1, 1] : [2, 1, 1, 1, 1, 0], k = 0;
  P.forEach((p, pi) => {
    for (let j = 0; j < plan[pi]; j++) {
      let s = p.tot * (j + .5 + pi * .13) / plan[pi], q = ycAt(p, s);
      for (let tries = 0; tries < 30 && Math.hypot(q.x - Pe.x, q.z - Pe.z) < 26; tries++) s += 6, q = ycAt(p, s);
      let m = Pf(Pe.car, ycCols[k++ % ycCols.length]);
      ln.scene.add(m);
      m.userData.ready && m.userData.ready.then(() => m.traverse(x => { x.isMesh && (x.castShadow = !1) })).catch(() => {});
      ycTr.cars.push({ m, p, s, v: 0, x: q.x, z: q.z, yaw: q.yaw, vmax: 6.5 + (k % 3) * .9, dist: 0, brake: !1 })
    }
  });
  ycPlace()
}
function ycPlace() { for (let c of ycTr.cars) c.m.position.set(c.x, zn(c.x, c.z), c.z), c.m.rotation.set(0, c.yaw, 0, "YXZ"), Lf(c.m, { travel: c.dist, steer: 0, braking: c.brake }, ycWx === "night") }
function ycTick(dt) {
  if (!ycTr.cars.length || !dt) return;
  let all = ycTr.cars;
  for (let c of all) {
    let hx = -Math.sin(c.yaw), hz = -Math.cos(c.yaw), tgt = c.vmax;
    for (let o of all.concat([{ x: Pe.x, z: Pe.z, me: 1 }])) {
      if (o === c || !o.me && (-Math.sin(o.yaw)) * hx + (-Math.cos(o.yaw)) * hz < -.2) continue;
      let dx = o.x - c.x, dz = o.z - c.z, f = dx * hx + dz * hz, l = Math.abs(dx * hz - dz * hx);
      f > 0 && f < 16 && l < 2.4 && (tgt = Math.min(tgt, Math.max(0, (f - 6.2) * .85)))
    }
    for (let st of c.p.stops) {
      let d = ((st.s - c.s) % c.p.tot + c.p.tot) % c.p.tot, ph = ds(Pe.elapsed + st.off);
      d < 26 && ph !== "green" && !(ph === "yellow" && d < 5) && (tgt = Math.min(tgt, Math.max(0, (d - 1.2) * .7)))
    }
    let ah = ycAt(c.p, c.s + 7);
    Math.abs(Jh(ah.yaw - c.yaw)) > .45 && (tgt = Math.min(tgt, 4.2));
    c.brake = tgt < c.v - .3;
    c.v += Ol(tgt - c.v, -7 * dt, 2.4 * dt), c.v = Math.max(0, c.v), c.s = (c.s + c.v * dt) % c.p.tot, c.dist += c.v * dt;
    let q = ycAt(c.p, c.s); c.x = q.x, c.z = q.z, c.yaw = q.yaw
  }
  ycPlace()
}
function ycHit(i, s) {
  if (!ycTr.cars.length) return;
  let a = [-Math.sin(i.yaw), -Math.cos(i.yaw)];
  for (let c of ycTr.cars) {
    if (Math.hypot(c.x - i.x, c.z - i.z) > 7) continue;
    let b = [-Math.sin(c.yaw), -Math.cos(c.yaw)], hit = !1;
    for (let u of [-1.2, 0, 1.2]) for (let w of [-1.2, 0, 1.2]) Math.hypot(i.x + a[0] * u - c.x - b[0] * w, i.z + a[1] * u - c.z - b[1] * w) < 1.75 && (hit = !0);
    if (hit) { i.x = s.x, i.z = s.z, i.yaw = s.yaw, Math.abs(s.speed) > .3 && bn(i, "traffic", mn.collision, "Boshqa mashinaga urildi", 3) && i.collisions++, i.speed = 0; return }
  }
}

/* ---- ob-havo: kun / tun / yomg'ir ---- */
var ycEnvD = null, ycHead = null, ycRain = null;
function ycEnv() {
  let R = ln; if (!R || !R.scene) return;
  let sc = R.scene, hemi = sc.children.find(x => x.isHemisphereLight), g = R.world && R.world.root && R.world.root.children[0];
  ycEnvD || (ycEnvD = { bg: sc.background.getHex(), fog: [sc.fog.near, sc.fog.far], hemi: hemi.intensity, hc: hemi.color.getHex(), hg: hemi.groundColor.getHex(), sun: R.sun.intensity, sc: R.sun.color.getHex(), env: sc.environmentIntensity, exp: R.renderer.toneMappingExposure, rough: g && g.material.roughness });
  let D = ycEnvD, set = (bg, fn, ff, hi, hc, hg, si, scol, env, exp, rough) => { sc.background.set(bg), sc.fog.color.set(bg), sc.fog.near = fn, sc.fog.far = ff, hemi.intensity = hi, hemi.color.set(hc), hemi.groundColor.set(hg), R.sun.intensity = si, R.sun.color.set(scol), sc.environmentIntensity = env, R.renderer.toneMappingExposure = exp, g && (g.material.roughness = rough) };
  ycWx === "night" ? set("#08101a", 28, 160, .32, "#8ea6d0", "#1d2418", .22, "#9db4ff", .08, 1.05, .9)
    : ycWx === "rain" ? set("#7d8a93", 22, 140, 1.5, "#d9e3ea", "#5d6655", 1.1, "#e6ecf0", .45, .95, .5)
      : set(D.bg, D.fog[0], D.fog[1], D.hemi, D.hc, D.hg, D.sun, D.sc, D.env, D.exp, D.rough);
  ycGrip = ycWx === "rain" ? .7 : 1;
  if (!ycHead) { ycHead = new ea("#fff1d2", 140, 80, .52, .55, 1.3); ycHead.castShadow = !1; sc.add(ycHead, ycHead.target) }
  ycHead.visible = ycWx === "night";
  if (!ycRain) {
    let N = 1600, pos = new Float32Array(N * 6), sd = 11, r = () => (sd = sd * 1664525 + 1013904223 >>> 0, sd / 4294967296);
    for (let k = 0; k < N; k++) { let x = r() * 70 - 35, y = r() * 26, z = r() * 70 - 35; pos.set([x, y, z, x + .05, y + .7, z + .05], k * 6) }
    let geo = new lt; geo.setAttribute("position", new Pt(pos, 3));
    ycRain = new Or(geo, new Xs({ color: "#d6e0e6", transparent: !0, opacity: .5 })); ycRain.frustumCulled = !1; sc.add(ycRain)
  }
  ycRain.visible = ycWx === "rain"
}
function ycFx(R, e, dt) {
  ycSnd(dt || .016);
  if (ycHead && ycHead.visible) {
    let a = Math.sin(e.yaw), o = Math.cos(e.yaw), y = zn(e.x, e.z);
    ycHead.position.set(e.x - a * 1.9, y + .85, e.z - o * 1.9), ycHead.target.position.set(e.x - a * 22, y - .4, e.z - o * 22), ycHead.target.updateMatrixWorld()
  }
  if (ycRain && ycRain.visible) {
    let p = ycRain.geometry.attributes.position, A = p.array, c = R.camera.position, f = 22 * (dt || .016);
    for (let k = 0; k < A.length; k += 6) {
      A[k + 1] -= f, A[k + 4] -= f;
      if (A[k + 1] < c.y - 6) A[k + 1] += 26, A[k + 4] += 26;
      for (let j of [0, 2]) { let d = A[k + j] - c.getComponent(j); d > 35 ? (A[k + j] -= 70, A[k + j + 3] -= 70) : d < -35 && (A[k + j] += 70, A[k + j + 3] += 70) }
    }
    p.needsUpdate = !0
  }
}
function ycStart() {
  Pe.cp = 0;
  if (wn === "city") { let pool = ycPool.slice().sort(() => Math.random() - .5); ycCity.list = pool.slice(0, 6) } else ycCity.list = [];
  ycEnv(), ycTraffic(wn === "city" ? 10 : wn === "free" ? 6 : 0)
}
function ycResult(ok) {
  let stats = null;
  if (wn === "time") {
    let tot = Math.round(Pe.elapsed) + Pe.points, best = 0, rec = !1;
    try { best = +localStorage.getItem("yolchi-exam-best") || 0 } catch {}
    ok && (!best || tot < best) && (best = tot, rec = !0, (() => { try { localStorage.setItem("yolchi-exam-best", String(tot)) } catch {} })());
    le("result-note").textContent = ok ? `Natija: ${nu(tot)} (vaqt + har bir jarima balli uchun 1 soniya). Eng yaxshi: ${nu(best)}${rec ? " — yangi rekord!" : ""}` : "100 jarima balli yig‘ildi. Vaqt hisoblanmadi.";
    stats = [[nu(Pe.elapsed), "VAQT"], [Pe.points, "JARIMA"], [ok ? nu(tot) : "—", "NATIJA"]]
  } else if (wn === "city") {
    le("result-title").textContent = ok ? "Marshrut bajarildi." : "Yana bir urinib ko‘ramiz.";
    le("result-note").textContent = ok ? "Barcha manzillarga yetib keldingiz. Xatolarni ko‘rib chiqing." : "100 jarima balli yig‘ildi. Svetofor va tezlikka e’tibor bering.";
    stats = [[nu(Pe.elapsed), "VAQT"], [Pe.points, "JARIMA"], [`${Pe.cp || 0}/${ycCity.list.length}`, "MANZIL"]]
  }
  if (stats) { le("result-stats").replaceChildren(); for (let [v, k] of stats) { let n = document.createElement("div"), b = document.createElement("b"), s = document.createElement("span"); b.textContent = v, s.textContent = k, n.append(b, s), le("result-stats").append(n) } }
}
window.__ycEnv = w => { ycWx = w; try { localStorage.setItem("yolchi-wx", w) } catch {} ycEnv() };
window.__yc = { tr: ycTr, tick: ycTick, pe: () => Pe, eu: () => eu, a: () => typeof ycA < 'u' ? ycA : null };
window.__ycBest = () => { try { return +localStorage.getItem("yolchi-exam-best") || 0 } catch { return 0 } };
setTimeout(ycEnv, 0);

/* ===== Yo'lchi: avtodrom ovozlari (WebAudio sintezi, fayl yuklanmaydi) ===== */
var ycA = { on: (() => { try { let j = JSON.parse(localStorage.getItem("yolchi-settings") || "null"); return j ? j.snd !== !1 : localStorage.getItem("yolchi-sound") !== "0" } catch { return !0 } })(), vE: (() => { try { return JSON.parse(localStorage.getItem("yolchi-settings") || "{}").vEng ?? .8 } catch { return .8 } })(), vF: (() => { try { return JSON.parse(localStorage.getItem("yolchi-settings") || "{}").vFx ?? .8 } catch { return .8 } })(), ctx: null, rpm: 0, prev: null, blink: 0, tick: 0 };
function ycAudio() {
  if (ycA.ctx || !ycA.on) return ycA.ctx;
  let C = window.AudioContext || window.webkitAudioContext; if (!C) return null;
  let c = ycA.ctx = new C, M = ycA.master = c.createGain(); M.gain.value = .9, M.connect(c.destination);
  let m = ycA.ebus = c.createGain(), fx = ycA.fbus = c.createGain(); m.gain.value = ycA.vE, fx.gain.value = ycA.vF, m.connect(M), fx.connect(M);
  // oq shovqin buferi
  let nb = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), d = nb.getChannelData(0); for (let k = 0; k < d.length; k++) d[k] = Math.random() * 2 - 1; ycA.noise = nb;
  let loop = (f, type, g) => { let s = c.createBufferSource(); s.buffer = nb, s.loop = !0; let fl = c.createBiquadFilter(); fl.type = type, fl.frequency.value = f; let gn = c.createGain(); gn.gain.value = g; s.connect(fl).connect(gn).connect(m), s.start(); return { fl, gn } };
  // dvigatel: arra + kvadrat (sub) + so'rish shovqini -> past o'tkazgich
  let eg = ycA.eg = c.createGain(); eg.gain.value = 0;
  let lp = ycA.elp = c.createBiquadFilter(); lp.type = "lowpass", lp.frequency.value = 400, lp.Q.value = 2.2;
  let o1 = ycA.o1 = c.createOscillator(); o1.type = "sawtooth";
  let o2 = ycA.o2 = c.createOscillator(); o2.type = "square";
  let g2 = c.createGain(); g2.gain.value = .55;
  o1.connect(lp), o2.connect(g2).connect(lp), lp.connect(eg).connect(m), o1.start(), o2.start();
  let ns = c.createBufferSource(); ns.buffer = nb, ns.loop = !0; let bp = ycA.ebp = c.createBiquadFilter(); bp.type = "bandpass", bp.frequency.value = 600, bp.Q.value = .8; let ng = ycA.eng = c.createGain(); ng.gain.value = 0; ns.connect(bp).connect(ng).connect(m), ns.start();
  ycA.rain = loop(1400, "lowpass", 0); ycA.rain.gn.disconnect(), ycA.rain.gn.connect(fx);
  // trafik g'uvillashi
  let to = c.createOscillator(); to.type = "sawtooth", to.frequency.value = 62; let tl = c.createBiquadFilter(); tl.type = "lowpass", tl.frequency.value = 260; let tg = ycA.tg = c.createGain(); tg.gain.value = 0; to.connect(tl).connect(tg).connect(m), to.start();
  return c
}
function ycBeep(f, t = .12, type = "sine", v = .18, at = 0, f2) {
  let c = ycA.ctx; if (!c) return;
  let o = c.createOscillator(), g = c.createGain(), s = c.currentTime + at; o.type = type, o.frequency.setValueAtTime(f, s); f2 && o.frequency.exponentialRampToValueAtTime(f2, s + t);
  g.gain.setValueAtTime(0, s), g.gain.linearRampToValueAtTime(v, s + .005), g.gain.exponentialRampToValueAtTime(.001, s + t); o.connect(g).connect(ycA.fbus), o.start(s), o.stop(s + t + .02)
}
function ycHiss(t = .05, f = 3e3, v = .2, type = "highpass", at = 0) {
  let c = ycA.ctx; if (!c) return;
  let s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(), w = c.currentTime + at; s.buffer = ycA.noise, fl.type = type, fl.frequency.value = f;
  g.gain.setValueAtTime(v, w), g.gain.exponentialRampToValueAtTime(.001, w + t); s.connect(fl).connect(g).connect(ycA.fbus), s.start(w, Math.random()), s.stop(w + t + .02)
}
var ycSfx = {
  click: () => ycHiss(.025, 3500, .25),
  tick: h => ycBeep(h ? 1900 : 1400, .03, "square", .05),
  gear: () => { ycHiss(.06, 900, .3, "bandpass"), ycBeep(120, .08, "triangle", .2) },
  ratchet: () => { for (let k = 0; k < 5; k++) ycHiss(.018, 4200, .16, "highpass", k * .035) },
  starter: () => { for (let k = 0; k < 7; k++) ycBeep(70 + k * 6, .09, "sawtooth", .07, k * .075) },
  thump: v => { ycBeep(90, .25, "sine", Math.min(.5, .15 + v * .06), 0, 40), ycHiss(.18, 500, Math.min(.4, .1 + v * .05), "lowpass") },
  buzz: () => { ycBeep(440, .16, "square", .07), ycBeep(330, .22, "square", .07, .17) },
  chime: () => [660, 830, 990].forEach((f, k) => ycBeep(f, .25, "triangle", .12, k * .09)),
  win: () => [523, 659, 784, 1046].forEach((f, k) => ycBeep(f, .35, "triangle", .14, k * .12)),
  lose: () => [392, 330, 262].forEach((f, k) => ycBeep(f, .4, "sawtooth", .07, k * .18)),
  stall: () => ycBeep(55, .5, "sawtooth", .12, 0, 25)
};
function ycSnd(dt) {
  let c = ycA.ctx; if (!c) return;
  let P = Pe, run = qt === "running" && P.phase === "running", T = c.currentTime, S = ycA.prev;
  // dvigatel aylanishi (rpm) — uzatma, tezlik va ilashishga qarab
  let g = mtZ[P.gear], tgt = 0, gas = run && eu.gas;
  if (P.engine) P.gear === "D" ? tgt = 900 + Math.abs(P.speed * 3.6) % 17 / 17 * (gas ? 3100 : 1700) + (gas ? 400 : 0) : g && !eu.clutch ? tgt = Math.max(780, 850 + Math.abs(P.speed) / g.v * 4300) + (gas ? 300 : 0) : tgt = 850 + (gas ? 2600 : 0);
  ycA.rpm += (tgt - ycA.rpm) * Math.min(1, dt * (tgt > ycA.rpm ? 4 : P.engine ? 3 : 6));
  let r = ycA.rpm, f = Math.max(8, r / 30), on = run && r > 60 && ycA.on;
  ycA.o1.frequency.setTargetAtTime(f * (1 + (Math.random() - .5) * .02), T, .03), ycA.o2.frequency.setTargetAtTime(f / 2, T, .03);
  ycA.elp.frequency.setTargetAtTime(240 + r * .22 + (gas ? 900 : 0), T, .05);
  ycA.eg.gain.setTargetAtTime(on ? .05 + r / 7e3 * .07 + (gas ? .05 : 0) : 0, T, .06);
  ycA.ebp.frequency.setTargetAtTime(400 + r * .35, T, .05), ycA.eng.gain.setTargetAtTime(on ? (gas ? .045 : .012) : 0, T, .06);
  ycA.rain.gn.gain.setTargetAtTime(ycA.on && qt !== "menu" && ycWx === "rain" ? .06 : 0, T, .3);
  let near = 99; for (let k of ycTr.cars) near = Math.min(near, Math.hypot(k.x - P.x, k.z - P.z));
  ycA.tg.gain.setTargetAtTime(run && ycA.on && near < 28 ? .045 * (1 - near / 28) : 0, T, .2);
  if (!ycA.on) return;
  // burilish chirog'i
  if (run && P.indicator) { ycA.blink += dt; if (ycA.blink > .38) ycA.blink = 0, ycSfx.tick(ycA.tick ^= 1) } else ycA.blink = .3;
  // holat o'zgarishlari
  if (S && S.ref === P) {
    P.engine && !S.engine && ycSfx.starter();
    !P.engine && S.engine && run && ycSfx.stall();
    P.gear !== S.gear && ycSfx.gear();
    P.handbrake !== S.handbrake && ycSfx.ratchet();
    P.belt !== S.belt && ycSfx.click();
    P.indicator !== S.indicator && ycSfx.click();
    Math.abs(S.speed) > 1.2 && Math.abs(P.speed) < .05 && ycSfx.thump(Math.abs(S.speed));
    if (P.events.length > S.ev) { let e = P.events[P.events.length - 1]; /collision|traffic/.test(e.code || "") || ycSfx.buzz() }
    P.done.length > S.done && P.phase === "running" && ycSfx.chime();
    P.cp > S.cp && ycSfx.chime();
    P.phase !== S.phase && (P.phase === "passed" ? ycSfx.win() : P.phase === "failed" && ycSfx.lose())
  }
  ycA.prev = { ref: P, engine: P.engine, gear: P.gear, handbrake: P.handbrake, belt: P.belt, indicator: P.indicator, speed: P.speed, ev: P.events.length, done: P.done.length, cp: P.cp || 0, phase: P.phase }
}
var ycUnlock = () => { ycA.on && (ycAudio(), ycA.ctx && ycA.ctx.state !== "running" && ycA.ctx.resume()) };
addEventListener("pointerdown", ycUnlock, !0), addEventListener("keydown", ycUnlock, !0);
document.addEventListener("visibilitychange", () => { ycA.ctx && (document.hidden ? ycA.ctx.suspend() : ycA.on && ycA.ctx.resume()) });
window.__ycVol = (e, f) => { ycA.vE = e, ycA.vF = f; ycA.ctx && (ycA.ebus.gain.setTargetAtTime(e, ycA.ctx.currentTime, .05), ycA.fbus.gain.setTargetAtTime(f, ycA.ctx.currentTime, .05)) };
window.__ycSet = (k, v) => { if (k === "trans") { ycTrans = v === "auto" ? "auto" : "manual"; Pe && (ycTrans === "auto" && /[123]/.test(Pe.gear) ? Pe.gear = "D" : ycTrans !== "auto" && Pe.gear === "D" && (Pe.gear = "N")); ms.delete("clutch"); let st = document.getElementById("model-status"); st && /uzatma/.test(st.textContent) && (st.textContent = "3D mashina tayyor \xB7 " + (ycTrans === "auto" ? "avtomat" : "mexanik") + " uzatma"); Ta() } };
window.__ycSound = v => { if (v === void 0) return ycA.on; ycA.on = !!v; try { localStorage.setItem("yolchi-sound", v ? "1" : "0") } catch {} v ? ycUnlock() : ycA.ctx && ycA.master.gain.setTargetAtTime(0, ycA.ctx.currentTime, .05); v && ycA.ctx && ycA.master.gain.setTargetAtTime(.9, ycA.ctx.currentTime, .05); return ycA.on };

requestAnimationFrame(Kf);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
