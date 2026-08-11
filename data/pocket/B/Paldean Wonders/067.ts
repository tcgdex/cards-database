import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Grondogue",
		en: "Maschiff",
		es: "Maschiff",
		it: "Maschiff",
		pt: "Maschiff",
		de: "Mobtiff"
  },
  illustrator: "KEIICHIRO ITO",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Darkness"],
  dexId: [942],
  description: {
    en: "Its well-developed jaw and fangs are strong enough to crunch through boulders, and its thick fat makes for an excellent defense.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Bite",
        fr: "Morsure",
        de: "Biss",
        it: "Morso",
        es: "Mordisco",
        pt: "Mordida",
        'es-mx': "Mordida"
      },
      damage: "30",
      cost: ["Darkness", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;
