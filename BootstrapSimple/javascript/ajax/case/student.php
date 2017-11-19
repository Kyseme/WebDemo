<?php
    header("content-type:text/html;charset='utf-8'");
    //创建一个学生的数组
    $arr=array(
        //给数组赋值
        array('name'=>'sunine','age'=>'18'),
        array('name'=>'sun','age'=>'17'),
        array('name'=>'kyseme','age'=>'15'),
        array('name'=>'rain','age'=>'18'),
        array('name'=>'sunny','age'=>'28'),
        array('name'=>'snow','age'=>'38'),
        array('name'=>'cloudy','age'=>'23')
    );
    //输出数组 json形式输出
    echo json_encode($arr);
?>