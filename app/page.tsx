import HomeDetailsCard from "./components/cards/HomeDetailsCard";
import EduAndSkillsCard from "./components/cards/EduAndSkillsCard";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <HomeDetailsCard />
        <EduAndSkillsCard />
      </main>
    </>
  );
}
