import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInButton className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2' />
      <div className="py-12 flex gap-4">
        <div>
          <div className="w-40 h-12 bg-background"></div>
          <div className="w-40 h-12 bg-foreground"></div>
          <div className="w-40 h-12 bg-card"></div>
          <div className="w-40 h-12 bg-card-foreground"></div>
          <div className="w-40 h-12 bg-popover"></div>
          <div className="w-40 h-12 bg-popover-foreground"></div>
          <div className="w-40 h-12 bg-primary"></div>
          <div className="w-40 h-12 bg-primary-foreground"></div>
          <div className="w-40 h-12 bg-secondary"></div>
          <div className="w-40 h-12 bg-secondary-foreground"></div>
          <div className="w-40 h-12 bg-muted"></div>
          <div className="w-40 h-12 bg-muted-foreground"></div>
          <div className="w-40 h-12 bg-accent"></div>
          <div className="w-40 h-12 bg-accent-foreground"></div>
          <div className="w-40 h-12 bg-destructive"></div>
          <div className="w-40 h-12 bg-destructive-foreground"></div>
          <div className="w-40 h-12 bg-border"></div>
          <div className="w-40 h-12 bg-input"></div>
          <div className="w-40 h-12 bg-ring"></div>
          <div className="w-40 h-12 bg-chart-1"></div>
          <div className="w-40 h-12 bg-chart-2"></div>
          <div className="w-40 h-12 bg-chart-3"></div>
          <div className="w-40 h-12 bg-chart-4"></div>
          <div className="w-40 h-12 bg-chart-5"></div>
        </div>

        <div className="dark">
          <div className="w-40 h-12 bg-background"></div>
          <div className="w-40 h-12 bg-foreground"></div>
          <div className="w-40 h-12 bg-card"></div>
          <div className="w-40 h-12 bg-card-foreground"></div>
          <div className="w-40 h-12 bg-popover"></div>
          <div className="w-40 h-12 bg-popover-foreground"></div>
          <div className="w-40 h-12 bg-primary"></div>
          <div className="w-40 h-12 bg-primary-foreground"></div>
          <div className="w-40 h-12 bg-secondary"></div>
          <div className="w-40 h-12 bg-secondary-foreground"></div>
          <div className="w-40 h-12 bg-muted"></div>
          <div className="w-40 h-12 bg-muted-foreground"></div>
          <div className="w-40 h-12 bg-accent"></div>
          <div className="w-40 h-12 bg-accent-foreground"></div>
          <div className="w-40 h-12 bg-destructive"></div>
          <div className="w-40 h-12 bg-destructive-foreground"></div>
          <div className="w-40 h-12 bg-border"></div>
          <div className="w-40 h-12 bg-input"></div>
          <div className="w-40 h-12 bg-ring"></div>
          <div className="w-40 h-12 bg-chart-1"></div>
          <div className="w-40 h-12 bg-chart-2"></div>
          <div className="w-40 h-12 bg-chart-3"></div>
          <div className="w-40 h-12 bg-chart-4"></div>
          <div className="w-40 h-12 bg-chart-5"></div>
        </div>
      </div>
    </main>
  );
}
