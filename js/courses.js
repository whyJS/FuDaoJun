$(function(){
	$('.cost .row').css("display","none");
	$('.cost .active').css("display","block");
	$('.grade button').click(function(){
		$('.cost .row').css("display","none");
		$('.'+this.id).css("display","block");
		$(this).attr("class","btn btn-danger");
		$(this).parent().siblings().children().attr("class","btn btn-default");
	});
});