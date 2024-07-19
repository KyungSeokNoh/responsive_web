$(function(){

    $(".menu_toggle_btn").click(function(){
        $(".gnb").stop().slideToggle("fast");
    })//click

    $(".search_select_box span").hover(function(){
        // $(".search_select_list").stop().slideDown();
        $(this).next().stop().slideDown();
    },function(){
        // $(".search_select_list").stop().slideUp();
        $(this).next().stop().slideUp();
    }) //hover


})//jquery
