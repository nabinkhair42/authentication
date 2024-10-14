"use client";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
import { useRouter } from "next/navigation";
export const LoginButton = ({
  children,
  mode = "redirect",
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/sign-in");
  };

  if (mode === "modal") {
    return <span>Implement Modal</span>;
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
