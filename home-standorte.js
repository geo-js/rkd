$(".standorte-dd-trigger.one").on("click", function () {
    $(".standorte-dd-content").removeClass("is-active"),
        $(".h2.standort").removeClass("is-active"),
        $(".standorte-dd-icon").removeClass("is-active"),
        $(".standorte-bild-wrapper").removeClass("is-active"),
        $(this).siblings(".standorte-dd-content").toggleClass("is-active"),
        $(this).find(".h2.standort").toggleClass("is-active"),
        $(".standorte-bild-wrapper.one").toggleClass("is-active"),
        $(this).find(".standorte-dd-icon").toggleClass("is-active"),
        $(".dd-close-overlay-1").addClass("has-overlay"),
        $(".dd-close-overlay-2").removeClass("has-overlay"),
        $(".dd-close-overlay-3").removeClass("has-overlay"),
        $(".dd-close-overlay-4").removeClass("has-overlay"),
        $(".dd-close-overlay-5").removeClass("has-overlay");
}),
    $(".dd-close-overlay-1").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(".dd-close-overlay-1").removeClass("has-overlay"),
            $(".standorte-bild-wrapper.starting").addClass("is-active");
    }),
    $(".standorte-dd-trigger.two").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(this).siblings(".standorte-dd-content").toggleClass("is-active"),
            $(this).find(".h2.standort").toggleClass("is-active"),
            $(".standorte-bild-wrapper.two").toggleClass("is-active"),
            $(this).find(".standorte-dd-icon").toggleClass("is-active"),
            $(".dd-close-overlay-1").removeClass("has-overlay"),
            $(".dd-close-overlay-2").addClass("has-overlay"),
            $(".dd-close-overlay-3").removeClass("has-overlay"),
            $(".dd-close-overlay-4").removeClass("has-overlay"),
            $(".dd-close-overlay-5").removeClass("has-overlay");
    }),
    $(".dd-close-overlay-2").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(".dd-close-overlay-2").removeClass("has-overlay"),
            $(".standorte-bild-wrapper.starting").addClass("is-active");
    }),
    $(".standorte-dd-trigger.three").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(this).siblings(".standorte-dd-content").toggleClass("is-active"),
            $(this).find(".h2.standort").toggleClass("is-active"),
            $(".standorte-bild-wrapper.three").toggleClass("is-active"),
            $(this).find(".standorte-dd-icon").toggleClass("is-active"),
            $(".dd-close-overlay-1").removeClass("has-overlay"),
            $(".dd-close-overlay-2").removeClass("has-overlay"),
            $(".dd-close-overlay-3").addClass("has-overlay"),
            $(".dd-close-overlay-4").removeClass("has-overlay"),
            $(".dd-close-overlay-5").removeClass("has-overlay");
    }),
    $(".dd-close-overlay-3").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(".dd-close-overlay-3").removeClass("has-overlay"),
            $(".standorte-bild-wrapper.starting").addClass("is-active");
    }),
    $(".standorte-dd-trigger.four").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(this).siblings(".standorte-dd-content").toggleClass("is-active"),
            $(this).find(".h2.standort").toggleClass("is-active"),
            $(".standorte-bild-wrapper.four").toggleClass("is-active"),
            $(this).find(".standorte-dd-icon").toggleClass("is-active"),
            $(".dd-close-overlay-1").removeClass("has-overlay"),
            $(".dd-close-overlay-2").removeClass("has-overlay"),
            $(".dd-close-overlay-3").removeClass("has-overlay"),
            $(".dd-close-overlay-4").addClass("has-overlay"),
            $(".dd-close-overlay-5").removeClass("has-overlay");
    }),
    $(".dd-close-overlay-4").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(".dd-close-overlay-4").removeClass("has-overlay"),
            $(".standorte-bild-wrapper.starting").addClass("is-active");
    }),
    $(".standorte-dd-trigger.five").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(this).siblings(".standorte-dd-content").toggleClass("is-active"),
            $(this).find(".h2.standort").toggleClass("is-active"),
            $(".standorte-bild-wrapper.five").toggleClass("is-active"),
            $(this).find(".standorte-dd-icon").toggleClass("is-active"),
            $(".dd-close-overlay-1").removeClass("has-overlay"),
            $(".dd-close-overlay-2").removeClass("has-overlay"),
            $(".dd-close-overlay-3").removeClass("has-overlay"),
            $(".dd-close-overlay-4").removeClass("has-overlay"),
            $(".dd-close-overlay-5").addClass("has-overlay");
    }),
    $(".dd-close-overlay-5").on("click", function () {
        $(".standorte-dd-content").removeClass("is-active"),
            $(".h2.standort").removeClass("is-active"),
            $(".standorte-dd-icon").removeClass("is-active"),
            $(".standorte-bild-wrapper").removeClass("is-active"),
            $(".dd-close-overlay-5").removeClass("has-overlay"),
            $(".standorte-bild-wrapper.starting").addClass("is-active");
    });
