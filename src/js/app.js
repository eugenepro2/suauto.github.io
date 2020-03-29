var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
  }
});

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 200,
  'tolerance': 70
});

// Toggle button
$('.open-menu').click(function() {
  slideout.toggle();
});


$('#search').focus(function() {
  $(this).closest('.form__search').find('.form__search__block').addClass('active');
});

$('#search').keyup(function() {
  search();
  
});

$('.form__search a').click(function() {
  $(this).closest('.form__search').find('input').val($(this).text());
  
}); 

function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById('search_ul');
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

$('#search').blur(function() {
  $(this).closest('.form__search').find('.form__search__block').removeClass('active');
});

$('#date').datepicker({
  onSelect: function(formattedDate, date, inst) {
    if (date.length === 1) {
      $('.form__date .from').text(newDate(0));
      $('.form__date span').fadeIn();
    }
    if (date.length === 2) {
      $('.form__date .to').text(newDate(1));
    }

    function newDate(number) {
      let day = date[number].getDate();
      let time = date[number].getHours() + ':' + (date[number].getMinutes()<10?'0':'') + date[number].getMinutes();
      let month = date[number].toLocaleString('ru', { month: 'short' });
      return `${day} ${month} ${time}`;
    }

  }
});
