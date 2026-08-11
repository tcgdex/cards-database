import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Dolliv",
		'fr-fr': "Olivado",
		'de-de': "Olivinio",
		'it-it': "Dolliv",
		'es-es': "Dolliv",
		'pt-br': "Dolliv",
		'es-mx': "Dolliv"
  },
  illustrator: "Mizue",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Grass"],
  dexId: [929],
  evolveFrom: {
		'en-us': "Smoliv",
		'fr-fr': "Olivini",
		'de-de': "Olini",
		'it-it': "Smoliv",
		'es-es': "Smoliv",
		'pt-br': "Smoliv",
		'es-mx': "Smoliv"
  },
  description: {
    en: "Dolliv shares its tasty, fresh-scented oil with others. This species has coexisted with humans since times long gone.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Seed Bomb",
        fr: "Canon Graine",
        es: "Bomba Germen",
        'es-mx': "Bomba Semilla",
        de: "Samenbomben",
        it: "Semebomba",
        pt: "Bomba de Sementes"
      },
      damage: "40",
      cost: ["Grass", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;