import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class Main{

    public static String[] maids = {"ai","aki","aoi","berry","dolly","jia","latte","mahou","mari","melly","mitsu","moon","nico","niya","nyan","poyo","reyna","riri","rose","sae","saiki","sakurin","soul","sumi","toki","yuna"};
    public static void main(String[] args) {
        //printAsa();
        //printYoru();

        //printEvent();
        //printMaidButton();
        //printHTML(); 
        //printcomma();

        //replaceLines(); 
        removelink("Koi no Yokushiryoku-type EXCITER - 153 BPM https://www.youtube.com/watch?v=Xi2aZH3JKh0&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=5\r\n" + //
                        "STRAIGHT JET - 154 BPM https://www.youtube.com/watch?v=2oK45vJ3Jq4&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=1\r\n" + //
                        "あくあ色ぱれっと【ホロライブ/湊あくあ】- 156 BPM https://www.youtube.com/watch?v=6bnaBnd4kyU&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=2\r\n" + //
                        "【Ado】阿修羅ちゃん (Ashura-chan) - 156 BPM https://www.youtube.com/watch?v=cyq5-StPISU&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=4\r\n" + //
                        "HimeHina - RettouJoutou - 160 BPM https://www.youtube.com/watch?v=il4cAeVzZwI&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=31\r\n" + //
                        "JAM PROJECT - SKILL - 166 BPM https://www.youtube.com/watch?v=Pfwd1i2V94M&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=6\r\n" + //
                        "YOASOBI - Idol - Cover【Kotoka Torahime | NIJISANJI EN】 - 166 BPM https://www.youtube.com/watch?v=WW8Mci3xoMU&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=7\r\n" + //
                        "MYGO 影色舞 Silhouette dance - 166 BPM https://www.youtube.com/watch?v=5_ZWx7Q26Tw&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=10\r\n" + //
                        "【オモイヨシノ】恋詠桜 - 168 BPM https://www.youtube.com/watch?v=XOycZd2qWFw&list=PLdtB9hTrVDD57aw6mYN61pWkHzwyS5SwN&index=9");
        //changeFirstTwoLines(); ok the other one works now lol
        // doesnt actually work well becaue of if you write more than the previous amount it kinda just breaks things lmao
    }

    public static void removelink(String link){
        StringBuilder a = new StringBuilder();
        int i; 
        a.append(link.substring(0,i = link.indexOf("https://")));
        int e = link.indexOf("index",i);
        while((i = link.indexOf("https://",i+1)) >= 0){
            a.append(link.substring(e,i)); 
            a.append("\n");
            e = link.indexOf("index",i+1);
            i++;
        }
        System.out.println(a.toString());
    }

    public static void printMaidButton(){
        for(String maid : maids){
            System.out.println("<a onclick = \"onlyMember('"+ maid +"')\">"+Character.toUpperCase( maid.charAt(0))+maid.substring(1)+"</a>");
        }
    }

    public static void printHTML(){
        int day = 1;
        for(int i = 0; i<168;i++){
            if(i%4==0){
                if(day == -1){ System.out.println("</div>\n<div id = 'special'>");}
                else System.out.println("</div>\n<div>");
                if(i/4 >=6 && day <=30){
                    System.out.println(day);
                    day++;
                }
            }

            if(i%4==0 && day%7!=3 && i > 23 && i < 144){
                System.out.println("\t<div id = temp"+i+"-2><span id = temp"+i+ "-1></span><img id = temp"+i+"><img class = 'mana'></div>");
            }
            else if(i%4==1 && day%7!=3 && day%7 != 4 && day%7 != 5 && i > 32 && i <144) System.out.println("\t<div id = temp"+i+"-2><span id = temp"+i+ "-1></span><img id = temp"+i+"><img class = 'mana2'></div>");
            else System.out.println("\t<div id = temp"+i+"-2><span id = temp"+i+ "-1></span><img id = temp"+i+"></div>");
            /* 
            if(i==75){
                printEvent();
            }*/
        }
    }

    public static void printEvent(){
        for(int i = 0;i < 11;i++){
            System.out.println("\t<div id = event"+i+"-2 class = 'eventnum1'><span id = event"+i+ "-1></span><img id = \"event" +i+"\"></div>");
        }

    }

    public static String printAsa(){
        try{
            File file = new File("asa.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            StringBuilder output = new StringBuilder();
            output.append("var asa = [,,,,,,,,,,,,,,,,,,,,,,,,");
            for(int i = 0;i<32;i++){
                String line = s.nextLine().toLowerCase().trim();
                if((i+6) % 7 == 0 || (i+4) % 7 == 0 || (i+5) % 7 == 0) line = ",,";
                else if(line.equals("")) line = "\"null2.png\",\"null2.png\",";
                else{
                    int a = line.indexOf(" ");
                    if(a<0) line = "\""+line + ".jpg\",\"null2.png\",";
                    else line = "\"" + line.substring(0,a) + ".jpg\",\"" + line.substring(a+1)+".jpg\",";
                }
                output.append(",");
                output.append(line);
                output.append(",");
            }
            s.close();
            output.append("]");
            return output.toString();

        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }
    /* ARCHIVE
    public static String printAsa(){
        try{
            File file = new File("asa.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            StringBuilder output = new StringBuilder();
            output.append("var asa = [,,,,,,,,,,,,");
            for(int i = 0;i<31;i++){
                String line = s.nextLine().toLowerCase().trim();
                if((i+3) % 7 == 0) line = ",,";
                else if(line.equals("")) line = "\"null2.png\",\"null2.png\",";
                else{
                    int a = line.indexOf(" ");
                    if(a<0) line = "\""+line + ".jpg\",\"null2.png\",";
                    else line = "\"" + line.substring(0,a) + ".jpg\",\"" + line.substring(a+1)+".jpg\",";
                }
                output.append(",");
                output.append(line);
                output.append(",");
            }
            s.close();
            output.append("]");
            return output.toString();

        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }*/

    public static String printYoru(){
        try{
            File file = new File("yoru.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            StringBuilder output = new StringBuilder();
            output.append("var yoru = [,,,,,,,,,,,,,,,,,,,,,,,,");
            for(int i = 0;i<32;i++){
                String line = s.nextLine().toLowerCase().trim();
                if ((i+6)%7==0 || i == 10) {
                    line = ",,,,";
                }
                else if(line.equals("")){
                    if((i+0)%7 == 0 || (i+1)%7 == 0 || (i+2) % 7 == 0)
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
                            if(!((i+1)%7 == 0 || (i+2)%7 == 0 || (i+0) % 7 == 0)){ 
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
                output.append(line);
            }
            s.close();
            output.append("]");
            return output.toString();

        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public static void replaceLines() {
        try {
            // input the (modified) file content to the StringBuffer "input"
            BufferedReader file = new BufferedReader(new InputStreamReader(new FileInputStream("index.js"),"UTF-8"));
            StringBuffer inputBuffer = new StringBuffer();
            String line;
            int i = 0;
            while ((line = file.readLine()) != null) {
                switch(i){
                    case 0 -> {line = printAsa(); i++;}
                    case 1 -> {line = printYoru(); i++;}
                }
                inputBuffer.append(line);
                inputBuffer.append('\n');
            }
            file.close();
            // write the new string with the replaced line OVER the same file
            OutputStreamWriter fileOut = (new OutputStreamWriter(new FileOutputStream("index.js"),StandardCharsets.UTF_8));
            fileOut.write(inputBuffer.toString());
            fileOut.close();
    
        } catch (Exception e) {
            System.out.println("Problem reading file.");
        }
    }
    //boom random comment
    
    public static void changeFirstTwoLines(){
        try (RandomAccessFile in = new RandomAccessFile(new File("index.js"), "rw")){
            in.readLine();
            in.seek(0);
            in.writeBytes(printAsa());
            in.readLine();
            in.writeBytes(printYoru());
            in.close();
        } catch (Exception e) {
        }
    }

    public static void printcomma(){
        for(int i = 0;i<42;i++){
            if(i<6||i==34) System.out.print(",,,,");
            else if((i)%7==0) System.out.print(",,,,");
            else System.out.print(",\"null2.png\",\"null2.png\",,");
        }
    }
    //yoru
    public static void printcommay(){
        for(int i = 0;i<42;i++){
            if (i < 6 || i%7==0 || i == 34) {System.out.print(",,,,"); continue;}
            if((i+3)%7 == 0 || (i+2)%7 == 0 || (i+1) % 7 == 0)
                System.out.print("\"null2.png\",\"null2.png\",\"null2.png\",\"null2.png\",");
            else    
                System.out.print("\"null2.png\",\"null2.png\",\"null2.png\",,");
        }
    }

}