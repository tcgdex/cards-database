import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Ampibidou",
		en: "Bellibolt",
		es: "Bellibolt",
		it: "Bellibolt",
		pt: "Bellibolt",
		de: "Wampitz"
  },
  suffix: "EX",
  illustrator: "PLANETA Yamashita",
  rarity: "Four Diamond",
  category: "Pokemon",

  dexId: [939],
  hp: 160,
  types: ["Lightning"],
  evolveFrom: {
		fr: "Têtampoule",
		en: "Tadbulb",
		es: "Tadbulb",
		it: "Tadbulb",
		pt: "Tadbulb",
		de: "Blipp"
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "High-Voltage Cannon",
      },
      damage: "70+",
      cost: ["Lightning", "Lightning"],
      effect: {
        en: "If you have 4 or more Lightning Energy in play, this attack does 70 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;
