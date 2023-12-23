<?php
// Database credentials
$db_host = "127.0.0.1:3306";
$db_user = "root";
$db_pass = "";
$db_name = "codaweb_forms";

// Create a connection
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

// Check the connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if the form was submitted
if (isset($_POST['submit'])) {
  // Get the form data
  $name = $_POST['nome'];
  $email = $_POST['email'];
  $message = $_POST['texto'];

  // Validate the form data
  if (empty($name) || empty($email) || empty($message)) {
    // Display an error message if any field is empty
    echo "Please fill in all the fields";
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Display an error message if the email is not valid
    echo "Please enter a valid email address";
  } else {
    // Prepare the SQL query
    $sql = "INSERT INTO codaweb_forms (nome, email, texto) VALUES ('$name', '$email', '$message')";

    // Execute the query
    if (mysqli_query($conn, $sql)) {
      // Display a success message if the query was successful
      echo "Thank you for contacting us, $name. We will get back to you shortly.";
    } else {
      // Display an error message if the query failed
      echo "Sorry, something went wrong. Please try again later.";
    }
  }
}
