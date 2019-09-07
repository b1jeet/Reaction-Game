
         
            var start = new Date().getTime();
             function makeshape()
            {   var top=Math.random()*400;
              var left=Math.random()*400;
             var width=(Math.random()*200) + 100;
             if(Math.random() < 0.5)
                 {
                     document.getElementById("shape").style.borderRadius = "50%";
                     
                 }
             else
             {
                 document.getElementById("shape").style.borderRadius = "0";
             }

               document.getElementById("shape").style.top= top+"px";
             document.getElementById("shape").style.left= left+"px";
             document.getElementById("shape").style.width= width+"px";
             document.getElementById("shape").style.height= width+"px";
             document.getElementById("shape").style.display="block"; 
                start = new Date().getTime();
            }
            function appearafterdelay()
            {
            setTimeout(makeshape,Math.random() * 2000);    
            }
            appearafterdelay();
        document.getElementById("shape").onclick = function()
        {   document.getElementById("shape").style.display="none";
         var end =new Date().getTime();
         var timeTaken=(end - start)/1000;
         document.getElementById("timetaken").innerHTML=timeTaken + "s";
         appearafterdelay();
        }
            