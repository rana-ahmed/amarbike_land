<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Subscriber;

class SubscriberController extends Controller
{
    public function createSubscriber(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|unique:subscribers',
            'phone' => 'required|digits:11|unique:subscribers',
        ]);

        $subscriber = new Subscriber;
        $subscriber->email = $request->input('email');
        $subscriber->phone = $request->input('phone');
        $subscriber->save();
        return response()->json($subscriber);
    }
}
