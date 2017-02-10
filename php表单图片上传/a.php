<?php
/**
 * Created by PhpStorm.
 * User: lixinjie
 * Date: 2016/5/4
 * Time: 9:48
 */
$name = isset($_POST['name'])? $_POST['name'] : '';
$gender = isset($_POST['gender'])? $_POST['gender'] : '';
$filename=$_FILES['photo']['name'];
//$filename = time().substr($_FILES['photo']['name'], strrpos($_FILES['photo']['name'],'.'));

$response = array();

if(move_uploaded_file($_FILES['photo']['tmp_name'], $filename)){
    $response['isSuccess'] = true;
    $response['name'] = $name;
    $response['gender'] = $gender;
    $response['photo'] = $filename;
}else{
    $response['isSuccess'] = false;
}
echo ($filename);
echo json_encode($response);
?>