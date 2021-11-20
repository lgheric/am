<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = false;

// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

// Register view rendering
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

// Our web handlers

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('index');
  return $app['twig']->render('index.twig');
});

$app->get('/about', function() use($app) {
  $app['monolog']->addDebug('about');
  return $app['twig']->render('about.twig');
});

//TODO
$app->post('/mail', function() use($app) {
    $app['monolog']->addDebug('mail');
    return $app['twig']->render('mail.twig');
//    $ch = curl_init('https://realemail.expeditedaddons.com/?api_key=' . getenv('REALEMAIL_API_KEY') . '&email=robert2021south@gmail.com&fix_typos=false');
//
//    $response = curl_exec($ch);
//    curl_close($ch);
//
//    var_dump($response);

});


$app->run();
