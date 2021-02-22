'use strict';

const form = document.querySelector('.form');
const email = form.querySelector('.form__input');
const checkbox = form.querySelector('.form__checkbox');

const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  emailEnd: /.co$/i,
  checkbox: true,
};

const inputs = [email, checkbox];
const textError = {
  emptyInput: 'Email address is required',
  invalidEmail: 'Please provide a valid e-mail address',
  invalidEmailEnding: 'We are not accepting subscriptions from Colombia emails',
  emptyCheckbox: 'You must accept the terms and conditions',
};

form.setAttribute('novalidate', 'novalidate');

//validate
function validate(el) {
  const regExpName = el.dataset.required; 
  if(!regExpDic[regExpName]) return true; 

  if (regExpName == 'checkbox') {   
    return checkbox.checked ? true : showError(el, textError.emptyCheckbox);
  }
  
  if (regExpName == 'email') {
    return (!el.value) ? showError(el, textError.emptyInput) : validateEmail(el); 
  }
}

function validateEmail(el) {
  const regExpName = el.dataset.required; 
  return !(regExpDic[regExpName].test(el.value)) ? showError(el, textError.invalidEmail) : regExpDic.emailEnd.test(el.value) ? showError(el, textError.invalidEmailEnding) : true;
}

// show Error
function showError(el ,msg = 'This field is required') {
  removeInputError(el);
  const parent = el.closest('.form__feedback'); 
  const errorBlock = parent.querySelector('.form__invalid-feedback');
  errorBlock.classList.add('form__invalid-feedback--shake');
  errorBlock.textContent = msg;             
}

//remove Error 
function removeInputError(el) {
  const parent = el.closest('.form__feedback');
  const err = parent.querySelector('.form__invalid-feedback');

  if (!err) return;
  err.textContent = "";
}

//Handlers
function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (isValidInput){
      removeInputError(el);
    }
    return isValidInput;
  });
  console.log(isValidForm);
return isValidForm;  
}

//Events
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const submit = onSubmit();
  
  if(submit) {
    submitForm();
    form.reset();         
  }
});
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// success message
function showSubmit() {
  const conteiner = document.querySelector('.content');
  const title = conteiner.querySelector('.title');
  const subtitle = conteiner.querySelector('.subtitle');

  form.remove();
  title.innerHTML = 'Thanks for subscribing!';
  subtitle.innerHTML = 'You have successfully subscribed to our email listing. Check your email for the discount code.';
  conteiner.classList.add('content--subscrib');
}

// request 
function submitForm() {
  const request = new XMLHttpRequest();
  const url = './php/form.php';
  const params = new FormData(form);

  request.open("POST", url, true);

request.onreadystatechange = function() {
   if (request.readyState == 4) {
      if (request.status == 200) {
        console.log(request.responseText);
        showSubmit();
      } else {
        console.log('error');
      }
    }     
};

request.send(params);
}