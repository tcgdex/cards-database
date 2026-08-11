import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'de-de': "Micrick",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'es-mx': "Nymble"
  },
  illustrator: "Kouki Saitou",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 40,
  types: ["Grass"],
  dexId: [919],
  description: {
    en: "It's highly skilled at a fighting style in which it uses its jumping capabilities to dodge incoming attacks while also dealing damage to opponents.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "U-turn",
				'fr-fr': "Demi-Tour",
				'de-de': "Kehrtwende",
				'it-it': "Retromarcia",
				'es-es': "Ida y Vuelta",
				'pt-br': "Fazer Retorno",
				'es-mx': "Ida y Vuelta"
      },
      damage: "10",
      cost: ["Colorless"],
      effect: {
        en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
      },
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