function spinalCase(str) {
  let newStr = str;
  const rx1 = /\s+|\_+/g;  
  
  newStr = newStr.replace(/([a-z])([A-Z])/g, "$1 $2");
  newStr = newStr.replace(rx1, "-").toLowerCase();
  
  return newStr;
}

spinalCase('AllThe-small Things');