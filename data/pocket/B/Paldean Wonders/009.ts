import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'fr-fr': "Arboliva",
		'en-us': "Arboliva",
		'es-es': "Arboliva",
		'it-it': "Arboliva",
		'pt-br': "Arboliva",
		'de-de': "Olithena"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Grass"],
  dexId: [930],
  evolveFrom: {
		'en-us': "Dolliv",
		'fr-fr': "Olivado",
		'de-de': "Olivinio",
		'it-it': "Dolliv",
		'es-es': "Dolliv",
		'pt-br': "Dolliv",
		'es-mx': "Dolliv"
  },
  description: {
    en: "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
  },
  stage: "Stage2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Extra Heal",
      },
      effect: {
        en: "Once during your turn, you may heal 60 damage from 1 of your Pokémon ex that has any Energy attached. If you do, discard a random Energy from that Pokémon.",
      },
    },
  ],
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
      damage: "70",
      cost: ["Colorless", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;