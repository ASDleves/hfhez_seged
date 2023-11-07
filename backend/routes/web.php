<?php

use App\Http\Controllers\Writercontroller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');



});
Route::get('/writers', [Writercontroller::class, 'index']);
Route::post('/writers', [Writercontroller::class, 'store']);
Route::put('/writers/{id}', [Writercontroller::class, 'update']);
Route::delete('/writers/{id}', [Writercontroller::class, 'destroy']);
