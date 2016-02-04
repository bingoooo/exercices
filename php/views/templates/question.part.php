<?php $this->layout('template', ['title' => 'Questionnaire']) ?>

<h1>Questionnaire</h1>
<form method="POST">
	<label for="r1" name="q1" value="<?php echo $question1 ?>">Quelle est la valeur de PI ?</label><br>
	<input name="r1" type="text">
	<input type="submit">
</form>