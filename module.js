/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","react-dom","@grafana/data","lodash"],(function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=12)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return u}));var n=r(0),a=r.n(n),c={autosemicolon:!0,indent:"  "},o=!(!e||!e.env),i=a.a.version.split(".").slice(0,2).map(Number),s=i[0],l=i[1],u=s>=16&&l>=3}).call(this,r(11))},function(e,t,r){e.exports=r(9)()},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){!function(){"use strict";e.exports=function(e,t){var r,n,a,c,o,i,s,l,u,f,h,p=0,d=e.length,m="",b=!0,g=!1;function v(e){return" "===e||"\n"===e||"\t"===e||"\r"===e||"\f"===e}function y(e){return"'"===e||'"'===e}function k(e){return a>="a"&&a<="z"||a>="A"&&a<="Z"||a>="0"&&a<="9"||"-_*.:#[]".indexOf(e)>=0}function C(){var e;for(e=l;e>0;e-=1)m+=r.indent}function w(){m=h(m),b?m+=" {":(m+="\n",C(),m+="{"),"\n"!==c&&(m+="\n"),l+=1}function E(){var e;l-=1,(m=h(m)).length>0&&g&&";"!==(e=m.charAt(m.length-1))&&"{"!==e&&(m+=";"),m+="\n",C(),m+="}",n.push(m),m=""}for(void 0===(r=arguments.length>1?t:{}).indent&&(r.indent="    "),"string"==typeof r.openbrace&&(b="end-of-line"===r.openbrace),"boolean"==typeof r.autosemicolon&&(g=r.autosemicolon),h=String.prototype.trimRight?function(e){return e.trimRight()}:function(e){return e.replace(/\s+$/,"")},l=0,i=(s={Start:0,AtRule:1,Block:2,Selector:3,Ruleset:4,Property:5,Separator:6,Expression:7,URL:8}).Start,f=!1,n=[],e=e.replace(/\r\n/g,"\n");p<d;)if(a=e.charAt(p),c=e.charAt(p+1),p+=1,y(u))m+=a,a===u&&(u=null),"\\"===a&&c===u&&(m+=c,p+=1);else if(y(a))m+=a,u=a;else if(f)m+=a,"*"===a&&"/"===c&&(f=!1,m+=c,p+=1);else if("/"!==a||"*"!==c){if(i===s.Start){if(0===n.length&&v(a)&&0===m.length)continue;if(a<=" "||a.charCodeAt(0)>=128){i=s.Start,m+=a;continue}if(k(a)||"@"===a){if(0===(o=h(m)).length)n.length>0&&(m="\n\n");else if("}"===o.charAt(o.length-1)||";"===o.charAt(o.length-1))m=o+"\n\n";else for(;" "===(c=m.charAt(m.length-1))||9===c.charCodeAt(0);)m=m.substr(0,m.length-1);m+=a,i="@"===a?s.AtRule:s.Selector;continue}}if(i!==s.AtRule)if(i!==s.Block)if(i!==s.Selector)if(i!==s.Ruleset)if(i!==s.Property)if(i!==s.Separator)if(i!==s.Expression)i===s.URL&&")"===a&&m.charAt(m.length-1!=="\\")?(m+=a,i=s.Expression):m+=a;else{if("}"===a){E(),i=s.Start,l>0&&(i=s.Block);continue}if(";"===a){m=h(m),m+=";\n",i=s.Ruleset;continue}if(m+=a,"("===a&&"l"===m.charAt(m.length-2)&&"r"===m.charAt(m.length-3)&&"u"===m.charAt(m.length-4)){i=s.URL;continue}}else{if(!v(a)){m+=a,i=s.Expression;continue}y(c)&&(i=s.Expression)}else{if(":"===a){m=h(m),m+=": ",i=s.Expression,v(c)&&(i=s.Separator);continue}if("}"===a){E(),i=s.Start,l>0&&(i=s.Block);continue}m+=a}else{if("}"===a){E(),i=s.Start,l>0&&(i=s.Block);continue}if("\n"===a){m=h(m),m+="\n";continue}if(!v(a)){m=h(m),m+="\n",C(),m+=a,i=s.Property;continue}m+=a}else{if("{"===a){w(),i=s.Ruleset;continue}if("}"===a){E(),i=s.Start;continue}m+=a}else{if(k(a)){if(0===(o=h(m)).length)n.length>0&&(m="\n\n");else if("}"===o.charAt(o.length-1))m=o+"\n\n";else for(;" "===(c=m.charAt(m.length-1))||9===c.charCodeAt(0);)m=m.substr(0,m.length-1);C(),m+=a,i=s.Selector;continue}if("}"===a){E(),i=s.Start;continue}m+=a}else{if(";"===a){m+=a,i=s.Start;continue}if("{"===a){o=h(m),w(),i="@font-face"===o?s.Ruleset:s.Block;continue}m+=a}}else f=!0,m+=a,m+=c,p+=1;return m=n.join("")+m}}()},function(e,t,r){e.exports=function e(t){"use strict";var r=/^\0+/g,n=/[\0\r\f]/g,a=/: */g,c=/zoo|gra/,o=/([,: ])(transform)/g,i=/,+\s*(?![^(]*[)])/g,s=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,u=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,h=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,d=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,b=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,v=/([[}=:>])\s+/g,y=/(\{[^{]+?);(?=\})/g,k=/\s{2,}/g,C=/([^\(])(:+) */g,w=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,x=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,S=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,L="-webkit-",P="-moz-",R="-ms-",B=1,N=1,_=0,j=1,I=1,U=1,G=0,D=0,M=0,$=[],F=[],z=0,H=null,W=0,Y=1,K="",q="",V="";function Z(e,t,a,c,o){for(var i,s,u=0,f=0,h=0,p=0,g=0,v=0,y=0,k=0,w=0,A=0,x=0,T=0,S=0,O=0,P=0,R=0,G=0,F=0,H=0,Q=a.length,ae=Q-1,ce="",oe="",ie="",se="",le="",ue="";P<Q;){if(y=a.charCodeAt(P),P===ae&&f+p+h+u!==0&&(0!==f&&(y=47===f?10:47),p=h=u=0,Q++,ae++),f+p+h+u===0){if(P===ae&&(R>0&&(oe=oe.replace(n,"")),oe.trim().length>0)){switch(y){case 32:case 9:case 59:case 13:case 10:break;default:oe+=a.charAt(P)}y=59}if(1===G)switch(y){case 123:case 125:case 59:case 34:case 39:case 40:case 41:case 44:G=0;case 9:case 13:case 10:case 32:break;default:for(G=0,H=P,g=y,P--,y=59;H<Q;)switch(a.charCodeAt(H++)){case 10:case 13:case 59:++P,y=g,H=Q;break;case 58:R>0&&(++P,y=g);case 123:H=Q}}switch(y){case 123:for(g=(oe=oe.trim()).charCodeAt(0),x=1,H=++P;P<Q;){switch(y=a.charCodeAt(P)){case 123:x++;break;case 125:x--;break;case 47:switch(v=a.charCodeAt(P+1)){case 42:case 47:P=ne(v,P,ae,a)}break;case 91:y++;case 40:y++;case 34:case 39:for(;P++<ae&&a.charCodeAt(P)!==y;);}if(0===x)break;P++}switch(ie=a.substring(H,P),0===g&&(g=(oe=oe.replace(r,"").trim()).charCodeAt(0)),g){case 64:switch(R>0&&(oe=oe.replace(n,"")),v=oe.charCodeAt(1)){case 100:case 109:case 115:case 45:i=t;break;default:i=$}if(H=(ie=Z(t,i,ie,v,o+1)).length,M>0&&0===H&&(H=oe.length),z>0&&(s=re(3,ie,i=J($,oe,F),t,N,B,H,v,o,c),oe=i.join(""),void 0!==s&&0===(H=(ie=s.trim()).length)&&(v=0,ie="")),H>0)switch(v){case 115:oe=oe.replace(E,te);case 100:case 109:case 45:ie=oe+"{"+ie+"}";break;case 107:ie=(oe=oe.replace(d,"$1 $2"+(Y>0?K:"")))+"{"+ie+"}",ie=1===I||2===I&&ee("@"+ie,3)?"@"+L+ie+"@"+ie:"@"+ie;break;default:ie=oe+ie,112===c&&(se+=ie,ie="")}else ie="";break;default:ie=Z(t,J(t,oe,F),ie,c,o+1)}le+=ie,T=0,G=0,O=0,R=0,F=0,S=0,oe="",ie="",y=a.charCodeAt(++P);break;case 125:case 59:if((H=(oe=(R>0?oe.replace(n,""):oe).trim()).length)>1)switch(0===O&&(45===(g=oe.charCodeAt(0))||g>96&&g<123)&&(H=(oe=oe.replace(" ",":")).length),z>0&&void 0!==(s=re(1,oe,t,e,N,B,se.length,c,o,c))&&0===(H=(oe=s.trim()).length)&&(oe="\0\0"),g=oe.charCodeAt(0),v=oe.charCodeAt(1),g){case 0:break;case 64:if(105===v||99===v){ue+=oe+a.charAt(P);break}default:if(58===oe.charCodeAt(H-1))break;se+=X(oe,g,v,oe.charCodeAt(2))}T=0,G=0,O=0,R=0,F=0,oe="",y=a.charCodeAt(++P)}}switch(y){case 13:case 10:if(f+p+h+u+D===0)switch(A){case 41:case 39:case 34:case 64:case 126:case 62:case 42:case 43:case 47:case 45:case 58:case 44:case 59:case 123:case 125:break;default:O>0&&(G=1)}47===f?f=0:j+T===0&&107!==c&&oe.length>0&&(R=1,oe+="\0"),z*W>0&&re(0,oe,t,e,N,B,se.length,c,o,c),B=1,N++;break;case 59:case 125:if(f+p+h+u===0){B++;break}default:switch(B++,ce=a.charAt(P),y){case 9:case 32:if(p+u+f===0)switch(k){case 44:case 58:case 9:case 32:ce="";break;default:32!==y&&(ce=" ")}break;case 0:ce="\\0";break;case 12:ce="\\f";break;case 11:ce="\\v";break;case 38:p+f+u===0&&j>0&&(F=1,R=1,ce="\f"+ce);break;case 108:if(p+f+u+_===0&&O>0)switch(P-O){case 2:112===k&&58===a.charCodeAt(P-3)&&(_=k);case 8:111===w&&(_=w)}break;case 58:p+f+u===0&&(O=P);break;case 44:f+h+p+u===0&&(R=1,ce+="\r");break;case 34:case 39:0===f&&(p=p===y?0:0===p?y:p);break;case 91:p+f+h===0&&u++;break;case 93:p+f+h===0&&u--;break;case 41:p+f+u===0&&h--;break;case 40:if(p+f+u===0){if(0===T)switch(2*k+3*w){case 533:break;default:x=0,T=1}h++}break;case 64:f+h+p+u+O+S===0&&(S=1);break;case 42:case 47:if(p+u+h>0)break;switch(f){case 0:switch(2*y+3*a.charCodeAt(P+1)){case 235:f=47;break;case 220:H=P,f=42}break;case 42:47===y&&42===k&&H+2!==P&&(33===a.charCodeAt(H+2)&&(se+=a.substring(H,P+1)),ce="",f=0)}}if(0===f){if(j+p+u+S===0&&107!==c&&59!==y)switch(y){case 44:case 126:case 62:case 43:case 41:case 40:if(0===T){switch(k){case 9:case 32:case 10:case 13:ce+="\0";break;default:ce="\0"+ce+(44===y?"":"\0")}R=1}else switch(y){case 40:O+7===P&&108===k&&(O=0),T=++x;break;case 41:0==(T=--x)&&(R=1,ce+="\0")}break;case 9:case 32:switch(k){case 0:case 123:case 125:case 59:case 44:case 12:case 9:case 32:case 10:case 13:break;default:0===T&&(R=1,ce+="\0")}}oe+=ce,32!==y&&9!==y&&(A=y)}}w=k,k=y,P++}if(H=se.length,M>0&&0===H&&0===le.length&&0===t[0].length==0&&(109!==c||1===t.length&&(j>0?q:V)===t[0])&&(H=t.join(",").length+2),H>0){if(i=0===j&&107!==c?function(e){for(var t,r,a=0,c=e.length,o=Array(c);a<c;++a){for(var i=e[a].split(l),s="",u=0,f=0,h=0,p=0,d=i.length;u<d;++u)if(!(0===(f=(r=i[u]).length)&&d>1)){if(h=s.charCodeAt(s.length-1),p=r.charCodeAt(0),t="",0!==u)switch(h){case 42:case 126:case 62:case 43:case 32:case 40:break;default:t=" "}switch(p){case 38:r=t+q;case 126:case 62:case 43:case 32:case 41:case 40:break;case 91:r=t+r+q;break;case 58:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(U>0){r=t+r.substring(8,f-1);break}default:(u<1||i[u-1].length<1)&&(r=t+q+r)}break;case 44:t="";default:r=f>1&&r.indexOf(":")>0?t+r.replace(C,"$1"+q+"$2"):t+r+q}s+=r}o[a]=s.replace(n,"").trim()}return o}(t):t,z>0&&void 0!==(s=re(2,se,i,e,N,B,H,c,o,c))&&0===(se=s).length)return ue+se+le;if(se=i.join(",")+"{"+se+"}",I*_!=0){switch(2!==I||ee(se,2)||(_=0),_){case 111:se=se.replace(b,":-moz-$1")+se;break;case 112:se=se.replace(m,"::"+L+"input-$1")+se.replace(m,"::-moz-$1")+se.replace(m,":-ms-input-$1")+se}_=0}}return ue+se+le}function J(e,t,r){var n=t.trim().split(u),a=n,c=n.length,o=e.length;switch(o){case 0:case 1:for(var i=0,s=0===o?"":e[0]+" ";i<c;++i)a[i]=Q(s,a[i],r,o).trim();break;default:i=0;var l=0;for(a=[];i<c;++i)for(var f=0;f<o;++f)a[l++]=Q(e[f]+" ",n[i],r,o).trim()}return a}function Q(e,t,r,n){var a=t,c=a.charCodeAt(0);switch(c<33&&(c=(a=a.trim()).charCodeAt(0)),c){case 38:switch(j+n){case 0:case 1:if(0===e.trim().length)break;default:return a.replace(f,"$1"+e.trim())}break;case 58:switch(a.charCodeAt(1)){case 103:if(U>0&&j>0)return a.replace(h,"$1").replace(f,"$1"+V);break;default:return e.trim()+a.replace(f,"$1"+e.trim())}default:if(r*j>0&&a.indexOf("\f")>0)return a.replace(f,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+a}function X(e,t,r,n){var l,u=0,f=e+";",h=2*t+3*r+4*n;if(944===h)return function(e){var t=e.length,r=e.indexOf(":",9)+1,n=e.substring(0,r).trim(),a=e.substring(r,t-1).trim();switch(e.charCodeAt(9)*Y){case 0:break;case 45:if(110!==e.charCodeAt(10))break;default:var c=a.split((a="",i)),o=0;for(r=0,t=c.length;o<t;r=0,++o){for(var l=c[o],u=l.split(s);l=u[r];){var f=l.charCodeAt(0);if(1===Y&&(f>64&&f<90||f>96&&f<123||95===f||45===f&&45!==l.charCodeAt(1)))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=K}}u[r++]=l}a+=(0===o?"":",")+u.join(" ")}}return a=n+a+";",1===I||2===I&&ee(a,1)?L+a+a:a}(f);if(0===I||2===I&&!ee(f,1))return f;switch(h){case 1015:return 97===f.charCodeAt(10)?L+f+f:f;case 951:return 116===f.charCodeAt(3)?L+f+f:f;case 963:return 110===f.charCodeAt(5)?L+f+f:f;case 1009:if(100!==f.charCodeAt(4))break;case 969:case 942:return L+f+f;case 978:return L+f+P+f+f;case 1019:case 983:return L+f+P+f+R+f+f;case 883:return 45===f.charCodeAt(8)?L+f+f:f.indexOf("image-set(",11)>0?f.replace(O,"$1"+L+"$2")+f:f;case 932:if(45===f.charCodeAt(4))switch(f.charCodeAt(5)){case 103:return L+"box-"+f.replace("-grow","")+L+f+R+f.replace("grow","positive")+f;case 115:return L+f+R+f.replace("shrink","negative")+f;case 98:return L+f+R+f.replace("basis","preferred-size")+f}return L+f+R+f+f;case 964:return L+f+R+"flex-"+f+f;case 1023:if(99!==f.charCodeAt(8))break;return l=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),L+"box-pack"+l+L+f+R+"flex-pack"+l+f;case 1005:return c.test(f)?f.replace(a,":"+L)+f.replace(a,":"+P)+f:f;case 1e3:switch(u=(l=f.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(u)){case 226:l=f.replace(w,"tb");break;case 232:l=f.replace(w,"tb-rl");break;case 220:l=f.replace(w,"lr");break;default:return f}return L+f+R+l+f;case 1017:if(-1===f.indexOf("sticky",9))return f;case 975:switch(u=(f=e).length-10,h=(l=(33===f.charCodeAt(u)?f.substring(0,u):f).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:f=f.replace(l,L+l)+";"+f;break;case 207:case 102:f=f.replace(l,L+(h>102?"inline-":"")+"box")+";"+f.replace(l,L+l)+";"+f.replace(l,R+l+"box")+";"+f}return f+";";case 938:if(45===f.charCodeAt(5))switch(f.charCodeAt(6)){case 105:return l=f.replace("-items",""),L+f+L+"box-"+l+R+"flex-"+l+f;case 115:return L+f+R+"flex-item-"+f.replace(x,"")+f;default:return L+f+R+"flex-line-pack"+f.replace("align-content","").replace(x,"")+f}break;case 973:case 989:if(45!==f.charCodeAt(3)||122===f.charCodeAt(4))break;case 931:case 953:if(!0===S.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?X(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):f.replace(l,L+l)+f.replace(l,P+l.replace("fill-",""))+f;break;case 962:if(f=L+f+(102===f.charCodeAt(5)?R+f:"")+f,r+n===211&&105===f.charCodeAt(13)&&f.indexOf("transform",10)>0)return f.substring(0,f.indexOf(";",27)+1).replace(o,"$1"+L+"$2")+f}return f}function ee(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10),a=e.substring(r+1,e.length-1);return H(2!==t?n:n.replace(T,"$1"),a,t)}function te(e,t){var r=X(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(A," or ($1)").substring(4):"("+t+")"}function re(e,t,r,n,a,c,o,i,s,l){for(var u,f=0,h=t;f<z;++f)switch(u=F[f].call(ce,e,h,r,n,a,c,o,i,s,l)){case void 0:case!1:case!0:case null:break;default:h=u}if(h!==t)return h}function ne(e,t,r,n){for(var a=t+1;a<r;++a)switch(n.charCodeAt(a)){case 47:if(42===e&&42===n.charCodeAt(a-1)&&t+2!==a)return a+1;break;case 10:if(47===e)return a+1}return a}function ae(e){for(var t in e){var r=e[t];switch(t){case"keyframe":Y=0|r;break;case"global":U=0|r;break;case"cascade":j=0|r;break;case"compress":G=0|r;break;case"semicolon":D=0|r;break;case"preserve":M=0|r;break;case"prefix":H=null,r?"function"!=typeof r?I=1:(I=2,H=r):I=0}}return ae}function ce(t,r){if(void 0!==this&&this.constructor===ce)return e(t);var a=t,c=a.charCodeAt(0);c<33&&(c=(a=a.trim()).charCodeAt(0)),Y>0&&(K=a.replace(p,91===c?"":"-")),c=1,1===j?V=a:q=a;var o,i=[V];z>0&&void 0!==(o=re(-1,r,i,i,N,B,0,0,0,0))&&"string"==typeof o&&(r=o);var s=Z($,i,r,0,0);return z>0&&void 0!==(o=re(-2,s,i,i,N,B,s.length,0,0,0))&&"string"!=typeof(s=o)&&(c=0),K="",V="",q="",_=0,N=1,B=1,G*c==0?s:function(e){return e.replace(n,"").replace(g,"").replace(v,"$1").replace(y,"$1").replace(k," ")}(s)}return ce.use=function e(t){switch(t){case void 0:case null:z=F.length=0;break;default:if("function"==typeof t)F[z++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else W=0|!!t}return e},ce.set=ae,void 0!==t&&ae(t),ce}(null)},function(e,t){e.exports=a},function(e,t,r){"use strict";var n=r(10);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,c,o){if(o!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var r,n,a=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:c}catch(e){r=c}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,l=[],u=!1,f=-1;function h(){u&&s&&(u=!1,s.length?l=s.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=i(h);u=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new d(e,t)),1!==l.length||u||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,r){"use strict";r.r(t);var n=r(5);function a(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,c=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=c.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=c.return)&&r.call(c)}finally{if(a)throw a.error}}return o}var c=r(0),o=r.n(c),i=r(3),s=r.n(i),l=r(4),u=function(e){return e.setState=e.setState.bind(e)},f=function(e){return!!e&&e instanceof o.a.Component},h=function(e){return console.error("The instance provided for use with the "+e+" is not a valid React component instance.")},p=function(e){return function(t,r){return f(t)?function(n){return t[r]=e(n)}:h("ref")}};p((function(e){return{component:e,element:Object(l.findDOMNode)(e)}})),p((function(e){return e}));var d=p(l.findDOMNode),m=function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return f(e)?u(e)&&function(){for(var r=arguments.length,a=Array(r),c=0;c<r;c++)a[c]=arguments[c];return t.call(e,e,a,n)}:h("method")},b=function(){var e={},t=e,r=function(){return t!==e?t:t="undefined"!=typeof window?window.URL||window.webkitURL:e};return r.reset=function(){return t=e},r}(),g=function(){var e=!1,t=function(){return e||(e="undefined"!=typeof window&&"function"==typeof window.Blob&&"function"==typeof b().createObjectURL&&function(){try{return new window.Blob,!0}catch(e){return!1}}())};return t.reset=function(){return e=!1},t}(),v=function(){return e=null,t=null,function(r){return r===t?e:e=(t=r)?function(e){return g()?b().createObjectURL(new window.Blob([e],{type:"text/css"})):null}(r):null};var e,t},y=r(2),k={hasSourceMap:!y.b,isCompressed:!0,isMinified:y.b,isPrefixed:!0},C=function(e,t){return"boolean"==typeof e[t]?e[t]:k[t]},w=r(6),E=r.n(w),A=r(7),x=r.n(A),T=function(e,t){var r=t.isCompressed,n=t.isPrefixed;return new x.a({compress:r,global:!1,keyframe:!1,prefix:n})("",e)},S=function(e,t){return t.isMinified?T(e,t):E()(T(e,t),y.a)},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var L=function(e){var t=e.node;return(0,e.relocateNode)(t)},P=function(e){var t=e.node;return(0,e.returnNode)(t),null},R=function(e,t){var r=e.getStyleForState,n=e.node,a=e.relocateNode,c=e.props,o=e.setState,i=t[0];a(n),c.children!==i.children&&o(r)},B=function(e){var t=e.node;return(0,e.returnNode)(t)},N=function(e){var t=e.props;return{style:S(t.children,{isCompressed:C(t,"isCompressed"),isMinified:C(t,"isMinified"),isPrefixed:C(t,"isPrefixed")})}},_=function(e,t){var r=t[0];"undefined"!=typeof document&&r&&(e.originalParent=r.parentNode,e.originalParent.removeChild(r),document.head.appendChild(r))},j=function(e,t){var r=t[0];if("undefined"!=typeof document&&r)try{document.head.removeChild(r),e.originalParent.appendChild(r)}catch(e){}finally{e.node=null,e.originalParent=null}},I=function(e){function t(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,r));return n.componentDidMount=m(n,L),n.componentDidUpdate=m(n,R),n[y.c?"getSnapshotBeforeUpdate":"componentWillUpdate"]=m(n,P),n.componentWillUnmount=m(n,B),n.linkHref=null,n.node=null,n.originalParent=null,n.getCachedLinkHref=v(),n.getStyleForState=m(n,N),n.relocateNode=m(n,_),n.returnNode=m(n,j),n.state=N({props:r}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,e.hasSourceMap,e.isCompressed,e.isPrefixed,function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","hasSourceMap","isCompressed","isPrefixed"])),r=this.state.style;if(C(this.props,"hasSourceMap")){if(g())return o.a.createElement("link",O({},t,{href:this.getCachedLinkHref(r),ref:d(this,"node"),rel:"stylesheet"}));console.error("To support sourcemaps for react-style-tag you need Blob support, and the browser you are using does not currently support it. You should include a polyfill prior to the rendering of this component.")}return o.a.createElement("style",O({ref:d(this,"node")},t),r)},t}(c.PureComponent);I.propTypes={children:s.a.string.isRequired,hasSourceMap:s.a.bool,id:s.a.string,isCompressed:s.a.bool,isMinified:s.a.bool,isPrefixed:s.a.bool},I.setGlobalOptions=function(e){return Object.keys(e).forEach((function(t){return k.hasOwnProperty(t)&&"boolean"==typeof e[t]&&(k[t]=e[t])}))};var U,G=I,D=r(8),M=r.n(D),$={DARK:{id:"dark",index_id:-2e3,name:"Dark Theme"},DEFAULT:{id:"default",index_id:-1e3,name:"Default Theme"},LIGHT:{id:"light",index_id:-3e3,name:"Light Theme"}},F="New Theme",z={BASE_THEME:"basetheme",BG_IMAGE:"bgimage",NONE:"none",STYLE:"style",PANEL_CONTAINER_BG_COLOR:"panel-container-bg-color",URL:"url"};!function(e){e.BaseTheme="basetheme",e.BackgroundImage="bgimage",e.CustomStyle="style",e.ExternalURL="url",e.PanelBackground="panel-container-bg-color",e.None="none"}(U||(U={}));var H=function(e,t){switch(this.type=e,e.toLowerCase()){case U.BaseTheme:this.props={theme:t&&t.theme?t.theme:""};break;case U.CustomStyle:this.props={text:t&&t.text?t.text:""};break;case U.ExternalURL:case U.BackgroundImage:this.props={url:t&&t.url?t.url:""};break;case z.PANEL_CONTAINER_BG_COLOR:this.props={color:t&&t.color?t.color:""};break;default:this.props={}}},W=function(e){var t="";if(["dark","light"].indexOf(e.toLowerCase())>-1&&window.performance){var r=window.performance.getEntries().map((function(e){return e.name})).filter((function(e){return e.endsWith(".js")})).filter((function(e){return e.indexOf("/public/build/app.")>-1}));r&&r.length>0&&(t=r[0].replace("/public/build/app.","/public/build/grafana."+e.toLowerCase()+".").slice(0,-3)+".css")}return t},Y=function(e,t){switch(t){case-1e3:return"Grafana Default";case-2e3:return"Grafana Dark";case-3e3:return"Grafana Light";default:return e[t]&&e[t].name?e[t].name:"Grafana Default"}},K=function(){function e(e){this.name=e.name||F,this.styles=0===e.styles.length?[new H(U.BaseTheme,{theme:$.DEFAULT.id}),new H(U.BackgroundImage,{url:""}),new H(U.ExternalURL,{url:""}),new H(U.CustomStyle,{text:""})]:e.styles}return e.prototype.addStyle=function(e){this.styles.push(new H(e,{}))},e.prototype.deleteStyle=function(e){this.styles.splice(e,1)},e.prototype.constructTheme=function(e){var t="";return M.a.each(e,(function(e){e.type===z.URL?e.props&&""!==e.props.url&&(t+="@import url('"+e.props.url+"');\n                    "):e.type===z.BASE_THEME?e.props&&""!==e.props.theme&&(e.props.theme.toLowerCase()===$.DARK.id?t+="@import url('"+W("dark")+"');\n                        ":e.props.theme.toLowerCase()===$.LIGHT.id&&(t+="@import url('"+W("light")+"');\n                        ")):e.type===z.STYLE?e.props&&""!==e.props.text&&(t+=(e.props.text||"")+"\n                    "):e.type===z.BG_IMAGE?e.props&&""!==e.props.url&&(t+='\n.main-view, .sidemenu, .sidemenu-open .sidemenu, .navbar, .dashboard-container,.dashboard-container > div {\n    background: url("'+e.props.url+'") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n                    '):e.type===z.PANEL_CONTAINER_BG_COLOR&&e.props&&""!==e.props.color&&(t+="\n.panel-container {\n    background-color: "+e.props.color+"\n}\n")})),t},e.prototype.getThemeContent=function(){var e="";return this.styles&&this.styles.length>0&&(e+=this.constructTheme(this.styles.filter((function(e){return e.type===z.URL}))),e+=this.constructTheme(this.styles.filter((function(e){return e.type===z.STYLE}))),e+=this.constructTheme(this.styles.filter((function(e){return e.type!==z.URL&&e.type!==z.STYLE})))),e},e}(),q=function(e){var t;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("br",null),null===(t=e.themes)||void 0===t?void 0:t.map((function(e){return e.name})).concat(["Grafana Dark","Grafana Light"]).map((function(t,r){return o.a.createElement("span",{className:"btn btn-secondary",style:{marginLeft:0===r?"0":"10px",marginRight:"10px"},onClick:function(){return function(t){e.onChange(t)}(t)}},t)})))},V=r(1),Z=function(e){var t=e.value,r=e.onChange,n=a(Object(c.useState)(!1),2),i=n[0],s=n[1],l=function(e){var n=t;n.styles=n.styles||[],n.styles.push(new H(e,null)),r(n)},u=function(e){var n=t;n.name=e,r(n)},f=function(e,n,a){var c=t;c.styles[e].props=c.styles[e].props||{},c.styles[e].props[n]=a,r(c)},h=[{value:"default",label:"Default"},{value:"dark",label:"Dark"},{value:"light",label:"Light"}];return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"btn width-18",style:{justifyContent:"start"}},t.name),o.a.createElement("i",{className:"fa fa-edit btn btn-primary px-2",onClick:function(){return s(!0)}}),o.a.createElement(V.Modal,{isOpen:i,onDismiss:function(){return s(!1)},title:"Edit "+t.name},o.a.createElement(V.Label,null,"Theme Theme"),o.a.createElement(V.Input,{css:{},value:t.name,onChange:function(e){return u(e.currentTarget.value)}}),o.a.createElement("br",null),t.styles.map((function(e,t){switch(e.type){case U.BaseTheme:var r=h.find((function(t){return t.value===e.props.theme}))||{label:"Default",value:"default"};return o.a.createElement(o.a.Fragment,null,o.a.createElement(V.Label,null,"Base Theme"),o.a.createElement(V.RadioButtonGroup,{value:r.value,options:h,onChange:function(e){f(t,"theme",e)}}),o.a.createElement("br",null));case U.BackgroundImage:return o.a.createElement(o.a.Fragment,null,o.a.createElement(V.Label,null,"Background Image"),o.a.createElement(V.Input,{css:{},value:e.props.url,onChange:function(e){f(t,"url",e.currentTarget.value)}}),o.a.createElement("br",null));case U.ExternalURL:return o.a.createElement(o.a.Fragment,null,o.a.createElement(V.Label,null,"External CSS URL"),o.a.createElement(V.Input,{css:{},value:e.props.url,onChange:function(e){f(t,"url",e.currentTarget.value)}}),o.a.createElement("br",null));case U.CustomStyle:return o.a.createElement(o.a.Fragment,null,o.a.createElement(V.Label,null,"Additional CSS Style"),o.a.createElement(V.TextArea,{css:{},value:e.props.text,rows:6,onChange:function(e){f(t,"text",e.currentTarget.value)}}),o.a.createElement("br",null));case U.PanelBackground:return o.a.createElement(o.a.Fragment,null,o.a.createElement(V.Label,null,"Panel BG Color"),o.a.createElement(V.Input,{css:{},value:e.props.color,onChange:function(e){f(t,"color",e.currentTarget.value)},prefix:o.a.createElement("div",null,o.a.createElement(V.ColorPicker,{color:e.props.color,onChange:function(e){f(t,"color",e)}}))}),o.a.createElement("br",null));case"url":return o.a.createElement(o.a.Fragment,null,o.a.createElement(V.Label,null,"Panel Container BG Color"),o.a.createElement(V.Input,{css:{},value:e.props.url,onChange:function(e){f(t,"url",e.currentTarget.value)}}),o.a.createElement("br",null));case"none":default:return o.a.createElement(o.a.Fragment,null)}})),o.a.createElement("div",{className:"text-center"},o.a.createElement("br",null),t.styles.filter((function(e){return e.type===U.ExternalURL})).length<1&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-success",onClick:function(){return l(U.ExternalURL)}},"Add external CSS"),"  "),t.styles.filter((function(e){return e.type===U.CustomStyle})).length<1&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-success",onClick:function(){return l(U.CustomStyle)}},"Add custom CSS"),"  "),t.styles.filter((function(e){return e.type===U.BackgroundImage})).length<1&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-success",onClick:function(){return l(U.BackgroundImage)}},"Add BG Image"),"  "),t.styles.filter((function(e){return e.type===U.PanelBackground})).length<1&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"btn btn-success",onClick:function(){return l(U.PanelBackground)}},"Add Panel BG Color"),"  "),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-success",onClick:function(){return s(!1)}},"OK"))))},J=function(e){var t=e.value,r=e.onChange,n=function(e,n){var a=t||[];a[n]=e,r(a)};return o.a.createElement(o.a.Fragment,null,null==t?void 0:t.map((function(e,a){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement(Z,{value:e,onChange:function(e){n(e,a)}}),o.a.createElement("i",{className:"btn fa fa-trash btn btn-danger px-2",title:"Edit "+e.name,onClick:function(){return function(e){var n=t||[];n.splice(e,1),r(n)}(a)}}))})),o.a.createElement("br",null),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e=t||[],n=new K({name:"New Theme "+(e.length+1),styles:[]});e.push(n),r(e)}},"Add New Theme")))},Q={id:"themes",name:"Themes",path:"themes",category:["Themes"],editor:function(e){var t=e.value,r=e.onChange;return o.a.createElement(J,{value:t,onChange:r})}};r.d(t,"plugin",(function(){return X}));var X=new n.PanelPlugin((function(e){var t,r=e.options,n=(e.onOptionsChange,e.replaceVariables),i=a(Object(c.useState)(!1),2),s=i[0],l=i[1],u=a(Object(c.useState)(""),2),f=u[0],h=u[1],p="";return null===(t=r.themes)||void 0===t||t.forEach((function(e,t){var a=new K(e);s?f===a.name?p+=a.getThemeContent():"Grafana Dark"===f?p="@import url('"+W("dark")+"');\n            ":"Grafana Light"===f&&(p="@import url('"+W("light")+"');\n            "):"Grafana Dark"===n(r.activeTheme)?p="@import url('"+W("dark")+"');\n            ":"Grafana Light"===n(r.activeTheme)?p="@import url('"+W("light")+"');\n            ":n(r.activeTheme)===a.name&&(p+=a.getThemeContent())})),o.a.createElement(o.a.Fragment,null,o.a.createElement(G,null,p),r.disableThemePicker?o.a.createElement(o.a.Fragment,null):o.a.createElement(q,{themes:r.themes,onChange:function(e){l(!0),h(e)}}))})).setPanelOptions((function(e){return e.addCustomEditor(Q),e.addBooleanSwitch({name:"Hide Theme Picker",path:"disableThemePicker",category:["Themes Options"]}),e.addTextInput({name:"Default Theme",path:"activeTheme",category:["Themes Options"]}),e})).setMigrationHandler((function(e){var t,r,n,a={disableThemePicker:null!==(t=e.options.disableThemePicker)&&void 0!==t?t:e.disableThemePicker,activeTheme:null!==(r=e.options.activeTheme)&&void 0!==r?r:Y(e.themes,e.activeThemeId),themes:null!==(n=e.options.themes)&&void 0!==n?n:e.themes};return delete e.themes,delete e.activeThemeId,delete e.disableThemePicker,a}))}])}));
//# sourceMappingURL=module.js.map