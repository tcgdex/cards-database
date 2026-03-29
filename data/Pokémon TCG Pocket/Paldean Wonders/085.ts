import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Flamigo",
		fr: "Flamenroule",
		es: "Flamigo",
		it: "Flamigo",
		de: "Flaminkno",
		'pt-br': "Flamigo",
		ko: "꼬이밍고"
  },
  illustrator: "kantaro",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Colorless"],
  dexId: [973],
  description: {
    en: "Thanks to a behavior of theirs known as “synchronizing,” an entire flock of these Pokémon can attack simultaneously in perfect harmony.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				en: "Wing Attack",
				fr: "Cru-aile",
				de: "Wing Attack"
      },
      damage: "50",
      cost: ["Colorless", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;