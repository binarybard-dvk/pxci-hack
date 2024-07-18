import { SignUp } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SignUp appearance={{
              elements: {
                formButtonPrimary: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium outline-none border-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-pink-500 text-white shadow-none hover:bg-primary/90 h-9 px-4 py-2",
              },
            }} />
        </main>
    )
}