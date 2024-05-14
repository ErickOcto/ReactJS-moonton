import React from "react";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import BrowseMovie from "@/Components/BrowseMovie";

export default function Dashboard({auth, feats, movies}) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <Authenticated auth={auth}>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {feats.map((feat) => (
                            <FeaturedMovie
                                key={feat.id}
                                slug={feat.slug}
                                name={feat.name}
                                category={feat.category}
                                thumbnail={feat.thumbnail}
                                rating={feat.rating}
                            />
                        ))}
                    </Flickity>

                    <div>
                        <div className="font-semibold text-[22px] text-black mb-4 mt-[50px]">
                            Browse
                        </div>
                        <Flickity options={flickityOptions}>
                            {[1, 2, 3, 4].map((i) => (
                                <BrowseMovie
                                    key={i}
                                    slug="Meong The Golden"
                                    name="Meong The Golden"
                                    category="Adventure"
                                    thumbnail="/images/featured-3.png"
                                />
                            ))}
                        </Flickity>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
