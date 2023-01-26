<?php
    if(isset($_POST['btn-contato'])) {

    $nome = $_POST['name'];
    $email = $_POST['email'];
    $mensagem = $_POST['message'];


    //Corpo email
    $arquivo = "Nome: $nome
                E-mail: $email
                Mensagem: $mensagem";
    
        //destino dos e-mail
    $destino = "contato@layaltheman.com";
    $assunto = "Contato via www.layaltheman.com";

    //formatação padrao para e-mail PHP
    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    $headers .= "From: $nome <$email>";

    //Enviar
    mail($destino, $assunto, $arquivo, $headers);
    
    header("Location: ../pages/thankYou.html");
    // exit();
    // } else {
    //     include_once('../falhaCarregamento.html');
    //     echo "<meta http-equiv='refresh' content='5;URL=../index.html'>";

    }
?>
