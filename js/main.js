AOS.init({
 	duration: 800,
 	easing: 'ease',
 	once: true,
 	offset: -100
});

jQuery(function($) {
	
	'use strict';
	loader();
	siteMenuClone();
	mobileToggleClick();
	onePageNavigation();
	siteIstotope();
	portfolioItemClick();
	owlCarouselPlugin();
	floatingLabel();
	scrollWindow();
	counter();
	jarallaxPlugin();
	stickyFillPlugin();
	animateReveal();

});

var siteIstotope = function() {
	var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).resize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });
  
  $container.isotope({ filter: '*' });

  $('#filters').on( 'click', 'a', function(e) {
  	e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters a').removeClass('active');
    $(this).addClass('active');
  });

  $container.imagesLoaded()
  .progress( function() {
    $container.isotope('layout');
  })
  .done(function() {
  	$('.gsap-reveal-img').each(function() {
			var html = $(this).html();
			$(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
		});

  	var controller = new ScrollMagic.Controller();

  	var revealImg = $('.gsap-reveal-img');

  	if ( revealImg.length ) {
  		var i = 0;
			revealImg.each(function() {

				var cover = $(this).find('.cover'),
					revealContent = $(this).find('.reveal-content'),
					img = $(this).find('.reveal-content img');


				var tl2 = new TimelineMax();


				setTimeout(function() {

					tl2
						tl2.set(img, {  scale: '2.0', autoAlpha: 1, })
						.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
							tl2.set(revealContent, { autoAlpha: 1 });
							tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
							tl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
						} } )

				}, i * 700);

				

				var scene = new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
				})
				.setTween(tl2)
				.addTo(controller);

				i++;

			});
		}
  })

  $('.js-filter').on('click', function(e) {
  	e.preventDefault();
  	$('#filters').toggleClass('active');
  });

}

var loader = function() {
	setTimeout(function() {
		TweenMax.to('.site-loader-wrap', 1, { marginTop: 50, autoAlpha: 0, ease: Power4.easeInOut });
  }, 10);
  $(".site-loader-wrap").delay(200).fadeOut("slow");
	$("#unslate_co--overlayer").delay(200).fadeOut("slow");	
}

var siteMenuClone = function() {

	setTimeout(function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
		});
		
		var counter = 0;
    $('.unslate_co--site-mobile-menu .has-children').each(function(){
      var $this = $(this);
      
      $this.prepend('<span class="arrow-collapse collapsed">');

      $this.find('.arrow-collapse').attr({
        'data-toggle' : 'collapse',
        'data-target' : '#collapseItem' + counter,
      });

      $this.find('> ul').attr({
        'class' : 'collapse',
        'id' : 'collapseItem' + counter,
      });

      counter++;

    });

  }, 1000);

	$('body').on('click', '.arrow-collapse', function(e) {
    var $this = $(this);
    if ( $this.closest('li').find('.collapse').hasClass('show') ) {
      $this.removeClass('active');
    } else {
      $this.addClass('active');
    }
    e.preventDefault();  
    
  });

	$(window).resize(function() {
		var $this = $(this),
			w = $this.width();

		if ( w > 768 ) {
			if ( $('body').hasClass('offcanvas') ) {
				$('body').removeClass('offcanvas');
			}
		}
	});

	$('.js-burger-toggle-menu').click(function(e){
		e.preventDefault();
		if ( $('body').hasClass('offcanvas') ) {
  		$('body').removeClass('offcanvas');
  		$('.js-burger-toggle-menu').removeClass('open');
  	} else {
  		$('body').addClass('offcanvas');	
  		$('.js-burger-toggle-menu').addClass('open');
  	}
  });

}; 




// var siteIstotope = function() {


	  
	
// }

var owlCarouselPlugin = function() {

	$('.testimonial-slider').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 20,
  	margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

    responsive:{
        400:{
          stagePadding: 20,
  				margin: 10,
        },
        600:{
          stagePadding: 100,
  				margin: 50,
        }
    }
	});
	owlSingleSlider();

	if ( $('.logo-slider').length ) {

		$('.logo-slider').owlCarousel({
			center: false,
	    loop: true,
	    stagePadding: 0,
	    margin: 0,
	    smartSpeed: 500,
	    autoplay: true,
	    autoplayHoverPause: false,
	    dots: false,
	    nav: false,
	    responsive:{
		    400:{
		      items: 2
		    },
		    768:{
		    	items: 3
		    },
		    1000:{
		    	items: 5
		    }
	    }
	   });
	}

};

var owlSingleSlider = function () {
	if ( $( '.single-slider' ).length ) {
		$('.single-slider').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    autoplayHoverPause: true,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

	    responsive:{
	      400:{
	        stagePadding: 0,
					margin: 0,
	      },
	      600:{
	        stagePadding: 0,
					margin: 0,
	      }
	    }
		});
	}
}

var floatingLabel = function () {
	$('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});
};



// scroll
var scrollWindow = function() {
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.unslate_co--site-nav');
				// sd = $('.js-scroll-wrap');

		if (st > 150) {
			if ( !navbar.hasClass('scrolled') ) {
				navbar.addClass('scrolled');	
			}
		} 
		if (st < 150) {
			if ( navbar.hasClass('scrolled') ) {
				navbar.removeClass('scrolled sleep');
			}
		} 
		if ( st > 350 ) {
			if ( !navbar.hasClass('awake') ) {
				navbar.addClass('awake');	
			} 

			// hide / show on scroll
			if (st > lastScrollTop){
	      // downscroll code
	      navbar.removeClass('awake');	
	      navbar.addClass('sleep');	
	   	} else {
	      // upscroll code
	      navbar.addClass('awake');	
	   	}
	   	lastScrollTop = st;
			

		}
		if ( st < 350 ) {
			if ( navbar.hasClass('awake') ) {
				navbar.removeClass('awake');
				navbar.addClass('sleep');
			}
		}

   

	});

};


var counter = function() {
	
	$('.section-counter').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$(this.element).find('.number-counter').each(function(){
				var $this = $(this),
					num = $this.data('number');
				$this.animateNumber(
				  {
				    number: num,
				    numberStep: comma_separator_number_step
				  }, 
				  {
				  	easing: 'swing',
    				duration: 3000
				  }
				);
			});
			
		}

	} , { offset: '95%' } );

};


var mobileToggleClick = function() {
	$('.js-menu-toggle').click(function(e) {

		e.preventDefault();

  	if ( $('body').hasClass('offcanvas') ) {
  		$('body').removeClass('offcanvas');
  		$('.js-menu-toggle').removeClass('active');
  		if ( $('.js-burger-toggle-menu').length ) {
  			$('.js-burger-toggle-menu').removeClass('open');
  		}
  	} else {
  		$('body').addClass('offcanvas');	
  		$('.js-menu-toggle').addClass('active');
  		if ( $('.js-burger-toggle-menu').length ) {
  			$('.js-burger-toggle-menu').addClass('open');
  		}
  	}


  });

  // click outisde offcanvas
	$(document).mouseup(function(e) {
    var container = $(".unslate_co--site-mobile-menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('offcanvas') ) {
				$('body').removeClass('offcanvas');
				$('body').find('.js-menu-toggle').removeClass('active');

				$('body').find('.js-burger-toggle-menu').removeClass('open');
			}
    }
	}); 
};



// navigation
var onePageNavigation = function() {
  var navToggler = $('.site-menu-toggle');
 	$("body").on("click", ".unslate_co--site-nav .site-nav-ul li a[href^='#'], .smoothscroll[href^='#'], .unslate_co--site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
    
    e.preventDefault();

    var $body = $('body');
    if ( $body.hasClass('offcanvas')  ) {
    	$body.removeClass('offcanvas');
    	$('body').find('.js-burger-toggle-menu').removeClass('open');
    }

    var hash = this.hash;
    
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, 'easeInOutExpo');

  });

};


// load ajax page
var portfolioItemClick = function() {
	$('.ajax-load-page').on('click', function(e) {
		
		var id = $(this).data('id'),
			href = $(this).attr('href');

		if ( $('#portfolio-single-holder > div').length ) {
			$('#portfolio-single-holder > div').remove();
		} 

		TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

		$('html, body').animate({
    	scrollTop: $('#portfolio-section').offset().top - 50
		}, 700, 'easeInOutExpo', function() {
		});
		
		setTimeout(function(){
			loadPortfolioSinglePage(id, href);
		}, 100);

		e.preventDefault();

	});

	// Close
	$('body').on('click', '.js-close-portfolio', function() {

		setTimeout(function(){
			$('html, body').animate({
	    	scrollTop: $('#portfolio-section').offset().top - 50
			}, 700, 'easeInOutExpo');
		}, 200);

		TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
		TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

		} });
		
	});
};

$(document).ajaxStop(function(){
	setTimeout(function(){
		TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
	}, 400);
});

var loadPortfolioSinglePage = function(id, href) {
	$.ajax({
		url: href,
		type: 'GET',
		success: function(html) {

			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '50px', autoAlpha: 0, visibility: 'hidden', onComplete() {
				TweenMax.set('.portfolio-wrapper', { height: 0 });
			} })

			var pSingleHolder = $('#portfolio-single-holder');
	    	
			var getHTMLContent = $(html).find('.portfolio-single-wrap').html();

			pSingleHolder.append(
				'<div id="portfolio-single-'+id+
				'" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Back to Portfolio</span><span class="icon-close2 wrap-icon-close"></span></span>' + getHTMLContent + '</div>'
			);

			setTimeout(function() {
				owlSingleSlider();
			}, 10);

			setTimeout(function() {
				TweenMax.set('.portfolio-single-inner', { marginTop: '100px', autoAlpha: 0, display: 'none' });
				TweenMax.to('.portfolio-single-inner', .5, { marginTop: '0px', autoAlpha: 1, display: 'block', onComplete() {

					TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
				} });
			}, 700 );
		}
	});

	return false;

};

var jarallaxPlugin = function() {
	$('.jarallax').jarallax({
    speed: 0.2
	});
	jarallax(document.querySelectorAll('.jarallax-video'), {
    speed: 0.2,
    videoSrc: 'https://www.youtube.com/watch?v=mwtbEGNABWU',
    videoStartTime: 8,
    videoEndTime: 70,
	});
};

// var contactForm = function() {
// 	if ($('#contactForm').length > 0 ) {
// 		$( "#contactForm" ).validate( {
// 			rules: {
// 				name: "required",
// 				email: {
// 					required: true,
// 					email: true
// 				},
// 				message: {
// 					required: true,
// 					minlength: 5
// 				}
// 			},
// 			messages: {
// 				name: "Please enter your name",
// 				email: "Please enter a valid email address",
// 				message: "Please enter a message"
// 			},
// 			errorElement: 'span',
// 			errorLabelContainer: '.form-error',
// 			/* submit via ajax */
// 			submitHandler: function(form) {		
// 				var $submit = $('.submitting'),
// 					waitText = 'Submitting...';

// 				$.ajax({   	
// 			      type: "POST",
// 			      url: "php/send-email.php",
// 			      data: $(form).serialize(),

// 			      beforeSend: function() { 
// 			      	$submit.css('display', 'block').text(waitText);
// 			      },
// 			      success: function(msg) {
// 	               if (msg == 'OK') {
// 	               	$('#form-message-warning').hide();
// 			            setTimeout(function(){
// 	               		$('#contactForm').fadeOut();
// 	               	}, 1000);
// 			            setTimeout(function(){
// 			               $('#form-message-success').fadeIn();   
// 	               	}, 1400);
		               
// 		            } else {
// 		               $('#form-message-warning').html(msg);
// 			            $('#form-message-warning').fadeIn();
// 			            $submit.css('display', 'none');
// 		            }
// 			      },
// 			      error: function() {
// 			      	$('#form-message-warning').html("Something went wrong. Please try again.");
// 			         $('#form-message-warning').fadeIn();
// 			         $submit.css('display', 'none');
// 			      }
// 		      });    		
// 	  		}
			
// 		} );
// 	}
// };

var stickyFillPlugin = function() {
	var elements = document.querySelectorAll('.unslate_co--sticky');
	Stickyfill.add(elements);
};

var animateReveal = function() {


	var controller = new ScrollMagic.Controller();
	
	var greveal = $('.gsap-reveal');

	// gsap reveal
	$('.gsap-reveal').each(function() {
		$(this).append('<span class="cover"></span>');
	});
	if ( greveal.length ) {
		var revealNum = 0;
		greveal.each(function() {
			var cover = $(this).find('.cover');

			var tl = new TimelineMax();

			setTimeout(function() {
				tl
					.fromTo(cover, 2, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease:Expo.easeInOut })
			}, revealNum * 0);
			
			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: "0%",
				reverse: false,
				offset: "-300%",
			})
			.setTween(tl)
			.addTo(controller);

			revealNum++;

		});
	}

	// gsap reveal hero
	$('.gsap-reveal-hero').each(function() {
		var html = $(this).html();
		$(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
	});
	var grevealhero = $('.gsap-reveal-hero');

	if ( grevealhero.length ) {
		var heroNum = 0;
		grevealhero.each(function() {

			var cover = $(this).find('.cover'),
				revealContent = $(this).find('.reveal-content');

			var tl2 = new TimelineMax();

			setTimeout(function() {

				tl2
					.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						tl2.set(revealContent, { x: 0 });
						tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
					} } )
			}, heroNum * 0 );

			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: "0%",
				reverse: false,
				offset: "-300%",
			})
			.setTween(tl2)
			.addTo(controller);

			heroNum++;
		});
	}

}


class PointerParticle {
	constructor(spread, speed, component) {
	  const { ctx, pointer, hue } = component;
  
	  this.ctx = ctx;
	  this.x = pointer.x;
	  this.y = pointer.y;
	  this.mx = pointer.mx * 0.1;
	  this.my = pointer.my * 0.1;
	  this.size = Math.random() + 1;
	  this.decay = 0.01;
	  this.speed = speed * 0.08;
	  this.spread = spread * this.speed;
	  this.spreadX = (Math.random() - 0.5) * this.spread - this.mx;
	  this.spreadY = (Math.random() - 0.5) * this.spread - this.my;
	  this.color = `hsl(${hue}deg 90% 60%)`;
	}
  
	draw() {
	  this.ctx.fillStyle = this.color;
	  this.ctx.beginPath();
	  this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
	  this.ctx.fill();
	}
  
	collapse() {
	  this.size -= this.decay;
	}
  
	trail() {
	  this.x += this.spreadX * this.size;
	  this.y += this.spreadY * this.size;
	}
  
	update() {
	  this.draw();
	  this.trail();
	  this.collapse();
	}
  }

  // Make sure this script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
	const heroLinesWrap = document.querySelector('#hero-section .lines-wrap'); // Use the most specific selector possible
	if (heroLinesWrap) {
	  heroLinesWrap.style.display = 'none';
	}
  });
  
  class PointerParticles extends HTMLElement {
	static register(tag = "pointer-particles") {
	  if ("customElements" in window) {
		customElements.define(tag, this);
	  }
	}
  
	static css = `
	  :host {
		display: grid;
		width: 100%;
		height: 100%;
		pointer-events: none;
	  }
	`;
  
	constructor() {
	  super();
  
	  this.canvas;
	  this.ctx;
	  this.fps = 60;
	  this.msPerFrame = 1000 / this.fps;
	  this.timePrevious;
	  this.particles = [];
	  this.pointer = {
		x: 0,
		y: 0,
		mx: 0,
		my: 0
	  };
	  this.hue = 0;
	}
  
	connectedCallback() {
	  const canvas = document.createElement("canvas");
	  const sheet = new CSSStyleSheet();
  
	  this.shadowroot = this.attachShadow({ mode: "open" });
  
	  sheet.replaceSync(PointerParticles.css);
	  this.shadowroot.adoptedStyleSheets = [sheet];
  
	  this.shadowroot.append(canvas);
  
	  this.canvas = this.shadowroot.querySelector("canvas");
	  this.ctx = this.canvas.getContext("2d");
	  this.setCanvasDimensions();
	  this.setupEvents();
	  this.timePrevious = performance.now();
	  this.animateParticles();
	}
  
	createParticles(event, { count, speed, spread }) {
	  this.setPointerValues(event);
  
	  for (let i = 0; i < count; i++) {
		this.particles.push(new PointerParticle(spread, speed, this));
	  }
	}
  
	setPointerValues(event) {
	  this.pointer.x = event.x - this.offsetLeft;
	  this.pointer.y = event.y - this.offsetTop;
	  this.pointer.mx = event.movementX;
	  this.pointer.my = event.movementY;
	}
  
	setupEvents() {
	  const parent = this.parentNode;
  
	  parent.addEventListener("click", (event) => {
		this.createParticles(event, {
		  count: 300,
		  speed: Math.random() + 1,
		  spread: Math.random() + 50
		});
	  });
  
	  parent.addEventListener("pointermove", (event) => {
		this.createParticles(event, {
		  count: 20,
		  speed: this.getPointerVelocity(event),
		  spread: 1
		});
	  });
  
	  window.addEventListener("resize", () => this.setCanvasDimensions());
	}
  
	getPointerVelocity(event) {
	  const a = event.movementX;
	  const b = event.movementY;
	  const c = Math.floor(Math.sqrt(a * a + b * b));
  
	  return c;
	}
  
	handleParticles() {
	  for (let i = 0; i < this.particles.length; i++) {
		this.particles[i].update();
  
		if (this.particles[i].size <= 0.1) {
		  this.particles.splice(i, 1);
		  i--;
		}
	  }
	}
  
	setCanvasDimensions() {
	  const rect = this.parentNode.getBoundingClientRect();
  
	  this.canvas.width = rect.width;
	  this.canvas.height = rect.height;
	}
  
	animateParticles() {
	  requestAnimationFrame(() => this.animateParticles());
  
	  const timeNow = performance.now();
	  const timePassed = timeNow - this.timePrevious;
  
	  if (timePassed < this.msPerFrame) return;
  
	  const excessTime = timePassed % this.msPerFrame;
  
	  this.timePrevious = timeNow - excessTime;
  
	  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	  this.hue = this.hue > 360 ? 0 : (this.hue += 3);
  
	  this.handleParticles();
	}
  }
  
  PointerParticles.register();
  

