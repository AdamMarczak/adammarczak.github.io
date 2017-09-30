(function (timer, $) {

    $(document).ready(function() {
        $(".chatbot-button").click(function() {
            var src = $(this).parent().attr("src");
            $(this).parent().addClass("active")
            $(this).siblings("iframe")
                .attr("src", src);
            
        });
    });

})(window.timer = window.timer || {}, jQuery);