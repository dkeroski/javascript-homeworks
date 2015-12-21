var button = document.getElementById('clicker');
var result = document.getElementById('result');

function checkbox()
{
    var doConsole=document.getElementById("doConsole").checked;;
    var doAlert=document.getElementById("doAlert").checked;
	var doResult = document.getElementById("doResult").checked;
    if(doConsole)console.log(" Result print in console");
    if(doAlert)alert(" Result print in alert");
    if (doResult) result.innerHTML += "Result print in div";
   
return false;   
};

button.addEventListener("click" , checkbox);