import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Dogrino",
		en: "Mabosstiff",
		es: "Mabosstiff",
		it: "Mabosstiff",
		pt: "Mabosstiff",
		de: "Mastifioso"
  },
  illustrator: "KIYOTAKA OSHIYAMA",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Darkness"],
  dexId: [943],
  evolveFrom: {
		fr: "Grondogue",
		en: "Maschiff",
		es: "Maschiff",
		it: "Maschiff",
		pt: "Maschiff",
		de: "Mobtiff"
  },
  description: {
    en: "Mabosstiff loves playing with children. Though usually gentle, it takes on an intimidating look when protecting its family.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Wild Tackle",
        fr: "Tacle Brutal",
        es: "Placaje Salvaje",
        it: "Azionferoce",
        pt: "Investida Feroz",
        de: "Wilder Tackle"
      },
      damage: "110",
      cost: ["Darkness", "Darkness", "Colorless"],
      effect: {
        en: "This Pokémon also does 20 damage to itself.",
        fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
        es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
        it: "Questo Pokémon infligge anche 20 danni a se stesso.",
        pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
        de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
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