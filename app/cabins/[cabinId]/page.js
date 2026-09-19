import Image from "next/image";
import { notFound } from "next/navigation";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "@/app/_components/TextExpander";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  if (!cabin) notFound();

  const { name, maxCapacity, image, description } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 overflow-hidden min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-20 border border-primary-800 py-6 px-4 sm:px-10 mb-16 md:mb-24 min-w-0">
        <div className="relative overflow-hidden rounded-sm aspect-[4/3] md:aspect-auto md:h-full min-h-[240px] min-w-0 w-full">
          <div className="absolute inset-0 md:scale-[1.15] md:origin-center">
            <Image
              src={image}
              alt={`Cabin ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-accent-100 font-black text-3xl sm:text-5xl md:text-7xl mb-5 bg-primary-950 p-4 sm:p-6 pb-1 w-full md:w-[150%] md:translate-x-[-254px] break-words">
            Cabin {name}
          </h3>

          <p className="text-base sm:text-lg text-primary-300 mb-8 md:mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 shrink-0 text-primary-600" />
              <span className="text-base sm:text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 shrink-0 text-primary-600" />
              <span className="text-base sm:text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 shrink-0 text-primary-600" />
              <span className="text-base sm:text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
