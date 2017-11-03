(function (timer, $) {

    $(document).ready(function() {
        $(".iframe-button").click(function() {
            var src = $(this).parent().attr("src");
            $(this).parent().removeClass("inactive")
            $(this).siblings("iframe")
                .attr("src", src);
            
        });
    });

})(window.timer = window.timer || {}, jQuery);