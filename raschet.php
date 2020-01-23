<?php

function clear($array){
  foreach($array as $key=>$item){
    $data[$key] = strip_tags($item);
  }
  return $data;
}
$to = 'info@studiyastroi.ru';
$subject = 'Заявка на расчет';
$data = clear($_POST);
if(!empty($data['name']) and !empty($data['email']) and !empty($data['phone']) and !empty($data['city'])){
  if($_FILES['document']['size'] <= 30*1024*1024){
      $filename = time().$_FILES['document']['name'];
      $tmp_name = $_FILES['document']['tmp_name'];
      move_uploaded_file($tmp_name,$_SERVER['DOCUMENT_ROOT'].'/uploads/'.$filename);
      $message = "Имя: ".$data['name']."<br>";
      $message .= "Email: ".$data['email']."<br>";
      $message .= "Телефон: ".$data['phone']."<br>";
      $message .= "Город объекта: ".$data['city']."<br>";
      $message .= "Загруженный файл: <a href='http://".$_SERVER['SERVER_NAME']."/uploads/".$filename."'>Просмотреть</a>";
      // Для отправки письма должен быть установлен заголовок Content-type
      $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

      // Дополнительные заголовки
      $headers .= 'To: '.$to. "\r\n";
      mail($to, $subject, $message, $headers);
      echo "<p class='name-form'>Отправка формы прошла успешно</p>";
  }else{
    echo "<p class='text-error'>Размер файла не должен привышать 30 Мб</p>";
  }
}else{
  echo "<p class='text-error'>Заполните все необходимые поля!</p>";
}
?>