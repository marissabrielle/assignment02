// The “Grade Assigner” Application

// Collect the a number between 1 and 100 from the user.
let grade = prompt('Enter a number between 1 and 100')

// Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
if (grade < 1 || grade > 100) {
    alert('Only numbers between 1 and 100 are accepted')
}

if (isNaN(grade)) {
    alert(grade + ' is not a number');
}

switch (true) {
	// If the score is between 90 and 100
	case grade >= 90 && grade <= 100:
		console.log('You received a A')
		break;
	// If the score is between 80 and 89
	case grade >= 80 && grade <= 89:
		console.log('You received a B')
		break;
	/// If the score is between 70 and 79
	case grade >= 70 && grade <= 79:
		console.log('You received a C')
		break;
	// If the score is between 60 and 69
	case grade >= 60 && grade <= 69:
		console.log('You received a D')
		break;

    // If the score is less than 60
    case grade <= 59:
        console.log('You received an F')
        break;
}