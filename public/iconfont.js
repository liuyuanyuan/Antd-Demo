(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-activity_fill" viewBox="0 0 1024 1024">'+""+'<path d="M799.84 144H672V128a32 32 0 0 0-64 0v16h-192V128a32 32 0 0 0-64 0v16H223.712C188.576 144 160 174.016 160 210.912V304h704V210.912c0-36.896-28.768-66.912-64.16-66.912M640 496a32 32 0 0 1 0 64h-256a32 32 0 0 1 0-64h256z m-288 192a32 32 0 0 1 32-32h256a32 32 0 0 1 0 64h-256a32 32 0 0 1-32-32z m480-320H160v477.12c0 36.864 28.608 66.88 63.744 66.88h576.512c35.136 0 63.744-30.016 63.744-66.88V368h-32z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-add" viewBox="0 0 1024 1024">'+""+'<path d="M512 832a32 32 0 0 0 32-32v-256h256a32 32 0 0 0 0-64h-256V224a32 32 0 0 0-64 0v256H224a32 32 0 0 0 0 64h256v256a32 32 0 0 0 32 32"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-addpeople_fill" viewBox="0 0 1024 1024">'+""+'<path d="M550.4 824.416c-24.736-57.536-53.216-158.016 2.88-237.376 1.216-0.96 2.08-1.792 3.072-2.656A176.864 176.864 0 0 0 627.2 457.6c0.512-5.568 1.216-11.072 1.216-16.768V336.064C628.416 238.976 552.704 160 459.68 160c-93.024 0-168.736 78.976-168.736 176.064v104.736c0 60.16 29.12 113.312 73.344 145.088a911.264 911.264 0 0 0-158.08 53.28C179.84 650.24 160 681.088 160 710.912v113.76c0 3.52 0.544 6.976 1.632 10.304 8.64 26.432 31.936 44.16 58.016 44.16h309.664a29.76 29.76 0 0 0 19.68-7.936c6.592-5.888 11.04-14.304 11.04-24.064 0-0.768-0.448-2.048-0.704-3.136a69.664 69.664 0 0 0-8.928-19.584"  ></path>'+""+'<path d="M804.48 725.248h-39.296V768c0 12.384-9.6 22.4-21.504 22.4a21.952 21.952 0 0 1-21.504-22.4v-42.752H681.6a21.952 21.952 0 0 1-21.504-22.4c0-12.384 9.6-22.4 21.504-22.4h40.576V640c0-12.384 9.6-22.4 21.504-22.4 11.904 0 21.504 10.016 21.504 22.4v40.448h39.296c11.904 0 21.504 10.016 21.504 22.4 0 12.384-9.6 22.4-21.504 22.4m-16.064-207.296A176.64 176.64 0 0 0 743.68 512c-101.632 0-184.32 86.08-184.32 192 0 105.888 82.688 192 184.32 192 15.456 0 30.4-2.24 44.736-5.952C868.48 869.12 928 793.792 928 704s-59.52-165.152-139.584-186.048"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)