import java.io.*;
import java.util.Scanner;
public class Main{
    public static void main(String[] args) {
        //printHTML();
        //printAsa();
        printYoru();
        //printEvent();
    }

    public static void printHTML(){
        int day = 1;
        for(int i = 0; i<140;i++){
            if(i%4==0){
                System.out.println("</div>\n<div>");
                if(i/4 >=1 && day <=30){
                    System.out.println(day);
                    day++;
                }
            }
            System.out.println("\t<div id = temp"+i+"-2 style=\"cursor: pointer;\"><span id = temp"+i+ "-1></span><img src=\"\" id = \"temp" +i+"\" width=\"85\" height =\"85\"></div>");
        }
    }

    public static void printEvent(){
        System.out.println("<div>");
        for(int i = 0;i < 10;i++){
            System.out.println("\t<div id = event"+i+"-2 display = \"hidden\" style=\"cursor: pointer;\"><span id = event"+i+ "-1></span><img src=\"\" id = \"event" +i+"\" width=\"38\" height =\"38\"></div>");
        }
        System.out.println("</div>");

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

}