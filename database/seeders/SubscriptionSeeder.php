<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subs = [
                [
                    "name" => "Basic",
                    "price" => 300000,
                    "active" => 3,
                    "features" => json_encode(['Feature 1', 'Feature 2', 'Feature 3'])
                ],
                [
                    "name" => "Premium",
                    "price" => 900000,
                    "active" => 12,
                    "features" => json_encode(['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'])
                ]
            ];
        SubscriptionPlan::insert($subs);
    }
}
