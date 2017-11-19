<?php
    header("content-type:text/html;charset='utf-8'");
    // $username=$_GET["username"];
    // $password=$_GET["password"];
    $username=$_POST["username"];
    $password=$_POST["password"];
    echo "你的用户名是{$username}，密码是{$password}"
?>