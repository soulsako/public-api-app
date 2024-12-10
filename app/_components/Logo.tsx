import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} quality={100} height="125" width="125" alt="Products Web App" />
    </Link>
  );
}

export default Logo;
