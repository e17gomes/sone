import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/app/providers/theme-provider";

export const metadata: Metadata = {
	title: "Sone",
	description: "This is SONE",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					attribute={"class"}
					defaultTheme={"system"}
					enableSystem
					disableTransitionOnChange
				>
					{children} 
				</ThemeProvider>
			</body>
		</html>
	);
}
