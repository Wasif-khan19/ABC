"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

const page = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(),
  // });
  
  return (
    <>
      <div className="container relative flex pt-10 flex-col items-center justify-center lg:px-0">
      <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <p className="text-5xl font-extrabold text-[#F3EDE4]">PIXELIZE</p>
                </Link>
          </div>
          <h1 className="text-7xl font-extrabold pt-8">CREATE ACCOUNT</h1>
        <div className="mx-auto flex-w-full flex-col justify-center sm:w-[300px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link
              className='text-[#55DD4A] font-medium'
              href="/signin"
            >
              Already have an account?<span className="hover:underline font-bold"> LogIn</span>
            </Link>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="gap-1 grid py-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-blue-500": true,
                    })}
                    placeholder="muhammadwasif@gmail.com"
                  />
                </div>

                <div className="gap-1 grid py-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-blue-500": true,
                    })}
                    placeholder="Password"
                  />
                </div>
                <Button>SignUp</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
