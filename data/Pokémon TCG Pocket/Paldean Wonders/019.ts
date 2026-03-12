import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Charcadet",
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
