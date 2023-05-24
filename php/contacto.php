<?php

$name = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$message = $_POST["message"];

$body = "";
$body .= "Nombre: ";
$body .= $name;
$body .= "<br>";
$body .= "E-mail: ";
$body .= $email;
$body .= "<br>";
$body .= "Teléfono: ";
$body .= $tel;
$body .= "<br>";
$body .= "Mensaje: ";
$body .= $message;
$body .= "<br>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
     //Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'programadorweb@colegioinglesplaya.com';                     // SMTP username
    $mail->Password   = 'ciclo2k1801';                               // SMTP password
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('programadorweb@colegioinglesplaya.com', $name);
    $mail->addAddress('maugeguzman@educacionmeguz.com');     // Para Mauge
    $mail->addCC('programadorweb@colegioinglesplaya.com');     // Para mi correo
    $mail->addCC('antonio_caamal@colegioinglesplaya.com');    // Para Toño

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contacto Colegio Inglés Playa';
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo 'success'  ;
} catch (Exception $e) {
    echo "El mensaje no se pudo enviar. Mailer Error: {$mail->ErrorInfo}";
}