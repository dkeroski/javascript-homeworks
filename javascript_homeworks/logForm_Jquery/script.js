$(function() {
    
   var form = $("<form method='post' data-toogle=\"validator\" action='#'  >")
    .addClass("form-group")
    .appendTo("html")
    .prop("id" , "form");
    
   var display = $("<p id=\"head\"></p>").appendTo("form")
   
    var username=
     $("<p id=\"p1\"></p> <lebel for='username'><i class=\"fa fa-user fa-2x\"></i></lebel><input type='text' id='username' class='form-control' name='username' placeholder='Username'   /> ")
     .prop("id", "username")
     .appendTo("form");
//P1 <!--This Segment Displays The Validation Rule For Username-->
   
   
   
   var password=
   $("<p id=\"p2\"></p><lebel for='password'><i class=\"fa fa-expeditedssl  fa-2x\"></i></lebel><input  id='password' class='form-control' name='password' placeholder='Password'/>  ")
     .prop("id", "password")
     .prop("type" , "password")
     .appendTo("form");
     
 //P2 <!--This Segment Displays The Validation Rule For Password-->
  
  
  
   var confirm_password=
   $("<p id=\"p3\"></p><lebel for='confirm_password'><i class=\"fa fa-expeditedssl  fa-2x\"></i></i></lebel><input  id='confirm_password' class='form-control' name='confirm_password' placeholder='Confirm password'/> ")
     .prop("id", "confirm_password")
     .prop("type" ,"password")
     .appendTo("form");
 //P3 <!--This Segment Displays The Validation Rule For Confirm Password-->
   
   
    
    var showPass =
   $("<input type='checkbox' id='showPass' > Show password's</input>")
   .appendTo("form");
   
     
     
      var email =
     $("<p id=\"p4\"></p><lebel for='email'> <i class=\"fa fa-envelope fa-2x\"></i> </lebel><input type='text' id='email'  class='form-control' name='email' placeholder='Email address' />")
     .prop("id", "email")
     .prop("name", "email")
     .appendTo("form");



  //P4 <!--This Segment Displays The Validation Rule For Email-->   
  var age=
   $("<p id=\"p5\"></p><lebel for='age'>Your birth date:</lebel><input type='date' id='age' class='form-control' name='age' />  ")
     .prop("id", "age")
     .appendTo("form");
 
 
 
 //P5 <!--This Segment Displays The Validation Rule For age-->      
  var checkbox = 
    $("<div><input type='checkbox' name='checkbox'  required/> I agree <a href='#'>Terms of use </a></div>")
   .addClass("checkbox")
   .appendTo("form");
   
     
 var button = 
      $("<button>'Sign Up'</button>")
     .prop("id" , "submit")
     .addClass("btn btn-primary")  
     .appendTo("form")
    
    
  $('#showPass').change(function() {
        var isChecked = $('#showPass').prop('checked');
         if (isChecked) {
          $("input[type = password]").prop('type' , 'text');
         }
         else {
          $("input[type = password]").prop('type' , 'password');
         }
          
        });
    
    
  
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
            required: true,
            minlength: 8,
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,15}$/
        },
            password_confirm: {
            required: true,
            equalTo: "#password"
        },
        
            email: {
            required: true,
            regex:/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
       },
       
 
    }, //end of  rules 
    
    messages: {
            username:  {
            required: "Please create your username"
        },
           password: {
            required: " min 8 character length, one lowercase letter, one number, one special character , space is not allowed."
        },
       confirm_password: {
            required: "Please re-enter your password",
            equalTo:  "Passwords not matched"
        },
        email : {
             required: "Please enter your email"
        }
    }
   });// end of validation for
     
});
