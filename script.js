//change theme
function toggle()
{

    var text = document.getElementById("toggle").innerText;

    //change text of the toggle button
    if(text === "Light Mode")
    {
        document.getElementById("toggle").innerText = "Dark Mode";
        
    }
    else
    {
        document.getElementById("toggle").innerText = "Light Mode";
    }
     
    //change the color and style in dark mode and toggle
    var element = document.body;
    element.classList.toggle("dark-mode");
   
    //styling the calculator container in dark mode
    var element = document.getElementById("container");
    element.classList.toggle("cal-dark");

    
    var element = document.getElementById("output-value");
    element.classList.toggle("output-value-dark");

    //empty circle in dark mode
    var element = document.getElementById("empty");
    element.classList.toggle("empty-dark");

    var element = document.getElementById("empty2");
    element.classList.toggle("empty-dark");

   
}

//functionality of the calculator 


//clear text
function clr()
{
    document.getElementById("output-value").value = " ";
    document.getElementById("history-value").value = " ";
   
}
//get values from buttons
function input_val(val)
{
    document.getElementById("output-value").value+= val;
}

//solve
function solve()
{
    let x = document.getElementById("output-value").value;
	let y = eval(x);
	document.getElementById("output-value").value = y;
}