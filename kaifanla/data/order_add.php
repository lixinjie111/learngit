<?php
/*
调用者：tpl/order.html;
作用：根据客户端提交的订单信息，生成一个新的订单，向客户端返回该订单在系统中的自增编号
返回：json格式字符串；形如
{'msg':'ok','oid':4}
或{'msg':'err','detail':'你的地址无效'}
*/

    header('Content-Type: application/json');
    $output=array();
   //读取客户端提交的表单数据
         @$phone=$_REQUEST['phone'];
        @$user_name=$_REQUEST['user'];
        @$sex=$_REQUEST['sex'];
        @$addr=$_REQUEST['addr'];
        @$did=$_REQUEST['did'];
        $order_time=time()*1000;
     if(!$phone){
      echo '[]';
      return;//退出当前php页面的执行
     }

     $conn=mysqli_connect('127.0.0.1','root','root','kaifanla');
     $sql="SET NAMES UTF8";
     mysqli_query($conn,$sql);
     $sql="INSERT INTO kf_order VALUES(NULL,'$phone','$user_name','$sex','$order_time','$addr','$did')";
     $result=mysqli_query($conn,$sql);
if($result){
    $output['msg']='ok';
    $output['oid']=mysqli_insert_id($conn);
}else{
    $output['msg']='错误';
}



    echo json_encode($output);




?>