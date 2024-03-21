import Wrapper from "@/components/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Palette } from "lucide-react";
import Link from "next/link";

const perks  = [
  {
    Name: 'Faster Than Light',
    Icon: ArrowDownToLine,
    description: 'Get your all digital assets on just one click and it will in your pocket'
  }, 
  {
    Name: 'High Quality Assets',
    Icon: CheckCircle,
    description: 'Step into a world of superior digital assets, meticulously curated for you'
  }, 
  {
    Name: 'Fully Customization',
    Icon: Palette,
    description: 'The all teplates on our store is fully customizeable and easy to share'
  }, 
]


export default function Home() {
  return (
    <>
      <Wrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Unlock a world of superior{" "}
            <span className="text-rose-600">Digital Assets</span> at your
            fingertips.
          </h1>
          <p className="mt-6 text-lg max-w-pros text-muted-foreground">
            Experience the BlitzWare Difference. Verified Quality, Seamless
            Experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"secondary"}>Our Mission &rarr;</Button>
          </div>
        </div>
      </Wrapper>
      <section className="border-t border-gray-400">
        <Wrapper className="py-20">
          <div className="grid grid-col-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perks) =>(
              <div key={perks.Name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    {<perks.Icon className="w-1/3 h-1/3"/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-white">{perks.Name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perks.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
