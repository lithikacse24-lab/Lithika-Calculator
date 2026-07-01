let display = document.getElementById("display");

function appendValue(value) 
{
    if(display.value === "0" || display.value === "Error")
    {   display.value = value;   }
    else
    {   display.value += value;   }
}
function clearDisplay() 
{
    display.value = "0";
}
function eraseValue() 
{
    if(display.value === "Error")
    {   display.value = "0";   }
    else if(display.value.length >1)
    {   display.value = display.value.slice(0,-1);   }
    else
    {   display.value = "0";   }
}
function calculate() 
{
    try 
    {   display.value = eval(display.value);    } 
    catch 
    {   display.value = "Error";    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (key === "Backspace") 
    {   event.preventDefault();
        eraseValue();
    }
    else if (key === "Escape") 
    {   event.preventDefault();
        clearDisplay();
    }
    else if (key === "Enter" || key === "=") 
    {   event.preventDefault();
        calculate();
    }
    else if (
        (key >= "0" && key <= "9")  ||  key === "+" ||
        key === "-" ||  key === "*" ||  key === "/" ||
        key === "." ||  key === "(" ||  key === ")"
    )   {   appendValue(key);    }
});