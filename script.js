let inputValue = '';

function addValue(number)
{
    inputValue += number;
    document.getElementById('displayVal').value = inputValue;
    
}

function allClear()
{
    inputValue = '';
    document.getElementById('displayVal').value = '';

}

function clearValue()
{
    if(inputValue >= 0)
    {
         inputValue =  Math.floor(inputValue/10);
    }
    else
    {
        inputValue = inputValue.slice(0,-1);
    }
     document.getElementById('displayVal').value =inputValue;
     if(inputValue == 0)
     {
        inputValue = '';
     }
}

function displayResult()
{
    inputValue = eval(inputValue);
    document.getElementById('displayVal').value = inputValue;
     if (inputValue == 0 ) {
        inputValue = '';
     }
}
