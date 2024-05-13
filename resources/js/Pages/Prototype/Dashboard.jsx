import React from 'react';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated/Index';
import Flickity from 'react-flickity-component';
import FeaturedMovie from '@/Components/FeaturedMovie';
import BrowseMovie from '@/Components/BrowseMovie';

export default function Dashboard() {
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
          <Authenticated>
              <div>
                  <div className="font-semibold text-[22px] text-black mb-4">
                      Featured Movies
                  </div>
                  <Flickity className="gap-[30px]" options={flickityOptions}>
                      {[1, 2, 3, 4].map((i) => (
                          <FeaturedMovie
                              key={i}
                              slug="The Batman In Love"
                              name="The Batman In Love"
                              category="Superhero"
                              thumbnail="/images/featured-1.png"
                              rating={i + 1}
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
