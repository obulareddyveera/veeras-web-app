import HomeDetailsCard from "./components/cards/HomeDetailsCard";
import SkillsetCard from "./components/cards/SkillsetCard";
import PortalNavbar from "./components/header/PortalNavbar";

export default function Home() {
  return (
    <>
      <PortalNavbar />
      <main className="flex flex-col">
        <HomeDetailsCard />
        <SkillsetCard />
      </main>
    </>
  );
}
