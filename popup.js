chrome.windows.getCurrent(function(win){ 
	chrome.tabs.getSelected(function(tab){ 
		var img,_width=160,_height=160;

		console.log(tab);
		jQuery('#qrcode').qrcode({width:_width,height:_height,text:tab.url});

		if(tab.favIconUrl){
			img = new Image();
			img.src = tab.favIconUrl;
			img.onload=function(){ 
				var _w = img.width,_h = img.height
					,_x = 0 ,_y = 0
				;
				if(_w && _h){ 
					drawImg(img,(_width-_w)/2,(_height-_h)/2)
				}
			}
		}
	})
});

//加入图片
function drawImg(img,x,y){ 
	var myCanvas = document.getElementsByTagName('canvas')
		,_canvas = myCanvas[0]
		,myctx = _canvas.getContext('2d')
	;
	myctx.drawImage(img,x||0,y||0);

}