<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('writers', function (Blueprint $table) {
            $table->id();
            $table->String('nev');
            $table->integer('szul');
            $table->timestamps();
        });
        DB::table('writers')->insert([
            ['nev'=>'József Atilla','szul'=>1905],
            ['nev'=>'Lacfy Jani','szul'=>1965],
        ]);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('writers');
    }
};
