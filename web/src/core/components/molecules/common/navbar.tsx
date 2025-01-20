import ModeToggle from "@/components/atoms/mode-toggle";
import { UserCircle } from "lucide-react";

export function NavBar() {
  return (
    <div className="w-full h-fit shadow dark:shadow-gray-800">
      <nav className="mx-auto w-app-w text-app-blue-500 flex justify-between items-center py-3">
        <h1 className="text-xl lg:text-2xl font-bold">Minxy</h1>
        <div className="flex items-center justify-between gap-2">
          <ModeToggle />
          <UserCircle className="size-8 cursor-pointer" />
        </div>
      </nav>
    </div>
  );
}