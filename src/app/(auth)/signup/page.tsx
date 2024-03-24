'use client'
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants} from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
const page = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex-w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold text-white">Create an account</h1>
            <Link
              className={buttonVariants({ 
                variant: "link", 
                className: 'gap-1.5'
              })}
              href="/signin">
              Already have an account? SignIn
              <ArrowRight className='h-4 w-4'/>
            </Link>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="gap-1 grid py-2">
                  <Label htmlFor='email' className="text-white">Email</Label>
                  <Input className={cn ({
                    'focus-visible:ring-red-500': true
                  })} 
                  placeholder="you@example.com"/>
                </div>

                <div className="gap-1 grid py-2">
                  <Label htmlFor='password' className="text-white">Password</Label>
                  <Input className={cn ({
                    'focus-visible:ring-red-500': true
                  })} 
                  placeholder="Password"/>
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
