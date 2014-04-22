$(document).ready(function() {

	$(document).on("pageshow","[date-role='page']", function(){
	
	if($($(this)).hasClass("header_default")){


		$('<header data-theme="b" data-role="header" data-position="fixed"><h1>Photos</h1><a href="#" class="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all" data-rel="back">Back</a><a href="#info" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all  ui-icon-info ui-btn-icon-notext">Info</a></header>')
			.prependTo($(this))
			.toolbar({position: "fixed"});
			
			$("[data-role='header'] h1").text($(this).jqmData("title"));



	} // if header_default
	$.mobile.resetActivePageHeigh();
	
	if ($($(this)).hasClass("footer_default")){
		
		$('<footer data-theme="a" data-role="footer" data-position="fixed"><nav data-role = "navbar"><ul><li><a href="#home" class="ui-btn ui-icon-home ui-btn-icon-top">Home</a></li><li><a href="#blog" class="ui-btn ui-icon-edit ui-btn-icon-top">Blog</a></li><li><a href="#videos" class="ui-btn ui-icon-video ui-btn-icon-top">Videos</a></li><li><a href="#photos" class="ui-btn ui-icon-camera ui-btn-icon-top">Photos</a></li><li><a href="#tweets" class="ui-btn ui-icon-comment ui-btn-icon-top">Tweets</a></li></ul></nav></footer>').appendTo($(this))
		.toolbar({position: "fixed"});
	}
	
	}); // show page
}); //documentready
