import Image from "next/image";
import SignIn from "../components/SignIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <SignIn />
    </main>
  );
}
