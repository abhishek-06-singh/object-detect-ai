import ObjectDetection from "@/components/object-detection";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <main className="flex flex-col items-center justify-between p-8">
        <h1 class="text-transparent bg-gradient-to-r from-teal-500 via-white to-red-600 bg-clip-text lg:text-6xl md:text-5xl text-5xl  font-bold tracking-tighter ">
          Object Detection
        </h1>
        <ObjectDetection />
      </main>
    </main>
  );
}
