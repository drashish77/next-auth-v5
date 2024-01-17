import Link from "next/link";
import React from "react";
import { auth, signOut } from "../lib/auth";
import { redirect } from "next/navigation";
import SignoutButton from "../components/sign-out-button";

const Dashboard = async () => {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  console.log({ session });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard Page
      <p className="">{session.user?.email}</p>
      <div>
        <Link href="/" className="bg-gray-500 border p-4 text-white">
          Go to your home page
        </Link>
      </div>
      <SignoutButton
        signOut={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      />
    </main>
  );
};

export default Dashboard;
