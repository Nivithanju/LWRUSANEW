<?php
$userName = filter_input(INPUT_POST, 'userName');
$email1 = filter_input(INPUT_POST, 'email1');
$message = filter_input(INPUT_POST, 'message');



if (!empty($userName)){
if ( !empty($email)||!empty($message)){

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
$sql = "INSERT INTO contact (userName, email, message)
values ('$userName','$email1', '$message')";

if ($conn->query($sql)){
echo "thankyou";
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
else{
echo "Password should not be empty";
die();
}
}
else{
echo "Username should not be empty";
die();
}
header("Location: /contact.html");
?>
