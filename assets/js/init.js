
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */

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

    return today = mm + '/' + dd + '/' + yyyy;
}


function countdown(){
    var seconds_left = 10;
    var interval = setInterval(function() {
    second_left=--seconds_left
    var today = new Date();
    var date_to_reply = new Date('2018-01-26');
    var timeinmilisec = date_to_reply.getTime()-today.getTime();
    var date1= Math.floor(timeinmilisec / (1000 * 60 * 60 * 24) );
    var date = new Date(timeinmilisec);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    // var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // document.getElementById('timer_div').innerHTML = '20:00:'+second_left;
    document.getElementById('timer_div').innerHTML = h+':'+m+':'+ s;
    console.log('date1: '+date1);
    // console.log('date2: '+date2);
    if (s <= 0)
    {
        document.getElementById('timer_div').innerHTML = 'You are ready';
        clearInterval(interval);
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
        var value=getRandomInt(100, 150);
        return value;
}

function create_cnt(img,title,text){
    if (!img){img='img/map.png';}
    // if (!number){number='42';}
    if (!title){title='basic title';}
    if (!text){text='basic text';}
    var slide='<div class="badge"><div class="badge_img"><img src="'+img+'" alt=""></div><div class="badge_text"><div class="badge_text_title">'+title+'</div><div class="badge_text_1">'+text+'</div></div>';
    return slide;
}


function random_visitor(){
    var img='img/user.png';
    var number=make_vr();
    var title='in questo momento ci sono'
    var text=' '+ number +' visitatori sul sito'
    var slide=create_cnt(img,title,text);
    return slide;
}

function random_product(elap){
    var img='img/user.png';
    var number=PrdRandom(elap,10);
    var title='in data'+ today() + '';
    var text='rimangono soltanto '+ number +' prodotti a prezzo scontato.';
    var slide=create_cnt(img,title,text);
    return slide;
}

function promotion(){
    var img='img/user.png';
    var title='data di scadenza della promozione online:'+ today() + '';
    var text=' ';
    var slide=create_cnt(img,title,text);
    return slide;
}

function random_buyer(){
    var n=getRandomInt(30,60);
    var img='img/user.png';
    var title='il'+ today() + '';
    var text='hanno acquistato '+ n +' clienti';
    var slide=create_cnt(img,title,text);
    return slide;
}

function random_city(){
    var city=['Agrigento','Alessandria','Ancona','Aosta','L\'Aquila','Arezzo','Ascoli-Piceno','Asti','Avellino','Bari','Barletta-Andria-Trani','Belluno','Benevento','Bergamo','Biella','Bologna','Bolzano','Brescia','Brindisi','Cagliari','Caltanissetta','Campobasso','Carbonia Iglesias','Caserta','Catania','Catanzaro','Chieti','Como','Cosenza','Cremona','Crotone','Cuneo','Enna','Fermo','Ferrara','Firenze','Foggia','Forli-Cesena','Frosinone','Genova','Gorizia','Grosseto','Imperia','Isernia','La-Spezia','Latina','Lecce','Lecco','Livorno','Lodi','Lucca','Macerata','Mantova','Massa-Carrara','Matera','Medio Campidano','Messina','Milano','Modena','Monza-Brianza','Napoli','Novara','Nuoro','Ogliastra','Olbia Tempio','Oristano','Padova','Palermo','Parma','Pavia','Perugia','Pesaro-Urbino','Pescara','Piacenza','Pisa','Pistoia','Pordenone','Potenza','Prato','Ragusa','Ravenna','Reggio-Calabria','Reggio-Emilia','Rieti','Rimini','Roma','Rovigo','Salerno','Sassari','Savona','Siena','Siracusa','Sondrio','Taranto','Teramo','Terni','Torino','Trapani','Trento','Treviso','Trieste','Udine','Varese','Venezia','Verbania','Vercelli','Verona','Vibo-Valentia','Vicenza','Viterbo'];
    var n=getRandomInt(0,109);
    var img='img/user.png';
    var title='un ordine è appena stato effettuato da:';
    var text=''+city[n]+'';
    var slide=create_cnt(img,title,text);
    return slide;
}

function end_promo(){
    var img='img/user.png';
    var title='alla scadenza della promozione di oggi mancano:';
    var text='<div id="timer_div"></div>';
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

var cnt='<div class="badge"><div class="badge_img"><img src="img/map.png" alt=""></div><div class="badge_text"><div class="badge_text_title">John Snow</div><div class="badge_text_1">Recently signed up from Italy</div><div class="badge_text_1">an hour ago</div></div>';
var cnt_2='<div class="badge"><div class="badge_img"><img src="img/user.png" alt=""></div><div class="badge_text"><div class="badge_text_title">Kalisi</div><div class="badge_text_1">Recently signed up from Italy</div><div class="badge_text_1">an hour ago</div></div>';


function fbocci(start){
    var now=Date.now();
    var elapsed=Math.trunc((now-start)/30000);
    console.log('start: '+start+'; Now: '+now+ '; elapsed: '+elapsed);
    alertify.dismissAll();
    alertify.set('notifier', 'position' , 'bottom-left');
    cnt_2=random_visitor();
    var promo=[1,2,3,4,5,6];
    var i=0;
    do{
        // for (i=0; i<promo.length; i++){
        var element=promo[i];
        switch(element){
            case 1:
                var cnt=random_visitor();
                break;
            case 2:
                var cnt=random_product(elapsed);
                break;
            case 3:
                var cnt=promotion();
                break;
            case 4:
                var cnt=random_buyer();
                break;
            case 5:
                var cnt=random_city();
                break;
            case 6:
                var cnt=end_promo();
                break;
        }
        var notification= alertify.success(cnt,8, function(){
            console.log(element);
            // continue;
        });
        if (element=6){
            countdown();
        }
        // notification.ondismiss = function(){
        //     continue;
        // }
        i++;
    }while(i<promo.length)
        // var notification= alertify.success(cnt_2,5);
        // notification.ondismiss = function(){ 
        // var cnt=random_product(elapsed);
        // var notification_2=alertify.success(cnt,5);
        //} 
        // setInterval(fbocci,10000);
    // clearInterval();
}
window.onload = function(){
    var start=Date.now();
    // setInterval(()=>fbocci(start),10000);
}