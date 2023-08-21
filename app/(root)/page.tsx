import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="p-10">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
