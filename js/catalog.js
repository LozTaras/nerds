/*Filters*/

(function() {
  li = document.body.querySelectorAll('.filter-form li');

  function toggleCheckbox() {
    var input = this.querySelector('input');

    if(input.type == 'radio') {
      input.checked = true;
    } else if (input.type == 'checkbox') {
      if(input.checked) {
        input.checked = false;
        return;
      }
      input.checked = true;
    }
    
  }

  for(var i = 0 ; i < li.length; i++) {
    li[i].addEventListener('click', toggleCheckbox);
  }
})();
