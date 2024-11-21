import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/app/providers/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
				>
          <ThemeToggle className="absolute right-2 top-1"/>
					{children} 
				</ThemeProvider>
			</body>
		</html>
	);
}
