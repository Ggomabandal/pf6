$(document).ready(function(){
    $("section#new div.wrap div.container div.hidden ul.list li.product ul.imgcon li.imgbox:nth-child(1)").addClass("zup");
    $("section#new div.wrap div.container div.hidden ul.list li.product ul.imgcon li.imgbox:nth-child(1)").mouseenter(function(){
        $(this).removeClass("zup");
    });
    $("section#new div.wrap div.container div.hidden ul.list li.product ul.imgcon li.imgbox:nth-child(2)").mouseleave(function(){
        $("section#new div.wrap div.container div.hidden ul.list li.product ul.imgcon li.imgbox:nth-child(1)").addClass("zup");
    });
});