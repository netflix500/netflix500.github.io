<?php
function clear($array){
  foreach($array as $key=>$item){
    $data[$key] = strip_tags($item);
  }
  return $data;
}
$to = 'info@studiyastroi.ru';
$subject = 'Заявка';
$data = clear($_GET);
if(!empty($data['name_zayvka']) and !empty($data['phone_zayvka'])){
  $message = "Имя: ".$data['name_zayvka']."\r\n";
  $message .= "Телефон: ".$data['phone_zayvka']."\r\n";
  // Для отправки письма должен быть установлен заголовок Content-typе
  $headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

  // Дополнительные заголовки
  $headers .= 'To: '.$to. "\r\n";
  mail($to, $subject, $message, $headers);
  echo "<p class='text-success'>Отправка формы прошла успешно</p>";
}else{
  echo "<p class='text-error'>Заполните все необходимые поля!</p>";
}
?>