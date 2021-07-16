function translatePigLatin(str) {
  const rxC = /^[b|c|h|d|p|g|n|l|s|w]+/;
  const rxV = /^[a|e|i|o|u]/;
  
  const cMatch = str.match(rxC);
  const vMatch = str.match(rxV);
  
  if (vMatch) {
    return str.concat('way');
  }
  else if (cMatch) {
    return str.replace(cMatch, '').concat(cMatch+'ay');
  }
  else {
    return str.concat('ay');
  }
}

translatePigLatin("schwartz");