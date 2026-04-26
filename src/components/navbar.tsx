"use client"

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";;
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./signout-button";
import { useSession } from "@/lib/auth-client";

export default function Navbar() {

    const {data: session} = useSession()

    return (
        <nav className="bg-[#fffcf5] text-black flex flex-row justify-between items-center border font-[geist] px-5 py-3">
            <div>
                <Link href="/"  className="flex text-lg">
                    <Briefcase className="mr-1"/>
                    ApplyMate
                </Link>
            </div>
            <div className="flex gap-3">
                {session?.user ? (
                    <>
                        <Link href="/dashboard" >
                            <Button variant="outline" className="bg-[#fffcf5] hover:bg-black hover:text-white">Dashboard</Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="rounded">
                                    <Avatar>
                                        <AvatarFallback className="bg-green-400 text-black">
                                            {session.user.name?.[0].toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel>
                                    <div>
                                        <p className="text-bold text-black">{session.user.name}</p>
                                        <p>{session.user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <SignOutButton />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                ) : (
                    <>
                        <Link href="/sign-in" >
                            <Button>Login</Button>
                        </Link>
                        <Link href="/sign-up" >
                            <Button variant="outline" className="bg-[#fffcf5] hover:bg-black hover:text-white">Start for free</Button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}