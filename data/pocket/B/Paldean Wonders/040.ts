import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Pawmot",
		'fr-fr': "Pohmarmotte",
		'es-es': "Pawmot",
		'it-it': "Pawmot",
		'de-de': "Pamomamo",
		'pt-br': "Pawmot",
		'ko-kr': "빠르모트"
  },
  illustrator: "Mizue",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 140,
  types: ["Lightning"],
  dexId: [923],
  evolveFrom: {
		'en-us': "Pawmo",
		'fr-fr': "Pohmotte",
		'es-es': "Pawmo",
		'es-mx': "Pawmo",
		'de-de': "Pamamo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo"
  },
  description: {
    en: "Pawmot's fluffy fur acts as a battery. It can store the same amount of electricity as an electric car.",
  },
  stage: "Stage2",
  attacks: [
    {
      name: {
        en: "Thunder Blast",
        fr: "Grondement de Tonnerre",
        es: "Estallido Trueno",
        'es-mx': "Explosión Atronadora",
        de: "Donnerkeil",
        it: "Tuonobomba",
        pt: "Explosão de Trovões"
      },
      damage: "100",
      cost: ["Lightning", "Lightning"],
      effect: {
        en: "Discard a Lightning Energy from this Pokémon.",
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