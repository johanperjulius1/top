import Toplist from "@/components/toplist/toplist";
import { casinosByRating } from "@/lib/casinos-data";

export default function Home() {
  const dateDay = new Date().getDate().toString();
  const dateMonth = new Date().toLocaleString('default', { month: 'long' });
  const dateYear = new Date().getFullYear();

  const defaultSubtitle = `Bonusarna uppdaterades den ${dateDay} ${dateMonth} ${dateYear}`;
  return (
    <>
      {defaultSubtitle}
      <Toplist casinos={casinosByRating} />
    </>
  )
}