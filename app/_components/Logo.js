import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-4 z-10">
      <Image
        src={logo}
        alt="The Wild Oasis logo"
        height={60}
        width={60}
        quality={100}
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-[60px] md:w-[60px]"
      />

      <span className="text-base sm:text-lg md:text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
