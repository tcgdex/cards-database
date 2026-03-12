import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Dondozo",
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Water"],
  dexId: [977],
  description: {
    en: "It treats Tatsugiri like its boss and follows it loyally. Though powerful, Dondozo is apparently not very smart.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Giga Impact",
      },
      damage: "120",
      cost: ["Water", "Water", "Water", "Colorless"],
      effect: {
        en: "During your next turn, this Pokémon can't attack.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 4,
};

export default card;