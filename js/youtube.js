
jQuery.noConflict();
jQuery(document).ready(function(){
	// Выбираем все изображения с атрибутом id-video
	jQuery('img[id-video]').each(function(e){
		if(jQuery(this).attr('style')){
			var style = jQuery(this).attr('style');
			// Если Админ сдуру поставил в редакторе TinyMCE на всю ширину
			if(style == 'margin-top: 10px; margin-bottom: 10px;'){
				style = 'margin: 10px auto; display: block;';
				jQuery(this).attr('style', style);
			}
			jQuery(this).wrap('<div class="youtube" style="'+style+'padding:0px;clear:both;"></div>');
		}else{
			jQuery(this).wrap('<div class="youtube" style="margin:10px auto;display:block;padding:0px;"></div>');
			jQuery(this).attr('style', "margin:10px auto;display:block;");
		}
	});	
	jQuery('html').on('click', 'div.youtube', function() {
		var id_video = jQuery(this).find('img[id-video]').attr('id-video');
		if(id_video == ''){
			jQuery(this).replaceWith('Ошибка загрузки видео !');
		}else{
			// Меняем все содержимое выбранного элемента
			jQuery(this).replaceWith('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/'+id_video+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
		}
	});
});












		