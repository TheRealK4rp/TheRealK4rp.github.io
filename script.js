var asa = [,,,,,"moon.jpg","sumi.jpg",,,,,,,"toki.jpg","nyan.jpg",,,"mitsu.jpg","aki.jpg",,,"riri.jpg","soul.jpg",,,"moon.jpg","dolly.jpg",,,,,,"toki.jpg","poyo.jpg","sakurin.jpg",,,"sumi.jpg","rose.jpg",,,"sumi.jpg","melly.jpg",,,"mitsu.jpg","null2.png",,,"mitsu.jpg","null2.png",,,"null2.png","null2.png",,,,,,,"moon.jpg","reyna.jpg",,,"sakurin.jpg","aki.jpg",,,"aoi.jpg","dolly.jpg",,,"mari.jpg","null2.png",,,"latte.jpg","riri.jpg",,,"saiki.jpg","null2.png",,,,,,,"toki.jpg","aki.jpg",,,"poyo.jpg","sakurin.jpg",,,"moon.jpg","null2.png",,,"null2.png","null2.png",,,"latte.jpg","null2.png",,,"null2.png","null2.png",,,,,,,"melly.jpg","null2.png",,,"poyo.jpg","null2.png",,,,,,,];
var yoru = [,,,,"nico.jpg","ai.jpg","dolly.jpg",,,,,,"rose.jpg","dolly.jpg","sakurin.jpg",,"moon.jpg","latte.jpg","sae.jpg","dolly.jpg","saiki.jpg","poyo.jpg","mitsu.jpg","sumi.jpg","nyan.jpg","riri.jpg","rose.jpg","soul.jpg",,,,,"nico.jpg","sumi.jpg","melly.jpg",,"sae.jpg","yuna.jpg","aki.jpg",,"toki.jpg","aoi.jpg","dolly.jpg",,"poyo.jpg","ai.jpg","sakurin.jpg","aki.jpg","saiki.jpg","nico.jpg","riri.jpg","sumi.jpg","moon.jpg","nyan.jpg","saiki.jpg","sakurin.jpg",,,,,"reyna.jpg","dolly.jpg","yuna.jpg",,"sae.jpg","soul.jpg","melly.jpg",,"latte.jpg","nico.jpg","sakurin.jpg",,"null2.png","null2.png","null2.png","null2.png","mari.jpg","riri.jpg","sumi.jpg","null2.png","nyan.jpg","nico.jpg","mitsu.jpg","soul.jpg",,,,,"melly.jpg","null2.png","null2.png",,"rose.jpg","sae.jpg","yuna.jpg",,"latte.jpg","null2.png","null2.png",,"poyo.jpg","null2.png","null2.png","null2.png","riri.jpg","reyna.jpg","null2.png","null2.png","null2.png","null2.png","null2.png","null2.png",,,,,"null2.png","null2.png","null2.png",,"melly.jpg","moon.jpg","null2.png",,,,,,,,,,,,,,,,,,,,,,];
var insta =["maid_aikichune","maid_aki_","maid_aoi","sweetly__berry","matadollyy","maidjia","latte_maid","maid.mahou","wan.wan.mari","maid.melly","maid_mitsu","moemoe.moon","nicotheunbridled","maid_niya","maidnyan","maid.poyo","otohimehaato","ririmaid","bytesizeangel","dfmsae","maid_saiki","sakurin_maid","moomookyun","maid_sumi","toki.etc_","yuna.maid"]
const instaL = new Map([['ai', 'maid_aikichune'], ['aki','maid_aki_'],["aoi",'maid_aoi'],['berry',"sweetly__berry"],["dolly","matadollyy"],['jia',"maidjia"],['latte','latte_maid'],['mahou',"maid.mahou"],['mari',"wan.wan.mari"],['melly',"maid.melly"],['mitsu',"maid_mitsu"],['moon',"moemoe.moon"],['nico',"nicotheunbridled"],['niya','maid_niya'],['nyan','maidnyan'],['poyo','maid.poyo'],['reyna',"otohimehaato"],['riri',"ririmaid"],['rose',"bytesizeangel"],['sae','dfmsae'],['saiki','maid_saiki'],['sakurin',"sakurin_maid"],['soul',"moomookyun"],['sumi','maid_sumi'],['toki','toki.etc_'],['yuna',"yuna.maid"]])
const event1 = ["sae.jpg","latte.jpg","nyan.jpg","ai.jpg","aki.jpg","reyna.jpg","moon.jpg","rose.jpg","null2.png","null2.png","bny.png"]
var time;
function daynight(array,ti,maid){
        for(let a = 0; a<array.length; a++){
                var i = (Math.floor(array[a]/4)*4);
                var m = "maids/" + maid + ".jpg";
                document.getElementById("temp"+i+"-2").style.visibility = "visible"
                document.getElementById("temp"+i).style.visibility = "visible"
                document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get((m).substring(0,(m).indexOf("."))),'mywindow');}
                document.getElementById("temp" + i+"-2").style = 'cursor:pointer;'

                document.getElementById("temp"+i+"-1").style.display = "inherit";
                document.getElementById("temp" +i).src=m;
                var t = (m).charAt(0);
                t = t.toUpperCase()
                document.getElementById("temp"+i+"-1").innerHTML = "Maid " +t+ (m).substring(1,(m).indexOf("."))

                if(ti == 1){
                        document.getElementById("temp"+(i+2)+"-2").style.visibility = "visible"
                        document.getElementById("temp"+(i+2)).style.visibility = "visible"
                        document.getElementById("temp"+(i+2)+"-1").style.display = "inherit";
                        document.getElementById("temp" +(i+2)).src="other/asa.png";
                }
                else{
                        document.getElementById("temp"+(i+3)+"-2").style.visibility = "visible"
                        document.getElementById("temp"+(i+3)).style.visibility = "visible"
                        document.getElementById("temp"+(i+3)+"-1").style.display = "inherit";
                        document.getElementById("temp" +(i+3)).src="other/yoru.png";
                }
                

        }
}

function onlyMember(maid){
        var index = []
        for(let i = 4; i < 124; i++){
                document.getElementById("temp"+i+"-2").style.visibility = "hidden"
                document.getElementById("temp"+i).style.visibility = "hidden"
        }

        for(let i = 4; i<asa.length;i++){
                if((maid+".jpg") == asa[i]){
                        index.push(i);
                }
        }
        daynight(index,1,maid)
        index=[]
        for(let i = 4; i<yoru.length;i++){
                if((maid+".jpg") == yoru[i]){
                        index.push(i);
                }
        }
        daynight(index,0,maid)
        /*
        if(time == 'asa'){
        for(let i = 0;i < asa.length;i++){
                if(i<4) continue;
                document.getElementById("temp"+i+"-2").style.visibility = "visible"
                document.getElementById("temp"+i).style.visibility = "visible"
                if(asa[i] != (maid + ".jpg")){
                        document.getElementById("temp" +i).src="null.png";
                        document.getElementById("temp"+i).style.visibility = "hidden";
                        document.getElementById("temp"+i+"-1").style.display = "none";

                        document.getElementById("temp" + i+"-2").onclick = "";
                        document.getElementById("temp" + i+"-2").style = ""
                }
                else{
                        document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get(asa[i].substring(0,asa[i].indexOf("."))),'mywindow');}
                        document.getElementById("temp" + i+"-2").style = 'cursor:pointer;'

                        document.getElementById("temp"+i+"-1").style.display = "inherit";
                        document.getElementById("temp" +i).src=asa[i];
                        var t = asa[i].charAt(0);
                        t = t.toUpperCase()
                        document.getElementById("temp"+i+"-1").innerHTML = "Maid " +t+ asa[i].substring(1,asa[i].indexOf("."))
                        
                }
                }
        }
        else{
        for(let i = 0;i < yoru.length;i++){
            if(i<4) continue;
            document.getElementById("temp"+i+"-2").style.visibility = "visible"
            if(i >= 72 && i <= 75){
                document.getElementById("temp" +i).src="null.png";
                document.getElementById("temp"+i+"-1").innerHTML = "";
                document.getElementById("temp"+i+"-1").style.display = "none";
                document.getElementById("temp" + i+"-2").onclick = "";
                document.getElementById("temp" + i+"-2").style = ""
                document.getElementById("temp"+i+"-2").style.visibility = "hidden"

                document.getElementById("temp" + i).style.width = '35px'
                document.getElementById("temp"+i).style.height = '35px'
                if(i == 75){
                        for(let a = 0; a < 11; a++){
                                if(event1[a] != (maid +".jpg") && event1[a] != 'bny.png') {
                                        document.getElementById("event"+a+"-2").style.visibility = "hidden"
                                        continue;
                                }
                                document.getElementById("event"+a+"-2").style.visibility = "visible"
                                document.getElementById("event" + a+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get(event1[a].substring(0,event1[a].indexOf("."))),'mywindow');}
                                document.getElementById("event" + a+"-2").style = 'cursor:pointer;'
                                
                                document.getElementById("event"+a+"-1").style.display = "inherit";
                                document.getElementById("event" +a).src=event1[a];
                                if(event1[a] != "null2.png" && event1[a] != 'bny.png'){
                                        var t = event1[a].charAt(0);
                                        t = t.toUpperCase();
                                        document.getElementById("event"+a+"-1").innerHTML = "Maid " +t+ event1[a].substring(1,event1[a].indexOf("."));
                                }
                                else{
                                        document.getElementById("event"+a+"-1").innerHTML = "Maid ???";
                                        document.getElementById("event" +a+"-2").onclick = function() {window.open('https://www.instagram.com/' + insta[Math.floor(Math.random() * 26)],'mywindow');}

                                }
                        }
                        changeFormat();

                }
            }
            else if(yoru[i] == null || yoru[i] != maid + '.jpg'){
                document.getElementById("temp" +i).src="null.png";
                document.getElementById("temp"+i+"-1").innerHTML = "";
                document.getElementById("temp"+i+"-1").style.display = "none";
                document.getElementById("temp"+i).style.visibility = "hidden";

                document.getElementById("temp" + i+"-2").onclick = "";
                document.getElementById("temp" + i+"-2").style = ""
            }
            else{
                //document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.asayorumaidcafe.com/items/'+yoru[i].substring(0,yoru[i].indexOf(".")),'mywindow');}
                document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get(yoru[i].substring(0,yoru[i].indexOf("."))),'mywindow');}
                document.getElementById("temp" + i+"-2").style = 'cursor:pointer;'
                document.getElementById("temp"+i).style.visibility = "visible"

                document.getElementById("temp"+i+"-1").style.display = "inherit";
                document.getElementById("temp" +i).src=yoru[i];
                if(yoru[i] != "null2.png"){
                    var t = yoru[i].charAt(0);
                    t = t.toUpperCase();
                    document.getElementById("temp"+i+"-1").innerHTML = "Maid " +t+ yoru[i].substring(1,yoru[i].indexOf("."));
                }
                else{
                    document.getElementById("temp"+i+"-1").innerHTML = "Maid ???";
                    document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/' + insta[Math.floor(Math.random() * 26)],'mywindow');}

                }
            }
        }
        }
        */
}

function changeS(shift){
        hideEvent();
        document.getElementById("special").style.flexDirection = 'column';
    if(shift == 'sae'){
        for(let i = 4; i <124;i++){
                document.getElementById("temp" +i).src="maids/sae.jpg";
                document.getElementById("temp"+i+"-1").style.display = "inherit";
                document.getElementById("temp" + i+"-2").style = 'cursor:pointer;'
                document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/dfmsae/','mywindow');}
                document.getElementById("temp"+i+"-1").innerHTML = "Maid 🍤🍤🍤🍤"
                document.getElementById("temp"+i+"-2").style.visibility = "visible"
                document.getElementById("temp"+i).style.visibility = "visible";



        }
        
        return;
    }
    if(shift == 'mitsu'){
        for(let i = 4; i <124;i++){
                document.getElementById("temp" +i).src="maids/seal.png";
                document.getElementById("temp"+i+"-1").style.display = "inherit";
                document.getElementById("temp" + i+"-2").style = 'cursor:pointer;'
                document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/maid_mitsu','mywindow');}
                document.getElementById("temp"+i+"-1").innerHTML = "Maid 🦭"
                document.getElementById("temp"+i+"-2").style.visibility = "visible" 
                document.getElementById("temp"+i).style.visibility = "visible";


        }
        return;
    }
    if(shift == "asa"){
        time = shift;
        //onclick="window.open('https:/\/www.instagram.com/dfmsae/','mywindow');" style="cursor: pointer;"
        for(let i = 4;i < 124;i++){
            if(i<4) continue;
            document.getElementById("temp"+i+"-2").style.visibility = "visible"
            document.getElementById("temp"+i).style.visibility = "visible"

            if(asa[i] == null){
                document.getElementById("temp" +i).src="maids/null.png";
                document.getElementById("temp"+i).style.visibility = "hidden";
                document.getElementById("temp"+i+"-1").style.display = "none";

                document.getElementById("temp" + i+"-2").onclick = "";
                document.getElementById("temp" + i+"-2").style = ""
            }
            else{
                //document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.asayorumaidcafe.com/items/'+asa[i].substring(0,asa[i].indexOf(".")),'mywindow');}
                document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get(asa[i].substring(0,asa[i].indexOf("."))),'mywindow');}
                document.getElementById("temp" + i+"-2").style = 'cursor:pointer;'

                document.getElementById("temp"+i+"-1").style.display = "inherit";
                document.getElementById("temp" +i).src="maids/" + asa[i];
                if(asa[i] != "null2.png"){
                    var t = asa[i].charAt(0);
                    t = t.toUpperCase()
                    document.getElementById("temp"+i+"-1").innerHTML = "Maid " +t+ asa[i].substring(1,asa[i].indexOf("."))
                }
                else{
                    document.getElementById("temp"+i+"-1").innerHTML = "Maid ???"
                    document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/' + insta[Math.floor(Math.random() * 26)],'mywindow');}

                }
            }
        }
    }
    else{
        time = shift;
        for(let i = 0;i < 124;i++){
            if(i<4) continue;
            document.getElementById("temp"+i+"-2").style.visibility = "visible"
            if(i >= 72 && i <= 75){
                document.getElementById("temp" +i).src="maids/null.png";
                document.getElementById("temp"+i+"-1").innerHTML = "";
                document.getElementById("temp"+i+"-1").style.display = "none";
                document.getElementById("temp" + i+"-2").onclick = "";
                document.getElementById("temp" + i+"-2").style = ""
                document.getElementById("temp"+i+"-2").style.visibility = "hidden"

                document.getElementById("temp" + i).style.width = '35px'
                document.getElementById("temp"+i).style.height = '35px'
                if(i == 75){
                        for(let a = 0; a < 11; a++){
                                document.getElementById("event"+a+"-2").style.visibility = "visible"
                                document.getElementById("event" + a+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get(event1[a].substring(0,event1[a].indexOf("."))),'mywindow');}
                                document.getElementById("event" + a+"-2").style = 'cursor:pointer;'
                                
                                document.getElementById("event"+a+"-1").style.display = "inherit";
                                document.getElementById("event" +a).src="maids/"+event1[a];
                                if(event1[a] != "null2.png" && event1[a] != 'bny.png'){
                                        var t = event1[a].charAt(0);
                                        t = t.toUpperCase();
                                        document.getElementById("event"+a+"-1").innerHTML = "Maid " +t+ event1[a].substring(1,event1[a].indexOf("."));
                                }
                                else{
                                        document.getElementById("event"+a+"-1").innerHTML = "Maid ???";
                                        document.getElementById("event" +a+"-2").onclick = function() {window.open('https://www.instagram.com/' + insta[Math.floor(Math.random() * 26)],'mywindow');}

                                }
                        }
                        changeFormat();

                }
            }
            else if(yoru[i] == null){
                document.getElementById("temp" +i).src="maids/null.png";
                document.getElementById("temp"+i+"-1").innerHTML = "";
                document.getElementById("temp"+i+"-1").style.display = "none";
                document.getElementById("temp"+i).style.visibility = "hidden";

                document.getElementById("temp" + i+"-2").onclick = "";
                document.getElementById("temp" + i+"-2").style = ""
            }
            else{
                //document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.asayorumaidcafe.com/items/'+yoru[i].substring(0,yoru[i].indexOf(".")),'mywindow');}
                document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get(yoru[i].substring(0,yoru[i].indexOf("."))),'mywindow');}
                document.getElementById("temp" + i+"-2").style = 'cursor:pointer;'
                document.getElementById("temp"+i).style.visibility = "visible"

                document.getElementById("temp"+i+"-1").style.display = "inherit";
                document.getElementById("temp" +i).src="maids/"+yoru[i];
                if(yoru[i] != "null2.png"){
                    var t = yoru[i].charAt(0);
                    t = t.toUpperCase();
                    document.getElementById("temp"+i+"-1").innerHTML = "Maid " +t+ yoru[i].substring(1,yoru[i].indexOf("."));
                }
                else{
                    document.getElementById("temp"+i+"-1").innerHTML = "Maid ???";
                    document.getElementById("temp" + i+"-2").onclick = function() {window.open('https://www.instagram.com/' + insta[Math.floor(Math.random() * 26)],'mywindow');}

                }
            }
        }
    }
}
function changeFormat(){
        for(let a = 0; a < 11; a++){
                document.getElementById("event"+a+"-2").style.order = a+1;
        }
        for(let i = 72; i <= 75; i++){
                document.getElementById("temp" + i+"-2").style.order = i-60;
        }
        document.getElementById("special").style.flexDirection = 'initial';
        document.getElementById("special").style.flexBasis = "fit-content";

}

function hideEvent(){
        for(let a = 0; a < 11; a++){
                document.getElementById("event"+a+"-2").style.visibility = "hidden"
        }
        for(let i = 72; i <= 75; i++){
                document.getElementById("temp" + i).style.width = '85px'
                document.getElementById("temp"+i).style.height = '85px'
        }
}
