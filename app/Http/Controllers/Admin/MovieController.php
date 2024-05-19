<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia('Admin/Movie/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:100',
            'category' => 'required|max:100',
            'thumbnail' => 'required|image',
            'rating' => 'required|max:5|min:0|numeric',
            'is_featured' => 'boolean',
            'video_url' => 'required|url'
        ]);

        //dd($request->all());

        $data = $request->all();

        $image = $request->file('thumbnail');
        $image->storeAs('public/movies', $image->hashName());
        $data['thumbnail'] = $image->hashName();
        // $data['thumbnail'] = $request->file('thumbnail')->store('movies', 'public');
        $data['slug'] = Str::slug($data['name']);
        Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with(["message" => "Data saved successfully", "type" => "success"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
