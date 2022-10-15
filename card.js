const getOption = (select, card_value) =>{
    const options = select.querySelectorAll('option')
    let counter = 0
    let opt_index = false
    options.forEach(element => {
        if (element.value === card_value.value) {
            opt_index =  counter
        }
        counter += 1
    });
    console.log(options);
    return opt_index
}


function checker() {
    let text;
   if(confirm('confirm you have done due diligence and leave a comment on CRM!')) {

    // Update CRM Account Number
    const accountNumber = document.querySelector('#accountNumber');
    const plugin_accountNumber = document.querySelector('#plugin_accountNumber');
    plugin_accountNumber.selectedIndex  = getOption(plugin_accountNumber, accountNumber)

    // Update CRM BASE Number
    const cardBaseNumber = document.querySelector('#baseNumber');
    const pluginBaseNumber = document.querySelector('#plugin_baseNumber');
    pluginBaseNumber.value = cardBaseNumber.textContent;


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

const hideBaseNumber  = () =>{
     const accountNumber = document.getElementById('accountNumber');
     const baseNumber= document.getElementById('baseNumber');
    if (accountNumber.length = 10) {
       

    }
    else {
        baseNumber.style.display = 'block'
    }
}
