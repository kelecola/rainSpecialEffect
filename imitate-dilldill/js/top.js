var ntop=$(".menu-box ul").offset().top;
console.log(ntop);
$(window).scroll(function () {
        var scrollT=$(window).scrollTop();
        if(scrollT>ntop){
            $(".menu-box ul").css({
                position:"fixed",
                top:0,
                background: "url('public/d/banner2.jpg') center/cover",
                left:"-70px",
                width:"105%",
            })}
        else{
            $(".menu-box ul").css({
                position: "static",
                background:"none",
                left:"0",
                width:"100%",
            })
        }
    }
)
