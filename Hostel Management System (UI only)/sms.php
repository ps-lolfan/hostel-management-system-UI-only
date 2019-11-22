<?php
$mobile="9740199373";
$message="Your Username:kletech and Your Password:123456";
$json = json_decode(file_get_contents("https://smsapi.engineeringtgr.com/send/?Mobile=9740199373&Password=m9740199373&Message=".urlencode($message)."&To=".urlencode($mobile)."&Key=muragijnGEeWBTtUwk7uLloJ"),true);
if ($json["status"]==="success") {
    echo $json["msg"];
    //your code when send success
}else{
    echo $json["msg"];
    //your code when not send
}
?>
 