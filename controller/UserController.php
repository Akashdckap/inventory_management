<?php

require 'model/UserModel.php';

class userController
{
    private $userModel;

    public function __construct()
    {
        $this->userModel = new userModel();
    }

    public function dashboard()
    {
        require 'view/homepage.dashboard.html';
    }

    public function loginPage()
    {
        require 'view/login.html';
    }
    
    public function loginLogic()
    {
        // var_dump($_POST);
        $this->userModel->loginCheck($_POST);
    }
    public function invite()
    {
        require "view/inviteUser.html";
    }
    public function category(){
        require "view/category.html";
    }
    public function product(){
        require "view/product.html";
    }

    
    public function logout()
    {
        session_destroy();
        header("location:/login");
    }



    
}