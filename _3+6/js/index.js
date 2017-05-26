

var head={
	fl:{float:"left"},
	fr:{floar:"right"},
	inline:{display:"inline-block"},
	head:{width:"100vw",height:"0.88rem",background:"#C30D23"},
	logo:{width:"0.88rem",height:"0.88rem",float:"left",background:"url(images/logo.png) center center no-repeat","background-size":"0.6rem 0.6rem"},
	sousuo:{padding:"0",margin:"0","margin-top":"0.17rem",width:"4.70rem",height:"0.56rem",background:"#fff","border-radius":"0.1rem"},
	lx:{width:"0.72rem",height:"0.72rem",background:"url(images/lt.png) center center no-repeat","background-size":"0.5rem 0.5rem",float:"right",margin:"0.08rem 0.08rem 0 0"},
	nav:{background:"#fff",height:"2rem"},
	navImg:{width:"1.2rem",height:"1.2rem"},
	navLi:{border:"0",padding:"0",width:"1.38rem",margin:"0.1rem 0 0 0.12rem"},
	navTxt:{margin:"0"},
	youhui:{"margin-top":"0.1rem"},
	youhuiImg:{width:"100vw",height:"1.8rem",padding:"0 0.1rem"}
	
}
var section={
	section:{"margin-top":"0.1rem"},
	h21:{width:"100vw",height:"0.6rem",padding:"0 0.1rem","font":"0.22rem/0.6rem ''",color:"#c30d23","border-top":"1px solid #eee",margin:"0"},
	span:{font:"0.13rem/0.6rem ''",color:"#7c7c7c",float:"right"}
}

 var Index=React.createClass({
   
 	componentWillMount:function(){
 		
 		$.getJSON("js/data.json",function(data){
 			
 			var cons='';
 			for(var k in data){
 				
 				cons+="<li id="+data[k]["id"]+"><img src='"+data[k]["img"]+"'/><p class='goodsName'>"+data[k]["title"]+"</p><p class='jg'><span class='pric'>￥"+data[k]["prite"]+"</span>/<span class='weight'>"+data[k]["ke"]+"</span></p></li>"

 			}
 			$("#dayNew").html(cons)
 			
 			$("#dayNew li").on("tap",function(){				
 				window.location.href="detail.html?id="+$(this)[0].id
 				
 			})
   						
 		})
 		
 		$.getJSON("js/data02.json",function(data){
 			
 			var rec=""; 			 								
 			for(var k in data){
 				rec+="<li id="+data[k]["id"]+"><img src='"+data[k]["img"]+"'/><p class='goodsName'>"+data[k]["title"]+"</p><p class='jg'><span class='pric'>￥"+data[k]["prite"]+"</span>/<span class='weight'>"+data[k]["ke"]+"</span></p></li>"

 			}
				
 			
 			$("#recommend").html(rec)
 			$("#recommend li").on("tap",function(){		
 				
 				window.location.href="detail.html?id="+$(this)[0].id
 				
 			})
 			
 		})
 		
 		
 		
 		
 	},
 	
 	
 	
 	
 	render:function(){
 	 	return( 	 		
	 	 	<div>
	 	 		<div className="header" style={head.head}>
	 	 			<a style={head.logo}></a>
		 	 		<div style={head.inline} className="mui-input-row mui-search">
		    			<input style={head.sousuo} type="search" className="mui-input-clear" placeholder="搜索你喜爱的食材或店铺"/>
					</div>
					<a style={head.lx}></a>
				</div>
				
				<div className="mui-slider">
					  <div className="mui-slider-group mui-slider-loop">			   
					    <div className="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="images/lunbo02.jpg" /></a></div>
					    <div className="mui-slider-item"><a href="#"><img src="images/lunbo01.jpg" /></a></div>
					    <div className="mui-slider-item"><a href="#"><img src="images/lunbo02.jpg" /></a></div>		    					    
					    <div className="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="images/lunbo01.jpg" /></a></div>
					  </div>
				</div>
				
				
				<ul style={head.nav} className="mui-table-view mui-grid-view mui-grid-9">
					<li style={head.navLi} className="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					    <a style={head.navLi} href="#">
					        <span><img style={head.navImg} src="images/1.png"/></span>
					        <div style={head.navTxt} className="mui-media-body">生鲜食材</div>
					    </a>
					</li>
					<li style={head.navLi} className="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					    <a style={head.navLi} href="#">
					        <span><img style={head.navImg} src="images/2.png"/></span>
					        <div style={head.navTxt} className="mui-media-body">手机电子</div>
					    </a>
					</li>
					<li style={head.navLi} className="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					    <a style={head.navLi} href="#">
					        <span><img style={head.navImg} src="images/3.png"/></span>
					        <div style={head.navTxt} className="mui-media-body">家用电器</div>
					    </a>
					</li>
					<li style={head.navLi} className="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					    <a style={head.navLi} href="#">
					        <span><img style={head.navImg} src="images/4.png"/></span>
					        <div style={head.navTxt} className="mui-media-body">大宗采购</div>
					    </a>
					</li>
			
			    </ul>
				
				<div style={head.youhui}>
					<img style={head.youhuiImg} src="images/youhui.jpg"/>				
				</div>
				
				
				<section style={section.section}>
					<h2 style={section.h21}>
						每日新鲜
						<span style={section.span}>给你当季最新鲜的享受</span>					
					</h2>
					
					<ul id="dayNew">
						
					</ul>

					<h2 style={section.h21}>
						精品推荐
						<span style={section.span}>精致的生活精致有它</span>					
					</h2>
				
					<ul id="recommend">
						
					</ul>

				</section>
		
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
   
   
   
   
   
  	ReactDOM.render(<Index/>,document.getElementById("out"))               