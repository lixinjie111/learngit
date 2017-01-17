<?php
/*被  tpl/main.html调用
作用：根据客户端提交的菜品名称&原料中的关键字，显示包含该关键字的菜品；
返回json格式字符串，形如[{},{},{}]

*/
    header('Content-Type: application/json');
      $output=array();
     @$kw=$_REQUEST['kw'];
     if(!$kw){
      echo '[]';
      return;
     }
     $count=5;
     $conn=mysqli_connect('127.0.0.1','root','root','kaifanla');
     $sql="SET NAMES UTF8";
     mysqli_query($conn,$sql);
     $sql="SELECT did,name,price,img_sm,material FROM kf_dish WHERE name LIKE '%$kw%' OR material LIKE '%$kw%'";
     $result=mysqli_query($conn,$sql);
     while(($row=mysqli_fetch_assoc($result))!==null){
     $output[]=$row;
     }


    echo json_encode($output);




?>