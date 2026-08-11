import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'de-de': "Tafforgita",
		'pt-br': "Tinkatuff",
		'ko-kr': "벼리짱"
  },
  illustrator: "Akira Komayama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Metal"],
  dexId: [958],
  evolveFrom: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'de-de': "Forgita",
		'it-it': "Tinkatink",
		'es-es': "Tinkatink",
		'pt-br': "Tinkatink",
		'es-mx': "Tinkatink"
  },
  description: {
    en: "These Pokémon make their homes in piles of scrap metal. They test the strength of each other's hammers by smashing them together.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Light Punch",
        fr: "Poing Léger",
        es: "Puño Ligero",
        it: "Pugnetto",
        de: "Leichter Hieb",
        'pt-br': "Soco de Luz",
        ko: "치기"
      },
      damage: "50",
      cost: ["Metal", "Colorless"],
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