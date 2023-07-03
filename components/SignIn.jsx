"use client";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import coverImage from "/public/cover.png";
import Image from "next/image";
import Button from "./layout/Button";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setValid(true);

    // try {
    const data = await signIn(email, password);
    // console.log(data);

    if (data?.user?.confirmed) {
      //Cookies data
      Cookies.set("jwt", data.jwt, { expires: 1 });
      Cookies.set("email", data.user.email, { expires: 1 });
      Cookies.set("firstname", data.user.firstname, { expires: 1 });
      Cookies.set("lastname", data.user.lastname, { expires: 1 });
      Cookies.set("mobile", data.user.mobile, { expires: 1 });
      Cookies.set("title", data.user.title, { expires: 1 });

      router.push("/dashboard");
    } else {
      // console.log("in else");
      confirmEmail(email);
      router.push("/auth");
    }
    // } catch (error) {
    //   console.log("An error occurred:", error.message);
    //   setValid(false);
    // }
  };

  return (
    <div
      className="flex flex-col items-center justify-between pt-16 min-h-screen"
      onSubmit={handleSignIn}
    >
      <div className="p-0 m-0 w-full flex flex-col items-center">
        <header className="text-lg font-bold text-yellow mb-2">Sign In</header>
        <Image src={coverImage} alt="Cover Image" className="w-full mb-7" />
        <h2 className="text-purple-light">Sign In</h2>
        <p className="text-xs text-gray-300 mb-4 mt-1 font-light">
          Sign in using your online account
        </p>

        <form className="w-full px-4">
          <div className="mb-4">
            <label htmlFor="email" className="text-yellow font-light text-xs">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="w-full py-1 bg-transparent text-white placeholder-white border-b text-sm font-semibold focus:outline-none "
              // value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-yellow font-light text-xs"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="***********"
              className="w-full py-1 bg-transparent text-white placeholder-white border-b text-sm font-semibold focus:outline-none "
              onChange={handlePassword}
            />
          </div>
          {/* reference="/auth" */}
          <Button className="bg-blue-light" type="submit">
            SIGN IN
          </Button>
          <div className="flex flex-row justify-between mt-2 ">
            <p className="text-xs text-red">
              {valid ? "" : "Invalid Email or Password"}
            </p>
            <a
              href="/auth"
              className="text-blue-500 text-xs underline ml-auto text-blue-light font-semibold"
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      <div className="mt-auto mb-5 w-full px-4 ">
        <Button className="bg-blue-dark">{"DON'T HAVE AN ACCOUNT?"}</Button>
      </div>
    </div>
  );
};

export default SignIn;

const signIn = async (email, password) => {
  try {
    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const confirmEmail = async (email) => {
  try {
    const response = await fetch(
      "http://localhost:1337/api/auth/send-email-confirmation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

// http://localhost:1337/api/auth/send-email-confirmation
