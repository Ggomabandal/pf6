// $(document).ready(function(){
//     // site map 눌렀을때 슬라이드
//     $("footer div.wrap div.first div.familysite > ul li:nth-child(2) a").click(function(){
//         $(this).parents("div.familysite").find("div.none").slideToggle();
//         $("footer div.wrap div.first div.familysite div.familycon").slideUp();
//         return false;
//     });
//     // Family Site를 눌렀을때 슬라이드
//     $("footer div.wrap div.first div.familysite > ul li:nth-child(1) a").click(function(){
//         $(this).parents("div.familysite").find("div.familycon").slideToggle();
//         $("footer div.wrap div.first div.familysite div.none").slideUp();
//         return false;
//     });
//     // div.none을 제외한 나머지를 눌렀을때 슬라이드 up
//     $(".control").click(function(){
//         $("footer div.wrap div.first div.familysite div.none div.sitemapcon").slideUp();
//         return false;
//     });
// });

$(document).ready(function(){
    // site map 눌렀을때 슬라이드
    $("footer div.wrap div.first div.familysite > ul li:nth-child(2) a").click(function(){
        $(this).parents("div.familysite").find("div.none").slideToggle();
        $("footer div.wrap div.first div.familysite div.familycon").slideUp();
        return false;
    });
    // Family Site를 눌렀을때 슬라이드
    $("footer div.wrap div.first div.familysite > ul li:nth-child(1) a").click(function(){
        $(this).parents("div.familysite").find("div.familycon").slideToggle();
        $("footer div.wrap div.first div.familysite div.none").slideUp();
        return false;
    });
    // div.none을 제외한 나머지를 눌렀을때 슬라이드 up
    $(".control").click(function(){
        $("footer div.wrap div.first div.familysite div.none div.sitemapcon").slideUp();
        return false;
    });
});