/* Write a program to translate. */
var translate = function(text) {
  return text.replace(/[aeiou]/g, function(vowel) {
    return vowel.toUpperCase();
  });
};


