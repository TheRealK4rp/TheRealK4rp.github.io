const asa = new Map([[0,["jia.jpg","latte.jpg",,,,,,]],[1,["poyo.jpg","aki.jpg",,,,,,]],[2,["null2.jpg","sumi.jpg",,,,,,]],[3,["null2.jpg","null2.jpg",,,,,]],[4,[,,,,,,]],[5,[,,,,,,]],[6,[,,,,,,]],[7,["null2.jpg","rose.jpg",,,,,,]],[8,["abso.jpg","null2.jpg",,,,,]],[9,["null2.jpg","null2.jpg",,,,,]],[10,["null2.jpg","null2.jpg",,,,,]],[11,[,,,,,,]],[12,[,,,,,,]],[13,[,,,,,,]],[14,["nico.jpg","null2.jpg",,,,,]],[15,["sumi.jpg","null2.jpg",,,,,]],[16,["null2.jpg","null2.jpg",,,,,]],[17,["null2.jpg","null2.jpg",,,,,]],[18,[,,,,,,]],[19,[,,,,,,]],[20,[,,,,,,]],[21,["poyo.jpg","null2.jpg",,,,,]],[22,["nico.jpg","null2.jpg",,,,,]],[23,["null2.jpg","abso.jpg",,,,,,]],[24,["null2.jpg","null2.jpg",,,,,]],[25,[,,,,,,]],[26,[,,,,,,]],[27,[,,,,,,]],[28,["poyo.jpg","aki.jpg",,,,,,]],[29,["sumi.jpg","null2.jpg",,,,,]],[30,["null2.jpg","latte.jpg",,,,,,]]]);



const instaL = new Map([['abso', 'maid.abso'],['ai', 'maid_aikichune'], ['aki','maid_aki_'],["aoi",'maid_aoi'],['berry',"sweetly__berry"],["dolly","matadollyy"],['jia',"maidjia"],['latte','latte_maid'],['lulu', 'maidlulu'],['mahou',"maid.mahou"],['mari',"wan.wan.mari"],['melly',"maid.melly"],['mikan', 'maid.mikan'],['mitsu',"maid_mitsu"],['moon',"moemoe.moon"],['nico',"nicotheunbridled"],['niya','maid_niya'],['nyan','maidnyan'],['poyo','maid.poyo'],['reyna',"otohimehaato"],['riri',"ririmaid"],['rose',"bytesizeangel"],['sae','dfmsae'],['saiki','maid_saiki'],['sakurin',"sakurin_maid"],['soul',"moomookyun"],['sumi','maid_sumi'],['toki','toki.etc_'],['yuna',"yuna.maid"]])
function startUp(){
    //setAllNull();
    const daysWeek = document.getElementById('daysWeek');
    const calendar = document.getElementById('calendarBody');
    daysWeek.addEventListener('scroll', e => {
        calendar.scrollLeft = daysWeek.scrollLeft;
        calendar.scrollTop = daysWeek.scrollTop;
    });

    calendar.addEventListener('scroll', e => {
        daysWeek.scrollLeft = calendar.scrollLeft;
        daysWeek.scrollTop = calendar.scrollTop;
    });

    if(true){
        const modifier = 6*(3)
                for(let i = 0;i < 31;i++){
                        for(let a = 0; a < 6; a++){
                            const name = "temp" + (i*6+a+modifier)
                            if(asa.get(i)[a] == null){
                                makeNULL(name)
                            }
                            else{
                                addImgAndName(name,asa.get(i)[a],"maids/")                        
                            }
                        }
                }
        }
        else{
                for(let i = 0;i < 140;i++){
                        if(yoru[i] == null || i > 140){
                                makeNULL('temp'+i)
                        }
                        else{
                                addImgAndName("temp"+i,yoru[i],"maids/")                        
                        }
                }
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

function makeNULL(id){
        document.getElementById(id).src="maids/null.png";
        document.getElementById(id+"-1").innerHTML = "";
        document.getElementById(id+"-1").style.display = "none";
        document.getElementById(id+"-2").style.display = "none";
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById(id+"-2").style.visibility = "hidden";
        document.getElementById(id+"-2").onclick = "";
        document.getElementById(id+"-2").style = ""
        resize(id);
}

function resize(id){
        resizeI(id,'45px','45px');
}

function resizeI(id,w,h){
        document.getElementById(id).style.width = w
        document.getElementById(id).style.height = h
        document.getElementById(id+'-2').style.width = '45px'
        document.getElementById(id+'-2').style.height = '45px'
}

function setAllNull(){
    for(let i = 0;i < 210;i++){
          makeNULL('temp'+i);                        
    }
}