<?php
function clear($array){
  foreach($array as $key=>$item){
    $data[$key] = strip_tags($item);
  }
  return $data;
}
$to = 'info@studiyastroi.ru';
$subject = 'Заказ звонка';
$data = clear($_GET);
if(!empty($data['name_zvonok']) and !empty($data['phone_zvonok'])){
  $message = "Имя: ".$data['name_zvonok']."\r\n";
  $message .= "Телефон: ".$data['phone_zvonok']."\r\n";
  // Для отправки письма должен быть установлен заголовок Content-typ
  $headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

  // Дополнительные заголовки
  $headers .= 'To: '.$to. "\r\n";
  mail($to, $subject, $message, $headers);
  echo "<p class='text-success'>Отправка формы прошла успешно</p>";
}else{
  echo "<p class='text-error'>Заполните все необходимые поля!</p>";
}
?>