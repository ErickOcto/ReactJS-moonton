import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    const {delete: destroy} = useForm();
  return (
      <>
          <Head>
              <title>Admin Movie</title>
          </Head>
          <Authenticated auth={auth}>
              <Link href={route("admin.dashboard.movie.create")}>
                  <PrimaryButton type="button" className="w-40 mb-8">
                      Upload New Movie
                  </PrimaryButton>
              </Link>
              {flashMessage?.message && (
                  <FlashMessage message={flashMessage.message} />
              )}
              <table className="table-fixed w-full text-center">
                  <thead>
                      <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Rating</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {movies.map((movie) => (
                          <tr key={movie.id} className="py-4">
                              <td className="py-6">
                                  <img
                                      src={`/storage/movies/${movie.thumbnail}`}
                                      className="rounded-xl w-32"
                                      alt=""
                                  />
                              </td>
                              <td className="py-6">{movie.name}</td>
                              <td className="py-6">{movie.category}</td>
                              <td className="py-6">{movie.rating}</td>
                              <td className="flex gap-2 py-6">
                                  <Link
                                      href={route(
                                          "admin.dashboard.movie.edit",
                                          movie.id
                                      )}
                                  >
                                      <PrimaryButton className=" bg-yellow-600 py-4 px-8">
                                          Edit
                                      </PrimaryButton>
                                  </Link>

                                  <div onClick={() => {
                                    destroy(route("admin.dashboard.movie.destroy", movie.id));
                                  }}>
                                      <PrimaryButton className=" bg-red-800 py-4 px-8">
                                          Delete
                                      </PrimaryButton>
                                  </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </Authenticated>
      </>
  );
}
