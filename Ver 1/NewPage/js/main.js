function get_Last_Updated_Date() {
    var month_names = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'novimebre', 'diciembre']; 
    var week__day_names = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
    var new_date = new Date();
    var week_day = week__day_names[new_date.getDay()-1  ];
    var month_day = new_date.getDate();
    var month_name = month_names[new_date.getMonth()];
    var year = new_date.getFullYear();
    var last_date = "Última revisión: " + ' ' + week_day + ' ' + month_day + ' de ' + month_name + ' de ' + year
    return last_date;
}
function close_Accordeon() {
    $('.Accordion .AccordionCellTiltle').removeClass('AccordionActivo');
    $('.Accordion .AccordionInner').slideUp(50).removeClass('AccordionAbierto');
}
$(document).ready(function(){

$('#MySideNav').css('left', '-315px');
$('main').css('margin', '0');
$('footer').css('margin','0');
$('#ShowSideNav').fadeTo(1000, 0.6);

$('#NavCerrar').click(function(){
    $('#MySideNav').css('left', '-315px');
    $('main').css('margin', '0');
    $('footer').css('margin','0');
    $('#ShowSideNav').fadeTo(1000, 0.6);
});
$('#ShowSideNav').click(function(){
    $('#MySideNav').css('left', '0px');
    $('main').css('margin', '0 0 0 315px');
    $('footer').css('margin','0 0 0 315px');
    $('#ShowSideNav').fadeTo( "fast", 0);
});
$('.AccordionCellTiltle').click(function(event) {
    var currentAttrValue = $(this).attr('href');
    if($(event.target).is('.AccordionActivo')) {
        close_Accordeon();
    }else {
        close_Accordeon();
        $(this).addClass('AccordionActivo');
        $('.Accordion ' + currentAttrValue).slideDown(50).addClass('AccordionAbierto'); 
    }
    event.preventDefault();
});
$("#LastUpdatedDate").prepend(get_Last_Updated_Date());
$('.hideup').hide();
$('.hidedown').hide();
$(".showup").click(function(){ $(this).prev().toggle(); $(this).toggleClass('showclicked');});
$(".showdown").click(function(){ $(this).next().toggle(); $(this).toggleClass('showclicked');});

});
