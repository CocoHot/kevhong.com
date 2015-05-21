<?php

// =====================================
// Define custom variables
// =====================================

$emailTo = 'hong.w.kevin@gmail.com';
$nameTo = 'kevhong.com';
$subject = '[kevhong.com] Contact';

// =====================================
// Validate and send email
// =====================================

if($_SERVER['REQUEST_METHOD'] == 'POST') {

	// Parse JSON
	$data = file_get_contents("php://input");
	$objData = json_decode($data);
	
		// Check to make sure that the name field is not empty
		if( trim($objData->contactname) == ''){
			$hasError = true;
			echo ("Invalid name\n");
		} else {
			$name = trim($objData->contactname);
		}
		
		//Check to make sure sure that a valid email address is submitted
		if(trim($objData->email) == '')  {
			$hasError = true;
			echo ("Missing email\n");
		} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($objData->email))) {
			$hasError = true;
	        echo ("Invalid email\n");
		} else {
			$email = trim($objData->email);
		}
		
		//Check to make sure comments were entered
		if(trim($objData->message) == '') {
			$hasError = true;
			echo ("Missing message\n");
		} else {
			if(function_exists('stripslashes')) {
				$comments = stripslashes(trim($objData->message));
			} else {
				$comments = trim($objData->message);
			}
		}
		
		// If no error, send the email
		if(!isset($hasError)) {
			$body = "Name: $name \nEmail: $email \n\n $comments";
			$headers = 'From: '.$nameTo.' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
			mail($emailTo, $subject, $body, $headers);
		}
		else {
			echo ("There has been an error");
		}
	}
	echo (".");
	
?>