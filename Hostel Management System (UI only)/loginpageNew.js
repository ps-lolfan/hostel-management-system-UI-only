<script type="text/javascript">
function validate()
{
	var username=document.f1.Username.value;
	if(Username==null || Username=="" && lastname==null || lastname=="")
	{
	alert("Please Provide Username-->");
	}
	else if(Username=="kletech" && lastname=="123456")
	{
	alert("Login Successful");
	}
	else
	{
	alert("Login Unsuccessful");
	}
}
</script>
action="/action_page.php