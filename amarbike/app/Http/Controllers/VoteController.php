<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Vote;

class VoteController extends Controller
{
    public function createVote(Request $request)
    {
        $vote = new Vote;
        $vote->vote = $request->input('route_id');
        $vote->save();
        return response()->json(Vote::where('vote', '=', $request->input('route_id'))->count());
    }

    public function getVote($id)
    {
        return response()->json(Vote::where('vote', '=', $id)->count());
    }
}
