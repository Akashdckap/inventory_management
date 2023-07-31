<?php

require "connection.php";

// $conn['db'] = (new Database())->db;

class UserModel extends Database{

    public function loginCheck($loginData)
    {
        // // var_dump($loginData['email']);
        $email = $loginData['email'];
        $password = $loginData['password'];


        // select name,typeEducation_id,institute,study from users join education on users.id = education.user_id;

        $query = $this->db->prepare("SELECT * FROM users join role on role.id = users.role_type where email = '$email' AND password = '$password'");
        $check  = $query->execute();
        $details = $query->fetchAll();
        // echo "<pre>";
        var_dump($details[0]['type']);
        // echo "</pre>";
        if($details){
                if($details[0]['type'] == "user"){
                    // $_SESSION['email'] = $email;
                    // header("location:/");
                    echo "user";
                }
                else {
                    $_SESSION['email'] = $email;
                    header("location:/");

                }
        }
        else{
            $_SESSION['invalid email'] = "invalid email";
            header("location:/login");

        }
        
        // $key = array_keys($loginData);

        // $val = array_values($loginData);
    
        //     $sql = "INSERT INTO post (" . implode(', ', $key) . ") "
        //     . "VALUES ('" . implode("', '", $val) . "')";
        //     $query =  $this->db->prepare($sql);
        //     $query->execute();

    }


}