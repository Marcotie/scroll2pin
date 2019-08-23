$(function(){
    console.log("abc")
    var div = document.createElement( 'div' );
    div.id = 'my-pin-box';
    div.innerHTML=`
    <div class='iconfont icon-up'>
    </div>
    <div class='iconfont icon-down'>
    </div>`

    
    $('body').append(div);
    console.log('body:',$('body'))


})