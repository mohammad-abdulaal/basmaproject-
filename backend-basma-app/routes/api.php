<?php

use App\Http\Controllers\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/signup',[Users::class ,'signup']);
Route::post('/login', [Users::class, 'login']);
Route::get('/getusersnumber', [Users::class, 'getusersnumber']);
Route::middleware('auth.api')->get('/user', [Users::class, 'user']);
Route::post('/logout', [Users::class, 'logout']);
Route::get('/getall',[Users::class, 'get']);
Route::post('/approve', [Users::class, 'approve']);
Route::delete('deletebyid/{id}',[Users::class, 'delete']);
