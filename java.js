var table = prompt("Please enter a number from 1 to 10";             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message

if (operator == 'multiplication') {
  // Do addition
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
el.innerHTML = msg;
var el = document.getElementById('blackboard');