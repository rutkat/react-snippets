function palindrome(str) {
  const cleanStr = str.toLowerCase().match(/[a-z0-9]*/g).join('');
  return cleanStr === cleanStr.split('').reverse().join('');
}



palindrome("_eye");