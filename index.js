var lt = new TimelineMax();

lt
    .fromTo("img", 2, {opacity: 0}, {opacity: 1}, "+=2")
    .fromTo(".preloader", 1, {x: 0 + "%"}, {x: -100 + "%"}, "+=1")
    .fromTo(".preloader-lines-inner", 2, {x: 100 + "%"}, {x: -200 + "%", onComplete: function () {
            $(".preloader").remove();
        }});

function onTop() {
    window.scrollTo(0,0);
}

$(document).ready(function(){
    onTop();

//     Scroll effect
    function showElements(el){
        var a = document.querySelector(el).getBoundingClientRect().top;
        if(a < document.documentElement.clientHeight){
            $(el).addClass("show");
        }
    }

    var didScroll = false;
    window.onscroll = actionOnScroll;
    function actionOnScroll() {
        didScroll = true;
        var scroll = $(document).scrollTop() / 10;
        $(".geralt-img").css({transform: "translateY(" + scroll + "px" + ")"});
        $(".img-monster").css({transform: "translateY(" + scroll + "px" + ")"});

        showElements(".logo-section");
        showElements(".inner-section-2");
        showElements(".inner-text-black");
        showElements(".inner-text-red");
        showElements(".wrap-text");
        showElements(".buy>p");
        showElements(".text-order");
    }
        
    setInterval(function () {
        if(didScroll){
            didScroll = false;
        }
    }, 100);

//    End scroll effect

//    Click event
    var img = document.querySelector(".img-container");
    img.onclick = function (e) {
        e.preventDefault();
        var target = e.target;
        var src = $(target).attr("src");
        $(".content-overlay").addClass("open");
        $(".big-img").attr("src", src);
    };
    $(".close-btn").on("click", function(){
        $(".content-overlay").removeClass("open");
    });
//    End click event
});