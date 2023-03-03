const inputUser = document.getElementById('user');
const inputPassword = document.getElementById('password');
const labelUser = document.getElementById('labelUser');
const labelPassword =  document.getElementById('labelPassword');

inputUser.addEventListener('change', function(){
    if (inputUser.value == '') {
        labelUser.classList.remove(".bg-default");
        labelUser.classList.remove("inputValido");
        labelUser.classList.add("inputErroneo");
    } else {
        labelUser.classList.remove(".bg-default");
        labelUser.classList.remove("inputErroneo");
        labelUser.classList.add("inputValido");
    }
} )
inputPassword.addEventListener('change', function(){
    if (inputPassword.value == '') {
        labelPassword.classList.remove(".bg-default");
        labelPassword.classList.remove("inputValido");
        labelPassword.classList.add("inputErroneo");
        
    } else {
        labelPassword.classList.remove(".bg-default");
        labelPassword.classList.remove("inputErroneo");
        labelPassword.classList.add("inputValido");
    }
} )



// change label background color when i complete a input?


/* const submitButton = document.getElementById("submit")
const inputField = document.querySelectorAll(".input")

submitButton.addEventListener("click", function(e) {
  inputField.forEach(function(item) {
    e.preventDefault();
    if (item.value == '') {
      item.classList.add("red");
      item.nextElementSibling.classList.add("red");

    } else {
      item.classList.add("green")
      item.nextElementSibling.classList.remove("green");
    }
  })
})

inputField.forEach(function (item) {
  item.addEventListener('keyup', function(e) {
    const theInput = e.target;
    if (theInput.value) {
      theInput.classList.remove('red');
      theInput.classList.add('green');
    }
  });
});

.red {
  border: red 2px solid;
}

.green {
  border: green 2px solid;
}

<label for="myfield">My Field:</label>
<input class="input" id="myfield" name="myfield" />
<br/>
<label for="myotherfield">My Other Field:</label>
<input class="input" id="myotherfield" name="myotherfield" />

<button id="submit">Submit</button>

const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
});

.input:invalid {
  border: red 2px solid;
}

.input:valid {
  border: green 2px solid;
}

<label for="myfield">My Field:</label>
<input class="input" id="myfield" name="myfield" required/>
<br/>
<label for="myotherfield">My Other Field:</label>
<input class="input" id="myotherfield" name="myotherfield" required />

<button id="submit">Submit</button>

 */

//Source: https://stackoverflow.com/questions/72208665



