<?php

require('../vendor/autoload.php');

// Import the BinaryFileResponse
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

$app = new Silex\Application();
$app['debug'] = true;

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

$app->get('/download', function() use($app) {
    $app['monolog']->addDebug('download');
    //TODO:count+1

    $path = __DIR__ . "/docs/Resume_of_PHP_developer_Eric_Lee.pdf";

    if (!file_exists($path)) {
        $app->abort(404, "Whoops,file lost.");
    }

    $headers = [];
    $headers['Content-Description'] = 'File Transfer';
    $headers['Content-Type'] = 'application/octet-stream';
    $headers['Content-Disposition'] ='attachment; filename=' . basename($path);
    $headers['Content-Transfer-Encoding'] = 'binary';
    $headers['Expires'] = '0';
    $headers['Cache-Control'] = 'must-revalidate';
    $headers['Pragma'] = 'public';
    $headers['Content-Length'] = filesize($path);

    return $app->sendFile($path,200,$headers)->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT, basename($path));

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
