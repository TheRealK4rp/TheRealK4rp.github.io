var asa = [,,,,,"sumi.jpg","moon.jpg",,,,,,,"toki.jpg","nyan.jpg",,,"mitsu.jpg","aki.jpg",,,"riri.jpg","soul.jpg",,,"dolly.jpg","moon.jpg",,,,,,"toki.jpg","sakurin.jpg","poyo.jpg",,,"sumi.jpg","rose.jpg",,,"sumi.jpg","melly.jpg",,,"mitsu.jpg","mahou.jpg",,,"mitsu.jpg","berry.jpg",,,"jia.jpg","berry.jpg",,,,,,,"reyna.jpg","moon.jpg",,,"sakurin.jpg","aki.jpg",,,"dolly.jpg","aoi.jpg",,,"mitsu.jpg","sumi.jpg",,,"riri.jpg","latte.jpg",,,"saiki.jpg","null2.png",,,,,,,"toki.jpg","aki.jpg",,,"sakurin.jpg","poyo.jpg",,,"sumi.jpg","moon.jpg",,,"dolly.jpg","rose.jpg",,,"mitsu.jpg","latte.jpg",,,"soul.jpg","null2.png",,,,,,,"melly.jpg","null2.png",,,"poyo.jpg","null2.png",,]
var yoru = [,,,,"dolly.jpg","ai.jpg","nico.jpg",,,,,,"sakurin.jpg","rose.jpg","dolly.jpg",,"sae.jpg","moon.jpg","latte.jpg","dolly.jpg","mitsu.jpg","saiki.jpg","poyo.jpg","sumi.jpg","riri.jpg","nyan.jpg","rose.jpg","soul.jpg",,,,,"sumi.jpg","nico.jpg","melly.jpg",,"sae.jpg","yuna.jpg","aki.jpg",,"toki.jpg","aoi.jpg","dolly.jpg",,"sakurin.jpg","poyo.jpg","ai.jpg","aki.jpg","riri.jpg","poyo.jpg","nico.jpg","sumi.jpg","sakurin.jpg","moon.jpg","nyan.jpg","saiki.jpg",,,,,"sumi.jpg","dolly.jpg","yuna.jpg",,"sae.jpg","soul.jpg","melly.jpg",,"sakurin.jpg","latte.jpg","nico.jpg",,"null2.png","null2.png","null2.png","null2.png","sumi.jpg","mari.jpg","riri.jpg","ai.jpg","mitsu.jpg","nyan.jpg","nico.jpg","soul.jpg",,,,,"melly.jpg","ai.jpg","null2.png",,"sae.jpg","rose.jpg","yuna.jpg",,"sakurin.jpg","latte.jpg","ai.jpg",,"sumi.jpg","poyo.jpg","nico.jpg","null2.png","riri.jpg","reyna.jpg","soul.jpg","ai.jpg","mitsu.jpg","sumi.jpg","null2.png","null2.png",,,,,"dolly.jpg","rose.jpg","null2.png",,"sumi.jpg","melly.jpg","moon.jpg",,]
var insta = ["maid_aikichune","maid_aki_","maid_aoi","sweetly__berry","matadollyy","maidjia","latte_maid","maid.mahou","wan.wan.mari","maid.melly","maid_mitsu","moemoe.moon","nicotheunbridled","maid_niya","maidnyan","maid.poyo","otohimehaato","ririmaid","bytesizeangel","dfmsae","maid_saiki","sakurin_maid","moomookyun","maid_sumi","toki.etc_","yuna.maid"]
const instaL = new Map([['ai', 'maid_aikichune'], ['aki','maid_aki_'],["aoi",'maid_aoi'],['berry',"sweetly__berry"],["dolly","matadollyy"],['jia',"maidjia"],['latte','latte_maid'],['mahou',"maid.mahou"],['mari',"wan.wan.mari"],['melly',"maid.melly"],['mitsu',"maid_mitsu"],['moon',"moemoe.moon"],['nico',"nicotheunbridled"],['niya','maid_niya'],['nyan','maidnyan'],['poyo','maid.poyo'],['reyna',"otohimehaato"],['riri',"ririmaid"],['rose',"bytesizeangel"],['sae','dfmsae'],['saiki','maid_saiki'],['sakurin',"sakurin_maid"],['soul',"moomookyun"],['sumi','maid_sumi'],['toki','toki.etc_'],['yuna',"yuna.maid"]])
const event1 = ["sae.jpg","latte.jpg","nyan.jpg","ai.jpg","aki.jpg","reyna.jpg","moon.jpg","rose.jpg","mari.jpg","poyo.jpg","bny.png"]

//this just puts the maid + shift they work
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

//searches for shifts by going through all of them..
function onlyMember(maid){
        var index = []
        changeS('asa');
        for(let i = 4; i < 140; i++){
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
                if((maid+".jpg") == yoru[i] ){
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
        hideMana();

}

//changes the shifts from asa<->yoru
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
                addAndRemoveMana('asa');
                for(let i = 0;i < 140;i++){

                        if(asa[i] == null){
                                makeNULL(i);
                        }
                        else{
                                addImgAndName("temp"+i,asa[i],"maids/")
                        }
                }
        }
        else{
                addAndRemoveMana('yoru');
                for(let i = 0;i < 140;i++){
                        if(i >= 72 && i <= 75){

                                makeNULL(i);

                                if(i == 75){
                                        for(let a = 0; a < 11; a++){
                                                addImgAndName("event"+a,event1[a],"maids/")
                                        }
                                        document.getElementById("event10-2").onclick = function() {window.open("https://www.asayorumaidcafe.com/event-details/hop-step-spring",'mywindow');}
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
//hides the element
function hide(id){
        document.getElementById(id+"-2").style.visibility = "hidden"
        document.getElementById(id).style.visibility = "hidden"
}

//hides the manager M thing
function hideMana(){
        var mana = document.getElementsByClassName("mana")
        var mana2 = document.getElementsByClassName("mana2")
        for (var i = 0; i<mana.length;i++){
                mana2[i].style.visibility = "hidden"  
                mana[i].style.visibility = "hidden"  
        }
}

//this is for the non serious stuff
function forFun(img,name){
        for(let i = 4; i <140;i++){
                addImgAndName("temp"+i,img,"maids/")
                document.getElementById("temp"+i+"-1").innerHTML = "Maid "+name;
        }
}

//adds the image and name to one of the divs also links their insta
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

// hides the manager M depending on asa and yoru because of how i have them positioned lol
function addAndRemoveMana(shift){
        var mana = document.getElementsByClassName("mana")
        var mana2 = document.getElementsByClassName("mana2")
        if(shift == 'asa'){
                for (var i = 0; i<mana.length-4;i++){
                     mana[i].style.visibility = "hidden"  
                     mana2[i].style.visibility = "visible"  
                }
        }
        else{
                for (var i = 0; i<mana.length-4;i++){
                        mana2[i].style.visibility = "hidden"  
                        if(i==14) continue;
                        mana[i].style.visibility = "visible"  
                }  
        }
                
}

// makes the image disappear and removes any pointer events
function makeNULL(id){
        id = 'temp' + id;
        document.getElementById(id).src="maids/null.png";
        document.getElementById(id+"-1").innerHTML = "";
        document.getElementById(id+"-1").style.display = "none";
        document.getElementById(id+"-2").style.display = "none";
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById(id+"-2").style.visibility = "hidden";
        document.getElementById(id+"-2").onclick = "";
        document.getElementById(id+"-2").style = ""
}

//move the event divs and temp divs so they are displaeyd properly
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

// resets event
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

//for startup to hide the mana and assign images to the divs
function startUp(){
        changeS('asa');
        var mana = document.getElementsByClassName("mana")
        var mana2 = document.getElementsByClassName("mana2")
        for (var i = mana.length-4; i<mana.length;i++){
                mana2[i].style.visibility = "hidden"  
                mana[i].style.visibility = "hidden"  
        }
}
