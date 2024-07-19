'use client'

import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from '../actions'
import { Input } from '@/components/ui/input'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import Image from 'next/image'

export default function OnboardingComponent() {
	const [type, setType] = useState([] as string[])
	const [interests, setInterests] = useState([] as string[])
	const { user } = useUser()
	const router = useRouter()

	const handleTypeToggle = (e: any) => {
		const value = e.target.value
		if (type.includes(value)) {
			setType(type.filter((v) => v !== value))
		} else {
			setType([...type, value])
		}
	}

	const handleInterestsToggle = (e: any) => {
		const value = e.target.value
		if (interests.includes(value)) {
			setInterests(interests.filter((v) => v !== value))
		} else {
			setInterests([...interests, value])
		}
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const res = await completeOnboarding({ type, interests })
		// if (res?.message) {
		// 	// Reloads the user's data from Clerk's API
		// 	await user?.reload()
		// 	router.push('/')
		// }
		// if (res?.error) {
		// 	setError(res?.error)
		// }
	}
	return (
		<section className='flex flex-col items-center justify-center gap-4'>
			<Image
				className='mx-auto'
				width={72}
				height={72}
				src='/logo.png'
				alt='Helping hands network Logo'
			/>
			<h1 className='my-6 text-center text-xl'>
				Welcome to Helping hands network
			</h1>
			<div className='mb-6'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='userType'>
					Are you a: (you can select both)
				</label>
				<ToggleGroup type='multiple'>
					<ToggleGroupItem onClick={handleTypeToggle} value='volunteer'>
						Volunteer
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleTypeToggle} value='participant'>
						Participant
					</ToggleGroupItem>
				</ToggleGroup>
			</div>

			<div className='mb-6'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='interests'>
					Select your interests:
				</label>
				<ToggleGroup type='multiple'>
					<ToggleGroupItem onClick={handleInterestsToggle} value='sports'>
						Sports
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleInterestsToggle} value='music'>
						Music
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleInterestsToggle} value='art'>
						Art
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleInterestsToggle} value='tech'>
						Tech
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleInterestsToggle} value='food'>
						Food
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleInterestsToggle} value='outdoors'>
						Outdoors
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleInterestsToggle} value='education'>
						Education
					</ToggleGroupItem>
					<ToggleGroupItem onClick={handleInterestsToggle} value='health'>
						Health
					</ToggleGroupItem>
				</ToggleGroup>
			</div>

			<button onClick={handleSubmit}>Submit</button>
		</section>
	)
}
