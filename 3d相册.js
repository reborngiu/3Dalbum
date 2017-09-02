window.onload=function(){

		var AImg=document.getElementsByTagName("img");

        var deg=360/14; //单位度数

        var lastX,lastY,nowX,nowY,minsX,minsY,roX=-20,roY=0;

		//原型引用数组的forEach方法，遍历图片
		Array.prototype.forEach.call(AImg,function(el,index){

			//让图片移动不同单位度数
			//translateZ设置图片Z轴方向（空间几何 向前 相当于相册的半径）
			el.style.transform="rotateY("+index*deg+"deg) translateZ(400px)";
			
            //设置图片的出场方式 transition过渡时间  每一张之间延迟0.1秒
			el.style.transition="2s"+(14-index)*0.1+"s"
	
		});

        //鼠标拖拽效果
        //点击 移动 松开 三大事件
		document.onmousedown=function(e){

			//解决IE8和火狐浏览器的兼容问题
			var e=e||window.event;

			//设置旧坐标
			lastX=e.clientX;
			lastY=e.clientY;

			this.onmousemove=function(e){

				var e=e||window.event;

				//设置新坐标
				nowX=e.clientX;
				nowY=e.clientY;

				//坐标差=新坐标-旧坐标
				minsX=nowX-lastX;
				minsY=nowY-lastY;

                //坐标差已0.1倍累加在初始坐标上
				roX-=minsY*0.1;
				roY+=minsX*0.1;

				wrap.style.transform="rotateX("+roX+"deg) rotateY("+roY+"deg)"
				
				//新坐标随着移动不断地变成旧坐标
				lastX=nowX;
				lastY=nowY;
			}
			this.onmouseup=function(e){

				//松开后使移动和松开事件失效
				this.onmousemove=null;
				this.onmouseup=null;
			}
		}
	}