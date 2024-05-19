import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm, router } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const submit = (e) => {
        e.preventDefault();

        // if(data.thumbnail === movie.thumbnail){
        //     delete data.thumbnail;
        // }

        router.put(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data
        });
    };

    return (
        <>
            <Head>
                <title>Admin Upload Movie</title>
            </Head>
            <Authenticated auth={auth}>
                <h1 className="text-xl font-bold">Update: {movie.name}</h1>
                <hr className="hr-4 my-4" />
                <form
                    className="w-full"
                    onSubmit={submit}
                    encType="multipart/form-data"
                >
                    <div className="flex flex-col gap-6">
                        <div>
                            <InputLabel>Movie Name</InputLabel>
                            <TextInput
                                type="text"
                                name="name"
                                className="focus:outline-alerange focus:outline-none w-full"
                                placeholder="Enter the movie name"
                                value={data.name}
                                variant="primary-outline"
                                autoComplete=""
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel>Movie Category</InputLabel>
                            <TextInput
                                type="text"
                                name="category"
                                className="focus:outline-alerange focus:outline-none w-full"
                                placeholder="Enter the movie category"
                                value={data.category}
                                variant="primary-outline"
                                autoComplete=""
                                isFocused={true}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.category}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel>Movie URL</InputLabel>
                            <TextInput
                                type="url"
                                name="video_url"
                                className="focus:outline-alerange focus:outline-none w-full"
                                placeholder="Enter the movie URL"
                                value={data.video_url}
                                variant="primary-outline"
                                autoComplete=""
                                isFocused={true}
                                onChange={(e) =>
                                    setData("video_url", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.video_url}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel>Movie Thumbnail</InputLabel>
                            <img
                                src={`/storage/movies/${movie.thumbnail}`}
                                alt={movie.thumbnail}
                                className="w-40 mb-4 rounded-xl"
                            />
                            <input
                                type="file"
                                name="thumbnail"
                                className="focus:outline-alerange focus:outline-none w-full"
                                placeholder="Upload the movie thumbnail"
                                onChange={(e) =>
                                    setData("thumbnail", e.target.files[0])
                                }
                            />
                            <InputError
                                message={errors.thumbnail}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel>Movie Rating</InputLabel>
                            <TextInput
                                type="number"
                                name="rating"
                                className="focus:outline-alerange focus:outline-none w-full"
                                placeholder="Enter the movie rating"
                                value={data.rating}
                                variant="primary-outline"
                                autoComplete=""
                                isFocused={true}
                                onChange={(e) =>
                                    setData("rating", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.rating}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-row mt-4 gap-2 items-center">
                            <InputLabel className="m-0">
                                Movie Feature
                            </InputLabel>
                            <Checkbox
                                checked={movie.is_featured}
                                name="is_featured"
                                value={data.is_featured}
                                isFocused={true}
                                onChange={(e) =>
                                    setData("is_featured", e.target.checked)
                                }
                            />
                            <InputError
                                message={errors.is_featured}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        <PrimaryButton disabled={processing}>
                            Save Changes
                        </PrimaryButton>

                        <Link
                            href={route("admin.dashboard.movie.index")}
                            className="grid space-y-[14px] mt-[30px]"
                        >
                            <PrimaryButton className=" bg-slate-500">
                                Back
                            </PrimaryButton>
                        </Link>
                    </div>
                </form>
            </Authenticated>
        </>
    );
}
