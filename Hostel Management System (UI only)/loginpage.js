<html>
<head>
<script>
function username()
{
var fn=f1.Username.value;
var check=/^[a-z A-Z]+$/;
if(check.test(fn))
{
}
else
{
alert("Invalid Username");
f1.Username.focus();
}
}


function password()
{
var pincode=f1.lastname.value;
var check=/^[0-9]{10}$/;
if(check.test(pincode))
{

}
else
{
alert("INVALID Password");
f1.lastname.focus();

}
}
</script>