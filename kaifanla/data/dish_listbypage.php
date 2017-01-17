<?php
/*被  tpl/main.html调用
作用：根据客户端提交的菜品起始下标，分页显示菜品；
返回json格式字符串，形如[{},{},{}]

*/
    header('Content-Type: application/json');

      $output=array();
//从哪一行开始读取记录，如0/5/10..
     @$start=$_REQUEST['start'];
         if(!$start){
         $start=0;
     }
     $count=5;
     $conn=mysqli_connect('127.0.0.1','root','root','kaifanla');
     $sql="SET NAMES UTF8";
     mysqli_query($conn,$sql);
     $sql="SELECT did,name,price,img_sm,material FROM kf_dish LIMIT $start,$count";
     $result=mysqli_query($conn,$sql);

     while(($row=mysqli_fetch_assoc($result))!==NULL){
     $output[]=$row;
     }


    echo json_encode($output);




?>