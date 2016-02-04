
<!DOCTYPE html>
<html>
<head>
	<title><?= $this->e($title); ?></title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="assets/css/semantic.css">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
	<nav>
		<li><a href="index.php?page=users">Users</a></li>
		<li><a href="index.php?page=edit">Edit</a></li>
		<li><a href="index.php?page=qcm">Questionnaire</a></li>
	</nav>
	<section><?=$this->section('content')?></section>
	<footer>
		Copyright 2016
	</footer>
</body>
</html>