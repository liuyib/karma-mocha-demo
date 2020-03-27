import { add } from './utils';

var main = function(selector) {
  var elem = document.querySelector(selector);

  elem.addEventListener('click', function() {
    var value = parseInt(elem.innerText, 10);
    elem.innerText = add(value, 1);
  });
};

export default main;
