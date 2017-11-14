
$(document).ready(readyNow);
var employees = [];//added to push newEmployees into
function readyNow(){
    //on click event handler for the add employee button
    $('#addEmployeeButton').on('click', addEmployeeButtonClick);
    $(document).on('click', '.removeButton', function(){
        // get the value of "data-index" on this button
        var myIndex = $(this).data('index');
        console.log('in document on click .removeButton:', myIndex);
        // remove this employee from the array
        employees.splice(myIndex, 1);
        calculateSalaries();//calls the calculateSalaries function again after remove button is clicked to update amount
    });//end document on click .removeButton
}//end doc ready

function addEmployeeButtonClick(){
    console.log('in addEmployeeButtonClick');
    //get user input
        //put input into an object
    var newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        employeeID: $('#employeeIdIn').val(),
        jobTitle: $('#jobIn').val(),
        salary: $('#salaryIn').val()
    }
    console.log(newEmployee);
        //push the new object into an array
    employees.push(newEmployee);
    console.log(employees);

    //clear inputs
    $('#firstNameIn').val(''),
    $('#lastNameIn').val(''),
    $('#employeeIdIn').val(''),
    $('#jobIn').val(''),
    $('#salaryIn').val('')
    calculateSalaries();
    
} // end addEmployeeButtonClick



function calculateSalaries() {
    //loop through employees array
    var totalSalaries = 0;
    for (var i = 0; i < employees.length; i++) {
        console.log(employees[i]);
        //convert each salary to a number (currently a string from object)
            //add salary to total salaries
        totalSalaries += Number(employees[i].salary);
   }//end for loop each employee
   console.log('total salaries: ', totalSalaries);
   var monthlySalaryCost = totalSalaries/12;
   console.log('monthly cost: ', monthlySalaryCost);
   displayOutput(totalSalaries, monthlySalaryCost);
}// end calculateSalaries

function displayOutput(salaries, monthly){ //add function name to end of calculateSalaries
    console.log('in displayOutput', salaries);
    //total salaries
    $('#totalSalaryOut').empty();//gets rid of existing h2 in index.html
    $('#totalSalaryOut').append('Total Salaries: $' + salaries.toFixed(2)); //.toFixed(2) limits decimels to 2 places
    $('#monthlySalaryOut').empty();//gets rid of existing h3
    $('#monthlySalaryOut').append('Monthly Salaries $' + monthly.toFixed(2));
    //all employees
    // loop through employees array
    //append each to the ul with id employeesOut
    $('#employeesOut').empty();
    for (var i=0; i < employees.length; i++){
        var appendString = '';
        appendString += '<li>';
        appendString += '<strong>' + employees[ i ].lastName + ', ' + employees[ i ].firstName + '</strong>';
        appendString += ': ' + employees[ i ].employeeID + ', ';
        appendString += employees[ i ].jobTitle + ', ';
        appendString += '$' + Number( employees[ i ].salary ).toFixed( 2 );// Number changes from string to number
        appendString += '<button data-index="' + i + '" class="removeButton">remove</button>';
        appendString += '</li>';
        $( '#employeesOut' ).append( appendString );
    }
    //monthly salary cost
    //all employees
}//end displayOutput