"use client"

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Github, HandHelping, NotebookPen, Shapes } from 'lucide-react';
import { useRouter } from 'next/navigation'
import { ThemeToggle } from "../ui/theme-toggle";
import Link from "next/link";



export const WelcomeComponent = () => {
	const router = useRouter()

	return (
		<Card className="flex flex-col justify-center items-center gap-3 w-full min-h-screen">
			<ThemeToggle />

			<CardHeader>
				<CardTitle>
					<h1 className="flex flex-col items-center justify-center select-none">
						Welcome to{" "}

					</h1>
				</CardTitle>
				<CardDescription className="text-center">
					<span>Sone are a project to help you in your studies</span>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-2">
				<Button
					onClick={() => (router.push('/login'))}
					variant={"default"}
					className="flex gap-2 w-3/6">
					Get Start <ArrowRight />
				</Button>
				<Link
					href={"https://github.com/e17gomes/sone.git"}
					className="flex gap-2 w-3/6"
					target="_blank">
					<Button
						variant={"outline"}>
						See on <Github />
					</Button>
				</Link>
			</CardContent>
			<CardFooter className="flex items-center justify-center space-x-14 w-full text-sm">
				<Card className="h-28 w-48 border-2 border-blue-200 flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-md shadow-blue-400 ease-in-out duration-500">
					<CardContent className="font-semibold flex flex-col items-center justify-center gap-2 p-0">
						<span>
							Assist you on problems
						</span>
						<HandHelping className="text-blue-400"/>
					</CardContent>
				</Card>
				<Card className="h-28 w-48 border-2 border-blue-200 flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-md shadow-blue-400 ease-in-out duration-500">
					<CardContent className="font-semibold flex flex-col items-center justify-center gap-2 p-0">
						<span>
							Teach and help
						</span>
						<Shapes className="text-blue-400"/>
					</CardContent>
				</Card>
				<Card className="h-28 w-48 border-2 border-blue-200 flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-md shadow-blue-400 ease-in-out duration-500">
					<CardContent className="font-semibold flex flex-col items-center justify-center gap-2 p-0">
						<span>
							Make revisions for you
						</span>
						<NotebookPen className="text-blue-400"/>
					</CardContent>
				</Card>
			</CardFooter>
		</Card>
	);
};

