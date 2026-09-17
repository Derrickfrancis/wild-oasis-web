import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-[60vh] px-4 text-center">
      <Spinner />
      <p className="text-lg sm:text-xl text-primary-200 leading-tight">
        Loading Cabin data...
      </p>
    </div>
  );
}
