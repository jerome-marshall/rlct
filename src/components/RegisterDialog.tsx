import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export default function RegisterDialog({
  btnText = "Register Now",
  triggerClassname,
}: {
  btnText?: string;
  triggerClassname?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const closeDialog = () => {
    setOpen(false);
  };

  const Trigger = (
    <Button variant="outline" className={triggerClassname}>
      {btnText}
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{Trigger}</DialogTrigger>
        <DialogContent className="max-h-[calc(100vh-4rem)] p-8 sm:max-w-[600px]">
          <ProfileForm closeDialog={closeDialog} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{Trigger}</DrawerTrigger>
      <DrawerContent className="flex flex-col rounded-t-2xl border-0 outline-none">
        <div className="max-h-[85dvh] overflow-y-scroll">
          <ProfileForm className="p-5" closeDialog={closeDialog} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({
  className,
  footerClassName,
  closeDialog,
}: {
  className?: string;
  footerClassName?: string;
  closeDialog: () => void;
}) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      <h3 className="text-2xl md:text-3xl">Register Now</h3>
      <p className="pt-4">
        Join our hands-on practical training from August 28 to December 21,
        2024, followed by a required 1-month practicum in January.
      </p>
      <h3 className="pt-6 text-lg">Prerequisites</h3>
      <ul className="pt-2">
        <li>
          <strong>Sincere desire</strong> to serve through health outreach
        </li>
        <li>
          <strong>Minimum age:</strong> 18 years
        </li>
        <li>
          <strong>Education:</strong> Completed +2 (Higher Secondary)
        </li>
        <li>
          <strong>Language:</strong> Fluent in English (speaking, reading,
          writing)
        </li>
      </ul>
      <h3 className="pt-6 text-lg">Program Costs</h3>
      <ul className="pt-2">
        <li>
          <strong>Total Fee:</strong> Rs 55,000
        </li>
        <li>
          <strong>Scholarships available</strong>
        </li>
      </ul>
      <h3 className="pt-6 text-lg">What's Included</h3>
      <ul className="pt-2">
        <li>Instruction</li>
        <li>Books and training materials</li>
        <li>Housing and meals (4 months)</li>
      </ul>
      <div
        className={cn(
          "sticky bottom-0 mt-5 flex gap-4 border-t border-border bg-white pt-5 md:mt-7 md:pt-7",
          footerClassName,
        )}
      >
        <Button className="w-full" variant={"outline"} onClick={closeDialog}>
          Cancel
        </Button>
        <a
          href="https://form.jotform.com/restorelct/RLC_Training_Application"
          target="_blank"
          rel="noreferrer"
          onClick={closeDialog}
          className={cn(buttonVariants(), "w-full")}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
