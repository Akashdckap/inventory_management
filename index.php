<?php


require "router.php";

session_start();


$router = new routers();

$router->get("/", "dashboard");
$router->get("/login","loginPage");
$router->post("/loginLogic","loginLogic");

$router->post("/logout","logout");
$router->post("/invite","invite");


$router->checking();