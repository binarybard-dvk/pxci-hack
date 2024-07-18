import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://helpinghands-delta.vercel.app'),
	title: {
		default: 'Helping hands network | A network of care and collaboration',
		template: '%s | Helping hands network',
	},
	description: 'A network of care and collaboration.',
	openGraph: {
		title: 'Helping hands network',
		description: 'A network of care and collaboration.',
		url: 'https://helpinghands-delta.vercel.app',
		siteName: 'Helping hands network',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Helping hands network | a network of care and collaboration',
		card: 'summary_large_image',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<body className={inter.className}>{children}</body>
					<Toaster />
				</ThemeProvider>
			</html>
		</ClerkProvider>
	)
}
