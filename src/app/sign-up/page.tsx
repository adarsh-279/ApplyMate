"use-client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className="flex min-h-screen flex-col bg-[#fffcf5] text-black font-[geist]">
            <Card className="bg-[#fffcf5] w-md mx-auto my-15 flex flex-col gap-5">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold ">Sign Up</CardTitle>
                    <CardDescription className="opacity-80">Create an account to start tracking your job applications.</CardDescription>
                </CardHeader>
                <form>
                    <CardContent className="flex flex-col gap-5">
                        <div>
                            <Label htmlFor="name" className="mb-2">Name</Label>
                            <Input id="name" type="text" placeholder="John Doe" required/>
                        </div>
                        <div>
                            <Label htmlFor="email" className="mb-2">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required/>
                        </div>
                        <div>
                            <Label htmlFor="password" className="mb-2">Password</Label>
                            <Input id="password" type="password" placeholder="••••••••" required minLength={6}/>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col bg-[#fffcf5] mt-5 border-none">
                        <Button type="submit" className="w-full py-5">Sign Up</Button>
                        <p className="mt-2 opacity-80">Already have an account? <Link href="/sign-in" className="text-blue-800">Login</Link></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}