import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Navitems from "./Navitems";
import { buttonVariants } from "./ui/button";
import { Divide } from "lucide-react";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16">
      <header className="py-3">
        <Wrapper>
          <div className="border rounded-md bg-white">
            <div className="flex h-16 items-center">
              {/* mob nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Image alt="" src={"/logo.png"} width={130} height={130} />
                </Link>
              </div>
              <div className="hidden-z-50 lg:ml-8 lg:block lg:self-stretch">
                <Navitems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants()}
                    >
                      Sign In
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="signup"
                      className={buttonVariants()}
                    >
                      Sign Up
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;
