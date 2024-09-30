"use client"; // Error components must be Client Components

import { Button } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { replace } = useRouter();

  console.log(error);
  return (
    <div className="w-full h-full px-4 pt-6 dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
        <div className="grid gap-8 grid-cols-6 items-center lg:gap-12 lg:grid-cols-12">
          <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
            <svg
              className="mx-auto mb-4 w-12 h-12 text-gray-500 dark:text-gray-400 lg:ml-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"
              />
            </svg>
            <h1 className="mb-10 mt-10 xl:mb-4 xl:mt-0 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              Oops! Something went wrong.
            </h1>
            <p className="mx-auto max-w-xl font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
              Our team has been notified of the issue. Please try refreshing the
              page or check back later. Thank you for your patience!
            </p>
            <Button
              color="primary"
              className="self-center mt-10 xl:mt-4"
              onClick={() => {
                replace("/transactions/pending");
              }}
            >
              Go to Dashboard
            </Button>
          </div>
          <div className="hidden col-span-6 lg:flex">
            <Image src="/error.svg" alt="error" width={512} height={512} />
          </div>
        </div>
      </div>
    </div>
  );
}
