import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Grafaiai",
		'fr-fr': "Tag-Tag",
		'es-es': "Grafaiai",
		'it-it': "Grafaiai",
		'de-de': "Affiti",
		'pt-br': "Grafaiai",
		'ko-kr': "태깅구르"
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Darkness"],
  dexId: [945],
  evolveFrom: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'de-de': "Sproxi",
		'it-it': "Shroodle",
		'es-es': "Shroodle",
		'pt-br': "Shroodle",
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