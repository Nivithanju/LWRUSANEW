<?php
$firstname = filter_input(INPUT_POST, 'firstname');
$lastname = filter_input(INPUT_POST, 'lastname');
$email = filter_input(INPUT_POST, 'email');
$phone = filter_input(INPUT_POST, 'phone');
$checkbox = filter_input(INPUT_POST, 'list');
$checkbox1 = filter_input(INPUT_POST, 'list1');
$checkbox2 = filter_input(INPUT_POST, 'list2');
$info = filter_input(INPUT_POST, 'info');

$userName = filter_input(INPUT_POST, 'userName');
$email1 = filter_input(INPUT_POST, 'email1');
$message = filter_input(INPUT_POST, 'message');








if(isset($_POST['list']) && is_array($_POST['list']) && count($_POST['list']) > 0){
    $checkbox = implode(', ', $_POST['list']);
}

if(isset($_POST['list1']) && is_array($_POST['list1']) && count($_POST['list1']) > 0){
    $checkbox1 = implode(', ', $_POST['list1']);
}

if(isset($_POST['list2']) && is_array($_POST['list2']) && count($_POST['list2']) > 0){
    $checkbox2 = implode(', ', $_POST['list2']);
}

if (!empty($firstname)){
if (!empty($lastname)|| !empty($email)||!empty($phone)||!empty($info)){

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
$sql = "INSERT INTO tbl_contact (firstname, lastname, email, phone , info)
values ('$firstname','$lastname', '$email', '$phone', '$info')";
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
header("Location: /index.html");
?>
