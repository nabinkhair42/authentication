"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const SocialsAuth = () => {
  const GoogleAuth = () => {
    console.log("Google ho la");
  };

  const GitHubAuth = () => {
    console.log("GitHub Ho la");
  };

  return (
    <div className="w-full flex justify-around gap-4">
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={GoogleAuth}
        className="w-full py-6"
      >
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button
        size={"lg"}
        variant={"outline"}
        onClick={GitHubAuth}
        className="w-full py-6"
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
