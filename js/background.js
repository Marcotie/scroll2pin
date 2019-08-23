$(function(){
    var div = document.createElement( 'div' );
    div.id = 'my-pin-box';
    div.innerHTML=`
    <div class='iconfont icon-up'>
    </div>
    <div class='iconfont icon-down'>
    </div>
    <div>
        <span  id='pin' class='iconfont icon-pin-up'></span>
        <span id='delete'>X</span>
    </div>
    `
    $('body').append(div);
    var position = localStorage.getItem("position");
    if(position){
        $("#pin").attr("class","iconfont icon-pin-down");
        $("#delete").show();
    }
    $("#pin").click(function(){
        $("#delete").show();
        position = localStorage.getItem("position");
        if(position==null){
            position = $(document).scrollTop();
            localStorage.setItem("position",position);
            $("#pin").attr("class","iconfont icon-pin-down");
        }else{
            $("html, body").animate({scrollTop:position},300)
        }
    })

    $("#delete").click(function(){
        localStorage.removeItem("position");
        $("#pin").attr("class","iconfont icon-pin-up");
        $("#delete").hide();
    })
    $(".icon-up").click(function(){
        $("html, body").animate({scrollTop:0},300)
    })
    $(".icon-down").click(function(){
        let document_h = $(document).height();
        $("html, body").animate({scrollTop:document_h},300)
    })


})