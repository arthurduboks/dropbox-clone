import Link from "next/link";
import Image from "next/image";
import dropBoxLogo from "@/public/dropbox-logo.svg";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import ModeToggler from "@/app/components/ModeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image src={dropBoxLogo} alt="Logo" height={50} width={50} />
        </div>
        <h1 className="font-bold text-xl">DropBox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        <ModeToggler />
        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
