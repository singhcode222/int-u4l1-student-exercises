let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".messages");

// CODE ALONG, PART 1 CONTINUED
// 3. Declare a variable to store the input element


<input class="user-input" placeholder="Type something...">
<button>Submit</button>
<div class="display"></div>
```


let button = document.querySelector("button");

button.addEventListener("click", function() {
  let userInput = document.querySelector(".user-input").value;
  document.querySelector(".display").innerHTML = userInput;
});

    // 4. Declare a variable to store the value of the input
    // 5. Use the console to check a value is saved.
    //  - Type something and click the button to confirm it works!

    // CODE ALONG, PART 2
    // 6. User .innerHTML to display the value to the messages div.
    // 7. Type something and test it out.
