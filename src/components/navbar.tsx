import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="bg-[#fffcf5] text-black flex flex-row justify-between items-center border font-[geist] px-5 py-3">
            <div>
                <Link href="/"  className="flex text-lg">
                    <Briefcase className="mr-1"/>
                    ApplyMate
                </Link>
            </div>
            <div className="flex gap-3">
                <Link href="/sign-in" >
                    <Button>Login</Button>
                </Link>
                <Link href="/sign-up" >
                    <Button variant="outline" className="bg-[#fffcf5] hover:bg-black hover:text-white">Start for free</Button>
                </Link>
            </div>
        </nav>
    )
}