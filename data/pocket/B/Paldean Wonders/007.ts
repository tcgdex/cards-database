import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		'en-us': "Smoliv",
		'fr-fr': "Olivini",
		'es-es': "Smoliv",
		'it-it': "Smoliv",
		'pt-br': "Smoliv",
		'de-de': "Olini"
  },
  illustrator: "yuu",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Grass"],
  dexId: [928],
  description: {
    en: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				'en-us': "Absorb",
				'fr-fr': "Vol-Vie",
				'es-es': "Absorber",
				'it-it': "Assorbimento",
				'pt-br': "Absorção",
				'de-de': "Absorber"
      },
      damage: "10",
      cost: ["Grass"],
      effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon.",
				'es-es': "Cura 10 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 10 danni.",
				'pt-br': "Cure 10 pontos de dano deste Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
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