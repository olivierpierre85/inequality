$( document ).ready(function() {
    //TODO get values from Api



    //LEFT SIDE
    var top1 = 26958 ;
    var top9 = 9105 ;
    var top40 = 4164 ;
    var bottom50 = 1428 ;
    
    var top1_ratio = 7.77 ;
    var top9_ratio = 23.62 ;
    var top40_ratio = 48.01 ;
    var bottom50_ratio = 20.59 ;

    //USA
    //RIGHT SIDE
    var top1_right = 91485 ;
    var top9_right = 13008;
    var top40_right = 4519 ;
    var bottom50_right = 1129 ;

    var top1_ratio_right = 20.52 ;
    var top9_ratio_right = 26.26 ;
    var top40_ratio_right = 40.55 ;
    var bottom50_ratio_right = 12.67 ;

    var divider = 3;//use for size adjustement
    //Compute for progress bar (width?)
    //Calculate Ration of ????	
    //TOP 1
    //TITLE
    function create_title_card(title,color,monthly,ratio,direction){
        if(direction){
            var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <span class="info-box-icon"><i class="fas fa-dollar-sign"></i></span>
                <div class="info-box-content">
                <span class="info-box-text">
                ` + title +  `
                </span>
                <span class="info-box-number">Monthly Salary : ` + monthly +  `</span>
                <div class="progress">
                    <div class="progress-bar" style="width: ` + ratio +  `%"></div>
                </div>
                <span class="progress-description">
                        <span class="top1-total-value">` + ratio +  `</span>% of Total Revenue
                    </span>
                </div>
    
                <!-- /.info-box-content -->
            </div>
            `;
        } else {
        var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <div class="info-box-content text-right">
                <span class="info-box-text">
                ` + title +  `
                </span>
                <span class="info-box-number">Monthly Salary : ` + monthly +  `</span>
                <div class="progress">
                    <div class="progress-bar" style="animation-direction: reverse;width: ` + ratio +  `%"></div>
                </div>
                <span class="progress-description">
                        <span class="top1-total-value">` + ratio +  `</span>% of Total Revenue
                    </span>
                </div>
                <span class="info-box-icon"><i class="fas fa-dollar-sign"></i></span>
                <!-- /.info-box-content -->
            </div>
            `;
        }
        return title_card;

    }


    //TITLES
    $("#top1_title").append(create_title_card("TOP 1%","success",top1,top1_ratio,0))
    $("#top9_title").append(create_title_card("TOP 9%","info",top9,top9_ratio,0))
    $("#top40_title").append(create_title_card("TOP 40%","warning",top40,top40_ratio,0))
    $("#bottom50_title").append(create_title_card("BOTTOM 50%","red",bottom50,bottom50_ratio,0))

    $("#top1_title_right").append(create_title_card("TOP 1%","success",top1_right,top1_ratio_right,1))
    $("#top9_title_right").append(create_title_card("TOP 9%","info",top9_right,top9_ratio_right,1))
    $("#top40_title_right").append(create_title_card("TOP 40%","warning",top40_right,top40_ratio_right,1))
    $("#bottom50_title_right").append(create_title_card("BOTTOM 50%","red",bottom50_right,bottom50_ratio_right,1))
    //
    //PEOPLE
    $("#top1").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(top1)/ divider + "px;height:" + "auto" + ";'>");
    for (let step = 0; step < 9; step++) 
        $("#top9").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(top9)/divider + "px;height:" + "auto" + ";'>");
    for (let step = 0; step < 40; step++) 
        $("#top40").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(top40)/divider + "px;'>");
    for (let step = 0; step < 50; step++) 
        $("#bottom50").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(bottom50)/divider + "px;'>");
        
    $("#top1_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(top1_right)/divider + "px;'>");
    for (let step = 0; step < 9; step++) 
        $("#top9_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(top9_right)/divider + "px;'>");
    for (let step = 0; step < 40; step++) 
        $("#top40_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(top40_right)/divider + "px;'>");
    for (let step = 0; step < 50; step++) 
        $("#bottom50_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(bottom50_right)/divider + "px;'>");


});