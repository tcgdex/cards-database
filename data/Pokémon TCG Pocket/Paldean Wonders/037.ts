import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Chien-Pao",
		fr: "Baojian",
		es: "Chien-Pao",
		it: "Chien-Pao",
		pt: "Chien-Pao",
		de: "Baojian"
  },
  suffix: "EX",
  illustrator: "aky CG Works",
  rarity: "Four Diamond",
  category: "Pokemon",

  dexId: [1002],
  hp: 130,
  types: ["Water"],
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Icicle",
        fr: "Concrétion Glacée",
        de: "Eiszapfen",
        it: "Stalattite",
        pt: "Pingente de Gelo",
        es: "Témpano",
        'es-mx': "Témpano de Hielo"
      },
      damage: "20",
      cost: ["Water"],
    },
    {
      name: {
        en: "Diving Icicles",
      },
      cost: ["Water", "Water", "Water"],
      effect: {
        en: "Discard all Water Energy from this Pokémon. This attack does 130 damage to 1 of your opponent's Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;