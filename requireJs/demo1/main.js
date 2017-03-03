/**
 * Created by lixinjie on 2017/3/1.
 */
require.config({
    paths:{
        'jquery':'./js/jquery-1.11.3'
    }
});
require(['jquery','define'],function($,define){
    $('body').css({'background-color':'red'});
    console.log(define.isEqual(2,2));
})