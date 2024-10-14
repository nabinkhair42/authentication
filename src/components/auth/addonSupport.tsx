"use Client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AddonSupportProps {
  label: string;
  link: string;
}

export const AddonSupport = ({ label, link }: AddonSupportProps) => {
  return (
    <Button variant={"link"} size={"sm"} asChild className="w-full font-normal">
      <Link href={link}>{label}</Link>
    </Button>
  );
};
