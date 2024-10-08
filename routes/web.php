<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\User\UserSubController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// MIDTRANS ROUTE
Route::post('midtrans/notification', [UserSubController::class, 'midtransCallback']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');
    Route::get('/subscriptions', [UserSubController:: class, 'index'])->name('subscriptions.index')->middleware('checkUserSubscription:false');
    Route::post('/subscriptions/{sub}/user-subs', [UserSubController:: class, 'userSub'])->name('subscriptions.userSub')->middleware('checkUserSubscription:false');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function(){
    Route::resource('movie', AdminMovieController::class);

});

Route::prefix('prototype')->name('prototype.')->group(function(){
    Route::get('/login', function(){
        return Inertia::render('Prototype/Login');
    })->name('login');
    Route::get('/register', function(){
        return Inertia::render('Prototype/Register');
    })->name('register');
    Route::get('/dashboard', function(){
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');
    Route::get('/subscription', function(){
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscription');
    Route::get('/movie/{slug}', function(){
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
