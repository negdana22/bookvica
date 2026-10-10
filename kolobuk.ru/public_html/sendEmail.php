<?php
ini_set('display_errors', '0');
error_reporting(E_ALL);

function field($key) {
    if (!isset($_POST[$key]) || !is_string($_POST[$key])) {
        return '';
    }
    return trim($_POST[$key]);
}

function has_header_break($value) {
    return preg_match('/[\r\n]/', $value) === 1;
}

$username = field('username');
$email = field('email');
$message = field('message');

if ($username === '' || has_header_break($username) || strlen($username) > 200) {
    http_response_code(400);
    echo 'error';
    exit;
}

if ($email === '' || has_header_break($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'error';
    exit;
}

if ($message === '' || strlen($message) > 5000) {
    http_response_code(400);
    echo 'error';
    exit;
}

$from = 'test@a0915135.xsph.ru';
$subject = 'Новое сообщение с сайта Колобук';
$messageBody = "Имя: $username\nEmail: $email\n\n$message";
$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$toEmails = array('negdana22@gmail.com', 'iriy999@gmail.com');
$success = true;

foreach ($toEmails as $toEmail) {
    if (!mail($toEmail, $subject, $messageBody, $headers)) {
        $success = false;
    }
}

echo $success ? 'success' : 'error';
