var asa = [,,,,,,,,,,,,,"sakurin.jpg","aki.jpg",,,"dolly.jpg","rose.jpg",,,"dolly.jpg","soul.jpg",,,"sakurin.jpg","saiki.jpg",,,,,,,"dolly.jpg","poyo.jpg",,,"sakurin.jpg","null2.png",,,"aoi.jpg","null2.png",,,"sumi.jpg","mahou.jpg",,,"berry.jpg","null2.png",,,"moon.jpg","null2.png",,,,,,,"sumi.jpg","null2.png",,,"null2.png","null2.png",,,"sumi.jpg","poyo.jpg",,,"mitsu.jpg","null2.png",,,"riri.jpg","berry.jpg",,,"mitsu.jpg","null2.png",,,,,,,"null2.png","null2.png",,,"dolly.jpg","poyo.jpg",,,"null2.png","null2.png",,,"sakurin.jpg","null2.png",,,"sakurin.jpg","null2.png",,,"null2.png","null2.png",,,,,,,"sakurin.jpg","null2.png",,,"sakurin.jpg","poyo.jpg",,,"dolly.jpg","null2.png",,,"mitsu.jpg","poyo.jpg",,,"mari.jpg","null2.png",,]
var yoru = [,,,,,,,,,,,,"sakurin.jpg","ai.jpg","poyo.jpg",,"sae.jpg","mari.jpg","sumi.jpg","sakurin.jpg","sae.jpg","latte.jpg","reyna.jpg","riri.jpg","riri.png","null2.png","null2.png","null2.png",,,,,"sumi.jpg","rose.jpg","moon.jpg",,"sae.jpg","riri.jpg","null2.png",,"sakurin.jpg","poyo.jpg","null2.png",,"riri.jpg","dolly.jpg","soul.jpg","null2.png","sakurin.jpg","poyo.jpg","mari.jpg","sumi.jpg","sae.jpg","dolly.jpg","reyna.jpg","soul.jpg",,,,,"sakurin.jpg","dolly.jpg","rose.jpg",,"null2.png","null2.png","null2.png",,"sakurin.jpg","nico.jpg","latte.jpg",,"sae.jpg","sumi.jpg","riri.jpg","aoi.jpg","sakurin.jpg","mitsu.jpg","reyna.jpg","null2.png","jia.jpg","null2.png","null2.png","null2.png",,,,,"sakurin.jpg","nico.jpg","null2.png",,"sae.jpg","rose.jpg","null2.png",,"nico.jpg","null2.png","null2.png",,"sakurin.jpg","ai.jpg","dolly.jpg","sae.jpg","reyna.jpg","mitsu.jpg","null2.png","null2.png","reyna.jpg","riri.jpg","null2.png","null2.png",,,,,"nico.jpg","soul.jpg","null2.png",,"sae.jpg","null2.png","null2.png",,"rose.jpg","null2.png","null2.png",,"sae.jpg","nico.jpg","latte.jpg","riri.jpg","dolly.jpg","mitsu.jpg","null2.png","null2.png",]
var insta = ["maid_aikichune","maid_aki_","maid_aoi","sweetly__berry","matadollyy","maidjia","latte_maid","maid.mahou","wan.wan.mari","maid.melly","maid_mitsu","moemoe.moon","nicotheunbridled","maid_niya","maidnyan","maid.poyo","otohimehaato","ririmaid","bytesizeangel","dfmsae","maid_saiki","sakurin_maid","moomookyun","maid_sumi","toki.etc_","yuna.maid"]
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
        for(let i = 12; i < 140; i++){
                hide("temp"+i)
        }

        for(let i = 3; i<asa.length;i++){
                if((maid+".jpg") == asa[i]){
                        index.push(i);
                }
        }
        daynight(index,1,maid)
        index=[]
        for(let i = 3; i<yoru.length;i++){
                if((maid+".jpg") == yoru[i] || (maid+".png") == yoru[i]){
                        index.push(i);
                }
        }
        daynight(index,0,maid)
        hideMana()

}

function changeS(shift){

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
                                makeNULL('temp'+i);
                        }
                        else{
                                addImgAndName("temp"+i,asa[i],"maids/")
                        }
                }
        }
        else{
                addAndRemoveMana('yoru');
                for(let i = 0;i < 140;i++){
                        if(yoru[i] == null || i == 27 || i == 25|| i == 26|| i == 81|| i == 82 || i == 83){
                                makeNULL('temp'+i)
                        }
                        else{
                                addImgAndName("temp"+i,yoru[i],"maids/")
                                if(i==24) {
                                        resizeI("temp"+i,'180px','180px');
                                        document.getElementById('temp'+i+"-2").onclick = function() {window.open('https://www.asayorumaidcafe.com/event-details/strike-it-ririch-rockin-casino-live','mywindow');}
                                }
                                if(i == 80){
                                        resizeI("temp"+i,'180px','180px');
                                        document.getElementById('temp'+i+"-2").onclick = function() {window.open('https://www.asayorumaidcafe.com/event-details/soiree-under-the-stars-jias-birthday','mywindow');}
                                }
                                
                        }
                }
        }
}
function hide(id){
        document.getElementById(id+"-2").style.visibility = "hidden"
        document.getElementById(id).style.visibility = "hidden"
}
function forFun(img,name){
        for(let i = 12; i <136;i++){
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
        resize(id)
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

function addAndRemoveMana(shift){
        var mana = document.getElementsByClassName("mana")
        var mana2 = document.getElementsByClassName("mana2")
        if(shift == 'asa'){
                for (var i = 0; i<mana.length;i++){
                     mana[i].style.visibility = "hidden"  
                }
                for (var i = 0; i<mana2.length;i++){
                        mana2[i].style.visibility = "visible"  
                   }
        }
        else{
                for (var i = 0; i<mana.length;i++){
                        mana[i].style.visibility = "visible"  
                }  
                for (var i = 0; i<mana2.length;i++){
                        mana2[i].style.visibility = "hidden"  
                }  
        }
                
}

function resize(id){
        resizeI(id,'85px','85px');
}

function resizeI(id,w,h){
        document.getElementById(id).style.width = w
        document.getElementById(id).style.height = h
        document.getElementById(id+'-2').style.width = '89.25px'
        document.getElementById(id+'-2').style.height = '91.25px'
}

function makeNULL(id){
        document.getElementById(id).src="maids/null.png";
        document.getElementById(id+"-1").innerHTML = "";
        document.getElementById(id+"-1").style.display = "none";
        document.getElementById(id+"-2").style.display = "none";
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById(id+"-2").style.visibility = "hidden";
        document.getElementById(id+"-2").onclick = "";
        document.getElementById(id+"-2").style = ""
        resize(id)
}

function hideMana(){
        var mana = document.getElementsByClassName("mana")
        var mana2 = document.getElementsByClassName("mana2")
        for (var i = 0; i<mana.length;i++){
                mana[i].style.visibility = "hidden"  
        }  
        for (var i = 0; i<mana2.length;i++){
                mana2[i].style.visibility = "hidden"  
        }
}


function startUp(){
        changeS('asa');
}
