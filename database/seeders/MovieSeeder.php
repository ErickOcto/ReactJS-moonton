<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
                [
                    "name" => "Queen of Tears",
                    "slug" => "queen-of-tears",
                    "category" => "K-Drama",
                    "thumbnail" => "https://m.media-amazon.com/images/M/MV5BZjJmMjRlZTAtOTI5MC00Mjg0LWE4ZWQtZDAwMjQ4Mjk4MTVjXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
                    "video_url" => "https://www.youtube.com/watch?v=tNhIiisjjJg",
                    "rating" => 4.9,
                    "is_featured" => 1,
                ],
                [
                    "name" => "Atypical Family",
                    "slug" => "atypical-family",
                    "category" => "K-Drama",
                    "thumbnail" => "https://m.media-amazon.com/images/M/MV5BZTc3MzgzNzUtYzQyZC00NDcxLTkwZjUtNzQzZjM1NGVkMTMwXkEyXkFqcGdeQXVyMTI1OTY3MzM3._V1_FMjpg_UX1000_.jpg",
                    "video_url" => "https://www.youtube.com/watch?v=f87Bpl5nLaA",
                    "rating" => 4.7,
                    "is_featured" => 0,
                ],
                [
                    "name" => "Avengers : End Game",
                    "slug" => "avengers-end-game",
                    "category" => "Superhero",
                    "thumbnail" => "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
                    "video_url" => "https://www.youtube.com/watch?v=TcMBFSGVi1c",
                    "rating" => 4.3,
                    "is_featured" => 0,
                ],
                [
                    "name" => "Ancika : Dia Yang Bersamaku 1995",
                    "slug" => "ancika-dia-yang-bersamaku-1995",
                    "category" => "Drama",
                    "thumbnail" => "https://m.media-amazon.com/images/M/MV5BYzJjYzQ5N2QtMjZiZC00ODcxLWFjNDAtY2VmMDc4N2FhODA1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
                    "video_url" => "https://www.youtube.com/watch?v=DbOa2bGLNWA",
                    "rating" => 4.9,
                    "is_featured" => 1,
                ],
            ];
        Movie::insert($movies);
    }
}
