$(function(){
	if (document.getElementById('order')) {
		$('.btn').mouseover(function(){
			$('.btn').attr("class","btn btn-default");
			$(this).attr("class","btn btn-danger");
		});
		$('.doClick').click(function(){
			$("section").css({"display":"none"});
			$("#"+this.name).css({"display":"block"});
		});
		$('.back').click(function(){
			$("section").css({"display":"none"});
			$("#simpleInfo").css({"display":"block"});
		});
	}
});
function goBack(){
	$("section").css({"display":"none"});
	$("#simpleInfo").css({"display":"block"});
}

