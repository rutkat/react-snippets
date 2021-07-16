/* Validate a string according to the following rules: */
// The username is between 4 and 25 characters.
// It must start with a letter.
// It can only contain letters, numbers, and the underscore character.
// It cannot end with an underscore character.

  const validString = /^[a-zA-Z]{1}\w+[^\_]$/;
  if (str.length > 3 && str.length < 26 && str.match(validString)) {
    return true;
  }
