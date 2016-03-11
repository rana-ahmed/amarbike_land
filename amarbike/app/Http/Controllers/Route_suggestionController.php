<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Route_suggestion;

class Route_suggestionController extends Controller
{
    public function createRoute(Request $request)
    {
        $this->validate($request, [
            'source' => 'required|between:3,15',
            'destination' => 'required|between:3,15',
        ]);

        $route = new Route_suggestion;
        $route->source = $request->input('source');
        $route->destination = $request->input('destination');
        $route->save();
        return response()->json($route);
    }
}
