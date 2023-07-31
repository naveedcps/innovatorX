jQuery(document).ready(function() {
	jQuery(".wordpress-logo").mouseenter(function(){
		jQuery(this).addClass("my-move-anim");
		jQuery(this).removeClass("moveback-anim");
	});
	jQuery(".wordpress-logo").mouseleave(function(){
		jQuery(this).addClass("moveback-anim");
		jQuery(this).removeClass("my-move-anim");
	});
	jQuery(".left-img-hello-map").hover(function() {
	  jQuery("img.left-img-hello").toggle();
		jQuery("img.left-img-hello").toggleClass("active");
	});
	jQuery(".middle-girl-img").hover(function() {
	  jQuery("img.right-img-hello").toggle();
	  jQuery("img.right-img-hello").toggleClass("active");
	});
	jQuery(".thinking-bilb-map").hover(function() {
		jQuery(".thinking-bilb-img").toggle();
		jQuery("img.right-img-hello").toggleClass("active");
	  });
	jQuery(".right-img-hello-map").hover(function() {
	  jQuery(".banner-img-sect").toggleClass("before");
	});
	jQuery(".menu-toggle").click(function() {
		jQuery("ul#primary-menu").toggle();
	  });
});