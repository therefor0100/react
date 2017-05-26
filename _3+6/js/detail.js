

var Dheader={
	Dheader:{width:"100vw",height:"0.88rem",background:"#c30d23",position:"fixed",top:"0"},
	headL:{position:"absolute",left:"0",background:"url(images/toLeft.png) center center no-repeat","background-size":"0.6rem 0.6rem",display:"block",width:"0.88rem",height:"0.88rem"},
	headR:{position:"absolute",right:"0",top:"0",background:"url(images/home.png) center center no-repeat","background-size":"0.6rem 0.6rem",display:"block",width:"0.88rem",height:"0.88rem"},
	h2:{"text-align":"center",margin:"0",height:"0.88rem",font:"0.4rem/0.88rem ''",color:"#fff"}
	
	
}
var descript={
	descript:{height:"0.88rem",width:"100vw",background:"#fff","margin-bottom":"0.2rem"},
	ul:{height:"4.4rem",width:"100vw",background:"#fff",padding:"0.2rem 0.2rem 0.1rem 0.2rem"},	
}
var footer={
	footer:{width:"100vw",height:"0.88rem",position:"fixed",bottom:"0",background:"#F5F5F5"},	
	icon1:{display:"inline-block",width:"1rem",height:"0.88rem",background:"url(images/gwc.png) no-repeat center center","background-size":"1rem 0.6rem"},
	icon2:{display:"inline-block",width:"1.2rem",height:"0.88rem",background:"url(images/gz.png) no-repeat center center","background-size":"1rem 0.6rem"},
	jr:{display:"inline-block",width:"2.2rem",height:"0.88rem",background:"#ff6c02","text-align":"center",font:"0.3rem/0.88rem ''",color:"#fff"},
	xd:{display:"inline-block",width:"2.0rem",height:"0.88rem",background:"#c30d23","text-align":"center",font:"0.3rem/0.88rem ''",color:"#fff"}

	
	
}

var _url=window.location.search.match(/\w+=\w+/g);
var id=_url[0].match(/\w+/g)[1];


var Detail=React.createClass({
componentWillMount:function(){
	$.getJSON("js/data02.json",function(data){
		var lunbo="";
		var lunbo1="";
		var lunbo2="";
		var lunbo3="";
		var l=data[id]["imgs"].length-1;
		
		lunbo1="<div class='mui-slider-item mui-slider-item-duplicate'><a href='#'><img class='Dimg' src='"+data[id]["imgs"][0]+"' /></a></div>";	
		for(var i=0;i<data[id]["imgs"].length;i++){	
			
			lunbo2+="<div class='mui-slider-item'><a href='#'><img class='Dimg' src='"+data[id]["imgs"][i]+"' /></a></div>";
		}		
			lunbo3="<div class='mui-slider-item mui-slider-item-duplicate'><a href='#'><img class='Dimg' src='"+data[id]["imgs"][l]+"' /></a></div>";
	
			lunbo=lunbo1+lunbo2+lunbo3;
			
			$("#lunBo").html(lunbo);
			
			
			
		var det="";
		
		det+="<h3>"+data[id]["title"]+"</h3><div><p><span class='_price'>￥"+data[id]["prite"]+"</span>/<span class='_zl'>"+data[id]["ke"]+"</span></p><p>"+data[id]["form"]+"</p></div><ul><li>产品说明<span>快来买买买</span</li><li>规格数量<span>已选择"+data[id]["ke"]+"</span></li><li>配送时间<span>"+data[id]["time"]+"</span></li><li>配送范围<span>"+data[id]["fanwen"]+"</span></li><li>配送费用<span>"+data[id]["feiyong"]+"</span></li></ul>"
			
		
		$("#det").html(det)
		
		$("#descript li:first-child").css("color","#c30d23");
		$("#descript li").on("tap",function(){
			$("#descript li").css("color","");
			$(this).css("color","#c30d23")
		
		})
		
		var detailImg="";
		
		for(var i=0;i<data[id]["pictures"].length;i++){
			detailImg+="<img src='"+data[id]["pictures"][i]+"'/>"
			
			
		}
		
		
		$("#detailImg").html(detailImg)	
		$("#descript li:first-child").on("tap",function(){		
			$("#detailImg").html(detailImg)	
		})
		$("#descript li:last-child").on("tap",function(){		
			$("#detailImg").html("<h1>暂无评价</h1>")	
		})
		
		var n=0;
		var _id=String(id);
		console.log(_id)
		$("#jrgwc").on("tap",function(){			
			n=n+1
			var _n=String(n/2);
			localStorage.setItem(_id,_n)
						
		})
		$("#ljxd").on("tap",function(){
			window.location.href="shopcar.html?id="+id;
			
		})
		
		
	})	
	
	
	
	
},
	render:function(){
		return(
			<div>
				<div style={Dheader.Dheader}>
					<a style={Dheader.headL} href="index.html"></a>
					<h2 style={Dheader.h2}>商品详情</h2>
					<a style={Dheader.headR} href="index.html"></a>
				</div>
		
				<div className="mui-slider" id="mui-slider">
				  	<div className="mui-slider-group mui-slider-loop" id="lunBo">
					    
				  	</div>
				</div>
		
				<div id="det"  style={descript.ul}>
				
				
				</div>
				
				
				<div id="dianPu">
				
				</div>
				
				<ul id="descript" style={descript.descript}>
					<li>商品描述</li>
					<li>商品评价</li>
				
				</ul>
				
				<div id="detailImg">
				
				
				</div>
				
				
				<div id="footer" style={footer.footer}>
					<a style={footer.icon1}>
						
						
					</a>
					<a style={footer.icon2}>
						
						
					</a>
					<a style={footer.jr} id="jrgwc">加入购物车</a>
					<a style={footer.xd} id="ljxd">立即下单</a>
				</div>
		
		
			</div>
			
			
			
			
		)
		
		
		
	},
	componentDidMount:function(){
 		
 		var gallery = mui('.mui-slider');
			gallery.slider({
				
  				interval:2000
			});
 		
 		
 		
 	}
	
	
})

  	ReactDOM.render(<Detail/>,document.getElementById("Dout"))               










