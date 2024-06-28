<?php

namespace App\Http\Controllers;
use App\Models\Pizza;//Importar el modelo Pizza
use Illuminate\Http\Request;
Use Inertia\Inertia;
Use Inertia\Response;

class PizzaController extends Controller
{
    public function index():Response
    {
        $pizzas= Pizza::all();

        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas
        ]);
    }

    public function edit(Pizza $pizza)
    {
        return Inertia::render('Pizzas/Edit',[
            'pizza'=>$pizza
        ]);
    }

    public function update(Pizza $pizza, request $request)
    {
        $pizza->update([
            'status'=>$request->status,
        ]);
    }

    
}
