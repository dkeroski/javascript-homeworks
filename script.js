$(function() {
    $("<form/>")
    .appendTo("body");
    
    $("<fieldset/>")
     .addClass("form-group")
     .appendTo("form");
   
    var firstName=
     $("<lebel for='fisrtName'><i class=\"fa fa-user fa-2x\"></i></lebel><input type='text' class='form-control' placeholder='First Name' />")
     .attr("id", "firstName")
     .appendTo("fieldset");

 var LastName = 
     $("<lebel for='lastName'><i class=\"fa fa-user fa-2x\"></i></lebel><input type='text' class='form-control'  placeholder='Last Name' />")
     .attr("id", "myfieldid")
     .appendTo("fieldset");

  var email = 
     $("<lebel for='email'> <i class=\"fa fa-envelope fa-2x\"></i> </lebel><input type='email' class='form-control' placeholder='Email address'/>")
     .attr("id", "email")
     .attr("name", "myfieldid")
     .appendTo("fieldset");
     
  var password=
   $("<lebel for='pass'><i class=\"fa fa-lock fa-2x\"></i></lebel><input type='password' class='form-control' placeholder='Password' />")
     .attr("id", "password")
     .appendTo("fieldset");
     
  var checkbox = 
    $("<div><input type='checkbox'/> I agree <a href='#'>Terms of use </a></div>")
   .addClass("checkbox")
   .appendTo("fieldset");
   
     
 var button = $("<button>SIGN UP    </button>")
     .addClass("btn btn-primary")  
     .appendTo("fieldset");
 
 
 
 
}); //end of function