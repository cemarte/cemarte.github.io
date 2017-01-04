$(document).ready(function(){
    console.log('ready');
    
    setTimeout(function waitForFwk(){
        $('body').removeClass('loading').addClass('ready');
        $('body .container').append('<header><h1>Hello</h1></header>');
    },1000);
});