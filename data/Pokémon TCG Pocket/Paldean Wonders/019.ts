import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Charbambin",
		en: "Charcadet",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
  },
  illustrator: "Souichirou Gunjima",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Fire"],
  dexId: [935],
  description: {
    en: "Its firepower increases when it fights, reaching over 1,800 degrees Fahrenheit. It likes berries that are rich in fat.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Punch",
        fr: "Koud'Poing",
        es: "Puño",
        it: "Pugno",
        de: "Boxhieb",
        'pt-br': "Soco",
        ko: "펀치"
      },
      damage: "10",
      cost: ["Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
