$(function() {
    
   
   var form = $("<form   method='post' action='#'  >")
    .addClass("form-group")
    .appendTo("html")
    .attr("id" , "form");
    
   var display = $("<p id=\"head\"></p>").appendTo("form")
   
    var username=
     $("<p id=\"p1\"></p> <lebel for='username'><i class=\"fa fa-user fa-2x\"></i></lebel><input type='text' id='username' class='form-control' name='username' placeholder='Username'   /> ")
     .attr("id", "username")
     .appendTo("form");
//P1 <!--This Segment Displays The Validation Rule For Username-->
   var password=
   $("<p id=\"p2\"></p><lebel for='password'><i class=\"fa fa-expeditedssl  fa-2x\"></i></lebel><input type='password' id='password' class='form-control' name='password' placeholder='Password'/>  ")
     .attr("id", "password")
     .appendTo("form");
 //P2 <!--This Segment Displays The Validation Rule For Password-->
   var confirm_password=
   $("<p id=\"p3\"></p><lebel for='confirm_password'><i class=\"fa fa-expeditedssl  fa-2x\"></i></i></lebel><input type='password' id='confirm_password' class='form-control' name='confirm_password' placeholder='Confirm password'/> ")
     .attr("id", "confirm_password")
     .appendTo("form");
 //P3 <!--This Segment Displays The Validation Rule For Confirm Password-->
  var email =
     $("<p id=\"p4\"></p><lebel for='email'> <i class=\"fa fa-envelope fa-2x\"></i> </lebel><input type='text' id='email'  class='form-control' name='email' placeholder='Email address' />")
     .attr("id", "email")
     .attr("name", "email")
     .appendTo("form");
  //P4 <!--This Segment Displays The Validation Rule For Email-->   
  var age=
   $("<p id=\"p5\"></p><lebel for='age'>Your birth date:</lebel><input type='date' id='age' class='form-control' name='age' />  ")
     .attr("id", "age")
     .appendTo("form");
 //P5 <!--This Segment Displays The Validation Rule For age-->      
  var checkbox = 
    $("<div><input type='checkbox' name='checkbox' /> I agree <a href='#'>Terms of use </a></div>")
   .addClass("checkbox")
   .appendTo("form");
   
     
 var button = 
      $("<button>'Sign Up'</button>")
     .attr("id" , "submit")
     .addClass("btn btn-primary")  
     .appendTo("form")
    

  $.validator.addMethod(
       "regex",
        function(value, element, regexp) {
        return this.optional(element) || regexp.test(value);
        },
        "Please check your input."
        );
    
  
  $("#form").validate({
    
    rules: {
            username: {
            required: true, 
            minlength: 5
        },
        
             password: {
             pwcheck: true,
             required: true,
             minlength: 8,
             regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/gmi
            
        },
            confirm_password: {
            required: true,
            equalTo: '#password'
        },
        
            email: {
            required: true,
            regex:/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/,
       },
    }, //end of  rules 
    
    messages: {
            username:  {
            required: "Please create your username"
        },
           password: {
            required: "Password must be 8 characters long   "
        },
       confirm_password: {
            required: "Please re-enter your password",
            equalTo:  "Passwords not matched"
        },
        email : {
             required: "Please enter your email"
        },
        
        age: {
            required: "Please enter your birth date"
        },
        
        checked : {
            required: "Accept licencen terms"
        }
    }// end of messaeges
    
 
   });
    
});

