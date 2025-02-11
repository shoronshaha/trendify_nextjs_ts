import Link from "next/link";
import CartButton from "./cart-button";
import { UserIcon } from "lucide-react";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <div className="flex items-end text-xs relative">
          <Link href="/signin" className="px-1 flex header-button">
            <UserIcon className="h-8 w-8" />
            <span className="font-bold">Sign in</span>
          </Link>
        </div>

        <CartButton />
      </nav>
    </div>
  );
}
