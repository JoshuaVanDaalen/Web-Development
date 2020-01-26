// Written by Joshua Van Daalen

function testclick(){
    console.log('FOOOD')
    alert('WOO')
}

$('#clickmetoo').click(function (){
    alert( "You clicked me too!" );
})

$('.mydiv').click(function (){  
    $(this).hide('fast')
})

$('.mydiv').hover(function (){
    $('.mynewdiv').addClass('newstyle');  
})

$('.otherdiv').hover(function (){
    $('.mynewdiv').removeClass('newstyle');  
})

$( "#hiddenButton" ).click(function () {
    $( ".showNewDiv" ).show( "slow" );
});

