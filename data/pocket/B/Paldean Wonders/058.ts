import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Tauros de Paldea",
		'en-us': "Paldean Tauros",
		'es-es': "Tauros de Paldea",
		'it-it': "Tauros di Paldea",
		'pt-br': "Tauros de Paldea",
		'de-de': "Paldea-Tauros"
  },
  illustrator: "Shin Nagasawa",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Fighting"],
  dexId: [128],
  description: {
    en: "This kind of Tauros, known as the Combat Breed, is distinguished by its thick, powerful muscles and its fierce disposition.",
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
      damage: "50",
      cost: ["Fighting", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;