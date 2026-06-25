import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Superdofin",
		en: "Palafin",
		es: "Palafin",
		it: "Palafin",
		pt: "Palafin",
		de: "Delfinator"
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Water"],
  dexId: [964],
  evolveFrom: {
		fr: "Dofin",
		en: "Finizen",
		es: "Finizen",
		it: "Finizen",
		pt: "Finizen",
		de: "Normifin"
  },
  description: {
    en: "This hero of the ocean swims at a speed of 50 knots and saves drowning people and Pokémon.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        fr: "Poing Sonique",
        en: "Jet Punch",
        es: "Puño Jet",
        it: "Pugnojet",
        pt: "Soco Jato",
        de: "Düsenhieb"
      },
      damage: 50,
      cost: ["Water", "Water", "Water"],
      effect: {
        en: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon.",
        fr: "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire.",
        es: "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival.",
        de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu.",
        it: "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario.",
        pt: "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
        'es-mx': "Este ataque también hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival."
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;