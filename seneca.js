exports.isValidEmail = function isValidEmail(email) {
  if (email) {
    if (email.toString().includes(' ')) {
      return false;
    }
    return /@myseneca.ca$/.test(email) || /@senecacollege.ca$/.test(email) || /@senecac.on.ca$/.test(email);
  }
  return false;
};

exports.formatSenecaEmail = (function format(name) {
  // TODO: needs to be implemented
  if (name) {
    let test = name.toString();
    test = test.trim();
    test = test.replace(' ', '');
    test = test.replace('@', '');
    test = test.replace('.', '');
    test += '@myseneca.ca';
    return test;
  }
  return false;
});
