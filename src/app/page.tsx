import MainCard from "../components/MainCard";
import PageDecoration from "./icons/PageDecoration";

export default function Home() {
  return (
    <main className="flex bg-gradient-to-b from-white from-[35%] to-[#D8EFFF] min-h-screen flex-col items-center justify-between px-52 pt-28">
      <PageDecoration />
      <MainCard />
    </main>
  );
}
