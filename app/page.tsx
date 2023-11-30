import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TrustBadge from "./components/TrustBadge";

export default function Home() {
  return (
    <main className="">
      <div
        className="flex flex-col lg:flex-row items-center bg-[#1E1919]
      dark:bg-slate-800"
      >
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-6xl font-bold">
            Welcome to DropBox Clone. <br />
            <br />
            Built with Next js 14
          </h1>

          <Link href="/dashboard" className="flex bg-blue-500 p-5 w-fit group">
            Try it for free!
            <ArrowRight className="ml-10 transform translate-x-0 group-hover:translate-x-2" />
          </Link>
        </div>
        {/* Video */}
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-md">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <TrustBadge />
      {/* Disclaimer */}
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This Dropbox clone is a personal project developed for educational and
        experimental purposes only. It is not affiliated with, endorsed by, or
        in any way officially connected to Dropbox, Inc., or any of its
        subsidiaries or affiliates. The project is provided "as is" without
        warranty of any kind, either express or implied.
      </p>
    </main>
  );
}
