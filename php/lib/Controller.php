<?php
	//require_once 'vendor/autoload.php';

	class Controller {
		private $nav = array('show' => ['Users', 'show.part'],
			'edit' => ['Edit', 'edit.part'],
			'profile' => ['Profil', 'profile.part'],
			'index' => ['Home', 'index.part'],
			'qcm' => ['Questionnnaire', 'question.part']
			);

		public function __construct(){
			$templates = new League\Plates\Engine('views/templates');
			if (isset($_GET['page']) && array_key_exists($_GET['page'], $this->nav)){
				echo $templates->render($this->nav[$_GET['page']][1], ['name' => 'Benjamin']);
			} else {
				echo $templates->render('index.part', ['name' => 'Benjamin']);
			}
		}
	}