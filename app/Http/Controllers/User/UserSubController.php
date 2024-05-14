<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserSubController extends Controller
{
    public function index(){
        $subs = SubscriptionPlan::all();
        return inertia("User/Dashboard/SubscriptionPlan/Index",['subscriptions' => $subs]);
    }

    public function userSub(Request $request, SubscriptionPlan $sub){
        $data = [
            "user_id" => Auth::user()->id,
            "subscription_plan_id" => $sub->id,
            "price" => $sub->price,
            "expired_date" => Carbon::now()->addMonths($sub->active),
            "payment_status" => "success",
        ];

        UserSubscription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
