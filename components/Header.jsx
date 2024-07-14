import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white fixed w-full">
      <div className="container mx-auto justify-between items-center flex">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Komang<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* navbar desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* navbar mobile */}
        <div className="block xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header