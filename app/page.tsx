import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      home page
      <Link href="/dashboard" className="bg-gray-500 border p-4 text-white">
        Go to Dashboard page
      </Link>
    </main>
  );
}
