<?php // fw_login.php
include_once 'fw_header.php';
echo "<h3>Member Log in</h3>";
$error = $user = $pass = "";

if (isset($_POST['user']))
{
	$user = sanitizeString($_POST['user']);
	$pass = sanitizeString($_POST['pass']);
	
	if ($user == "" || $pass == "")
	{
		$error = "Not all fields were entered<br />";
	}
	else
	{
		$query = "SELECT user,pass FROM fw_members
				  WHERE user='$user' AND pass='$pass'";

		if (mysql_num_rows(queryMysql($query)) == 0)
		{
			$error = "Username/Password invalid<br />";
		}
		else
		{
			$_SESSION['user'] = $user;
			$_SESSION['pass'] = $pass;
			die("You are now logged in. Please
			   <a href='fw_members.php?view=$user'>click here</a>.");
		}
	}
}

echo <<<_END

<p>user: benchung, pass: helicopter1</P>
<p>user: friend, pass: helicopter2</P>

<form method='post' action='fw_login.php'>$error
	Username <input type='text' maxlength='16' name='user'
	value='$user' /><br />
	Password <input type='password' maxlength='16' name='pass'
	value='$pass' /><br />
	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
	<input type='submit' value='Login' />
</form>
_END;
?>
