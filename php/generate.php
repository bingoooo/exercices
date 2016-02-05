<?php 
	require_once 'vendor/autoload.php';
	//require_once 'lib/Bdd.php';

	// $database = new Bdd();
	// $users = $database->getUsers();
	// $questions = $database->getQuestions();
	// $reponses = $database->getReponses();
	//var_dump($users);
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
$capsule->setAsGlobal();
$capsule->bootEloquent();


class Bdd extends Illuminate\Database\Eloquent\Model {
	public $timestamps = false;
}

$users = $capsule->table('Users');
$users->delete();
$users->insert(['id' => '0', 'name' => 'Dant Benjamin']);
$users->insert(['id' => '1', 'name' => 'Grondin Floriane']);
$users->insert(['id' => '2', 'name' => 'Cerveaux Allan']);

$test = $users->find(2);
echo $test->name."\n";

//var_dump($user1);


echo "\n".'job done'."\n";