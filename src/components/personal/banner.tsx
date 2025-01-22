import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-24 md:py-56 px-2 md:px-6  mt-9 bg-neutral-100 overflow-hidden gap-4">
      {/* Left Content */}
      <div className="w-full mx-auto max-w-screen-base">
      <div className="space-y-6 w-full md:max-w-[50%]">
        <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 font-sans ">
          High-quality tech gadgets & accessories
        </h1>
        <p className="text-gray-500">
          Sem sit amet adipiscing ullamcorper adipiscing adipiscing dole
          convallis tincidunt senectus enim blandit elit egestas.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 w-full sm:w-fit">
            Browse products
          </button>
          <button className="rounded-lg border border-gray-700 px-6 py-3 text-gray-900 hover:border-gray-400 w-full sm:w-fit">
            About us
          </button>
        </div>
      </div>
      </div>

      {/* Right Image Section */}
      <div className="md:flex justify-end w-full md:w-1/2 static md:absolute top-0 bottom-0 right-0">
        {/* Gradient Overlay */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-neutral-100 to-transparent"></div>
        {/* Image */}
        <Image
          src="/assets/home/banner.png"
          alt="A banner showcasing a phone and tablet side by side"
          layout="responsive"
          width={720}
          height={749}
          sizes="(max-width: 991px) 100vw, 50vw"
          className="object-cover w-full"
        />
      </div>
    </section>
  );
}
