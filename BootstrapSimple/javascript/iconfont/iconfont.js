(function(window){var svgSprite='<svg><symbol id="icon-up" viewBox="0 0 1821 1024"><path d="M1764.920889 970.638222 1764.920889 970.638222C1709.283556 1024 1619.171556 1024 1563.534222 970.638222L809.642667 246.670222C754.005333 193.308444 754.005333 106.723556 809.642667 53.361778 865.052444 0 955.278222 0 1010.915556 53.361778L1764.920889 777.329778C1820.444444 830.691556 1820.444444 917.276444 1764.920889 970.638222"  ></path><path d="M55.523556 970.638222 55.523556 970.638222C0 917.276444 0 830.691556 55.523556 777.329778L809.642667 53.361778C865.052444 0 955.278222 0 1010.915556 53.361778 1066.439111 106.723556 1066.439111 193.308444 1010.915556 246.670222L256.910222 970.638222C201.272889 1024 111.160889 1024 55.523556 970.638222"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)