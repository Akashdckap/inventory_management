<?php


require "router.php";

session_start();


$router = new routers();

$router->get("/", "dashboard");
$router->post("/login","loginPage");
$router->post("/loginLogic","loginLogic");

$router->post("/logout","logout");


$router->checking();