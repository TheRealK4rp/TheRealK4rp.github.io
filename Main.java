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
        
        makeCalendar();

        //replaceLines(); 
        //replaceLinesTemp(); 

        //removelink(link);
        //changeFirstTwoLines(); ok the other one works now lol
        // doesnt actually work well becaue of if you write more than the previous amount it kinda just breaks things lmao
    }

    public static void removelink(String link){
        StringBuilder a = new StringBuilder();
        int i; 
        a.append(link.substring(0,i = link.indexOf("https://")));
        int e = link.indexOf("index",i); 
        while((i = link.indexOf("https://",i)) >= 0){
            a.append(link.substring(e,i)); 
            a.append("\n");
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
        for(int i = 0; i<140;i++){
            if(i%4==0){
                if(day == -1){ System.out.println("</div>\n<div id = 'special'>");}
                else System.out.println("</div>\n<div>");
                if(i/4 >=4 && day <=31){
                    System.out.println(day);
                    day++;
                }
            }

            if(i%4==0 && day%7!=5 && i < 128){
                System.out.println("\t<div id = temp"+i+"-2><span id = temp"+i+ "-1></span><img id = temp"+i+"><img class = 'mana'></div>");
            }
            else if(i%4==1 && day%7!=5 && day%7 != 6 && day %7 != 0 && i <128) System.out.println("\t<div id = temp"+i+"-2><span id = temp"+i+ "-1></span><img id = temp"+i+"><img class = 'mana2'></div>");
            else System.out.println("\t<div id = temp"+i+"-2><span id = temp"+i+ "-1></span><img id = temp"+i+"></div>");
            /* 
            if(i==75){
                printEvent();
            }*/
        }
    }
    //Mon == 0, etc
    public static String printHTML2(int firstDay, int days){
        int htmldays = (days+firstDay) * 4;
        int monday = 0;
        switch(firstDay){
            case 0 -> {monday = 2;}
            case 1 -> {monday = 1;}
            case 2 -> {monday = 0;}
            case 3 -> {monday = 6;}
            case 4 -> {monday = 5;}
            case 5 -> {monday = 4;}
            case 6 -> {monday = 3;}
        }
        int tuesday = (monday+1) % 7;
        int wednesday = (monday+2) % 7;
        StringBuilder out = new StringBuilder();
        int day = 1;
        for(int i = 0; i<140;i++){
            if(i%4==0){
                if(day == -1){ out.append("</div>\n<div id = 'special'>\n");}
                else out.append("</div>\n<div>\n");
                if(i/4 >=firstDay && day <=days){
                    out.append(day);
                    out.append("\n");
                    day++;
                }
            }

            if(i%4==0 && day%7!=monday && i <= htmldays && day >= 2){
                out.append("\t<div id = temp").append(i).append("-2><span id = temp").append(i).append("-1></span><img id = temp").append(i).append("><img class = 'mana'></div>\n");
            }
            else if(i%4==1 && day%7!=monday && day%7 != tuesday && day %7 != wednesday && i <=htmldays && day >=2) out.append("\t<div id = temp").append(i).append("-2><span id = temp").append(i).append("-1></span><img id = temp").append(i).append("><img class = 'mana2'></div>\n");
            else out.append("\t<div id = temp").append(i).append("-2><span id = temp").append(i).append("-1></span><img id = temp").append(i).append("></div>\n");
            /* 
            if(i==75){
                printEvent();
            }*/
        }
        return out.toString();
    }

    public static void makeCalendar(){
        try {
            Scanner s = new Scanner(System.in);
            System.out.println("Enter first day of the week:\nMonday = 0\nTuesday = 1\nWednesday = 2\nThursday = 3\nFriday = 4\nSaturday = 5\nSunday = 6");
            int num = s.nextInt() % 7;
            System.out.println("Enter number of days in the month.");
            int days = s.nextInt();
            s.close();
            BufferedReader file = new BufferedReader(new InputStreamReader(new FileInputStream("index.html"),"UTF-8"));
            StringBuffer inputBuffer = new StringBuffer();
            String line;
            int i = 0;
            while ((line = file.readLine()) != null) {
                switch(i){
                    case 77 -> {line = printHTML2(num,days);line = line.substring(6); i++;}
                    case 79 -> {line = "</div>\n</div>\n    <div>Missing: i dont feel like going through the list lol</div>\n</body>\n</html>";}
                }
                inputBuffer.append(line);
                inputBuffer.append('\n');
                i++;
                if(i==80) break;
            }
            file.close();
            // write the new string with the replaced line OVER the same file
            OutputStreamWriter fileOut = (new OutputStreamWriter(new FileOutputStream("test.html"),StandardCharsets.UTF_8));
            fileOut.write(inputBuffer.toString());
            fileOut.close();
    
        } catch (Exception e) {
            System.out.println("Problem reading file.");
        }
    }

    public static void printEvent(){
        for(int i = 0;i < 11;i++){
            System.out.println("\t<div id = event"+i+"-2 class = 'eventnum1'><span id = event"+i+ "-1></span><img id = \"event" +i+"\"></div>");
        }

    }

    public static String printAsa(){
        int dayOne = 2; // change this dayThree is Monday
        int dayTwo = (dayOne+1) % 7;
        int dayThree = (dayTwo+1) % 7;
        try{
            File file = new File("asa.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            StringBuilder output = new StringBuilder();
            output.append("var asa = [,,,,,,,,,,,,,,,,");
            for(int i = 0;i<32;i++){
                String line = s.nextLine().toLowerCase().trim();
                if(((i+dayOne) % 7 == 0 || (i+dayTwo) % 7 == 0 || (i+dayThree) % 7 == 0 || i > 31 ) ) line = ",,";
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
        int dayOne = 5; // change this (dayOne-1 is monday)
        int dayTwo = (dayOne+1) % 7;
        int dayThree = (dayTwo+1) % 7;
        try{
            File file = new File("yoru.txt");
            FileInputStream in = new FileInputStream(file);
            Scanner s = new Scanner(in);
            StringBuilder output = new StringBuilder();
            output.append("var yoru = [,,,,,,,,,,,,,,,,");
            for(int i = 0;i<32;i++){
                String line = s.nextLine().toLowerCase().trim();
                if (((i+dayOne-1)%7==0 || i >= 31 )) {
                    line = ",,,,";
                }
                else if(line.equals("")){
                    if(((i+dayOne)%7 == 0 || (i+dayTwo)%7 == 0 || (i+dayThree) % 7 == 0))
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
                            //day - 1 to add one
                            if(!(((i+dayOne)%7 == 0 || (i+dayTwo)%7 == 0 || (i+dayThree) % 7 == 0) || i == 1 ||  i == 12 || i == 26)){ 
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
    public static void replaceLinesTemp() {
        try {
            // input the (modified) file content to the StringBuffer "input"
            BufferedReader file = new BufferedReader(new InputStreamReader(new FileInputStream("temp.js"),"UTF-8"));
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
            OutputStreamWriter fileOut = (new OutputStreamWriter(new FileOutputStream("temp.js"),StandardCharsets.UTF_8));
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