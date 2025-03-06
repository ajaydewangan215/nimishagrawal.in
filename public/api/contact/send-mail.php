<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// // convert json data to array
// $rest_json = file_get_contents("php://input");
// $_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (empty($_POST['name'])) {
        $errors['name_error'] = 'Name is empty';
    } else {
        $name = $_POST['name'];
    }
    
    if (empty($_POST['subject'])) {
        $errors['subject_error'] = 'Subject is empty';
    } else {
        $subject = $_POST['subject'];
    }
    
    if (empty($_POST['email'])) {
        $errors['email_error'] = 'Email is empty';
    } else {
        $email = $_POST['email'];
        // validating the email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $errors['email_error'] = 'Invalid email';
        }
    }
      
    if (empty($_POST['message'])) {
        $errors['message_error'] = 'Message is empty';
    } else {
        $message = $_POST['message'];
    }
    
    if (count($errors) == 0 ) {
        
        $date = date('j, F Y h:i A');
        $emailBody = "
            <div style=\"padding:20px;\">
              Date: <span style=\"color:#888\">$date</span>
              <br>
              Name: <span style=\"color:#888\">$name</span>
              <br>
              Email: <span style=\"color:#888\">$email</span>
              <br>
              Subject: <span style=\"color:#888\">$subject</span>
              <br>
              Message: <div style=\"color:#000\">$message</div>
            </div>
        ";
        
        // $headers = 	"From: $name <$email>". "\r\n" .
        // "Reply-To: $email" . "\r\n" .
        // "MIME-Version: 1.0\r\n" . 
        // "Content-Type: text/html; charset=iso-8859-1\r\n";
    
        $to = 'contact@nimishagrawal.com';
        
        $headers = 'From: '.$name .'<'.$email .'>'. "\r\n" .
            'Reply-To: '.$email."\r\n" .
            "MIME-Version: 1.0\r\n" . 
            "Content-Type: text/html; charset=utf-8" . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        
        if (mail($to, $subject, $emailBody, $headers)) {
          echo json_encode(["status"=>"success", "message"=>"Your data was successfully sent"]);
        }
    } else {
        echo json_encode(["status"=>"fail", "error"=>$errors]);
    }
    
}

?>