let string = ""; // this will be displayed on calculator screen
let buttons = document.querySelectorAll('button')  // it will select all the buttons whose class is 'button'

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string); 
             /*The eval() method evaluates or executes an argument.
             If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.*/
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = ""
            document.querySelector('input').value = string
        }
        else {
            console.log(e.target.innerHTML)
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})