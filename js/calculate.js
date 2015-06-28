 function calculate(){
             var number = 0;
             var number =document.getElementById("number").value;  
             
             var ans = logic(number);
             alert(ans);
           
           
        }

       function logic(number){
           var calNum = parseInt(number);
            // alert('asdda');
           var remainder=0;
           var answer = 0;
           var binary = [];
           var i=0;
            if(calNum==1){
                return 1;
            }
           else{
               while(calNum !=0){

                   remainder = calNum%2;
                   binary[i] = Math.round(remainder);
                   calNum = parseInt(calNum/2);
                   i++;

               }
              binary.reverse();
             return binary.join(' ');
            }
       }