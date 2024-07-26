import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import logo from "@/assets/restore.webp";
import RegisterDialog from "./RegisterDialog";

export default function BurgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex md:hidden" aria-label="Menu">
          <MenuIcon className="size-7 text-primary" />
        </button>
      </SheetTrigger>
      <SheetContent className="w-[85%]">
        <SheetHeader className="flex items-center justify-between border-b border-border pb-4">
          <SheetClose asChild>
            <a href="/">
              <img src={logo.src} alt="Logo" className="w-36 md:w-36" />
            </a>
          </SheetClose>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {links.map((link) => (
            <SheetClose asChild>
              <a href={link.href} className="text-text">
                {link.text}
              </a>
            </SheetClose>
          ))}
        </div>
        <SheetFooter className="mt-5">
          <RegisterDialog
            triggerClassname={cn(
              buttonVariants({ variant: "accent" }),
              "border-0",
            )}
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
