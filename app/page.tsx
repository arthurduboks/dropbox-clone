import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <h1>DropBox Clone</h1>
      <UserButton />
    </main>
  );
}
