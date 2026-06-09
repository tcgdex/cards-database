import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Fidough",
		fr: "Pâtachiot",
		es: "Fidough",
		it: "Fidough",
		pt: "Fidough",
		de: "Hefel"
  },
  illustrator: "Mizue",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Psychic"],
  dexId: [926],
  description: {
    en: "The yeast in Fidough's breath is useful for cooking, so this Pokémon has been protected by people since long ago.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Rear Kick",
        fr: "Ruade",
        de: "Rückwärtskick",
        it: "Retrocalcio",
        es: "Patada Trasera",
        pt: "Chute Traseiro",
        'es-mx': "Patada Trasera"
      },
      damage: "20",
      cost: ["Psychic"],
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;