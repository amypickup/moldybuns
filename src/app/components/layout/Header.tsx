import Link from "next/link";
import Logo from "@components/ui/Logo";

export default function Header() {
  return (
    <header className="border-b border-pink-200 border-opacity-20 z-30 sticky top-0 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-3 flex justify-center">
        <Link href="/">
          <div className={"text-3xl"}>
            <Logo />
          </div>
        </Link>
      </div>
    </header>
  );
}
