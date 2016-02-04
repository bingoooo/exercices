<?php 
require_once 'vendor/autoload.php';
	//require_once 'lib/Bdd.php';

	// $database = new Bdd();
	// $users = $database->getUsers();
	// $users = $database::find(1);
	// $questions = $database->getQuestions();
	// $reponses = $database->getReponses();
	// var_dump($users);
use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;
$capsule->addConnection([
	'driver' => 'mysql',
	'host' => 'localhost',
	'database' => 'phptest',
	'username' => 'root',
	'password' => 'simplonco',
	'charset' => 'utf8',
	'collation' => 'utf8_unicode_ci',
	'prefix' => ''
	]);
$capsule->bootEloquent();


class Bdd extends Illuminate\Database\Eloquent\Model {
	public $timestamps = false;
}

echo 'job done';