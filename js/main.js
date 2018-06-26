(function (timer, $) {

    $(document).ready(function() {
        $(".iframe-button").click(function() {
            var src = $(this).parent().attr("src");
            $(this).parent().removeClass("inactive")
            $(this).siblings("iframe")
                .attr("src", src);
            
        });

        $(".lazy > img").Lazy();
    });

})(window.timer = window.timer || {}, jQuery);