let input = document.getElementById('inputBox');

let arr = document.querySelectorAll('button');

let string = "";

// Prevent manual input in the input field
input.addEventListener('keydown', function(e) {
  e.preventDefault();  // Prevent any key press (like typing)
});


// #-Syntax: array.forEach(function(currentValue, index, arr), thisValue)
// #1-function()	Required.
// A function to run for each array element.
// #2-currentValue	Required.
// The value of the current element.


// #-Optimised code using switch stmt.
arr.forEach(button => {
  button.addEventListener('click', (event) => {
    const clickedButton = event.target.innerHTML

    switch (clickedButton) {
      case '=':
        try{
        string = eval(string)
        } catch(error){
          string = "error"
        }
        break

      case 'AC':
        string = ""
        break

      case 'DEL':
        if(string == "error"){
          string = ""
          }else{
            string = string.slice(0, -1)
          }
        break

      default:
        if(string == "error"){
        string = "" + clickedButton
        }else{
          string += clickedButton
        }
    }
    input.value = string
  });
});

