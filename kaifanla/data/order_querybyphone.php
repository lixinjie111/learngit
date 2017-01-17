<?php
/*
调用者：tpl/myorders.html;
作用：根据客户端提交的电话号码，返回改电话号码的所有订单
返回：json格式字符串；形如[{},{},{}]
*/

    header('Content-Type: application/json');
    $output=array();
   //读取客户端提交的电话号码
     @$phone=$_REQUEST['phone'];
     if(!$phone){
      echo '[]';
      return;//退出当前php页面的执行
     }

     $conn=mysqli_connect('127.0.0.1','root','root','kaifanla');
     $sql="SET NAMES UTF8";
     mysqli_query($conn,$sql);
     $sql="SELECT oid,phone,user_name,sex,order_time,img_sm,addr FROM kf_dish,kf_order WHERE kf_order.did=kf_dish.did AND phone='$phone'";
     $result=mysqli_query($conn,$sql);
    while(($row=mysqli_fetch_assoc($result))!==null){
         $output[]=$row;
         }


    echo json_encode($output);




?>