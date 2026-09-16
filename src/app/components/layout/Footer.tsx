import Link from "next/link";
import Rainbow from "@components/ui/rainbow/Rainbow";

export default function Footer() {
  return (
    <footer className="border-t border-pink-200 border-opacity-20 mt-0 text-md">
      <div className="max-w-5xl px-6 md:px-8 lg:px-12 mx-auto py-3 md:py-16">
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="https://www.buymeacoffee.com/pickup">
              <Rainbow>Buy me a (mushroom) coffee</Rainbow>
            </Link>{" "}
            ☕
          </li>
          <li>
            <Link href="/studio/desk">Sanity Studio</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
