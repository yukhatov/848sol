<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   sendMessage(generateBody());
}
else {
    print_r('Wrong request type');
}

function generateBody()
{
    $body = "<b>First name:</b>> " . ($_POST['first_name'] ?? "") . "<br>" .
            "<b>Last name:</b>> ". ($_POST['last_name'] ?? "") . "<br>" .
            "<b>Email:</b>> ". ($_POST['email'] ?? "") . "<br>" .
            "<b>Phone:</b>> ". ($_POST['phone'] ?? "") . "<br>" .
            "<b>Job:</b>> ". ($_POST['job'] ?? "") . "<br>" .
            "<b>Company:</b>> ". ($_POST['company'] ?? "") . "<br>"
    ;

    return $body;
}

function sendMessage($body)
{
    $mail = new PHPMailer();

    $mail->IsSMTP();
    //$mail->SMTPDebug  = 2;                     // enables SMTP debug information (for testing)
    // 1 = errors and messages
    // 2 = messages only
    $mail->SMTPAuth   = true;                  // enable SMTP authentication
    $mail->SMTPSecure = "tls";                 // sets the prefix to the servier
    $mail->Host       = "ssl://smtp.gmail.com";      // sets GMAIL as the SMTP server
    $mail->Port       = 465;                   // set the SMTP port for the GMAIL server
    $mail->Username   = "massiveintelligencedev@gmail.com";  // GMAIL username
    $mail->Password   = "0984337259";            // GMAIL password

    $mail->SetFrom('massiveintelligencedev@gmail.com', '848 solutions');

    $mail->Subject    = "848sol Contact us";

    $mail->AltBody    = "To view the message, please use an HTML compatible email viewer!"; // optional, comment out and test

    $mail->MsgHTML($body);

    $address = "yukhatov@gmail.com";
    $mail->AddAddress($address, "Artur Yukhatov");

    if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        echo "Message sent!";
    }
}
