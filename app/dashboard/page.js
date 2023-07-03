"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/layout/Button";
import Navbar from "./Navbar";
import { Playfair_Display } from "next/font/google";
import Cookies from "js-cookie";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Page = () => {
  let [jwt, setJwt] = useState("");
  let [email, setEmail] = useState("");
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [mobile, setMobile] = useState("");
  let [title, setTitle] = useState("");

  useEffect(() => {
    setJwt(Cookies.get("jwt"));
    setEmail(Cookies.get("email"));
    setFirstname(Cookies.get("firstname"));
    setLastname(Cookies.get("lastname"));
    setMobile(Cookies.get("mobile"));
    setTitle(Cookies.get("title"));
    // console.log("test here");
    // console.log(title);
  }, [jwt, email, firstname, lastname, mobile, title]);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="p-0 m-0 w-full flex flex-col items-center">
        <Navbar />
        <header className="text-2xl font-extrabold text-yellow mb-2 mt-10 tracking-tighter">
          <h1 className={playfair.className}>Welcome, **NAME**</h1>
        </header>

        <div className="w-full px-4 mt-3">
          <Output title={"Salutation"} value={title} />
          <Output title={"First Name"} value={firstname} />
          <Output title={"Last Name"} value={lastname} />
          <Output title={"Email Address"} value={email} />
          <Output title={"Mobile Phone Number"} value={mobile} />
        </div>
      </div>

      <div className="mt-auto mb-5 w-full px-4 ">
        <Button className="bg-red" type="submit">
          LOGOUT
        </Button>
      </div>
    </div>
  );
};

export default Page;

const Output = ({ title, value }) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="text-yellow font-light text-xs">
        {title}
      </label>
      <p
        type="email"
        id="email"
        placeholder="johndoe@example.com"
        className="w-full py-1 bg-transparent text-white placeholder-white border-b text-sm font-light focus:outline-none disabled"
      >
        {value}
      </p>
    </div>
  );
};
