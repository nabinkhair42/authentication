"use client";
import { LoginButton } from "@/components/auth/signinButton";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  console.log("Where is this?");
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary to bg-primary-foreground">
      <LoginButton>
        <Button size={"lg"}>Lets Start</Button>
      </LoginButton>
    </main>
  );
};

export default page;
