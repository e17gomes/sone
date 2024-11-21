import { AuthComponent } from "@/components/layouts/auth-page";
import { WelcomeComponent } from "@/components/layouts/welcome-page";

export default function Home() {
	return (
    <main className="min-h-screen flex justify-center items-center">
			{/* <WelcomeComponent /> */}
      <AuthComponent/>
		</main>
	);
}
 