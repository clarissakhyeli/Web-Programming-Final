<?php
if(isset($_POST["register"])){
    $user=$_POST['user'];  
    $pass=$_POST['pass'];
    $con = mysqli_connect('localhost', 'root', '', 'user_registration');

    $query = mysqli_query($con, "SELECT * FROM login WHERE username='".$user."'");
    $numrows = mysqli_num_rows($query);
    if($numrows==0)  
    {
        $sql="INSERT INTO login(username,password) VALUES('$user','$pass')";  

        $result=mysqli_query($con, $sql);  
        if($result){
            header("Location: ../login.html");
        }
        else{  
            echo "Failure!";
        }
    } 
    else{  
        echo "That username already exists! Please try again with another.";  
    }  
}  
?>  