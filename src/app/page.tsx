import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffcf5] text-black font-[geist]">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto text-center">
            <h1 className="text-5xl font-semibold mb-5">A better way to track your applications!</h1>
            <p className="text-gray-500 text-lg mb-13">Capture, organize and manage your job search in one place</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link href="sign-up">
              <Button size="lg" className="h-12 px-8 text-lg font-medium">
                Start for free <ArrowRight className="ml-2" />
              </Button>
              </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
