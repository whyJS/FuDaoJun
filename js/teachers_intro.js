// JavaScript Document

$(function() {

    $(".recommend-hover-detail").click(
        function () {
            var $this = $(this);
            if ($this.text() == "展开") {
                $this.parent().find(".teac_intr").css({"height":"auto", "position":"absolute", "bottom":"10px"});
                $this.text("收起");
            } else {
                $this.parent().find(".teac_intr").css({"height":"120px", "position":"", "bottom":""});
                $this.text("展开");
            }
            return false;
        }
    );
});
