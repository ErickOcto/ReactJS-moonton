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
        $movies = Movie::all();
        return Inertia::render('Admin/Movie/Index', [
            'movies' => $movies
        ]);
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
        $movie = Movie::findOrFail($id);
        return Inertia::render('Admin/Movie/Edit', [
            'movie' => $movie
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //dd($request->all());
        // $request->validate([
        //     'name' => 'required|max:100',
        //     'category' => 'required|max:100',
        //     'rating' => 'required|numeric|min:0|max:5',
        //     'is_featured' => 'boolean',
        //     'video_url' => 'required|url',
        //     'thumbnail' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Tambahkan validasi untuk file gambar
        // ]);

        $movie = Movie::findOrFail($id);

        if ($request->hasFile('thumbnail')) {

            $thumbnail = $request->file('thumbnail');
            $thumbnail->storeAs('public/movies', $thumbnail->hashName());

            Storage::delete('public/movies/'.$movie->thumbnail);

            $movie->update([
                'thumbnail'     => $thumbnail->hashName(),
                'name'     => $request->name,
                'slug'   => $request->slug,
                'category'   => $request->category,
                'video_url'   => $request->video_url,
                'rating'   => $request->rating,
                'is_featured'   => $request->is_featured,
            ]);

        }else{

            //update post without image
            $movie->update([
                'name'     => $request->name,
                'slug'   => $request->slug,
                'category'   => $request->category,
                'video_url'   => $request->video_url,
                'rating'   => $request->rating,
                'is_featured'   => $request->is_featured,
            ]);
        }


        return redirect(route('admin.dashboard.movie.index'))->with(["message" => "Movie changed successfully", "type" => "success"]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Movie::findOrFail($id)->delete();
        return redirect()->back()->with(["message" => "Movie deleted successfully", "type" => "success"]);
    }
}
