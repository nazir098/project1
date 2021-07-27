let screen=document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue= '';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        
        if(buttonText == 'X')
        {
            
            screenValue += '*';
            screen.value = screenValue;
        }
        else if(buttonText == 'C')
        {
            screenValue = '';
            screen.value=screenValue;   
        }
        else if(buttonText == '=')
       { 
           screen.value = eval(screenValue);
           console.log('Ans is : ',screen.value);
           
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
        
    })
}