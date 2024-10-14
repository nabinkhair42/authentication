"use client";
import { useState } from "react";
import { AuthCard } from "@/components/auth/authCard";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSuccess, FormError } from "@/components/reusable/formResponse";
import { SignIn } from "@/server-actions/sign-in/route";

export const SignInForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  //form Hook Implementation
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // handleForm Submission

  const handleSubmit = (values: z.infer<typeof SignInSchema>) => {
    setError("");
    setSuccess("");
    ///Lets Use Server Actions not the usual apis here
    startTransition(() => {
      SignIn(values).then((data) => {
        if (data) {
          setError(data.error);
          setSuccess(data.success);
        }
      });
    });
  };
  return (
    <AuthCard
      headerLabel="Sign In"
      headerDescriptionLabel="Enter your email below to login to your account"
      addonLabel="Don't have an account?"
      addonLink="/sign-up"
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="someone@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error && <FormError message={error}></FormError>}
          {success && <FormSuccess message={success}></FormSuccess>}
          <Button disabled={isPending} className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};
