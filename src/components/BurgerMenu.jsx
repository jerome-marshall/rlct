import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { links } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { MenuIcon } from "lucide-react"
import logo from "@/assets/restore.webp"

export default function BurgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex md:hidden">
          <MenuIcon className="size-7 text-primary" />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="border-b border-border pb-4 flex items-center justify-between">
          <img src={logo.src} alt="Logo" className="w-36 md:w-36" />
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {links.map((link) => (
            <a href={link.href} className="text-text">
              {link.text}
            </a>
          ))}
        </div>
        <SheetFooter className="mt-5">
          <a href="/" className={cn(buttonVariants({ variant: "accent" }))}>
            Register Now
          </a>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
