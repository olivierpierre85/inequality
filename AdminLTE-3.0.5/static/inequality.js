$( document ).ready(function() {
    //TODO get values from Api
    //LEFT SIDE
    var top1 = Math.sqrt(26958) ;
    var top9 = Math.sqrt(9105) ;
    var top40 = Math.sqrt(4164) ;
    var bottom50 = Math.sqrt(1428) ;
    var divider = 3;
    
    //Calculate Ration of ????		
    $("#top1").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + top1/ divider + "px;height:" + "auto" + ";'>");
    for (let step = 0; step < 9; step++) 
        $("#top9").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + top9/divider + "px;height:" + "auto" + ";'>");
    for (let step = 0; step < 40; step++) 
        $("#top40").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + top40/divider + "px;'>");
    for (let step = 0; step < 50; step++) 
        $("#bottom50").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + bottom50/divider + "px;'>");
        
    //USA
    //RIGHT SIDE
    var top1 = Math.sqrt(91485) ;
    var top9 = Math.sqrt(13008) ;
    var top40 = Math.sqrt(4519) ;
    var bottom50 = Math.sqrt(1129) ;
    
    //Calculate Ration of ????		
    $("#top1usa").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + top1/divider + "px;'>");
    for (let step = 0; step < 9; step++) 
        $("#top9usa").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + top9/divider + "px;'>");
    for (let step = 0; step < 40; step++) 
        $("#top40usa").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + top40/divider + "px;'>");
    for (let step = 0; step < 50; step++) 
        $("#bottom50usa").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + bottom50/divider + "px;'>");
});