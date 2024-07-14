import Photo from "@/components/Photo";
import Skils from "@/components/Skils";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";


export default function Home() {
  return (
    <section className="min-h-screen pt-24">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hi, I&apos;m <br />
              <span className="text-accent">Komang</span>.
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I build things for the web application.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Button size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <Download className="text-lg" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>

          {/* foto */}
          <div className="xl:mr-14 mb-3 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* stats */}
      <Stats />

      {/* skils */}
      <div className="py-10 container mx-auto overflow-x-hidden myGradient">
        <div className="container mx-auto">
          <Skils />
        </div>
      </div>
    </section>
  );
}
