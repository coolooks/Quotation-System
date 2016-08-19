$(document).ready(function(){
		$.ajax({
		url:'../list_data.json',
		type:"GET",
		dataType:"json",
		error: function(xhr,textStatus){
			alert(textStatus+":"+xhr.status);
			},
		success: function(res,textStatus,xhr){
			if(res.list.status){
				var List = '';
				for(var i = 0; i<res.list.data.length; i++){
					List += '<div class="c_goods fixclear"><ul><li class="li_order">'+res.list.data[i].order+'</li><li class="li_code">'+res.list.data[i].code+'</li><li class="li_name">'+res.list.data[i].name+'</li><li class="li_brand">'+res.list.data[i].brand+'</li><li class="li_price">'+res.list.data[i].price+'</li><li class="li_units">'+res.list.data[i].units+'</li><li class="li_num"><input type="text" readonly value="'+res.list.data[i].num+'"/></li><li class="li_marks"><input type="text" readonly value="'+res.list.data[i].marks+'"/></li><li class="li_op"><button type="button" name="edit">编辑</button><button type="button" name="del">删除</button></li></ul></div>';
					}
				$('.content').append(List);
				}
			}
		});
	})

function POP(){
	var List = '';
	var data = {action:"get_hot_goods"};
	$.getJSON('http://www.17taojia.com/api/toffer.php?callback=?',data,function(res){
		console.log(res)
				for(var i = 0; i<res.data.length; i++){
					List = '<div class="pop_li"><div class="p_li_pic"><a href="#"><img src="http://www.17taojia.com/'+res.data[i].goods_thumb+'"></a></div><div class="p_li_code">'+res.data[i].goods_sn+'</div><div class="p_li_name"><p><a href="#">'+res.data[i].goods_name+'</a></p><b></b></div><div class="p_li_price">'+res.data[i].market_price+'</div><div class="p_li_units">'+res.data[i].goods_unit+'</div><div class="p_li_num"><input type="number" name="number" min="0" max="1000" placeholder="0"></div><div class="p_li_op"><div class="btn_icon"></div></div></div>';
					$('.pop_goods').append(List);
					List = null;
					}
				
				$.getScript('http://192.168.1.104/offer/js/anime.js',function(res,xhr){
				})
			})

	}