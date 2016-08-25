<?php
//проверяем значения полученые при проверке скриптом формы
if (trim($_POST['valTrFal'])!='valTrFal_true') {
	echo 'fasle';
}
else {

		$childname = trim($_POST['childname']);

		$birthday = trim($_POST['birthday']);
		
		$parentname = trim($_POST['parentname']);

		$phone = trim($_POST['phone']);
		
		$rank = trim($_POST['rank']);
		
		$sport = trim($_POST['sport']);
		
		$additional = trim($_POST['additional']);


		// от кого
		$fromMail = 'info@sc-grand.ru';
		$fromName = 'sc-grand';

		// Сюда введите Ваш email
		$emailTo = 'be.space.copy@gmail.com';

		$subject = 'Форма обратной связи';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено заявка с сайта sc-grand\n\nИмя ребёнка: $childname\nДата рождения: $birthday\nФИО родителя: $parentname\nТелефон: $phone\nСпортивный разряд: $rank\nВид спорта: $sport\nСообщение: $additional";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


		echo 'ok';
}
?>
