// This is where it all goes :)

jQuery(document).ready(function($){
	
    //открытие модального окна
	$('.open_modal, .registration-button, .standart-page-reg-button, .corner-registration-button').click(function (e){
		e.preventDefault();
		$('.popup, .overlay, .form-wrapper').css({'opacity':'1', 'display':'block'});
	});
	
    //закрытие модального окна
	$('.close_modal, .overlay').click(function (){
		console.log("sup");
		$('.popup, .popup2, .overlay, .form-wrapper').css({'opacity':'0', 'display':'none'});
		$('.popup > .reg-form textarea').val('');
		
		//сброс всех полей формы обраной связи
		$(':input','.reg-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".reg-form input[type=submit]").attr('disabled','disabled');
	});
	
	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе отправки письма
	$(".reg-form").submit(function() {
		console.log("sup");
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup2, .overlay').css('opacity','1');
					$('.popup2, .overlay').css('visibility','visible');
					$('.popup').css({'opacity':'0','visibility':'hidden'});
				}
				else {
					$('.popup2 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup2, .overlay').css('opacity','1');
					$('.popup2, .overlay').css('visibility','visible');
					$('.popup').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});

