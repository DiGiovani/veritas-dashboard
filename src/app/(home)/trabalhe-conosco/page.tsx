"use client";

import { WorkWithUsForm } from "@/components/forms/work-with-us";

export default function Careers() {
  return (
    <div className="flex flex-col w-dvw min-h-dvh">
      <div
        id="contact"
        className="w-full flex flex-col items-center justify-center mb-8"
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 text-sans my-8">
          Trabalhe Conosco
        </h2>
        <WorkWithUsForm />
      </div>
    </div>
  );
}
