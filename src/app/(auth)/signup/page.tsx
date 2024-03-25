/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(),
  });
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto text-center flex flex-col items-center max-w-3xl">
          <div className="ml-4 flex lg:ml-0">
            <Link href={"/"}>
              <p className="text-5xl font-black text-[#F3EDE4]">PIXELIZE</p>
            </Link>
          </div>
          <p className="text-7xl pt-7 tracking-tight font-extrabold text-[#F3EDE4] sm:text-7xl">
            CREATE ACCOUNT
          </p>
          <p className="mt-6 font-normal text-lg items-center text-[#F3EDE4]">
            With intuitive tools for uploading, categorizing, and pricing your
            assets, reaching a global audience of potential buyers has never
            been easier.
          </p>
        </div>
        <div className="mx-auto pt-10 flex-w-full flex-col justify-center sm:w-[400px]">
          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="gap-1 grid">
                  <Input
                    className="bg-[#F3EDE4] text-xl py-7 px-3 rounded-xl text-[#122315] text-opacity-50"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="gap-1 grid py-2">
                  <Input
                    className="bg-[#F3EDE4] text-xl py-7 px-3 rounded-xl text-[#122315] text-opacity-50"
                    placeholder="Password"
                  />
                </div>
                <Link
                  href={""}
                  className="bg-[#55DD4A] hover:bg-[#7edb77] text-xl py-4 px-0 text-center rounded-xl text-[#122315] font-medium"
                >
                  CONTINUE
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
