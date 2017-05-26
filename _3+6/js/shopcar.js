
var Ajax=(function(){
	var ajax=function(url,callback){
		var xhr=new XMLHttpRequest();
		xhr.open("get",url,true);
		xhr.send("");
		xhr.onreadystatechange=function(){
			if(xhr.status==200 && xhr.readyState==4){
				callback(JSON.parse(xhr.responseText))
			}
		}
	}
	
	return {
		http:ajax
	}
})();


//============================购物车父组件=================================

var Shopcar=React.createClass({
	render:function(){
		return(
			<div>
				<ShopcarHeader />
				<ShopcarContent />
	
			</div>
		)
	}
});

//================================购物车头部===============================
var ShopcarHeader=React.createClass({
	render:function(){
		var _sty=this.sty;
		return(
			<header style={_sty.sty1}>
				<span style={_sty.sty2}>购物车</span>
				<span id="bianji" style={_sty.sty3}>编辑</span>
			</header>
		)
	}
});

ShopcarHeader.prototype.sty={
	sty1:{width:"7.5rem",height:"0.76rem",background:"#c30d23"},
	sty2:{font:"0.32rem/0.76rem ''",color:"#fff",float:"left",marginLeft:"3.27rem"},
	sty3:{font:"0.26rem/0.76rem ''",color:"#fff",float:"right",marginRight:"0.18rem"}
}

//======================购物车商品内容区=====================================

var ShopcarContent=React.createClass({
//	getInitialState:function(){
//		return{
//			much:""//总价
//		}
//	},
	componentWillMount:function(){
		var _this=this;
		Ajax.http("js/data02.json",function(data){
			var price="";
			var flag=true;
			
//-----------------------购物车商品区dom创建----------------------------------------			
			var carHtml=function(){
				var str="";
				for(var i=0;i<localStorage.length;i++){
					var _key=localStorage.key(i);
					var _val=localStorage.getItem(_key);
					if($("#bianji").html()=="编辑"){
						str+="<div class='carbox' id='"+data[_key]["id"]+"'>"+
							"<div class='box-top'>"+
								"<input class='top-ipt' type='checkbox' />"+
								"<span><img class='top-img' src='images/store_logo.png'/></span>"+
								"<span class='top-span1'>"+data[_key]["dianpu"]+"</span>"+
								"<span class='top-span2'>&gt;</span>"+
							"</div>"+
							"<div class='box-center'>"+
								"<input class='center-ipt' type='checkbox' />"+
								"<span class='center-span1'><img src='"+data[_key]["img"]+"'/></span>"+
								"<span class='center-span2'>"+
									"<p class='center-p1'>"+data[_key]["title"]+"</p>"+
									"<p class='center-p2'><span>规格:</span><span>"+data[_key]["ke"]+"</span></p>"+
									"<p class='center-p3'><span>配送日期:</span><span>"+data[_key]["time"]+"</span></p>"+
									"<p class='center-p4'><span>数量:</span><span class='val_num'>"+_val+"</span><span class='center-p4-span'>￥"+data[_key]["prite"]+"</span></p>"+
								"</span>"+
							"</div>"+
							"<div class='box-bottom'>"+data[_key]["feiyong"]+"</div>"+
						"</div>"
					}else{
						str+="<div class='carbox' id='"+data[_key]["id"]+"'>"+
							"<div class='box-top'>"+
								"<input class='top-ipt' type='checkbox' />"+
								"<span><img class='top-img' src='images/store_logo.png'/></span>"+
								"<span class='top-span1'>"+data[_key]["dianpu"]+"</span>"+
								"<span class='top-span2'>&gt;</span>"+
							"</div>"+
							"<div class='box-center'>"+
								"<input class='center-ipt' type='checkbox' />"+
								"<span class='center-span1'><img src='"+data[_key]["img"]+"'/></span>"+
								"<span class='center-span2'>"+
									"<div class='peisongriqi'><span class='riqi'>"+data[_key]["time"]+"</span><span class='peisong'>配送日期</span></div>"+
									"<div class='goumaishuliang'><span class='minus'>-</span><span class='number'>"+_val+"</span><span class='add'>+</span><span class='center-p4-span'>￥"+data[_key]["prite"]+"</span></div>"+	
								"</span>"+
							"</div>"+
							"<div class='box-bottom'>"+data[_key]["feiyong"]+"</div>"+
						"</div>"
					}
				}	
				_this.refs.shopcarBox.innerHTML=str;
			}
			carHtml();
			$(".carbox input").attr("checked","checked");
			

//-------------------------------计算总价start---------------------------------------

			var total=function(){
				price=0;
				$(".center-ipt").each(function(i){
					if($(this).is(":checked")){
						price+=Number($(".center-p4-span").eq(i).html().replace("￥",""))*Number($(".val_num").eq(i).html());
					}
				});
			}
			total();

//-------------------------------结算dom创建------------------------------------

			var payHtml=function(){
				var str2="";
				if($("#bianji").html()=="编辑"){
					str2="<span class='total-left'>"+
							"<input class='total-ipt' id='total-ipt' type='checkbox' />"+
							"<label htmlFor='total-ipt'>全选</label>"+
						"</span>"+
						"<span class='total-right'>结算</span>"+
						"<span class='total-center'>合计:<span class='total-color'>￥"+price+"</span>(不含运费)</span>"
				}else{
					str2="<span class='total-left'>"+
							"<input class='total-ipt' id='total-ipt' type='checkbox' />"+
							"<label htmlFor='total-ipt'>全选</label>"+
						"</span>"+
						"<span class='total-right' id='del'>删除</span>"
				}
				_this.refs.total.innerHTML=str2;
			}
			payHtml();
			$("#total-ipt").attr("checked","checked");

//----------------------------购物车操作start-------------------------------
			var make=function(){ 
//-------------------------------复选框start---------------------------------------
				$(".carbox").each(function(i){
					$(this).find(".center-ipt").change(function(){
						
						if($(".carbox").eq(i).find(".center-ipt").not("input:checked").size()<=0){
							$(".carbox").eq(i).find(".top-ipt").prop("checked",true)
							
						}else{
							$(".carbox").eq(i).find(".top-ipt").prop("checked",false)
						}
						total();
						$(".total-color").html("￥"+price);
					});
				});
			
				$(".carbox").each(function(i){
					$(this).find(".top-ipt").change(function(){
						if($(this).is("input:checked")){
							$(".carbox").eq(i).find(".center-ipt").prop("checked",true)
						}else{
							$(".carbox").eq(i).find(".center-ipt").prop("checked",false)
						}
						total();
						$(".total-color").html("￥"+price);
					});
				});
				
				$("#shopcarBox input").change(function(){
					if($("#shopcarBox input").not("input:checked").size()<=0){
						$("#total-ipt").prop("checked",true)
					}else{
						$("#total-ipt").prop("checked",false)
					}
					total();
				});

				$("#total-ipt").on("change",function(){
					if($(this).is(":checked")){
						$(".carbox").find("input").prop("checked",true)
					}else{
						$(".carbox").find("input").prop("checked",false)
					}
					total();
					$(".total-color").html("￥"+price);
				});
//---------------------------------------复选框end---------------------------------------
				
//------------------------数量加减------------------------------
				$(".carbox").each(function(i){
					var _key=localStorage.key(i);
					var _val=localStorage.getItem(_key);
					console.log(data[_key]["id"]);
					
					$(".minus").eq(i).on("click",function(){
						var min=Number($(".number").eq(i).html())-1;
						if(min>=1){
							$(".number").eq(i).html(min);
						}
						localStorage.setItem(data[_key]["id"],min)
					});
					
					$(".add").eq(i).on("click",function(){
						var add=Number($(".number").eq(i).html())+1;
							$(".number").eq(i).html(add);	
							localStorage.setItem(data[_key]["id"],add);
					});
					
				});
//-----------------------------------删除-----------------------------------
				$("#del").on("click",function(){
					if(confirm("确定要删除已选中的商品吗？")){
						$(".carbox").each(function(i){
							var _key=localStorage.key(i);
							var _val=localStorage.getItem(_key);
							if($(this).find("input").is(":checked")){
								localStorage.removeItem(_key);
								$(this).remove();
							}
						});
					}else{
						return false;
					}
					
				});
				
			}
			make();//购物车操作end


			
			
//-------------------------------编辑--------------------------------------------
			
			$("#bianji").on("click",function(){
				if(flag){
					$("#bianji").html("保存");
				}else{
					$("#bianji").html("编辑");
				}
				carHtml();
				$(".carbox input").attr("checked","checked");
				total();
				payHtml();
				$("#total-ipt").attr("checked","checked");
				make();
				flag=!flag;
			});			
		
		
		})//ajax读取数据end
		
	},
	render:function(){
		var _sty=this.sty;
		return(
			<div>
				<div id="shopcarBox" style={_sty.sty1} ref="shopcarBox"></div>
					
{/*---------------------------------结算-------------------------------------------*/}
				<div className='total' ref="total">
					
				</div>
			</div>
		)
	}
});

ShopcarContent.prototype.sty={
	sty1:{width:"7.5rem",height:"11.26rem",background:"#f5f5f5",overflow:"auto"}	
}
//=====================购物车商品内容区end=========================================

ReactDOM.render(<Shopcar/>,document.getElementById("out"));