var selected_image_src = "";

$(document).ready(function(){
    console.log("DETAILS ITEM LOADED");

    $("#comment_button").click(function(){
    	var comment_content_text_area= $("#comment_content");
        var comment_content = comment_content_text_area.val();
        comment_content_text_area.val("");
        $("ul#comment_list").prepend(
			'<li>' +
				'<div class="row">' +
					'<div class="col-sm-1">' +
						'<img style="color: black;" src="assets/images/avatars/quoc.jpg" height="50" width="50"/>' +
						'<span class="name">Quốc</span>' +
					'</div>' +
					'<div class="col-sm-11">' +
						'<span>' +
            				comment_content +
						'</span>' +
			'		</div>' +
				'</div>' +
			'</li>');
    });

});