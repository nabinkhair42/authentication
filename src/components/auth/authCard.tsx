"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddonSupport } from "@/components/auth/addonSupport";
import { SocialsAuth } from "@/components/auth/socialsAuth";
import { Separator } from "@/components/ui/separator";
interface AuthCardProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescriptionLabel: string;
  addonLabel: string;
  addonLink: string;
  showSocials?: boolean;
}

export const AuthCard = ({
  children,
  headerLabel,
  headerDescriptionLabel,
  addonLabel,
  addonLink,
  showSocials,
}: AuthCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{headerLabel}</CardTitle>
        <CardDescription>{headerDescriptionLabel}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>
      {showSocials && (
        <CardFooter>
          <SocialsAuth />
        </CardFooter>
      )}

      <CardFooter>
        <AddonSupport label={addonLabel} link={addonLink} />
      </CardFooter>
    </Card>
  );
};
