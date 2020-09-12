$( document ).ready(function() {
    //TODO get values from Api
    data = [{
            "country":"Belgium",
            "year":"2017",
            "average_income":41635,
            "top1":{
                "monthly":26958,
                "percentage":7.77
            },
            "top9":{
                "monthly":9105,
                "percentage":23.62
            },
            "top40":{
                "monthly":4164,
                "percentage":48.01
            },
            "bottom50":{
                "monthly":1428,
                "percentage":20.59
            }
        },
        {
            "country":"USA",
            "year":"2019",
            "average_income":53500,
            "top1":{
                "monthly":91485,
                "percentage":20.52
            },
            "top9":{
                "monthly":13008,
                "percentage":26.26
            },
            "top40":{
                "monthly":4519,
                "percentage":40.55
            },
            "bottom50":{
                "monthly":1129,
                "percentage":12.67
            }
        }
    ];

    //Get countries and date
    for(var i = 0; i < data.length; i++) {
        $('.country-list').append('<option value='+i+'>' + data[i].country + " - " + data[i].year +'</option>');
     }

    $('#country-list').on('change', function() {
        alert( this.value );
    });

    $('#country-list').on('change', function() {
        alert( this.value );
    });

    create_chart(data[0],data[1]);

    function create_chart(left,right){

        var divider = 3;//use for size adjustement
        var cash_size = 25;
        var cash_value = 1000;

        //TITLES
        $("#top1_title").append(create_title_card("for 1 person","success",left.top1.monthly,left.top1.percentage,0))
        $("#top9_title").append(create_title_card("for 9 persons","info",left.top9.monthly,left.top9.percentage,0))
        $("#top40_title").append(create_title_card("for 40 persons","warning",left.top40.monthly,left.top40.percentageo,0))
        $("#bottom50_title").append(create_title_card("for 50 persons","red",left.bottom50.monthly,left.bottom50.percentage,0))

        $("#top1_title_right").append(create_title_card("for 1 person","success",right.top1.monthly,top1.percentage,1))
        $("#top9_title_right").append(create_title_card("for 9 persons","info",right.top9.monthly,top9.percentage,1))
        $("#top40_title_right").append(create_title_card("for 40 persons","warning",right.top40.monthly,top40.percentage,1))
        $("#bottom50_title_right").append(create_title_card("for 50 persons","red",right.bottom50.monthly,bottom50.percentage,1))
        
        //PEOPLE
        
            $("#top1").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.top1.monthly)/ divider + "px;height:" + "auto" + ";'>");
        for (let step = 0; step < 9; step++) 
            $("#top9").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.top9.monthly)/divider + "px;height:" + "auto" + ";'>");
        for (let step = 0; step < 40; step++) 
            $("#top40").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.top40.monthly)/divider + "px;'>");
        for (let step = 0; step < 50; step++) 
            $("#bottom50").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(left.bottom50.monthly)/divider + "px;'>");
        
        $("#top1_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.top1.monthly)/divider + "px;'>");
        for (let step = 0; step < 9; step++) 
            $("#top9_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.top9.monthly)/divider + "px;'>");
        for (let step = 0; step < 40; step++) 
            $("#top40_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.top40.monthly)/divider + "px;'>");
        for (let step = 0; step < 50; step++) 
            $("#bottom50_right").append("<img src='./static/man_icon_crop.png' class='people' alt='man' style='width:" + Math.sqrt(right.bottom50.monthly)/divider + "px;'>");


        // Cash Pile  
        total = (1 * left.top1.monthly) / cash_value;
        for (let step = 0; step < total; step++)  
            $("#top1_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (9 * left.top9.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top9_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (40 * left.top40.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top40_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");
        total = (50 * left.bottom50.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#bottom50_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");

        total = (1 * right.top1.monthly) / cash_value;
        for (let step = 0; step < total; step++)  
            $("#top1_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (9 * right.top9.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top9_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;height:" + "auto" + ";'>");
        total = (40 * right.top40.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#top40_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");
        total = (50 * right.bottom50.monthly) / cash_value;
        for (let step = 0; step < total; step++) 
            $("#bottom50_right_cash").append("<img src='./static/cash.png' class='people' alt='man' style='width:" + cash_size + "px;'>");

        // Cash Pile     

    }

    //Compute for progress bar (width?)
    //Calculate Ration of ????	
    //TOP 1
    //TITLE
    function create_title_card(title,color,monthly,ratio,direction){
        if(direction){
            var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <div class="info-box-content salary-box">
                    <span class="info-box-text text-right">
                    ` + title +  `
                    </span>
                    <span class="info-box-number" style="font-size:xxx-large;">$ ` 
                    + monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); +  
                    `</span>
                </div>
            </div>
            `;
        } else {
            /* with details
        var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <div class="info-box-content text-right">
                <span class="info-box-text text-left">
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
            `;*/
            var title_card = `
            <div class="info-box mb-3 bg-` + color +  `">
                <div class="info-box-content salary-box">
                    <span class="info-box-text">
                    ` + title +  `
                    </span>
                    <span class="info-box-number text-right" style="font-size:xxx-large;">$ ` 
                    + monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); +  
                    ` </span>
                </div>
            </div>
            `;
        }
        return title_card;

    }

    function create_progress_bar(){
        var title_card = `
        <p class="text-center">
        <strong>Répartition :</strong>
        </p>      
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-warning" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        `;	
    }

});