// JavaScript Document


	$(function(){ 
		$(".faq-content").find("li").unbind("click").bind("click",function(){
		  $(this).siblings().find(".answer").slideUp();
          $(this).siblings().find("span").removeClass("unfold").addClass("fold");
          $(this).find(".answer").slideToggle();
          $(this).find("span").toggleClass("unfold");         
		})
       $(".faq-content").find("li").eq(0).trigger("click");
    })