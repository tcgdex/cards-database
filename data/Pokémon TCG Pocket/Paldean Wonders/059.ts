import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Toedscool",
		fr: "Terracool",
		es: "Toedscool",
		de: "Tentagra",
		it: "Toedscool",
		pt: "Toedscool",
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
