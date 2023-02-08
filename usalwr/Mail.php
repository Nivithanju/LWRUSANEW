<?php

require "PHPMailer/src/PHPMailer.php";
    // require "PHPMailer/src/OAuth.php";
require "PHPMailer/src/SMTP.php";
    // require "PHPMailer/src/POP3.php";
require "PHPMailer/src/Exception.php";

require 'vendor/autoload.php';

// $to = $_POST["email"];
// $userName = filter_input(INPUT_POST, 'userName');
// $subject = "LWR Thanking mail";
// // $txt = "Thank You For Donating";

// $txt = '<html><body><h2>Love Without Reason</h2><p>  '. $_POST['userName'] .' </p><p>Thank you for subscribing</p></body></html>';
// if (mail($to,$subject,$txt))
// {
//     echo "mail sent";
// }
// else{
//     echo "not sent";
// }


 $mail = new PHPMailer\PHPMailer\PHPMailer();
    // $strMessage = "";
    //Only action if the form has been submitted
    
    
    // $mail->SMTPDebug = 3; 
                               // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com'; 
    $mail->Port       = 587;    // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'lwrgiving@gmail.com';
                   // SMTP username
    $mail->Password = 'lboepnoypuomrlza';                           // SMTP password
    $mail->From = 'lwrgiving@gmail.com';
   
    // $mail->CharSet    = "UTF-8";
    $mail->FromName = 'lovewithoutreason';
     $mail->SingleTo   = true;
    $mail->addAddress(''.$_POST['email'].'');
    
    // $mail->ClearAddresses();
    //(''.$_POST['email'].'');     // Add a recipient
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Thank you for subscribing';
    $mail->Body    = '
    <html>
                    <body>
                    <p> Dear '.$_POST['userName'].',</p>
                         <p>Thank you for your interest in Love Without Reason.</p>
                         <p> We will keep you posted with our latest events and news.</p>
                         <p>Thank you</p>

                         <p style="color:#7d0000"><strong>Anncy Daniel | Donor Relations</strong></p>

<p>a:  P.O. Box 21009, Chattanooga, TN 37424</p>

<p>e:  <a href="anncy@lovewithoutreason.org">anncy@lovewithoutreason.org</a></p>

<p>w: <a href="lovewithoutreason.org">lovewithoutreason.org</a></p>

<p>p: +1 (425)-275-2736</p>
                       
                    </body>
                </html>
                ';

    if( $mail->send())
    {
    	echo "sent";
    }
    else
    {
    	echo "not sent";
    }
     header("Location: /index.html");
 





















$userName = filter_input(INPUT_POST, 'userName');
$companyName = filter_input(INPUT_POST, 'companyName');
$email = filter_input(INPUT_POST, 'email');








if (!empty($userName)){
if (!empty($email)){

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "db_connect";
// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO subscribers (userName, Organization, email)
values ('$userName','$companyName', '$email')";

if ($conn->query($sql)){
 header("Location: /index.html");
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "email should not be empty";
die();
}
}
else{
echo "Username should not be empty";
die();
}
// header("Location: /testing/index.html");

// header("Location: /testing/index.html");
?>