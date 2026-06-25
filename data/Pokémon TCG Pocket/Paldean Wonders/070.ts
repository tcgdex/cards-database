import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Grafaiai",
		fr: "Tag-Tag",
		es: "Grafaiai",
		it: "Grafaiai",
		de: "Affiti",
		'pt-br': "Grafaiai",
		ko: "태깅구르"
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Darkness"],
  dexId: [945],
  evolveFrom: {
		en: "Shroodle",
		fr: "Gribouraigne",
		de: "Sproxi",
		it: "Shroodle",
		es: "Shroodle",
		pt: "Shroodle",
		'es-mx': "Shroodle"
  },
  description: {
    en: "Each Grafaiai paints its own individual pattern, and it will paint that same pattern over and over again throughout its life.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Colorful Attack",
      },
      damage: "30+",
      cost: ["Colorless"],
      effect: {
        en: "If your Pokémon in play have 3 or more different types of Energy attached, this attack does 60 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;