<?php
	require_once 'vendor/autoload.php';
	
	use Illuminate\Database\Capsule\Manager as Capsule;
	use Illuminate\Events\Dispatcher;
	use Illuminate\Container\Container;
	use Illuminate\Database\Eloquent\Model;

	class Bdd extends Model {
		private $capsule;
		private $users;
		private $questions;
		private $reponses;
		public function __construct(){
			$this->capsule = new Capsule;
			$this->capsule->addConnection([
				'driver' => 'mysql',
				'host' => 'localhost',
				'database' => 'phptest',
				'username' => 'root',
				'password' => 'simplonco',
				'charset' => 'utf8',
				'collation' => 'utf8_unicode_ci',
				'prefix' => ''
			]);
			$this->capsule->setEventDispatcher(new Dispatcher(new Container));
			$this->capsule->setAsGlobal();
			$this->capsule->bootEloquent();

			$this->users = Capsule::table('Users');
			$this->questions = Capsule::table('Questions');
			$this->reponses = Capsule::table('Reponses');
		}
		public function getUsers(){
			return $this->users;
		}
		public function getQuestions(){
			return $this->questions;
		}
		public function getReponses(){
			return $this->reponses;
		}
	}