import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo2.png";
import UserMenuButton from "./UserMenuButton";

export default async function Navbar() {
  return (
      <div className="navbar fixed top-0 z-50 m-auto max-w-full gap-2 bg-base-100 bg-opacity-95 px-16">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost no-animation text-xl normal-case "
          >
            <Image src={logo} alt="shelf-worth logo" height={40} width={40} />
            SHELF-WORTH.
          </Link>
        </div>
        <div className="flex-none gap-2">
          <UserMenuButton session={null} />
        </div>
      </div>
  );
}
