<?php 
$servername="localhost";
$user="root";
$password="";
$dbname="tour_book_db";
$conn=mysqli_connect($servername,$user,$password,$dbname);
 if(isset($_post['send'])){
    $name=$_post['name'];
    $email=$_post['email'];
    $phone=$_post['phone'];
    $phone=$_post['address'];
    $location=$_post['location'];
    $geust=$_post['geust'];
    $arrivals=$_post['arrivals'];
    $leaving=$_post['leaving'];
    $_receive ="insert into book_form(name.email,phone,address,location,geust,arrivals,leaving) values
    ('$name','$email','$phone','$location',' $geust','$arrivals',' $leaving')";
   mysqli_query($conn,$_receive);
    header('location:book.php');
 }else{
    echo 'error occurs try again';
 }

?>