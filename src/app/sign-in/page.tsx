"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "@/lib/auth-client"
import { useRouter } from "next/navigation";

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setError("")

        try {
            const result = await signIn.email({
                email,
                password,
            })

            if (result.error) {
                setError(result.error.message ?? "Failed to sign up. Please try again.")
            } else {
                router.push("/dashboard")
            }
        } catch (error) {
            setError("An unexpected error occurred. Please try again.")
        }
    }

    return (
            <div className="flex min-h-screen flex-col bg-[#fffcf5] text-black font-[geist]">
            <Card className="bg-[#fffcf5] w-md mx-auto my-15 flex flex-col gap-5">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold ">Sign In</CardTitle>
                    <CardDescription className="opacity-80">Log In to start tracking your job applications.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="flex flex-col gap-5">
                        {error && (
                            <div className="rounded-md text-red-600 p-3 text-sm border-1">{error}</div>
                        )}
                        <div>
                            <Label htmlFor="email" className="mb-2">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <Label htmlFor="password" className="mb-2">Password</Label>
                            <Input id="password" type="password" placeholder="••••••••" required minLength={8} value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col bg-[#fffcf5] mt-5 border-none">
                        <Button type="submit" className="w-full py-5">Sign In</Button>
                        <p className="mt-2 opacity-80">Don't have an account? <Link href="/sign-up" className="text-blue-800">Sign up</Link></p>
                    </CardFooter>
                </form>
            </Card>
    </div>
    )
}