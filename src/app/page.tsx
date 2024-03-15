import MainCard from "../components/MainCard";
import PageDecoration from "./icons/PageDecoration";

export default function Home() {
  return (
    <main className="relative flex w-screen overflow-hidden bg-gradient-to-b from-white from-[35%] to-[#D8EFFF] min-h-screen flex-col items-center justify-between xl:px-52 lg:px-20 md:px-10 px-4 lg:pt-28 pt-24">
      <PageDecoration />
      <MainCard />
    </main>
  );
}
