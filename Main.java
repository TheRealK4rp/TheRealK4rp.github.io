import java.io.*;
import java.util.Scanner;
public class Main{
    public static void main(String[] args) {
        printYoru();
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
            System.out.println("\t<img src=\"\" id = \"temp" +i+"\" width=\"85\" height =\"85\">");
        }
    }

    public static void printAsa(){
        try{
            File file = new File("asa.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            for(int i = 0;i<30;i++){
                String line = s.nextLine().toLowerCase();
                if(line.equals("")) line = ",,";
                else{
                    int a = line.indexOf(" ");
                    if(a<0) line = "\""+line + ".jpg\",,";
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
                if(line.equals("")) line = ",,,,";
                else{
                    line = "\"" + line;
                    for(int b = 0; b<4;b++){
                        int a = line.indexOf(" ");
                        if(a < 0){
                            line+=".jpg\"";
                            for(int c = 0; c < 4-b; c++){
                                line+=",";
                            }
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