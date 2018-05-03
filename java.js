var table = prompt("Please enter a number from 1 to 10";             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message

if (table < 11)) {
	msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;