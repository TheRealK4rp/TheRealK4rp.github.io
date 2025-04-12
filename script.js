var asa = [,,,,,"moon.jpg","sumi.jpg",,,,,,,"toki.jpg","nyan.jpg",,,"mitsu.jpg","aki.jpg",,,"riri.jpg","soul.jpg",,,"moon.jpg","dolly.jpg",,,,,,"toki","poyo.jpg","sakurin.jpg",,,"sumi.jpg","rose.jpg",,,"sumi.jpg","melly.jpg",,,"mitsu.jpg","mahou.jpg",,,"mitsu.jpg","null2.png",,,"null2.png","null2.png",,,,,,,"moon.jpg","reyna.jpg",,,"sakurin.jpg","aki.jpg",,,"aoi.jpg","dolly.jpg",,,"mari.jpg","mitsu.jpg",,,"latte.jpg","riri.jpg",,,"saiki.jpg","null2.png",,,,,,,"toki.jpg","aki.jpg",,,"poyo.jpg","sakurin.jpg",,,"moon.jpg","null2.png",,,"null2.png","null2.png",,,"latte.jpg","mitsu.jpg",,,"soul.jpg","null2.png",,,,,,,"melly.jpg","null2.png",,,"poyo.jpg","null2.png",,,,,,];
var yoru = [,,,,"nico.jpg","ai.jpg","dolly.jpg",,,,,,"rose.jpg","dolly.jpg","sakurin.jpg",,"moon.jpg","latte.jpg","sae.jpg","dolly.jpg","saiki.jpg","poyo.jpg","mitsu.jpg","sumi.jpg","nyan.jpg","riri.jpg","rose.jpg","soul.jpg",,,,,"nico.jpg","sumi.jpg","melly.jpg",,"sae.jpg","yuna.jpg","aki.jpg",,"toki.jpg","aoi.jpg","dolly.jpg",,"poyo.jpg","ai.jpg","sakurin.jpg","aki.jpg","poyo.jpg","nico.jpg","riri.jpg","sumi.jpg","moon.jpg","nyan.jpg","saiki.jpg","sakurin.jpg",,,,,"reyna.jpg","dolly.jpg","yuna.jpg",,"sae.jpg","soul.jpg","melly.jpg",,"latte.jpg","nico.jpg","sakurin.jpg",,"null2.png","null2.png","null2.png","null2.png","mari.jpg","riri.jpg","sumi.jpg","null2.png","nyan.jpg","nico.jpg","mitsu.jpg","soul.jpg",,,,,"melly.jpg","null2.png","null2.png",,"rose.jpg","sae.jpg","yuna.jpg",,"latte.jpg","null2.png","null2.png",,"poyo.jpg","nico.jpg","null2.png","null2.png","riri.jpg","reyna.jpg","soul.jpg","null2.png","mitsu.jpg","null2.png","null2.png","null2.png",,,,,"null2.png","null2.png","null2.png",,"melly.jpg","moon.jpg","null2.png",,,,,];
var insta =["maid_aikichune","maid_aki_","maid_aoi","sweetly__berry","matadollyy","maidjia","latte_maid","maid.mahou","wan.wan.mari","maid.melly","maid_mitsu","moemoe.moon","nicotheunbridled","maid_niya","maidnyan","maid.poyo","otohimehaato","ririmaid","bytesizeangel","dfmsae","maid_saiki","sakurin_maid","moomookyun","maid_sumi","toki.etc_","yuna.maid"]
const instaL = new Map([['ai', 'maid_aikichune'], ['aki','maid_aki_'],["aoi",'maid_aoi'],['berry',"sweetly__berry"],["dolly","matadollyy"],['jia',"maidjia"],['latte','latte_maid'],['mahou',"maid.mahou"],['mari',"wan.wan.mari"],['melly',"maid.melly"],['mitsu',"maid_mitsu"],['moon',"moemoe.moon"],['nico',"nicotheunbridled"],['niya','maid_niya'],['nyan','maidnyan'],['poyo','maid.poyo'],['reyna',"otohimehaato"],['riri',"ririmaid"],['rose',"bytesizeangel"],['sae','dfmsae'],['saiki','maid_saiki'],['sakurin',"sakurin_maid"],['soul',"moomookyun"],['sumi','maid_sumi'],['toki','toki.etc_'],['yuna',"yuna.maid"]])
const event1 = ["sae.jpg","latte.jpg","nyan.jpg","ai.jpg","aki.jpg","reyna.jpg","moon.jpg","rose.jpg","null2.png","null2.png","bny.png"]

function daynight(array,ti,maid){
        for(let a = 0; a<array.length; a++){
                var i = (Math.floor(array[a]/4)*4);
                addImgAndName("temp"+i,maid+".jpg","maids/")

                if(ti == 1){
                        addImgAndName("temp"+(i+2),"asa.png","other/")
                        document.getElementById("temp"+(i+2)+"-1").innerHTML = "Asa"
                        document.getElementById("temp"+(i+2)+"-2").onclick = function() {changeS('asa')}
                }
                else{
                        addImgAndName("temp"+(i+3),"yoru.png","other/")
                        document.getElementById("temp"+(i+3)+"-1").innerHTML = "Yoru"
                        document.getElementById("temp"+(i+3)+"-2").onclick = function() {changeS('yoru')}
                }
                

        }
        
}

function onlyMember(maid){
        var index = []
        changeS('asa');
        for(let i = 4; i < 124; i++){
                hide("temp"+i)
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
        for(let a = 0; a < 11; a++){
            hide("event"+a);
            if(event1[a] == (maid +".jpg")) {
                index.push(72)
            }
        }
        daynight(index,0,maid)

}

function changeS(shift){
        hideEvent();

        if(shift == 'sae'){
                forFun('sae.jpg','🍤🍤🍤🍤')
                return;
        }

        if(shift == 'mitsu'){
                forFun('seal.png','🦭')
                return;
        }

        if(shift == "asa"){
                for(let i = 4;i < 124;i++){

                        if(asa[i] == null){
                                makeNULL(i);
                        }
                        else{
                                addImgAndName("temp"+i,asa[i],"maids/")
                        }
                }
        }
        else{
                for(let i = 4;i < 124;i++){
                        if(i >= 72 && i <= 75){

                                makeNULL(i);

                                if(i == 75){
                                        for(let a = 0; a < 11; a++){
                                                addImgAndName("event"+a,event1[a],"maids/")
                                        }
                                        changeFormat();

                                }
                        }
                        else if(yoru[i] == null){
                                makeNULL(i)
                        }
                        else{
                                addImgAndName("temp"+i,yoru[i],"maids/")
                        }
                }
        }
}
function hide(id){
        document.getElementById(id+"-2").style.visibility = "hidden"
        document.getElementById(id).style.visibility = "hidden"
}
function forFun(img,name){
        for(let i = 4; i <124;i++){
                addImgAndName("temp"+i,img,"maids/")
                document.getElementById("temp"+i+"-1").innerHTML = "Maid "+name;
        }
}
function addImgAndName(id,img,file){
        document.getElementById(id+"-2").style.visibility = "visible"
        document.getElementById(id).style.visibility = "visible"
        document.getElementById(id+"-2").style = 'cursor:pointer;'
        document.getElementById(id+"-1").style.display = "inherit";
        document.getElementById(id).src=file+img;
        if(img != "null2.png" && img != 'bny.png'){
                var t = img.charAt(0).toUpperCase();
                document.getElementById(id+"-1").innerHTML = "Maid " +t+ img.substring(1,img.indexOf("."))
                document.getElementById(id+"-2").onclick = function() {window.open('https://www.instagram.com/'+instaL.get(img.substring(0,img.indexOf("."))),'mywindow');}
        }
        else{
                document.getElementById(id+"-1").innerHTML = "Maid ???"
                document.getElementById(id+"-2").onclick = function() {window.open('https://www.instagram.com/' + insta[Math.floor(Math.random() * 26)],'mywindow');}

        }
}

function makeNULL(id){
        id = 'temp' + id;
        document.getElementById(id).src="maids/null.png";
        document.getElementById(id+"-1").innerHTML = "";
        document.getElementById(id+"-1").style.display = "none";
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById(id+"-2").onclick = "";
        document.getElementById(id+"-2").style = ""
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
        document.getElementById("special").style.flexDirection = 'column';
}
