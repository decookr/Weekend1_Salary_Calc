console.log('JS Ready');

var employeeArray = [];

$(document).ready(function() {
    console.log('JQ ready');        
    $('#employeeinfo').on('submit', function(event){
    // console.log( $( this ).serializeArray() );
    event.preventDefault();
    
     });
        // var serializedArray = 

        var name = $('#firstname').val();
        var last = $('#lastname').val();
        var idnumber = $('#idnumber').val();
        var jobtitle = $('#jobtitle').val();
        var salary = $('#salary').val();
        $("tbody").append('<tr><td>' + name + '</td><td>' + last + '</td><td>' + idnumber + '</td><td>' + jobtitle + '</td><td>' + salary + '</td></tr>');
        
    });
    


    // function viewRecord() {
    //     console.log($('form').serializeArray());

    //     // $( "form" ).submit(function( event ) {
          
    //         //   });

