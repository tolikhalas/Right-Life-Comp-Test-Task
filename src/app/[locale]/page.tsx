import Advantages from "@/components/Advantages/Advantages";
import Feedback from "@/components/Form/Feedback";
import Hero from "@/components/Hero/Hero";
import GoogleMap from "@/components/Map/GoogleMap";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="my-8 flex w-full place-items-center ">
        <Hero />    
      </div>

      <div
        className="mb-32 grid w-full bg-gray-300 text-center lg:mb-0"
        id="about-us"
      >
        <Advantages />
      </div>
      <div className="mb-32 grid w-full lg:mb-0">
        <Feedback />
      </div>

      <div className="mb-32 grid w-full lg:mb-0">
        <GoogleMap />
      </div>
    </main>
  );
}
