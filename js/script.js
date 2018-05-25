(function() {
  var openPopupBtn = document.body.querySelector('.contacts-write-to-us');
  var closePopupBtn = document.body.querySelector('.modal-close');
  var popup = document.body.querySelector('.modal-window');
  var loginFormField = popup.querySelector('.login-form-field');

  openPopupBtn.addEventListener('click', function showPopup(evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    loginFormField.focus();
  });


  closePopupBtn.addEventListener('click', function closePopup(evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
  });


  window.addEventListener('keydown', function closePopup(evt) {
    if(evt.keyCode === 27) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
    }
  });
})();

function initMap() {
  var elem = document.body.querySelector('#map');
  var options = {
    zoom: 17,
		center: {
      lat: 59.939179,
			lng: 30.321760,
		}
	};

	var myMap = new google.maps.Map(elem, options);

	var marker = new google.maps.Marker({
	   position: {
		   lat: 59.938875,
			 lng: 30.323115,
			},
			map: myMap,
			icon: 'img/map-marker2.png',
    });
}
