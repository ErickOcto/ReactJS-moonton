import React from 'react';
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, Link } from "@inertiajs/react";

export default function Register() {
  return (
      <>
        <Head title='Sign Up'/>
          <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
              <div className="fixed top-[-50px] hidden lg:block">
                  <img
                      src="/images/signup-image.png"
                      className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                      alt=""
                  />
              </div>
              <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                  <div>
                      <img src="/images/moonton-white.svg" alt="" />
                      <div className="my-[70px]">
                          <div className="font-semibold text-[26px] mb-3">
                              Sign Up
                          </div>
                          <p className="text-base text-[#767676] leading-7">
                              Explore our new movies and get <br />
                              the better insight for your life
                          </p>
                      </div>
                      <form className="w-[370px]">
                          <div className="flex flex-col gap-6">
                              <div>
                                  <InputLabel>Full Name</InputLabel>
                                  <TextInput
                                      placeholder="Your Full Name"
                                      name="fullName"
                                      type="text"
                                      className="focus:outline-alerange focus:outline-none"
                                  />
                              </div>
                              <div>
                                  <InputLabel>Email Address</InputLabel>
                                  <TextInput
                                      placeholder="Your Email Address"
                                      name="email"
                                      type="email"
                                      className="focus:outline-alerange focus:outline-none"
                                  />
                              </div>
                              <div>
                                  <InputLabel>Password</InputLabel>
                                  <TextInput
                                      name="password"
                                      type="password"
                                      placeholder="Your Password"
                                      className="focus:outline-alerange focus:outline-none"
                                  />
                              </div>
                          </div>
                          <div className="grid space-y-[14px] mt-[30px]">
                              <PrimaryButton>Sign Up</PrimaryButton>

                              <Link
                                  className="grid"
                                  href={route("prototype.login")}
                              >
                                  <SecondaryButton>
                                      Sign In To My Account
                                  </SecondaryButton>
                              </Link>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </>
  );
}
