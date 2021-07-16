function myReplace(str, before, after) {
  let newStr = str;

  after = /^[A-Z]/.test(before) 
    ? after.replace(after[0], after[0].toUpperCase())
    : after.replace(after[0], after[0].toLowerCase())
    
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");