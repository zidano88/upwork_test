"use client";
import React from "react";
import coverImage from "/public/authCover.png";
import Image from "next/image";
import Button from "@/components/layout/Button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const states = router.state;
  console.log(states);
  return (
    <div className="flex flex-col items-center justify-between pt-16 min-h-screen">
      <div className="p-0 m-0 w-full flex flex-col items-center">
        <header className="text-lg font-bold text-yellow mb-2">
          Email Verification
        </header>
        <Image src={coverImage} alt="Cover Image" className="w-full mb-7" />
        <h2 className="text-purple-light">Verify Your Email</h2>
        <p className="text-xs text-gray-300 mb-4 mt-1 text-center font-light">
          We have sent you an email, please check your Spam or Junk folder and
          verify your email
        </p>

        {/* <div className="w-full px-4">
          <div className="mb-4">
            <label htmlFor="email" className="text-yellow font-light text-xs">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="w-full py-1 bg-transparent text-white placeholder-white border-b text-sm font-semibold focus:outline-none "
            />
          </div>

          <Button className="bg-blue-light" reference="/dashboard">
            VERIFY CODE
          </Button>
          <div className="text-end">
            <a
              href="#"
              className="text-yellow mt-2 text-xs ml-auto text-blue-light font-semibold"
            >
              Resend Code
            </a>
          </div>
        </div> */}
      </div>
      <div className="mt-auto mb-5 w-full px-4 ">
        <Button className="bg-red" type="submit">
          CANCEL
        </Button>
      </div>
    </div>
  );
};

export default Page;
