"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/dist/client/components/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
    // Handle form submission logic here
  };
  return (
    <Card className="w-full max-w-md ring-0 border-0 shadow-none md:border md:shadow-sm">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl">Peak OS</CardTitle>

        <CardDescription>Sign in to continue</CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <form className="mx-auto max-w-85 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>

            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="flex items-center justify-end -mt-4">
            <Button variant="link" size="sm">
              Forgot password?
            </Button>
          </div>
          <Button size="lg" className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
