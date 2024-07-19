import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default function OnBoardingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	if (auth().sessionClaims?.metadata.onboardingComplete === true) {
		redirect('/')
	}

	return (
		<main className='max-w-5xl min-h-screen px-4 lg:px-0 mx-auto overflow-x-hidden flex w-full h-full flex-col items-center justify-between'>
			<div className='py-24'>
				<div className='w-lg flex flex-col bg-background border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-12'>
					{children}
				</div>
			</div>
		</main>
	)
}
