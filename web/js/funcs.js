//urls
flighthub = "https://www.flighthub.com/?campaign=371&utm_campaign=Yazing&utm_content=2179451-2639103&utm_medium=affiliate&utm_source=cj&cjevent=1ce6b21c357311ec83ab75600a1c0e12";
travelocity = "https://yazing.com/deals/travelocity/saverneo";
clearme = "https://yazing.com/deals/clearme/saverneo";
rvshare = "https://yazing.com/deals/rvshare/saverneo";
adrenaline = "https://yazing.com/go/33961872/saverneo";
flyingblue = "https://yazing.com/go/19565839/saverneo";
airportlax = "https://yazing.com/go/41770163/saverneo";
airportparkingreservations = "https://yazing.com/deals/airportparkingreservations/saverneo";
airportparking = "https://yazing.com/deals/airportparking/saverneo";
airportrentalcars = "https://yazing.com/deals/airportrentalcars/saverneo";
alamo = "https://yazing.com/deals/alamo/saverneo";
alaskaairmiles = "https://yazing.com/go/19726622/saverneo";
accorhotels = "https://yazing.com/deals/accorhotels/saverneo";
anantara = "https://yazing.com/deals/anantara/saverneo";
applevacations = "https://yazing.com/deals/applevacations/saverneo";
aria = "https://yazing.com/go/38091451/saverneo";
ascend = "https://yazing.com/deals/ascend/saverneo";
atlantis = "https://yazing.com/deals/atlantis/saverneo";
autoeurope = "https://yazing.com/deals/autoeurope/saverneo";
avianca = "https://yazing.com/go/38311356/saverneo";
avidhotels = "https://yazing.com/go/35083603/saverneo";
avis = "https://yazing.com/deals/avis/saverneo";
backwoods = "https://yazing.com/deals/backwoods/saverneo";
ballys_las_vegas = "https://yazing.com/deals/ballys-las-vegas/saverneo";
barcelo = "https://yazing.com/deals/barcelo/saverneo";
bellagio = "https://yazing.com/deals/bellagio/saverneo";
bestwestern = "https://yazing.com/deals/bestwestern/saverneo";
bigbustours = "https://yazing.com/deals/bigbustours/saverneo";
bookingcredits = "https://yazing.com/deals/bookingcredits/saverneo";
bookvip = "https://yazing.com/deals/bookvip/saverneo";
bougerv = "https://yazing.com/deals/bougerv/saverneo";
boulderstation = "https://yazing.com/deals/boulderstation/saverneo";
brusselsairlines = "https://yazing.com/go/38885750/saverneo";
budget = "https://yazing.com/deals/budget/saverneo";
bulbhead = "https://yazing.com/deals/bulbhead/saverneo";
caesars_ac = "https://yazing.com/deals/caesars-ac/saverneo";

$(function () {

    $("body").on("click","div",function () {
        //$(this)???????????????????????????
        switch($(this).attr("data-target")){
            case "flighthub" : window.location.href= flighthub;break;
            case "travelocity" : window.location.href= travelocity;break;
            case "clearme" : window.location.href= clearme;break;
            case "rvshare" : window.location.href= rvshare;break;
            case "adrenaline" : window.location.href= adrenaline;break;
            case "flyingblue" : window.location.href= flyingblue;break;
            case "airportlax" : window.location.href= airportlax;break;
            case "airportparkingreservations" : window.location.href= airportparkingreservations;break;
            case "airportparking" : window.location.href= airportparking;break;
            case "airportrentalcars" : window.location.href= airportrentalcars;break;
            case "alamo" : window.location.href= alamo;break;
            case "alaskaairmiles" : window.location.href= alaskaairmiles;break;
            case "accorhotels" : window.location.href= accorhotels;break;
            case "anantara" : window.location.href= anantara;break;
            case "applevacations" : window.location.href= applevacations;break;
            case "aria" : window.location.href= aria;break;
            case "ascend" : window.location.href= ascend;break;
            case "atlantis" : window.location.href= atlantis;break;
            case "autoeurope" : window.location.href= autoeurope;break;
            case "avianca" : window.location.href= avianca;break;
            case "avidhotels" : window.location.href= avidhotels;break;
            case "avis" : window.location.href= avis;break;
            case "backwoods" : window.location.href= backwoods;break;
            case "ballys_las_vegas" : window.location.href= ballys_las_vegas;break;
            case "barcelo" : window.location.href= barcelo;break;
            case "bellagio" : window.location.href= bellagio;break;
            case "bestwestern" : window.location.href= bestwestern;break;
            case "bigbustours" : window.location.href= bigbustours;break;
            case "bookingcredits" : window.location.href= bookingcredits;break;
            case "bookvip" : window.location.href= bookvip;break;
            case "bougerv" : window.location.href= bougerv;break;
            case "boulderstation" : window.location.href= boulderstation;break;
            case "brusselsairlines" : window.location.href= brusselsairlines;break;
            case "budget" : window.location.href= budget;break;
            case "bulbhead" : window.location.href= bulbhead;break;
            case "caesars_ac" : window.location.href= caesars_ac;break;
            default:break;
        }
    });

});
