import Image from "next/image";
import TransistorLogo from "@/public/transistor-logo-gray-900.svg";
import TupleLogo from "@/public/tuple-logo-gray-900.svg";
import ReformLogo from "@/public/reform-logo-gray-900.svg";
import SavvyLogo from "@/public/savvycal-logo-gray-900.svg";
import StatamicLogo from "@/public/statamic-logo-gray-900.svg";

export default function TrustBadge() {
  return (
    <div className="bg-white dark:bg-slate-500 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-bold text-6xl text-slate-800 dark:text-white">
          Trusted by the world’s <br />{" "}
          <span className="text-blue-500">most innovative teams</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={TransistorLogo}
            alt="Transistor"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={ReformLogo}
            alt="Reform"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={TupleLogo}
            alt="Tuple"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={SavvyLogo}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={StatamicLogo}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
