<?php
/*
调用者：tpl/detail.html;
作用：根据客户端提交的菜品id；显示该菜品的详情；
返回：json格式字符串；形如{}
*/
    header('Content-Type: application/json');
   //读取客户端提交的菜品编号
     @$did=$_REQUEST['did'];
     if(!$did){
      echo '{}';
      return;//退出当前php页面的执行
     }

     $conn=mysqli_connect('127.0.0.1','root','root','kaifanla');
     $sql="SET NAMES UTF8";
     mysqli_query($conn,$sql);
     $sql="SELECT did,name,price,img_lg,material,detail FROM kf_dish WHERE did=$did";
     $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($result);


    echo json_encode($row);




?>