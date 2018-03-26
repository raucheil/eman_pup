/*** ema_pp ***/
// version:1.0
// created: daniele colpo

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */

// function loadJSON(callback) {   
//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', '/ppfl/data/data.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//               callback(xobj.responseText);
              
//           }
//     };
//     xobj.send(null);  
//  }
 

function error_(val){
    var value=val;
    console.log('error_'+ value);
    var a='';
    if (value){
        a=value;
    }
    return a;
}

function today(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 
    return today = dd + '/' + mm + '/' + yyyy;
}

function countdown(){
    var seconds_left = 10;
    var interval = setInterval(function() {
    second_left=--seconds_left
    var today = new Date();
    var date_to_reply = new Date('2018-03-18');
    var timeinmilisec = date_to_reply.getTime()-today.getTime();
    var date1= Math.floor(timeinmilisec / (1000 * 60 * 60 * 24) );
    var date = new Date(timeinmilisec);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    // var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // document.getElementById('timer_div').innerHTML = '20:00:'+second_left;
    if (document.getElementById('timer_div') !== null){
    document.getElementById('timer_div').innerHTML = h+':'+m+':'+ s;
   //  // console.log('date1: '+date1);
    ////  // console.log('date2: '+date2);
    if (s <= 0)
    {
        document.getElementById('timer_div').innerHTML = 'You are ready';
        clearInterval(interval);
    }
    }
    }, 1000);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PrdRandom(lapse,count){
    if (lapse>=count){
        count=1
    }
    else{
    if (Number.isInteger(lapse)){
        count=count-lapse;
    }
    }
    return count;
}

function make_vr(time){
        // var value=getRandomInt(100, 150);
        var value=getRandomInt(10, 30);
        return value;
}

function create_cnt(img,title,text){
    if (!img){img='https://www.popflu.com/ppfl/img/map.png';}
    // if (!number){number='42';}
    if (!title){title='basic title';}
    if (!text){text='basic text';}
    var slide='<div class="badge"><div class="badge_img"><img src="'+img+'" alt=""></div><div class="badge_text"><div class="badge_text_title">'+title+'</div><div class="badge_text_1">'+text+'</div><div class="small_text">powered by popflu</div></div>';
    return slide;
}


function random_visitor(jsdata,les){
    var img = 'https://www.popflu.com/ppfl/img/data.png';
    var obj = jsdata;
    var count = Object.keys(obj).length;
    var number=make_vr();
    var title='in questo momento ci sono'
    var text=''+ count +' persone incuriosite da popflu'
    var slide=create_cnt(img,title,text);
    return slide;
}

function random_product(elap,jsdata,les){
    var img='https://www.popflu.com/ppfl/img/calendar.png';
    var number=PrdRandom(elap,10);
    var title='in data '+ today() + '';
    var text='rimangono soltanto '+ number +' prodotti a prezzo scontato.';
    var slide=create_cnt(img,title,text);
    return slide;
}

function promotion(jsdata,les){
    var img='https://www.popflu.com/ppfl/img/calendar.png';
    var title='data di scadenza della promozione online: ';
    var text=''+ today() +'';
    var slide=create_cnt(img,title,text);
    return slide;
}

function random_buyer(jsdata,les){
    var n=getRandomInt(10,30);
    var img='https://www.popflu.com/ppfl/img/calendar.png';
    var title='il '+ today() + '';
    var text=''+ n +' persone si sono iscritti alla beta gratuita ';
    var slide=create_cnt(img,title,text);
    return slide;
}

function random_city(jsdata,les){
    // var city = ['Agrigento', 'Alessandria', 'Ancona', 'Aosta', 'L\'Aquila', 'Arezzo', 'Ascoli-Piceno', 'Asti', 'Avellino', 'Bari', 'Barletta-Andria-Trani', 'Belluno', 'Benevento', 'Bergamo', 'Biella', 'Bologna', 'Bolzano', 'Brescia', 'Brindisi', 'Cagliari', 'Caltanissetta', 'Campobasso', 'Carbonia Iglesias', 'Caserta', 'Catania', 'Catanzaro', 'Chieti', 'Como', 'Cosenza', 'Cremona', 'Crotone', 'Cuneo', 'Enna', 'Fermo', 'Ferrara', 'Firenze', 'Foggia', 'Forli-Cesena', 'Frosinone', 'Genova', 'Gorizia', 'Grosseto', 'Imperia', 'Isernia', 'La-Spezia', 'Latina', 'Lecce', 'Lecco', 'Livorno', 'Lodi', 'Lucca', 'Macerata', 'Mantova', 'Massa-Carrara', 'Matera', 'Medio Campidano', 'Messina', 'Milano', 'Modena', 'Monza-Brianza', 'Napoli', 'Novara', 'Nuoro', 'Ogliastra', 'Olbia Tempio', 'Oristano', 'Padova', 'Palermo', 'Parma', 'Pavia', 'Perugia', 'Pesaro-Urbino', 'Pescara', 'Piacenza', 'Pisa', 'Pistoia', 'Pordenone', 'Potenza', 'Prato', 'Ragusa', 'Ravenna', 'Reggio-Calabria', 'Reggio-Emilia', 'Rieti', 'Rimini', 'Roma', 'Rovigo', 'Salerno', 'Sassari', 'Savona', 'Siena', 'Siracusa', 'Sondrio', 'Taranto', 'Teramo', 'Terni', 'Torino', 'Trapani', 'Trento', 'Treviso', 'Trieste', 'Udine', 'Varese', 'Venezia', 'Verbania', 'Vercelli', 'Verona', 'Vibo-Valentia', 'Vicenza', 'Viterbo'];
    var obj = jsdata;
    var count = Object.keys(obj).length;
    // console.log(count);
    var les=les;
    var n=getRandomInt(0,count-les);
    var citta=error_(obj[n].citta);
    var img='https://www.popflu.com/ppfl/img/map.png';
    var title='una persona da: ';
    var text=''+citta+' si è registrata alla beta gratuita';
    var slide=create_cnt(img,title,text);
    return slide;
}

function end_promo(){
    var img='https://www.popflu.com/ppfl/img/count.png';
    var title='alla scadenza della promozione di oggi mancano: ';
    var text='<div id="timer_div"></div>';
    var slide=create_cnt(img,title,text);
    return slide;
}

function subscriber(jsdata,les) {
    var img = 'https://www.popflu.com/ppfl/img/check.png';
    // var obj = jsdata;
    var obj = jsdata;
    var count = Object.keys(obj).length;
    // console.log(count);
    var les=les;
    var n=getRandomInt(0,count-les);
    // var giorno = obj;
    var title='il '+ obj[n].data + ' alle ' + obj[n].ora+ '';
    var text=''+obj[n].name+' si è registrato alla beta gratuita';
    var slide=create_cnt(img,title,text);
    return slide;
}

function subscriber_samo(jsdata,les) {
    var img = 'https://www.popflu.com/ppfl/img/check.png';
    // var obj = jsdata;
    var obj = jsdata;
    if (!obj) {
        console.log('obj non availabe');
        // break;
    }
    // var count = 0;
    var les=les;
    var count = Object.keys(obj).length-les; //ds3.csv insert an extra row at request so -2 to fix overcount
    // console.log(count);
    var n = getRandomInt(0, count);
    // console.log(n);

    // var giorno = obj;
    if (obj[n].data) {
        var day = obj[n].data;    
    } else {
        var day = '';
    }
    if (obj[n].name) {
        var name= obj[n].name;
    } else {
        var name = '';
    }
    if (obj[n].surname) {
        var surname=obj[n].surname
    } else {
        var surname = '';
    }
    // var title='il '+day+' ';
    // var text=''+name+' '+surname+' si è registrato alla beta gratuita';
    // var slide = create_cnt(img, title, text);
    var title='il giorno '+day+'';
    var text=''+name+' '+surname+' si è abbonato a ....';
    var slide=create_cnt(img,title,text);
    return slide;
}
// in questo momento ci sono [n° random, > 100] visitatori sul sito 
// in data [data odierna] rimangono soltanto [n° random, < 10] prodotti a prezzo scontato. (Ogni 30 secondi il numero potrebbe ridursi di uno. Quando arriva a "1" il contatore si ferma, non va a zero)
// data di scadenza della promozione online: [data odierna]
// il [data odierna] hanno acquistato [n° random > 30] 
// un ordine è appena stato effettuato da [città random italiana]
// alla scadenza della promozione di oggi mancano [countdown, qualche ora, <12h]

// var cnt_3=''

// var cnt='<div class="badge"><div class="badge_img"><img src="img/map.png" alt=""></div><div class="badge_text"><div class="badge_text_title">John Snow</div><div class="badge_text_1">Recently signed up from Italy</div><div class="badge_text_1">an hour ago</div></div>';
// var cnt_2='<div class="badge"><div class="badge_img"><img src="img/user.png" alt=""></div><div class="badge_text"><div class="badge_text_title">Kalisi</div><div class="badge_text_1">Recently signed up from Italy</div><div class="badge_text_1">an hour ago</div></div>';


function get_slide_type(elm,elapsed,jsdata,les){
    switch(elm){
        case 1:
            var cnt=random_visitor(jsdata,les);
            // var cnt=subscriber(jsdata);
            break;
        case 2:
            var cnt=random_product(elapsed,jsdata,les);
            break;
        case 3:
            var cnt=promotion(jsdata,les);
            break;
        case 4:
            var cnt=random_buyer(jsdata,les);
            break;
        case 5:
            var cnt=random_city(jsdata,les);
            break;
        case 6:
            var cnt=end_promo(jsdata,les);
            break;    
        case 7:
            var cnt=subscriber(jsdata,les);
            break;   
        case 8:
            var cnt=subscriber_samo(jsdata);
            break;  
    }
    return cnt;
}

function do_slide(data){
    var c = arr.length; 
    // // console.log(jsdata);
    // // console.log(jsdata);

    var now=Date.now();
    var elapsed=Math.trunc((now-start)/5000);
   //  // console.log('start: '+start+'; Now: '+now+ '; elapsed: '+ elapsed);
    // alertify.dismissAll();
    alertify.set('notifier', 'position' , 'bottom-left');
    var cnt_alt = arr[i];
    var slide=get_slide_type(cnt_alt,elapsed, data);   
    var notification = alertify.message(slide);
    notification.delay(10);
    // if (i=6){
    //     countdown();
    // }
    countdown();
    notification.ondismiss = function(){
        i++;
       //  // console.log(slide);
        // break;
        if (i<c) {  
           //  // console.log(i);   //  if the counter < 10, call the loop function
            show_slide(i,arr,start,url);             //  ..  again which will trigger another 
        }
        else{
            i=0;
            show_slide(i,arr,start,url);
        }
        }
}

function show_slide(i, arr, start, url,les,pos) {    
    var url = url;
    var fileExt = url.split('.').pop();
    var pos=pos;
    console.log('pos'+pos);
    switch(pos){
        case 'dl':
        position='bottom-left';
        break;
        case 'dr':
        position='bottom-right';
        break;
        case 'tl':
        position='top-left';
        break;
        case 'tr':
        position='top-right';
        break;
        default:
        position='bottom-left';
        break;
    }
    console.log(pos);
    switch(fileExt){
        case "json":
        fetch(url)
            .then(res =>res.json())
            .then((out) => {
                var now=Date.now();
                var elapsed=Math.trunc((now-start)/5000);
                var c=arr.length;
                alertify.set('notifier', 'position', ''+position+'');
                var cnt_alt = arr[i];
                var les=1;
                var slide=get_slide_type(cnt_alt,elapsed,data,les,pos);   
                var notification = alertify.message(slide);
                notification.delay(10);
                countdown();
                notification.ondismiss = function(){
                    i++;
                    if (i<c) {  
                       //  // console.log(i);   //  if the counter < 10, call the loop function
                        show_slide(i,arr,start,url);             //  ..  again which will trigger another 
                    }
                    else{
                        i=0;
                        show_slide(i,arr,start,url);
                    }
                    }
            }).catch(err => { throw err }); 
        break; 
        case "csv":
        d3.csv(url).then(function(data) {
            var now=Date.now();
            var elapsed=Math.trunc((now-start)/5000);
           //  // console.log('start: '+start+'; Now: '+now+ '; elapsed: '+ elapsed);
            // alertify.dismissAll();
            alertify.set('notifier', 'position' , ''+position+'');
            var cnt_alt = arr[i];
            var les=2;
            var slide=get_slide_type(cnt_alt,elapsed, data,les,pos);   
            var notification = alertify.message(slide);
            notification.delay(10);
            var c=arr.length;
            countdown();
            notification.ondismiss = function(){
                i++;
               //  // console.log(slide);
                // break;
                if (i<c) {  
                   //  // console.log(i);   //  if the counter < 10, call the loop function
                    show_slide(i,arr,start,url,les,pos);             //  ..  again which will trigger another 
                }
                else{
                    i=0;
                    show_slide(i,arr,start,url,les,pos);
                }
                }
            },function(error, rows){
        console.log(rows); 
        });
        break;
        default: ""
            console.log('file errato'+fileExt+'');
        break;
    }   
}


// var promo=[6,2,3,4,5,1]; 
// var promo_slide=[6,2]; 

function em_pp(promo_slide,url,pos,cssv) {
    var cssv= cssv;
    if (!(cssv)){
        cssv='v1';
    }
    var cssId = 'PopCss';  // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'http://localhost:8000/css/stylesheet.css';
        link.media = 'all' ; 
        head.appendChild(link);
    }
    // var str=document.getElementById("myDiv");   
    // str.replace("<link rel=\'stylesheet\' href=\"https://www.danielecolpo.it/ema_pp/css/stylesheet.css\">", "");
    var start=Date.now();
    var i = 0;
    var promo = promo_slide;
    // console.log('promo'+promo.length);
    if (!(promo)){
        var promo = [1,7,5]; 
    }
    else if (promo.length===0){
        var promo = [1,7,5];
    }
    var pos=pos;
    if(!(pos)){
        pos="dl";
    }
    else if (pos===""){
        pos="dl";
    }
    // var promo = [1,7,5];
    // var url='http://localhost:8000/data/data.csv';
    var url=url;
    // setInterval(()=>fbocci(start),10000);
    show_slide(i,promo,start,url,'',pos); 
}
