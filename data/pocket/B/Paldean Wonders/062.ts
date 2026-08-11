import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Ting-Lu",
		'fr-fr': "Dinglu",
		'es-es': "Ting-Lu",
		'it-it': "Ting-Lu",
		'pt-br': "Ting-Lu",
		'de-de': "Dinglu"
  },
  illustrator: "AKIRA EGAWA",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Fighting"],
  dexId: [1003],
  description: {
    en: "It slowly brings its exceedingly heavy head down upon the ground, splitting the earth open with huge fissures that run over 160 feet deep.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Arrogant Impact",
        fr: "Impact Arrogant",
        es: "Impacto Soberbia",
        it: "Impatto Arrogante",
        pt: "Impacto da Soberba",
        de: "Arroganter Einschlag"
      },
      damage: 130,
      cost: ["Fighting", "Fighting", "Fighting"],
      effect: {
        en: "If this Pokémon's remaining HP is 60 or less, this attack does nothing.",
        fr: "S'il reste 60 PV ou moins à ce Pokémon, cette attaque ne fait rien.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;