!function(t,e){if("function"==typeof define&&define.amd)define(["module"],e);else if("undefined"!=typeof exports)e(module);else{var n={exports:{}};e(n),t.TimelineChart=n.exports}}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(n,r,a){function i(t){return function(e){return e.customClass?[e.customClass,t].join(" "):t}}function o(){function t(t){this.textSizeInPx=this.textSizeInPx||this.getComputedTextLength();var e=v(t.from),n=v(t.to);return{xPosition:e,upToPosition:n,width:n-e,textWidth:this.textSizeInPx}}l.onVizChangeFn&&d3.event&&l.onVizChangeFn.call(l,{scale:d3.event.scale,translate:d3.event.translate,domain:v.domain()}),T.select(".x.axis").call(y),T.selectAll("circle.dot").attr("cx",function(t){return v(t.at)}),T.selectAll("rect.interval").attr("x",function(t){return v(t.from)}).attr("width",function(t){return Math.max(c.intervalMinWidth,v(t.to)-v(t.from))}),T.selectAll(".interval-text").attr("x",function(e){var n=t.call(this,e);return n.upToPosition-g-10<n.textWidth?n.upToPosition:n.xPosition<g&&n.upToPosition>g?g:n.xPosition}).attr("text-anchor",function(e){var n=t.call(this,e);return n.upToPosition-g-10<n.textWidth?"end":"start"}).attr("dx",function(e){var n=t.call(this,e);return n.upToPosition-g-10<n.textWidth?"-0.5em":"0.5em"}).text(function(e){var n=t.call(this,e),r=(n.width-c.textTruncateThreshold)/n.textWidth;return r<1?n.width>c.textTruncateThreshold?e.label.substr(0,Math.floor(e.label.length*r))+"...":"":e.label})}e(this,t);var l=this;n.classList.add("timeline-chart");var c=this.extendOptions(a),s=r.reduce(function(t,e){return t.concat(e.data)},[]),u=d3.min(s,this.getPointMinDt),d=d3.max(s,this.getPointMaxDt),h=c.width||n.clientWidth,p=c.height||n.clientHeight,f={top:0,right:0,bottom:20,left:0},x=h-f.left-f.right,m=p-f.top-f.bottom,g=200,v=d3.time.scale().domain([u,d]).range([g,x]),y=d3.svg.axis().scale(v).orient("bottom").tickSize(-m),P=d3.behavior.zoom().x(v).on("zoom",o),T=d3.select(n).append("svg").attr("width",x+f.left+f.right).attr("height",m+f.top+f.bottom).append("g").attr("transform","translate("+f.left+","+f.top+")").call(P);T.append("defs").append("clipPath").attr("id","chart-content").append("rect").attr("x",g).attr("y",0).attr("height",m).attr("width",x-g),T.append("rect").attr("class","chart-bounds").attr("x",g).attr("y",0).attr("height",m).attr("width",x-g),T.append("g").attr("class","x axis").attr("transform","translate(0,"+m+")").call(y);var b=m/r.length,w=(T.selectAll(".group-section").data(r).enter().append("line").attr("class","group-section").attr("x1",0).attr("x2",x).attr("y1",function(t,e){return b*(e+1)}).attr("y2",function(t,e){return b*(e+1)}),T.selectAll(".group-label").data(r).enter().append("text").attr("class","group-label").attr("x",0).attr("y",function(t,e){return b*e+b/2+5.5}).attr("dx","0.5em").text(function(t){return t.label}),T.append("line").attr("x1",g).attr("x2",g).attr("y1",0).attr("y2",m).attr("stroke","black"),T.selectAll(".group-interval-item").data(r).enter().append("g").attr("clip-path","url(#chart-content)").attr("class","item").attr("transform",function(t,e){return"translate(0, "+b*e+")"}).selectAll(".dot").data(function(e){return e.data.filter(function(e){return e.type===t.TYPE.INTERVAL})}).enter()),A=.8*b,k=(b-A)/2,z=(w.append("rect").attr("class",i("interval")).attr("width",function(t){return Math.max(c.intervalMinWidth,v(t.to)-v(t.from))}).attr("height",A).attr("y",k).attr("x",function(t){return v(t.from)}),w.append("text").text(function(t){return t.label}).attr("fill","white").attr("class",i("interval-text")).attr("y",b/2+5).attr("x",function(t){return v(t.from)}),T.selectAll(".group-dot-item").data(r).enter().append("g").attr("clip-path","url(#chart-content)").attr("class","item").attr("transform",function(t,e){return"translate(0, "+b*e+")"}).selectAll(".dot").data(function(e){return e.data.filter(function(e){return e.type===t.TYPE.POINT})}).enter()),C=z.append("circle").attr("class",i("dot")).attr("cx",function(t){return v(t.at)}).attr("cy",b/2).attr("r",5);if(c.tip)if(d3.tip){var M=d3.tip().attr("class","d3-tip").html(c.tip);T.call(M),C.on("mouseover",M.show).on("mouseout",M.hide)}else console.error("Please make sure you have d3.tip included as dependency (https://github.com/Caged/d3-tip)");o()}return n(t,[{key:"extendOptions",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e={intervalMinWidth:8,tip:void 0,textTruncateThreshold:30};return Object.keys(t).map(function(n){return e[n]=t[n]}),e}},{key:"getPointMinDt",value:function(e){return e.type===t.TYPE.POINT?e.at:e.from}},{key:"getPointMaxDt",value:function(e){return e.type===t.TYPE.POINT?e.at:e.to}},{key:"onVizChange",value:function(t){return this.onVizChangeFn=t,this}}]),t}();r.TYPE={POINT:Symbol(),INTERVAL:Symbol()},t.exports=r});