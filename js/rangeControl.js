(function() {
  var rangeControl = document.querySelector('.range-control');
  var scale = rangeControl.querySelector('.scale');
  var bar = scale.querySelector('.bar');
  var toggleMin = scale.querySelector('.toggle-min');
  var toggleMax = scale.querySelector('.toggle-max');
  var minValue = document.querySelector('#min-value');
  var maxValue = document.querySelector('#max-value');

  toggleMin.onmousedown = function(evt) {
    var toggleMinCoords = getCoords(toggleMin);
    var shiftX = evt.pageX - toggleMinCoords.left;

    var rangeControlCoords = getCoords(rangeControl);
    var scaleCoords = getCoords(scale);
    var toggleMaxCoords = getCoords(toggleMax);

    function moveAt(evt) {
      var newLeft = evt.pageX - rangeControlCoords.left - shiftX;
      if(newLeft < scaleCoords.left - rangeControlCoords.left) {
        newLeft = scaleCoords.left - rangeControlCoords.left;
      }
      if(newLeft > (toggleMaxCoords.left - rangeControlCoords.left - toggleMin.offsetWidth)) {
        newLeft = toggleMaxCoords.left - rangeControlCoords.left - toggleMin.offsetWidth;
      }

      bar.style.marginLeft = newLeft - 20 + 'px';
      bar.style.width = getCoords(toggleMax).left - getCoords(toggleMin).left + 10 + 'px';

      minValue.value = calcPrice(newLeft - 20);

      toggleMin.style.left = newLeft + 'px';
    }

    document.onmousemove = function(evt) {
      moveAt(evt);
    }

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    }

    return false;
  }

  toggleMax.onmousedown = function(evt) {
    var toggleMaxCoords = getCoords(toggleMax);
    var shiftX = evt.pageX - toggleMaxCoords.left;

    var rangeControlCoords = getCoords(rangeControl);
    var scaleCoords = getCoords(scale);
    var toggleMinCoords = getCoords(toggleMin);

    function moveAt(evt) {
      var newLeft = evt.pageX - rangeControlCoords.left - shiftX;
      if(newLeft > scaleCoords.left - rangeControlCoords.left + scale.offsetWidth - toggleMax.offsetWidth) {
        newLeft = scaleCoords.left - rangeControlCoords.left + scale.offsetWidth - toggleMax.offsetWidth;
      }
      if(newLeft < toggleMinCoords.left - rangeControlCoords.left + toggleMin.offsetWidth) {
        newLeft = toggleMinCoords.left - rangeControlCoords.left + toggleMin.offsetWidth;
      }

      bar.style.width = getCoords(toggleMax).left - getCoords(toggleMin).left + 10 + 'px';

      maxValue.value = calcPrice(newLeft - 40);

      toggleMax.style.left = newLeft + 'px';
    }

    document.onmousemove = function(evt) {
      moveAt(evt);
    }

    document.onmouseup = function(evt) {
      document.onmouseup = document.onmousemove = null;
    }

    return false;
  }

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + document.documentElement.scrollTop,
      left: box.left + document.documentElement.scrollLeft,
    }
  }

  function calcPrice(n) {
    var step = 20000 / 180;
    return Math.round(step * n);
  }
})();
