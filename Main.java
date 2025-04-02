public class Main{
    public static void main(String[] args) {
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
}