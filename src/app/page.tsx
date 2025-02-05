import Link from "next/link";
import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Headingnav from "./_components/navigation";

export default async function Home() {
 // const hello = await api.post.hello({ text: "from tRPC" });

  //void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-900 text-white">
        <Headingnav></Headingnav>
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
           </h1>
          <p className="text-2xl text-white mt-8">
           </p>
          <LatestPost />
        </main>
      </div>
    </HydrateClient>
  );
}
