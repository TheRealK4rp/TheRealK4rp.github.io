import java.io.*;
import java.util.Scanner;
public class Main{

    public static String[] maids = {"ai","aki","aoi","berry","dolly","jia","latte","mahou","mari","melly","mitsu","moon","nico","niya","nyan","poyo","reyna","riri","rose","sae","saiki","sakurin","soul","sumi","toki","yuna"};
    public static void main(String[] args) {
        //printHTML();
        printAsa();
        //printYoru();
        //printEvent();
        //printMaidButton();
    }

    public static void printMaidButton(){
        for(int i = 0;i<maids.length;i++){
            System.out.println("<a onclick = \"onlyMember('"+ maids[i] +"')\">"+Character.toUpperCase(maids[i].charAt(0))+maids[i].substring(1)+"</a>");
        }
    }

    public static void printHTML(){
        int day = 1;
        for(int i = 0; i<140;i++){
            if(i%4==0){
                if(day == 18){ System.out.println("</div>\n<div id = 'special'>");}
                else System.out.println("</div>\n<div>");
                if(i/4 >=1 && day <=30){
                    System.out.println(day);
                    day++;
                }
            }
            System.out.println("\t<div id = temp"+i+"-2><span id = temp"+i+ "-1></span><img id = temp"+i+"></div>");
            if(i==75){
                printEvent();
            }
        }
    }

    public static void printEvent(){
        for(int i = 0;i < 11;i++){
            System.out.println("\t<div id = event"+i+"-2 class = 'eventnum1'><span id = event"+i+ "-1></span><img id = \"event" +i+"\"></div>");
        }

    }

    public static void printAsa(){
        try{
            File file = new File("asa.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            for(int i = 0;i<30;i++){
                String line = s.nextLine().toLowerCase();
                if((i+1) % 7 == 0 || i == 1) line = ",,";
                else if(line.equals("")) line = "\"null2.png\",\"null2.png\",";
                else{
                    int a = line.indexOf(" ");
                    if(a<0) line = "\""+line + ".jpg\",\"null2.png\",";
                    else line = "\"" + line.substring(0,a) + ".jpg\",\"" + line.substring(a+1)+".jpg\",";
                }
                System.out.print(","+line+",");
            }
            s.close();

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public static void printYoru(){
        try{
            File file = new File("yoru.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            for(int i = 0;i<30;i++){
                
                String line = s.nextLine().toLowerCase();
                if ((i+1)%7==0 || i == 1) {
                    line = ",,,,";
                }
                else if(line.equals("")){
                    if((i+3)%7 == 0 || (i+2)%7 == 0 || (i+4) % 7 == 0)
                        line = "\"null2.png\",\"null2.png\",\"null2.png\",\"null2.png\",";
                    else    
                        line = "\"null2.png\",\"null2.png\",\"null2.png\",,";
                }
                else{
                    line = "\"" + line;
                    for(int b = 0; b<4;b++){
                        int a = line.indexOf(" ");
                        if(a < 0){
                            line+=".jpg\"";
                            int d = 4-b-1;
                            boolean f = false;
                            if(!((i+3)%7 == 0 || (i+2)%7 == 0 || (i+4) % 7 == 0)){ 
                                d--;
                                f=true;
                            }
                            for(int c = 0; c < d; c++){
                                line+=",\"null2.png\"";
                            }
                            
                            line+=(f)?",,":",";
                            break;
                        }
                        line = line.substring(0,a)+".jpg\",\""+line.substring(a+1);
                    }
                }
                System.out.print(line);
            }
            s.close();

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public static void test(){

    }

}