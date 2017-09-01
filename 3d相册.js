var AImg=document.getElementsByTagName("img");
var deg=360/16;
//原型引用数组的forEach方法，遍历图片
Array.prototype.forEach.call(AImg,function(el,index){
	el.style.transform="rotateY("+index*deg+"deg) translateZ(350px)";
});
