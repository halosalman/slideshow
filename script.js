(function() {
  var rotateSlider;

  $(function() {
    $('#nav').on('click', 'a', function(e) {
      var active, theSlide;
      e = e != null ? e : {
        e: window.event
      };
      e.preventDefault();
      e.stopPropagation();
      if ($('#nav').hasClass('active')) {
        return false;
      }
      $('.focus').removeClass('focus');
      $(this).addClass('focus');
      $('#nav').addClass('active');
      theSlide = $(this).attr('data-slide');
      active = $('.active').attr('data-slide');
      $('.slide').removeClass('active');
      return rotateSlider(theSlide, active);
    });
    
    //DEMO  
    setTimeout(function() {
      return $('#nav a[data-slide="2"]').trigger('click');
    }, 500);
    setTimeout(function() {
      return $('#nav a[data-slide="3"]').trigger('click');
    }, 1200);
    return setTimeout(function() {
      return $('#nav a[data-slide="4"]').trigger('click');
    }, 1900);
  });

  rotateSlider = function(slide, active) {
    /*
    TODO -
    detect current slide position and calculate no. slides to 
    target.  Ease through those slides to avoid CSS3 
    transition wonkiness.
    */
    var delta, slides, theSlide;
    slides = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four'
    };
    theSlide = slides[slide];
    delta = Math.abs(slide - active);
    if (delta === 3 && active === '1') {
      $('.slide[data-slide="' + slide + '"]').addClass('active');
      $('.slider-inner').attr('class', 'slider-inner rotate two');
      setTimeout(function() {
        return $('.slider-inner').attr('class', 'slider-inner rotate three');
      }, 400);
      setTimeout(function() {
        return $('.slider-inner').attr('class', 'slider-inner rotate four');
      }, 800);
    } else if (delta === 3 && active === '4') {
      $('.slide[data-slide="' + slide + '"]').addClass('active');
      $('.slider-inner').attr('class', 'slider-inner rotate three');
      setTimeout(function() {
        return $('.slider-inner').attr('class', 'slider-inner rotate two');
      }, 350);
      setTimeout(function() {
        return $('.slider-inner').attr('class', 'slider-inner rotate one');
      }, 700);
    } else {
      $('.slide[data-slide="' + slide + '"]').addClass('active');
      $('.slider-inner').attr('class', 'slider-inner rotate ' + theSlide);
    }
    return $('#nav').removeClass('active');
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLENBQUEsQ0FBRSxRQUFBLENBQUEsQ0FBQTtJQUNBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsT0FBYixFQUFzQixHQUF0QixFQUEyQixRQUFBLENBQUMsQ0FBRCxDQUFBO0FBQ3pCLFVBQUEsTUFBQSxFQUFBO01BQUEsQ0FBQSxlQUFJLElBQUk7UUFBQSxDQUFBLEVBQUksTUFBTSxDQUFDO01BQVg7TUFDUixDQUFDLENBQUMsY0FBRixDQUFBO01BQ0EsQ0FBQyxDQUFDLGVBQUYsQ0FBQTtNQUNBLElBQUksQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsUUFBbkIsQ0FBSjtBQUNFLGVBQU8sTUFEVDs7TUFFQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsV0FBWixDQUF3QixPQUF4QjtNQUNBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxRQUFSLENBQWlCLE9BQWpCO01BQ0EsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsUUFBbkI7TUFDQSxRQUFBLEdBQVcsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLElBQVIsQ0FBYSxZQUFiO01BQ1gsTUFBQSxHQUFTLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxJQUFiLENBQWtCLFlBQWxCO01BQ1QsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLFdBQVosQ0FBd0IsUUFBeEI7YUFDQSxZQUFBLENBQWEsUUFBYixFQUF1QixNQUF2QjtJQVp5QixDQUEzQixFQUFBOzs7SUFlQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7YUFDVCxDQUFBLENBQUUsd0JBQUYsQ0FBMkIsQ0FBQyxPQUE1QixDQUFvQyxPQUFwQztJQURTLENBQVgsRUFFRSxHQUZGO0lBSUEsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO2FBQ1QsQ0FBQSxDQUFFLHdCQUFGLENBQTJCLENBQUMsT0FBNUIsQ0FBb0MsT0FBcEM7SUFEUyxDQUFYLEVBRUUsSUFGRjtXQUlBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTthQUNULENBQUEsQ0FBRSx3QkFBRixDQUEyQixDQUFDLE9BQTVCLENBQW9DLE9BQXBDO0lBRFMsQ0FBWCxFQUVFLElBRkY7RUF4QkEsQ0FBRjs7RUE0QkEsWUFBQSxHQUFlLFFBQUEsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFBLEVBQUE7Ozs7Ozs7QUFDYixRQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUE7SUFBQSxNQUFBLEdBQ0U7TUFBQSxDQUFBLEVBQUcsS0FBSDtNQUNBLENBQUEsRUFBRyxLQURIO01BRUEsQ0FBQSxFQUFHLE9BRkg7TUFHQSxDQUFBLEVBQUc7SUFISDtJQVdGLFFBQUEsR0FBVyxNQUFPLENBQUEsS0FBQTtJQUNsQixLQUFBLEdBQVEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFBLEdBQVEsTUFBakI7SUFFUixJQUFHLEtBQUEsS0FBUyxDQUFULElBQWUsTUFBQSxLQUFVLEdBQTVCO01BRUUsQ0FBQSxDQUFFLHFCQUFBLEdBQXNCLEtBQXRCLEdBQTRCLElBQTlCLENBQW1DLENBQUMsUUFBcEMsQ0FBNkMsUUFBN0M7TUFDQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHlCQUFqQztNQUNBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTtlQUNULENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsMkJBQWpDO01BRFMsQ0FBWCxFQUVFLEdBRkY7TUFHQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7ZUFDVCxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLDBCQUFqQztNQURTLENBQVgsRUFFRSxHQUZGLEVBUEY7S0FBQSxNQVdLLElBQUcsS0FBQSxLQUFTLENBQVQsSUFBZSxNQUFBLEtBQVUsR0FBNUI7TUFFSCxDQUFBLENBQUUscUJBQUEsR0FBc0IsS0FBdEIsR0FBNEIsSUFBOUIsQ0FBbUMsQ0FBQyxRQUFwQyxDQUE2QyxRQUE3QztNQUNBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsMkJBQWpDO01BQ0EsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO2VBQ1QsQ0FBQSxDQUFFLGVBQUYsQ0FBa0IsQ0FBQyxJQUFuQixDQUF3QixPQUF4QixFQUFpQyx5QkFBakM7TUFEUyxDQUFYLEVBRUUsR0FGRjtNQUdBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTtlQUNULENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMseUJBQWpDO01BRFMsQ0FBWCxFQUVFLEdBRkYsRUFQRztLQUFBLE1BQUE7TUFhSCxDQUFBLENBQUUscUJBQUEsR0FBc0IsS0FBdEIsR0FBNEIsSUFBOUIsQ0FBbUMsQ0FBQyxRQUFwQyxDQUE2QyxRQUE3QztNQUNBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsc0JBQUEsR0FBdUIsUUFBeEQsRUFkRzs7V0FpQkwsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFdBQVYsQ0FBc0IsUUFBdEI7RUE1Q2E7QUE1QmYiLCJzb3VyY2VzQ29udGVudCI6WyIkIC0+XG4gICQoJyNuYXYnKS5vbiAnY2xpY2snLCAnYScsIChlKSAtPlxuICAgIGUgPSBlID8gZSA6IHdpbmRvdy5ldmVudFxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiggJCgnI25hdicpLmhhc0NsYXNzKCdhY3RpdmUnKSlcbiAgICAgIHJldHVybiBmYWxzZVxuICAgICQoJy5mb2N1cycpLnJlbW92ZUNsYXNzKCdmb2N1cycpXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnZm9jdXMnKVxuICAgICQoJyNuYXYnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhlU2xpZGUgPSAkKHRoaXMpLmF0dHIgJ2RhdGEtc2xpZGUnXG4gICAgYWN0aXZlID0gJCgnLmFjdGl2ZScpLmF0dHIoJ2RhdGEtc2xpZGUnKVxuICAgICQoJy5zbGlkZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgIHJvdGF0ZVNsaWRlcih0aGVTbGlkZSwgYWN0aXZlKVxuICAgIFxuICAjREVNTyAgXG4gIHNldFRpbWVvdXQgKCktPlxuICAgICQoJyNuYXYgYVtkYXRhLXNsaWRlPVwiMlwiXScpLnRyaWdnZXIoJ2NsaWNrJylcbiAgLCA1MDBcbiAgXG4gIHNldFRpbWVvdXQgKCktPlxuICAgICQoJyNuYXYgYVtkYXRhLXNsaWRlPVwiM1wiXScpLnRyaWdnZXIoJ2NsaWNrJylcbiAgLCAxMjAwXG4gIFxuICBzZXRUaW1lb3V0ICgpLT5cbiAgICAkKCcjbmF2IGFbZGF0YS1zbGlkZT1cIjRcIl0nKS50cmlnZ2VyKCdjbGljaycpXG4gICwgMTkwMFxuICAgIFxucm90YXRlU2xpZGVyID0gKHNsaWRlLCBhY3RpdmUpIC0+XG4gIHNsaWRlcyA9IFxuICAgIDE6ICdvbmUnXG4gICAgMjogJ3R3bydcbiAgICAzOiAndGhyZWUnXG4gICAgNDogJ2ZvdXInXG4gIFxuICAjIyNcbiAgVE9ETyAtXG4gIGRldGVjdCBjdXJyZW50IHNsaWRlIHBvc2l0aW9uIGFuZCBjYWxjdWxhdGUgbm8uIHNsaWRlcyB0byBcbiAgdGFyZ2V0LiAgRWFzZSB0aHJvdWdoIHRob3NlIHNsaWRlcyB0byBhdm9pZCBDU1MzIFxuICB0cmFuc2l0aW9uIHdvbmtpbmVzcy5cbiAgIyMjICBcbiAgdGhlU2xpZGUgPSBzbGlkZXNbc2xpZGVdXG4gIGRlbHRhID0gTWF0aC5hYnMgc2xpZGUgLSBhY3RpdmVcbiAgXG4gIGlmIGRlbHRhIGlzIDMgYW5kIGFjdGl2ZSBpcyAnMSdcbiAgICBcbiAgICAkKCcuc2xpZGVbZGF0YS1zbGlkZT1cIicrc2xpZGUrJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICQoJy5zbGlkZXItaW5uZXInKS5hdHRyICdjbGFzcycsICdzbGlkZXItaW5uZXIgcm90YXRlIHR3bydcbiAgICBzZXRUaW1lb3V0ICgpLT5cbiAgICAgICQoJy5zbGlkZXItaW5uZXInKS5hdHRyICdjbGFzcycsICdzbGlkZXItaW5uZXIgcm90YXRlIHRocmVlJ1xuICAgICwgNDAwXG4gICAgc2V0VGltZW91dCAoKS0+XG4gICAgICAkKCcuc2xpZGVyLWlubmVyJykuYXR0ciAnY2xhc3MnLCAnc2xpZGVyLWlubmVyIHJvdGF0ZSBmb3VyJ1xuICAgICwgODAwXG4gICAgXG4gIGVsc2UgaWYgZGVsdGEgaXMgMyBhbmQgYWN0aXZlIGlzICc0J1xuICAgIFxuICAgICQoJy5zbGlkZVtkYXRhLXNsaWRlPVwiJytzbGlkZSsnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgJCgnLnNsaWRlci1pbm5lcicpLmF0dHIgJ2NsYXNzJywgJ3NsaWRlci1pbm5lciByb3RhdGUgdGhyZWUnXG4gICAgc2V0VGltZW91dCAoKS0+XG4gICAgICAkKCcuc2xpZGVyLWlubmVyJykuYXR0ciAnY2xhc3MnLCAnc2xpZGVyLWlubmVyIHJvdGF0ZSB0d28nXG4gICAgLCAzNTBcbiAgICBzZXRUaW1lb3V0ICgpLT5cbiAgICAgICQoJy5zbGlkZXItaW5uZXInKS5hdHRyICdjbGFzcycsICdzbGlkZXItaW5uZXIgcm90YXRlIG9uZSdcbiAgICAsIDcwMFxuICAgIFxuICAgIFxuICBlbHNlXG4gICAgJCgnLnNsaWRlW2RhdGEtc2xpZGU9XCInK3NsaWRlKydcIl0nKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAkKCcuc2xpZGVyLWlubmVyJykuYXR0ciAnY2xhc3MnLCAnc2xpZGVyLWlubmVyIHJvdGF0ZSAnK3RoZVNsaWRlXG4gIFxuICBcbiAgJCgnI25hdicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAiXX0=
//# sourceURL=coffeescript



$( document ).ready(function()
{

    $('.box').click( function () {
        $(".app-bg, .first-page ").fadeOut(550,function () {
            $(".red-bar").addClass("dishes-bar");
            $(".dish-holder").show();
            $(".app-bg").fadeIn(550);
            $(".second-page").fadeIn(550);

            var swiper = new Swiper(".swiper-container", {
                effect: "coverflow",
                initialSlide:1,
                centeredSlides: true,
                grabCursor: true,
                slidesPerView:'auto',
                spaceBetween:80,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 1,
                    slideShadows: false
                },
                pagination: {
                    el: ".swiper-pagination"
                }
            });
        });

        $(".operator").click(function () {
            let dish_counter = Number(document.getElementById("dish-counter").innerText);
            let dish_price = Number(document.getElementsByClassName("dish-price")[0].innerText);
            let menu_data = [dish_counter, dish_price];

            if ($(this).hasClass("plus")) {
                var converted_data = [++menu_data[0], 14.25 + menu_data[1]];

            } else {
                var converted_data = [--menu_data[0], menu_data[1] - 14.25];
            }

            document.getElementById("dish-counter").innerText = converted_data[0];
            document.getElementsByClassName("dish-price")[0].innerText =converted_data[1];


            $('#dish-counter').addClass("jump");
            setTimeout(RemoveClass, 450);
            function RemoveClass() {
             $('#dish-counter').removeClass("jump");
            }


       });
  
    });
});