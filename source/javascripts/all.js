// This is where it all goes :)

jQuery(document).ready(function($){

    //открытие модального окна
	$('.open_modal').click(function (e){
		e.preventDefault();
		$('.popup, .overlay').css({'opacity':'1', 'display':'block'});
	});
    
    //закрытие модального окна
	$('.close_modal, .overlay').click(function (){
		$('.popup, .popup2, .overlay').css({'opacity':'0', 'display':'none'});
		$('.popup > .fofm textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.fofm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".fofm input[type=submit]").attr('disabled','disabled');
	});

});