import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Scovilain",
		en: "Scovillain",
		es: "Scovillain",
		it: "Scovillain",
		pt: "Scovillain",
		de: "Halupenjo"
  },
  illustrator: "kodama",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Grass"],
  dexId: [952],
  evolveFrom: {
		fr: "Pimito",
		en: "Capsakid",
		es: "Capsakid",
		it: "Capsakid",
		pt: "Capsakid",
		de: "Chilingel"
  },
  description: {
    en: "The green head has turned vicious due to the spicy chemicals stimulating its brain. Once it goes on a rampage, there is no stopping it.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Red-Hot Headbutt",
      },
      damage: "60+",
      cost: ["Grass", "Colorless"],
      effect: {
        en: "If your opponent's Active Pokémon is a Grass or Metal Pokémon, this attack does 40 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;
