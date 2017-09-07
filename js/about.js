// JavaScript Document
	
//招聘职位
$(document).ready(function(){
	$(".job-list li .job-name").bind("click",function(){
		$(this).parent().siblings().find('.job-details').slideUp();
		$(this).parent().find(".job-details").slideToggle();
		$(this).css('backgroundColor','#f0f0f0').parent().siblings().find('.job-name').css('backgroundColor','#ffffff');	
	});
	$(".job-list li .job-name").eq(0).trigger("click");
});

