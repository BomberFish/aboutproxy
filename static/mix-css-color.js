/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/mix-css-color@0.2.0/dist/index.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).mixCssColor=n()}(this,(function(){"use strict";var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n=new RegExp("[^#a-f\\d]","gi"),r=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i"),a=new RegExp(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/,"i"),l="-?\\d*(?:\\.\\d+)",t="("+l+"?)",s="("+l+"?%)",i=("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,\n    \\s*"+s+"\\s*,\n    \\s*"+s+"\\s*\n    (?:,\\s*"+"(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),o=new RegExp(i),u=("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*\n    \\s+"+s+"\n    \\s+"+s+"\n    \\s*(?:\\s*\\/\\s*"+"(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),d=new RegExp(u),g=("^\n  rgba?\\(\n    \\s*"+t+"\\s*,\n    \\s*"+t+"\\s*,\n    \\s*"+t+"\\s*\n    (?:,\\s*"+"(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),h=new RegExp(g),p=("^\n  rgba?\\(\n    \\s*"+s+"\\s*,\n    \\s*"+s+"\\s*,\n    \\s*"+s+"\\s*\n    (?:,\\s*"+"(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),c=new RegExp(p),m=("^\n  rgba?\\(\n    \\s*"+t+"\n    \\s+"+t+"\n    \\s+"+t+"\n    \\s*(?:\\s*\\/\\s*"+"(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g,""),f=new RegExp(m),v=("^\n  rgba?\\(\n    \\s*"+s+"\n    \\s+"+s+"\n    \\s+"+s+"\n    \\s*(?:\\s*\\/\\s*"+"(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g,""),y=new RegExp(v),b=new RegExp(/^transparent$/,"i"),w=function(e,n,r){return Math.min(Math.max(n,e),r)},k=function(e){var n=e;return"number"!=typeof n&&(n=n.endsWith("%")?255*parseFloat(n)/100:parseFloat(n)),w(Math.round(n),0,255)},x=function(e){return w(parseFloat(e),0,100)};function M(e){var n=e;return"number"!=typeof n&&(n=n.endsWith("%")?parseFloat(n)/100:parseFloat(n)),w(n,0,1)}function E(e){var a=function(e,a){if(void 0===a&&(a={}),"string"!=typeof e||n.test(e)||!r.test(e))throw new TypeError("Expected a valid hex string");var l=1;8===(e=e.replace(/^#/,"")).length&&(l=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(l=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16),s=t>>16,i=t>>8&255,o=255&t;return"array"===a.format?[s,i,o,l]:{red:s,green:i,blue:o,alpha:l}}(e,{format:"array"});return F([null,a[0],a[1],a[2],a[3]])}function F(e){var n=e[1],r=e[2],a=e[3],l=e[4];return void 0===l&&(l=1),{type:"rgb",values:[n,r,a].map(k),alpha:M(null===l?1:l)}}
/**
	 * parse-css-color
	 * @version v0.1.2
	 * @link http://github.com/noeldelgado/parse-css-color/
	 * @license MIT
	 */var R=function(n){if("string"!=typeof n)return null;var r=a.exec(n);if(r)return E(r[0]);var l=d.exec(n)||o.exec(n);if(l)return function(e){var n=e[1],r=e[2],a=e[3],l=e[4];void 0===l&&(l=1);var t=n;return{type:"hsl",values:[t=t.endsWith("turn")?360*parseFloat(t)/1:t.endsWith("rad")?Math.round(180*parseFloat(t)/Math.PI):parseFloat(t),x(r),x(a)],alpha:M(null===l?1:l)}}(l);var t=f.exec(n)||y.exec(n)||h.exec(n)||c.exec(n);if(t)return F(t);if(b.exec(n))return F([null,0,0,0,0]);var s=e[n.toLowerCase()];return s?F([null,s[0],s[1],s[2],1]):null};var $=function(e){var n,r,a,l,t,s=e[0]/360,i=e[1]/100,o=e[2]/100;if(0==i)return[t=255*o,t,t];n=2*o-(r=o<.5?o*(1+i):o+i-o*i),l=[0,0,0];for(var u=0;u<3;u++)(a=s+1/3*-(u-1))<0&&a++,a>1&&a--,t=6*a<1?n+6*(r-n)*a:2*a<1?r:3*a<2?n+(r-n)*(2/3-a)*6:n,l[u]=255*t;return l};var q=function(e,n,r){return Math.min(Math.max(e,n),r)};function I(e){var n=Math.round(q(e,0,255)).toString(16);return 1==n.length?"0"+n:n}var W=function(e){var n=4===e.length?I(255*e[3]):"";return"#"+I(e[0])+I(e[1])+I(e[2])+n};var C=function(e){var n,r,a=e[0]/255,l=e[1]/255,t=e[2]/255,s=Math.min(a,l,t),i=Math.max(a,l,t),o=i-s;return i==s?n=0:a==i?n=(l-t)/o:l==i?n=2+(t-a)/o:t==i&&(n=4+(a-l)/o),(n=Math.min(60*n,360))<0&&(n+=360),r=(s+i)/2,[n,100*(i==s?0:r<=.5?o/(i+s):o/(2-i-s)),100*r]};
/**
	 * mix-css-color
	 * @version v0.2.0
	 * @link http://github.com/noeldelgado/mix-css-color/
	 * @license MIT
	 */function j(e){var n=R(e);return null===n?null:("hsl"===n.type&&(n.values=$(n.values)),n)}return function(e,n,r){void 0===r&&(r=50);var a=j(e),l=j(n);if(!a||!l)return null;var t=Math.min(Math.max(0,r),100)/100,s=2*t-1,i=a.alpha-l.alpha,o=((s*i==-1?s:(s+i)/(1+s*i))+1)/2,u=1-o,d=a.values.map((function(e,n){return Math.round(a.values[n]*o+l.values[n]*u)})),g=d[0],h=d[1],p=d[2],c=parseFloat((a.alpha*t+l.alpha*(1-t)).toFixed(8));return{hex:W([g,h,p]),hexa:W([g,h,p,c]),rgba:[g,h,p,c],hsla:C([g,h,p]).map(Math.round).concat([c])}}}));
