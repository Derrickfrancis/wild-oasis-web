"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 min-h-[60vh] px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Something went wrong!
      </h1>
      <p className="text-base sm:text-lg text-primary-300">
        {error?.message || "An unexpected error occurred."}
      </p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg hover:bg-accent-600 transition-colors cursor-pointer"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
