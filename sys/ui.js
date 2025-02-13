document.addEventListener("DOMContentLoaded", function(event) { 
    ui_lmenu = document.querySelector("#l_menu");
    //ui_mn.addEventListener('click', _updateText);
   
    _build_ui();

    function _build_ui(){
        ui_menuMass = ['options.html','markets.html','calendar.html','codes.html','nakl.html','graph.html','','','',];
        ui_menuUrlMass = ['home.png','remoney.png','calendar.png','article.png','line-scan.png','report.png','','','',];
        ui_menuImgMass = ['home_w.png','remoney_w.png','calendar_w.png','article_w.png','line-scan_w.png','report_w.png','','','',];
        ui_menuNamMass = ['Настройки','Магазины','Календарь','Наклейки','Сканирование','Эвенты','','','',];
        
        for(u = 0, ut = ui_menuMass.length; u < ut; u++){            
            let pageUrl = ui_menuMass[u];
            let pageImg = ui_menuUrlMass[u];
            let pageChImg = ui_menuImgMass[u];
            let pageName = ui_menuNamMass[u];

            if(pageUrl == ''){/*
                let pageImg = 'lock.png';
                let pageChImg = 'lock_w.png';
                ui_lmenu.insertAdjacentHTML('beforeEnd', '<a ><div class="l_podl"><div><img src="../ui/'+pageImg+'" class="m_butt" style="--pico-ico:url(../ui/'+pageChImg+');"></div><div class="l_panNam">'+pageName+'</div></div></a>');
				*/
            }else{
                ui_lmenu.insertAdjacentHTML('beforeEnd', '<a href="'+pageUrl+'"><div class="l_podl"><div><img src="./ui/'+pageImg+'" class="m_butt" style="--pico-ico:url(../ui/'+pageChImg+');"></div><div class="l_panNam">'+pageName+'</div></div></a>');
            }
        }
    }

});