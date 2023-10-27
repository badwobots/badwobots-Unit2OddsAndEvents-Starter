// HTML section, form and button references by ID. Added some IDs to the HTML since I couldnt get the numbers into the boxes for the life of me.
const numberBank = document.getElementById("numberBank");
const numberSort = document.getElementById("sortedNumbers");
const buttonSort = document.getElementById("sortAll");
const oneSort = document.getElementById("sortOne");
const oddNumbers = document.getElementById("odds");
const evenNumbers = document.getElementById("evens");
const numberInput = document.getElementById("number");
const form = document.getElementById("form");
const oddOutput = document.getElementById("oddOutput")
const evenOutput = document.getElementById("evenOutput")
const userOutput = document.getElementById("userOutput")

//Array for recording number inputs for even/odd sorting
const recordedNumbers = [];

// Event listener for user inputted numbers.
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const enteredNumber = parseFloat(numberInput.value);

  // Checks the value to ensure it is a valid number, then pushes. 
  if (!isNaN(enteredNumber)) {
    recordedNumbers.push(enteredNumber);

    // Create a list item/span for showing the numbers entered. 
    const listItem = document.createElement("span");
    listItem.textContent = enteredNumber + (", ");

    // Append the list item to the number list
    userOutput.appendChild(listItem);

    // Clear the input for the next number.
    numberInput.value = '';
  } else {
    alert("Please enter a valid number yo.");
  }
});

// Event listener for sorting all and displaying odd/even numbers
buttonSort.addEventListener("click", function() {
  const odd = recordedNumbers.filter(num => num % 2 === 1);
  const even = recordedNumbers.filter(num => num % 2 === 0);

  // Display all odd numbers
  oddOutput.textContent = odd.join(", ");

  // Display all even numbers
  evenOutput.textContent = even.join(", ");
});

// Event listener for sorting and displaying 1 number
oneSort.addEventListener("click", function() {
  const index = 0; // Index for first number of inputted numbers.

  if (index < recordedNumbers.length) {
    const onenumber = recordedNumbers[index];

    if (onenumber % 2 === 0) {
      evenOutput.textContent = onenumber;
      oddOutput.textContent = ""; // Clear numbers
    } else {
      oddOutput.textContent = onenumber;
      evenOutput.textContent = ""; // Clear numbers
    }
  } else {
    alert("There is no number at the specified index yo.");
  }
});