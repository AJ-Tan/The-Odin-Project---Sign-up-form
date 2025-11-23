const nodePassword = document.getElementById('password');
const nodeConfirmPassword = document.getElementById('confirm-password');

const validatePassword = () => {
  const password = nodePassword.value;
  const confirmPassword = nodeConfirmPassword.value;
  if(confirmPassword.length > 0 && confirmPassword !== password) {
    nodeConfirmPassword.setCustomValidity('Password does not match');
    nodeConfirmPassword.nextElementSibling.style.display = 'block';
  } else {
    nodeConfirmPassword.setCustomValidity('');
    nodeConfirmPassword.nextElementSibling.style.display = 'none';
  }
}

nodePassword.addEventListener('input', validatePassword);
nodeConfirmPassword.addEventListener('focusout', validatePassword);

// Button Create
const nodeBtnCreate = document.getElementById('btn-create');

nodeBtnCreate.addEventListener('submit', e => {
  e.preventDefault();
})