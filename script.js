
//////////////// CARD FORM VALIDATION 
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let accountNumber = id("accountNumber"),
    title = id("title"),
    gender = id("gender"), 
    cardFirstName = id("cardFirstName"),  
    cardLastName = id("cardLastName"),  
    address = id("address"), 
    town = id("town"), 
    country = id("country"),
    email = id("email"), 
    pan = id("pan"), 
    phoneNumber = id("phoneNumber"), 
    form_action = id("form_action"),  
    errorMsg = classes("error"),  
    successIcon = classes("success-icon"),  
    failureIcon = classes("failure-icon");


  let engine = (id, serial, message, length) => {

    if (id.value.trim() === "" ) {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
    } 
    
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
    }
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(accountNumber, 0,"", 10)
    engine(title, 1,"");
    engine(gender, 2,"");
    engine(cardFirstName, 3,"");
    engine(cardLastName, 4,"");
    engine(address, 5,"");
    engine(town, 6,"");
    engine(country, 7,"");
    engine(email, 8,"");
    engine(pan, 9,"");
    engine(phoneNumber, 10,"", 11);
    // engine(, , "Gender cannot be blank");
  });




const x = document.getElementById('container')
const y = document.querySelector('.btn')
function checker() {
    let text;
   if(confirm('confirm you have done due diligence and leave a comment on CRM!')) {
    // Update CRM Account Number
    // const accountNumber = document.querySelector('#accountNumber');
    // const plugin_accountNumber = document.querySelector('#plugin_accountNumber');
    // plugin_accountNumber.selectedIndex  = getOption(plugin_accountNumber, accountNumber)
    // // Update CRM BASE Number
    // const cardBaseNumber = document.querySelector('#baseNumber');
    // const pluginBaseNumber = document.querySelector('#plugin_baseNumber');
    // pluginBaseNumber.value = cardBaseNumber.textContent;
    // plugin_accountNumber.value = accountNumber.value
    document.querySelector('.crm-plugin').style.display = 'block';

    if(ok){
        text = "Push to CRM!";    
        }else{
            text = 'Card linked and Card Operations notified!';
        }   
    }
   document.getElementById('submit').innerHTML = text;
}

y.addEventListener("click" , () => {
x.style.display = "none";
y.style.display = 'none';

})

////////// REVIEW TEXTAREA
let name = (id) => document.getElementById(id);
let err = (classes) => document.getElementsByClassName(classes);


   let  textArea = id("comment"), 
    Reviewform = id("form"),  
    errMsg = classes("error"),  
    success = classes("success-icon"),  
    failure = classes("failure-icon");

  let comment = (id, serial, message) => {
          if (id.value.trim() === "") {
            errorMsg[serial].innerHTML = message;
            id.style.border = "2px solid red"; 
          } 
          else {
            errorMsg[serial].innerHTML = "";
            id.style.border = "2px solid green";
            window.location.href="case_close.html"
       }
  }
  Reviewform.addEventListener("submit", (e) => {
    e.preventDefault();
    comment(textArea, 0, "This field can not be empty");
  });
///////END OF TEXTAREA


