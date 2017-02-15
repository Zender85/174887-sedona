      var link = document.querySelector('.hotel-searchform-trigger');
      var form = document.querySelector('.hotel-searchform');
      var arrival = document.querySelector('#arrival-date');
      
      form.classList.add('hidden');
      link.addEventListener('click', function (event) {
        event.preventDefault();
        form.classList.toggle('hotel-searchform-open');
        arrival.focus();
      });