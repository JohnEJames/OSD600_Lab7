exports.isValidEmail = function (email) {
  // TODO: needs to be implemented
  if (email) {
    /*
    pattern taken from here
    http://jsfiddle.net/ghvj4gy9/embedded/result,js/
    */
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)) {
      if (email.includes('myseneca.ca') || email.includes('senecacollege.ca') || email.includes('senecac.on.ca')) {
        return true;
      }
    }
  }
  return false;
};


exports.formatSenecaEmail = function (name) {
  // TODO: needs to be implemented
  if (name) {
    return name.replace(' ', '').concat('@myseneca.ca');
  }
  return '';
};
