<?php

use App\Http\Controllers\Writercontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/writers', [Writercontroller::class, 'index']);
Route::post('/writers', [Writercontroller::class, 'store']);
Route::put('/writers/{id}', [Writercontroller::class, 'update']);
Route::delete('/writers/{id}', [Writercontroller::class, 'destroy']);
