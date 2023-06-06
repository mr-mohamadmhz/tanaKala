$(document).ready(function () {
    $('.btn-menu').click(function (e) {
        e.preventDefault();
        $status = parseInt($(this).attr('status'));
        if (!$status) {
            $('.btn-menu i').removeClass('fa-bars').addClass('fa-xmark');
            $(this).attr('status', 1);
        } else {
            $('.btn-menu i').removeClass('fa-xmark').addClass('fa-bars');
            $(this).attr('status', 0);
        }

        $('.nav-menu-txt').slideToggle(1000);

    });
    // window.addEventListener('resize', (e) => {
    //     if (e.target.innerWidth < 769) {

    //     }
    //     console.log({e:e.target.innerWidth})
    // })
});

$(document).ready(function () {
    $(".tabs a").on("click", function (e) {
       e.preventDefault();
       $(".tabs a").removeClass("active-bottom");
       $(this).addClass("active-bottom");
       $id = $(this).attr('deta-id');
       console.log($id)
       $(".content").hide()
       $("#" + $id).slideDown(600);
    });
 });