import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Pawmo",
		'fr-fr': "Pohmotte",
		'es-es': "Pawmo",
		'es-mx': "Pawmo",
		'de-de': "Pamamo",
		'it-it': "Pawmo",
		'pt-br': "Pawmo"
  },
  illustrator: "Kanami Ogata",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Lightning"],
  dexId: [922],
  evolveFrom: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'de-de': "Pamo",
		'pt-br': "Pawmi",
		'ko-kr': "빠모"
  },
  description: {
    en: "Pawmo uses a unique fighting technique in which it uses its forepaws to strike foes and zap them with electricity from its paw pads simultaneously.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Head Bolt",
        fr: "Éclair Frontal",
        de: "Kopf-Blitz",
        it: "Zuccalampo",
        es: "Rayo de Cabeza",
        pt: "Raio de Cabeça",
        'es-mx': "Rayo Capital"
      },
      damage: 30,
      cost: ["Lightning"],
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