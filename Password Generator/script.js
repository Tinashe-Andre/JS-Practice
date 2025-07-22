function generatePassword(length) {
  let randomChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  let password = '';
  while (password.length < length) {
    let randomIndex = Math.floor(Math.random() * randomChar.length);
    password += randomChar[randomIndex];
  }
  return password;
}

const password = generatePassword(8);
console.log(`Generated password: ${password}`);