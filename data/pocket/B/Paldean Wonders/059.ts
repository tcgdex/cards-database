import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool",
		'es-es': "Toedscool",
		'de-de': "Tentagra",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'es-mx': "Toedscool"
  },
  illustrator: "Oswaldo KATO",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Fighting"],
  dexId: [948],
  description: {
    en: "Toedscool lives in muggy forests. The flaps that fall from its body are chewy and very delicious.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Smash Kick",
        fr: "Coud'Pattes",
        de: "Schmetterkick",
        it: "Calcio Esplosivo",
        es: "Patada Destrucción",
        pt: "Chute Poderoso",
        'es-mx': "Patada Devastadora"
      },
      damage: "20",
      cost: ["Fighting"],
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
