import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Annihilape",
		fr: "Courrousinge",
		de: "Epitaff",
		it: "Annihilape",
		es: "Annihilape",
		pt: "Annihilape",
		'es-mx': "Annihilape"
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 140,
  types: ["Fighting"],
  dexId: [979],
  evolveFrom: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		de: "Rasaff",
		'pt-br': "Primeape",
		ko: "성원숭"
  },
  description: {
    en: "It imbues its fists with the power of the rage that it kept hidden in its heart. Opponents struck by these imbued fists will be shattered to their core.",
  },
  stage: "Stage2",
  attacks: [
    {
      name: {
        en: "Dynamite Punch",
        fr: "Poing Dynamite",
        es: "Puño Dinamita",
        it: "Pugno Dinamite",
        pt: "Soco Dinamite",
        de: "Dynamitstoß"
      },
      damage: "90",
      cost: ["Fighting"],
      effect: {
        en: "This Pokémon also does 30 damage to itself.",
        fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
        de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
        it: "Questo Pokémon infligge anche 30 danni a se stesso.",
        es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
        pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
        'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
