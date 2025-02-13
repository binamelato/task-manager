document.addEventListener("DOMContentLoaded", function(event) {
    main_panel = "#road_panel"; //класс или id календаря
    cur_color = "#fd05bc";//цвет активного курсора     #0ddd0d       

    nm_ca = [31,59,90,120,151,181,212,243,273,304,334,365];//не весокосный год
    vm_ca = [31,60,91,121,152,182,213,244,274,305,335,366];//весокосный год 
    ru_ca = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
    en_ca = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sen','Okt','Nov','Des'];
    ru_da = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
    en_da = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    
    zone_month_now = ru_ca; //представление календаря
    zone_day_now = ru_da;   //представление календаря

    cal_pan = document.querySelector(main_panel);//место вставки календаря
 
    
    cal_insert();
    cal_build();

    function cal_insert(){
        cal_pan.insertAdjacentHTML('beforeEnd', '<div class="dd_panel"><div id="mp_panel" class=""><div id="mp_header"><div id="mp_years"></div></div><div id="mp_cal"></div></div></div>');
    }
    function cal_build(){
        tek_Data(); //все просчеты с датой
        cal_mt = document.querySelector("#mp_cal");//место генерации делений        
        cal_my = document.querySelector("#mp_years");//место подписи года
        
        for(i=newCalMin; i < newCalMax; i++){// отрисовка делений календаря 
            days_builder(i);
            month_builder(i);
			if(nday == 1){
				tk_mo = mm_t;
			}else{
				tk_mo = "";
			}
			console.log("Day: "+dday+" Mounth: "+nday);
            cal_mt.insertAdjacentHTML('beforeEnd', '<div id="_d'+i+'" class="cal_block"><div class="cal_htk"><div></div><div>'+(tk_mo)+'</div></div><div class="cal_mtk"><div>'+dday+'</div><div>'+(nday)+'</div></div><div class="cal_day"></div></div>');            
        }
        paint_event(); //отрисовка событий
        paint_cursor(); //отрисовка курсора        
             
    }    
    function days_builder(e){
        tk = Math.floor(e/7);
            ik = tk*7;
            ji = e-ik; 
            switch(ji){
                case 1:
                    dday = zone_day_now[1];
                    break;
                case 2:
                    dday = zone_day_now[2];
                    break;
                case 3:
                    dday = zone_day_now[3];
                    break;
                case 4:
                    dday = zone_day_now[4];
                    break;                    
                case 5:
                    dday = zone_day_now[5];
                    break;
                case 6:
                    dday = zone_day_now[6];
                    break;
                case 7: case 0:
                    dday = zone_day_now[0];
                    break;                    
            }
    }
    function month_builder(e){
        var yearRes = YY % 4;
        if(yearRes == 0){
            if(e > 366){
                k=e-366;
            }else{
                k=e;
            }
            switch(k){
                case ((k>0 && k<=vm_ca[0]) ? k : -1):
                    mm_t = zone_month_now[0];
                    nday = k;
                    break;
                case ((k>vm_ca[0] && k<=(vm_ca[1])) ? k : -1):
                    mm_t = zone_month_now[1];
                    nday = k - vm_ca[0];
                    break;
                case ((k>vm_ca[1] && k<=vm_ca[2]) ? k : -1):
                    mm_t = zone_month_now[2];
                    nday = k - vm_ca[1];
                    break;
                case ((k>vm_ca[2] && k<=vm_ca[3]) ? k : -1):
                    mm_t = zone_month_now[3];
                    nday = k - vm_ca[2];
                    break;
                case ((k>vm_ca[3] && k<=vm_ca[4]) ? k : -1):
                    mm_t = zone_month_now[4];
                    nday = k - vm_ca[3];
                    break;
                case ((k>vm_ca[4] && k<=vm_ca[5]) ? k : -1):
                    mm_t = zone_month_now[5];
                    nday = k - vm_ca[4];
                    break;
                case ((k>vm_ca[5] && k<=vm_ca[6]) ? k : -1):
                    mm_t = zone_month_now[6];
                    nday = k - vm_ca[5];
                    break;
                case ((k>vm_ca[6] && k<=vm_ca[7]) ? k : -1):
                    mm_t = zone_month_now[7];
                    nday = k - vm_ca[6];
                    break;
                case ((k>vm_ca[7] && k<=vm_ca[8]) ? k : -1):
                    mm_t = zone_month_now[8];
                    nday = k - vm_ca[7];
                    break;
                case ((k>vm_ca[8] && k<=vm_ca[9]) ? k : -1):
                    mm_t = zone_month_now[9];
                    nday = k - vm_ca[8];
                    break;
                case ((k>vm_ca[9] && k<=vm_ca[10]) ? k : -1):
                    mm_t = zone_month_now[10];
                    nday = k - vm_ca[9];
                    break;
                case ((k>vm_ca[10] && k<=vm_ca[11]) ? k : -1):
                    mm_t = zone_month_now[11];
                    nday = k - vm_ca[10];
                    break;                
            }
        }else{
            if(e > 365){
                k=e-365;
            }else{
                k=e;
            }            
            switch(k){
                case ((k>=0 && k<=nm_ca[0]) ? k : -1):
                    mm_t = zone_month_now[0];
                    nday = k;
                    break;
                case ((k>nm_ca[0] && k<=(nm_ca[1])) ? k : -1):
                    mm_t = zone_month_now[1];
                    nday = k - nm_ca[0];
                    break;
                case ((k>nm_ca[1] && k<=nm_ca[2]) ? k : -1):
                    mm_t = zone_month_now[2];
                    nday = k - nm_ca[1];
                    break;
                case ((k>nm_ca[2] && k<=nm_ca[3]) ? k : -1):
                    mm_t = zone_month_now[3];
                    nday = k - nm_ca[2];
                    break;
                case ((k>nm_ca[3] && k<=nm_ca[4]) ? k : -1):
                    mm_t = zone_month_now[4];
                    nday = k - nm_ca[3];
                    break;
                case ((k>nm_ca[4] && k<=nm_ca[5]) ? k : -1):
                    mm_t = zone_month_now[5];
                    nday = k - nm_ca[4];
                    break;
                case ((k>nm_ca[5] && k<=nm_ca[6]) ? k : -1):
                    mm_t = zone_month_now[6];
                    nday = k - nm_ca[5];
                    break;
                case ((k>nm_ca[6] && k<=nm_ca[7]) ? k : -1):
                    mm_t = zone_month_now[7];
                    nday = k - nm_ca[6];
                    break;
                case ((k>nm_ca[7] && k<=nm_ca[8]) ? k : -1):
                    mm_t = zone_month_now[8];
                    nday = k - nm_ca[7];
                    break;
                case ((k>nm_ca[8] && k<=nm_ca[9]) ? k : -1):
                    mm_t = zone_month_now[9];
                    nday = k - nm_ca[8];
                    break;
                case ((k>nm_ca[9] && k<=nm_ca[10]) ? k : -1):
                    mm_t = zone_month_now[10];
                    nday = k - nm_ca[9];
                    break;
                case ((k>nm_ca[10] && k<=nm_ca[11]) ? k : -1):
                    mm_t = zone_month_now[11];
                    nday = k - nm_ca[10];
                    break;
            }
        }
    }
    function tek_Data(){
        data = new Date();//получаем объект дата

        dd = data.getDate();//деень
        mm = data.getMonth()+1;//месяц
        yy = data.getFullYear();//год в формате хххх 
        hh = data.getHours();//час

        YY = Number(yy.toString().slice(-2));//год в формате хх
        multiplicity(YY);
		console.log(YY);
        res = ti_metka+dd; //сдвиг текущего месяца

        newCalMin = res - 90; //минимальный день календаря
        newCalMax = res + 30; //максимальный день календаря
		
		nday = dd;
    }
    function multiplicity(e){//проверка на весокосность
        temp_year = e;
        temp_multy = temp_year % 4;
        if(temp_multy == 0){
            tmaxDayYear = 366;
            ti_metka = vm_ca[mm-2];
        }else{
            tmaxDayYear = 365;
            ti_metka = nm_ca[mm-2];            
        }
		return ti_metka;
    }
    function paint_event(){//рисуем эвент
        roadEvents = localStorage.getItem('roadEvents');
        if(roadEvents == '' | roadEvents == null | roadEvents == undefined){
            console.log("массив пустой");
        }else{
            var arr = roadEvents.split(',');// массив всех событий
            console.log(arr); 
            pfx = 70;//отступ сверху
			per = 50;//ширина блока 40 + 10 отступ от предыдущего сверху
			//формируем массив с конечными датами
			var arr2 = []; //массив конечных дат (полный формат)
			for (var i = 2; i < arr.length; i += 5){//0+2, 0+2+5, 
				arr2.push(arr[i]);
			}
			
			//преобразуем массив дат в числовой ряд
			var endMass	= [];
			var otstypMass	= [];
			for (var i = 0; i < arr2.length; i ++){ 				
				var perem = arr2[i];				
				var ti_date = perem.split('.');
				var ei_dd = Number(ti_date[0]); //день начала
				var ei_mm = ti_date[1]; //месяц начала
				var ei_yy = ti_date[2]; //год
				var koeff = selectMass(ei_yy,ei_mm);
				var perem = koeff + ei_dd;
				var rydOtst = pfx+per*i;
				endMass.push(perem);
				otstypMass.push(rydOtst);
			}			
			console.log(endMass);//массив конечных дат
			console.log(otstypMass);//массив отступа без корректировок
			newOtstyp = otstypMass; //
			
			//Обработка события
            for(var i=0, mEvent=arr.length/5; i<mEvent; i++){
                a_name = arr[i*5];
                a_so = arr[i*5+1]; //дата начала
                a_po = arr[i*5+2]; //дата конца
                a_desc = arr[i*5+3];
                a_pic = arr[i*5+4];                				
				ev_img = ""+a_pic+".jpg";

				var mass = a_so.split('.');				
				var ev_dd = mass[0]; //день начала
				var ev_mm = mass[1]; //месяц начала
				var ev_yy = mass[2]; //год начала
				
				var masse = a_po.split('.');				
				var evd_dd = masse[0]; //день end
				var evd_mm = masse[1]; //месяц end
				var evd_yy = masse[2]; //год end
				
				var tmp_dd_now = dd; //текущий день //29
				var tmp_mm_now = mm; //текущий месяц //05
				var tmp_yy_now = YY; //текущий год //24				
				
				//получаем даты событий до
				
				//i - номер записи
				if(i>0){
					//если i > 0, значит это не первая запись и тогда берем предыдущее значение
					iPre = i-1;					
					var preEnd = arr[iPre*5+2];
					
					var preEndData = preEnd.split('.');				
					var pre_dd = preEndData[0]; //pre день end
					var pre_mm = preEndData[1]; //pre месяц end
					var pre_yy = preEndData[2]; //pre год end
					var preEndMetka = selectMass(pre_yy,pre_mm);
					var finEndMetka = Number(preEndMetka) + Number(pre_dd);
				}
				
				//console.log("pre data: "+pre_dd+"|"+pre_mm+"|"+pre_yy);
				console.log("previous Otstyp: "+finEndMetka);
				
				var na4Metka = selectMass(ev_yy,ev_mm); //366
				var endMetka = selectMass(evd_yy,evd_mm); //366
				
				var dlinnA = (Number(endMetka) + Number(evd_dd)) - (Number(na4Metka) + Number(ev_dd)); //длинна события
				var EvMetka = Number(na4Metka) + Number(ev_dd);//начало текущего события
				
				//endMass = [156, 155, 156, 150, 164, 170, 171, 164, 172, 172, 172]				
				//console.log(dopmass);
				console.log("Now Otstyp: "+(Number(endMetka) + Number(evd_dd)));
				
				const x = endMass.filter(function(el){					
					return el < EvMetka;
				});		
				var boje = Math.min(...x); //число меньше текущей начальной метки
				
				var index = endMass.findIndex(el => el === boje);//ищем индекс числа найденного строкой выше			
																 //если его нет, то будет индекс -1
																 
				if(x == undefined || x == Infinity || x == '' || x == -1){					
					otstyp_sv = pfx+per*i; //отступ сверху по позиции и порядковому индексу
					
					//console.log(i + " | " + EvMetka+ " | " + boje + " | " + index);
					var tekOtstupPredEv = newOtstyp[i - 1]; //отступ события до обрабатываемого
					var tekOtstupPredOrigEv = otstypMass[i - 1]; //original отступ события до обрабатываемого
					
					//console.log(tekOtstupPredEv);
					//console.log(tekOtstupPredOrigEv);
					
					if(tekOtstupPredEv != tekOtstupPredOrigEv){						
						var tekOtstupTekEv = tekOtstupPredOrigEv;
						newOtstyp[i] = otstyp_sv;
					}
					
					//var tekOtstupTekEv = newOtstyp[i]; //отступ обрабатываемого события
					if(tekOtstupPredEv <= 0){tekOtstupPredEv == 0;}
					//console.log(tekOtstupPredEv + " | " + tekOtstupTekEv);
				}else{
					//endMass.splice(index, 1);					
					delete endMass[index];
					//мы знаем индекс, больше которого текущий элемент. подставляем					
					//console.log(i + " | " + EvMetka+ " | " + boje + " | " + index);
					//console.log(endMass);					
					otstyp_sv = pfx+per*index; //множитель на совпадение
					//console.log(newOtstyp[i]);
					var tekOtstupPredEv = newOtstyp[i - 1]; //отступ события до обрабатываемого
					newOtstyp[i] = otstyp_sv;
					var tekOtstupTekEv = newOtstyp[i]; //отступ обрабатываемого события
					if(tekOtstupPredEv <= 0){tekOtstupPredEv == 0;}
					//console.log(tekOtstupPredEv + " -|- " + tekOtstupTekEv);
				}
				/*
				проблемы:
				- На борде нет Эвента, что заканчивается раньше текущего-обрабатываемого, но предыдущий	по порядку был сдвинут и потому существует дыра, но текущий не знает об этом.
				(мб, решение: каждый обрабатываемый эвент проверяет свой отступ с отступом предыдуего события. если предыдущий не на своем месте, то надо снизить свой инджекс на -1? для вычисления позиции, если двух, то -2 и т.д. плюс проверка не первая ли ээта позиция)
				
				- Текущий эвент должен быть сдвинут на против одного из предыдущих событий, но то событие само по себе уже сдвинуто.
				(мб, решение: необходим массив отступов сверху, который перезаписывается при обработки каждого эвента. там указывается актуальный отступ)
				
				*/

				//bom.push(otstyp_sv);
				 //отступ сверху дефолт 70, 50 - размер блока, i индекс события - множитель
				 //как должно быть
				 //[70,120,170,220,70,120,70,170,170,220,270]
				 //[70,120,170,220,70,220,370,120,170,270,320]
				 //                  +100,+300,-50,+0 +50,+50
				
				if(dlinnA == 0){
					var ev_wth = 50;
					var a_name = '';
				}else{
					var ev_wth = (dlinnA*48) + (dlinnA*2);
				}			
				var ev_lft_cord = (((Number(na4Metka) + Number(ev_dd)) - (res-91))*48) + (((Number(na4Metka) + Number(ev_dd)) - (res-90))*2); 
				
                ev_style="--image:url('../../"+ev_img+"');--widthEvent:"+ev_wth+"px;--color:#58656f;--topCord:"+otstyp_sv+"px;--leftCord:"+ev_lft_cord+"px;";
                cal_mt.insertAdjacentHTML('beforeEnd', '<div id="ev_'+i+'" class="cal_event" style="'+ev_style+'"><div class="ev_pic"></div><span class="ev_text"> '+a_name+' </span></div>'); //
                                  
            }
				//console.log(bom);
            document.addEventListener('click', function(e){
                tmp_ev = e.target.getAttribute('class');				
                if(tmp_ev == 'ev_text' || tmp_ev == 'ev_pic'){
                    ev_parent = e.target.parentElement;
                    prnt_id = ev_parent.getAttribute('id');
                    show_event(prnt_id);
                }
            });
        }
    }
    function paint_cursor(){//рисуем курсор
        tek_foc = document.querySelector("#_d"+res);
        tek_foc.setAttribute("tabindex", "-1");
        tek_foc.focus(); //фокус на текущий день
        
        lf_otst = 2990;
        timersNow = data.toLocaleTimeString();             
        ti_style="background-color:"+cur_color+";";//margin-left:"+lf_otst+"px;
        tm_style="color:#fff;background-color:"+cur_color+";";
        cal_mt.insertAdjacentHTML('beforeEnd', '<div class="cal_block" id="nblock" style="'+ti_style+'"><div style="'+tm_style+'" id="timesNow">'+timersNow+'</div></div>');        
        cal_Time = document.querySelector("#timesNow");
        cur_Now = document.querySelector("#nblock");
        timerAns = setInterval(() => timerUpdate(cal_Time,cur_Now), 1000);
    }   
    function show_event(e){//показываем форму эвента
        let ev_str = e; //id events
        let lst = ev_str.slice(3);//число из id
        //получение данных для формы
        pr_Events = localStorage.getItem('roadEvents');
        if(pr_Events == '' | pr_Events == null | pr_Events == undefined){
            console.log("массив пустой");
        }else{
            let arr = roadEvents.split(',');
            ap_name = arr[lst*5];
            ap_so = arr[lst*5+1];
            ap_po = arr[lst*5+2];
            ap_desc = arr[lst*5+3];            
			ap_img = arr[lst*5+4];
        }

        ev_bd = document.querySelector("body");//место генерации делений
        ev_bd.insertAdjacentHTML('beforeEnd', '<div id="vt_blk" style=""><div><a id="pn_ex"> X </a></div><div class="titl_head" style="background-image: url(../'+ap_img+'.jpg);"></div><div><div class="tit_form"><div class="titl_zag">'+ap_name+'</div><div class="_flx _ali dataCard"><div class="cardText">'+ap_so+'</div><div class="cardSym"> - </div><div class="cardText">'+ap_po+'</div></div></div></div><div><div>'+ap_desc+'</div></div></div>');        
        //закрытие формы и ее удаление
        pn_ex.addEventListener('click', function(e){
            pr_todel = this.parentElement.parentElement;
            pr_todel.remove();
        });
    }
    function timerUpdate(e,l){ 
        tek_Data();           
        lf_otst = 91*48 + hh*2;
        l.style.margin = "0px 0px 0px " + lf_otst + "px";
        l.style.position = "absolute";
        timerNow = data.toLocaleTimeString();
        e.textContent = timerNow;
	}
	function selectMass(e,l){
		var tmpMetka = e % 4;
		if(tmpMetka == 0){
			maxDayInYear = 366;
			tm_l = l.substr(l.length - 1);
			selMass = vm_ca[tm_l-2];
		}else{
			maxDayInYear = 365;
			selMass = nm_ca[tm_l-2];
		}
		return selMass;
	}
});

//console.log((Number(na4Metka) + Number(ev_dd)) + " - " + (Number(endMetka) + Number(evd_dd)));
// мерим длинну блока
//console.log(dlinnA); //разница между датой конца и начала
//console.log(dlinnA*48); //длинна блока			
//console.log(res-60);//точка старта 91
//console.log((Number(na4Metka) + Number(ev_dd)) - (res-60));//разница с точкой старта
//console.log(((Number(na4Metka) + Number(ev_dd)) - (res-60))*49);//координата отступа слева 
//console.log(na4Metka);//121 - начало месяца
//console.log(res);//163 - начало текущего месяца + день