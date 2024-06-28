<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Pizza;
use App\Models\User;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $toppingChoices=[
            'Extra Cheesse',
            'Black Olives',
            'Pepperoni',
            'Sausage',
            'Anchovies',
            'Jalapenos',
            'Onion',
            'Chicken',
            'Ground Beef',
            'Green Peppers',
        ];

        $toppings =[];

        for($i =1; $i <= rand(1, 4); $i++){
            $toppings[]=Arr::random($toppingChoices);
        }

        $topings =array_unique($toppings);

        return [
            //'id'=>rand(11111, 99999),
            'user_id'=> User::Factory(),
            'size'=> Arr::random(['Small','Medium', 'Large', 'Extra-Large']),
            'crust'=> Arr::random(['Normal', 'Thin', 'Garlic']),
            'toppings'=> $topings,
            'status'=> Arr::random(['Ordered', 'Prepping', 'Baking', 'Checking', 'Ready']),
        ];
    }
}
