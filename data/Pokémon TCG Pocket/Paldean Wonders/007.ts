import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Smoliv",
		fr: "Olivini",
		es: "Smoliv",
		it: "Smoliv",
		pt: "Smoliv",
		de: "Olini"
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
				en: "Absorb",
				fr: "Vol-Vie",
				es: "Absorber",
				it: "Assorbimento",
				pt: "Absorção",
				de: "Absorber"
      },
      damage: "10",
      cost: ["Grass"],
      effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
				es: "Cura 10 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 10 danni.",
				pt: "Cure 10 pontos de dano deste Pokémon.",
				de: "Heile 10 Schadenspunkte bei diesem Pokémon."
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