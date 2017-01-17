<?php
$conn=mysqli_connect('127.0.0.1','root','root','kaifanla',3306);
$sql="SET NAMES UTF8";
var_dump($conn);
$sql="SELECT did,name,price FROM kf_dish";
$result=mysqli_query($conn,$sql);

mysqli_close($conn);
echo $result;
