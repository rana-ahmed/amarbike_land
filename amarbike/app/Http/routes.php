<?php

$app->get('/', function () use ($app) {
    return "AmarBike API";
});

$app->group(['prefix' => 'api/v1', 'namespace' => 'App\Http\Controllers'], function($app){
	$app->post('subscriber', 'SubscriberController@createSubscriber');
	$app->post('suggestion', 'Route_suggestionController@createRoute');
	$app->post('vote', 'VoteController@createVote');
	$app->get('vote/{id}', 'VoteController@getVote');
});
