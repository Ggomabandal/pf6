$(document).ready(function(){
    // li:nth-child(1)"에 클래스 zup을 주시오
    $("section#soonjung div.wrap div.container ul.list li ul li:nth-child(1)").addClass("zup");
    // li:nth-child(1)"에 마우스를 가져다 대면 클래스 zup를 지우고 zdown을 주시오
    $("section#soonjung div.wrap div.container ul.list li ul li:nth-child(1)").mouseenter(function(){
        $(this).removeClass("zup");
    });
    $("section#soonjung div.wrap div.container ul.list li ul li:nth-child(2)").mouseleave(function(){
        $("section#soonjung div.wrap div.container ul.list li ul li:nth-child(1)").addClass("zup");
    });
});