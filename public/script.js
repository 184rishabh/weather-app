document.getElementById("in").addEventListener("click",function(){
    this.style.color="white";
   
})
document.getElementById("btn").addEventListener("click", abc);
        function abc(event){
            event.preventDefault()
             var abc=document.getElementById("in").value;
             if(!abc)
             {
                 document.getElementById("box").innerHTML="<h1>Please Enter City<h1>";
             }
             else 
             {
                fetch(`/weather/${abc}`).then(res=>{     
                    if(res.ok)
                    {
                        return res.json();
                    }
                     else
                     {
                         throw new Error("error");
                     }
                    }).then(data=>{
                        var city=data.name;
                        var val=data.weather[0].main;
                        var t=data.main.feels_like-273;
                        var temp=t.toFixed(1);  
                        var a=String.fromCharCode(176);
                        if(val=="Clear")
                        {
                            document.getElementById("box").innerHTML=`<h1>${city}</h1>
                        <i class="fas fa-sun" style="color:yellow; font-size:50px;"></i>
                         <h1 style="font-size:50px;"> ${temp} ${a} </h1>
                        <h1> Weather : ${val}</h1>`; 
                        }
                        else if(val=="Haze")
                        {
                            document.getElementById("box").innerHTML=`<h1>${city}</h1>
                            <i class="fas fa-cloud-sun" style="color:yellow; font-size:50px;"></i>
                         <h1 style="font-size:50px;"> ${temp} ${a} </h1>
                        <h1> Weather : ${val}</h1>`; 
                        }
                        else if(val=="Rain")
                        {
                            document.getElementById("box").innerHTML=`<h1>${city}</h1>
                            <i class="fas fa-cloud-rain" style="color:yellow; font-size:50px;"></i>
                         <h1 style="font-size:50px;"> ${temp} ${a} </h1>
                        <h1> Weather : ${val}</h1>`; 
                        }
                        else if(val=="Clouds")
                        {
                            document.getElementById("box").innerHTML=`<h1>${city}</h1>
                            <i class="fas fa-cloud" style="color:yellow; font-size:50px;"></i>
                         <h1 style="font-size:50px;"> ${temp} ${a} </h1>
                        <h1> Weather : ${val}</h1>`; 
                        }
                        else if(val=="Snow")
                        {
                            document.getElementById("box").innerHTML=`<h1>${city}</h1>
                            <i class="fas fa-snowflake" style="color:yellow; font-size:50px;"></i>
                         <h1 style="font-size:50px;"> ${temp} ${a} </h1>
                        <h1> Weather : ${val}</h1>`; 
                        }
                        else
                        {
                            document.getElementById("box").innerHTML=`<h1>${city}</h1>
                            <i class="fas fa-cloud-sun" style="color:yellow; font-size:50px;"></i>
                         <h1 style="font-size:50px;"> ${temp} ${a} </h1>
                        <h1> Weather : ${val}</h1>`; 
                        }
                        document.getElementById("in").value="";
                    }).catch(err=>{
                        document.getElementById("box").innerHTML="<h1>Please enter correct City<h1>";
                        document.getElementById("in").value="";
                    })
             }
        }
       