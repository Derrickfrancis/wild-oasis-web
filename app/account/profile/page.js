import Image from "next/image";

import SelectCountry from "@/app/_components/SelectCountry";

export default function Page() {
  // CHANGE
  // const countryFlag = "/pt.jpg";
  // const nationality = "portugal";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Update your guest profile
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="bg-primary-900 py-4 px-4 sm:py-8 sm:px-12 text-base sm:text-lg flex gap-4 sm:gap-6 flex-col">
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            {/* <Image
              src={countryFlag}
              width={20}
              height={20}
              alt="Country flag"
              className="h-5 w-auto rounded-sm"
            /> */}
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            // defaultCountry={nationality}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="px-3 py-2 sm:px-5 sm:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="bg-accent-500 px-5 py-3 sm:px-8 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}
