import { SessionWrapper } from "../../components/SessionWrapper";
import SignInPage from "../../components/login/LoginComponent";
import SignOutPage from "../../components/login/SignOutComponent";
import { auth } from "../../lib/auth";
import Navbar from "./navbar/page";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <>
      <div className="h-screen flex flex-col bg-gradient-to-r from-pink-700 to-black">
        <Navbar />
        <main className="flex-1 container mx-auto p-4">
          <div className="mt-4 text-center">
            <h1 className="text-6xl font-bold mb-2 text-white">
              Welcome to our APP!
            </h1>
            <p className="text-lg mb-9 pt-8 text-white">
            "Join thousands of users who trust our platform for secure and seamless authentication. Whether you're managing your profile or exploring our exclusive features, we've got you covered!"
            </p>
           
                  <SessionWrapper>
                    {isAuthenticated ? (
                      <SignOutPage />
                    ) : (
                      <SignInPage />
                    )}
                  </SessionWrapper>

                 <Button className="bg-pink-600 text-md p-4 ">Learn More!</Button>
                </div>
             
          
        </main>
   </div>
    </>
  );
}

