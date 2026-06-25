import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Miraidon",
		fr: "Miraidon",
		es: "Miraidon",
		it: "Miraidon",
		pt: "Miraidon",
		de: "Miraidon"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Lightning"],
  dexId: [1008],
  description: {
    en: "This seems to be the Iron Serpent mentioned in an old book. The Iron Serpent is said to have turned the land to ash with its lightning.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
			  en: "Lightning Laser",
        fr: "Laser Éclair",
        es: "Láser Relámpago",
        it: "Laser Fulminante",
        pt: "Laser Relampejante",
        de: "Blitzlaser"
      },
      damage: "60",
      cost: ["Lightning", "Lightning", "Lightning"],
      effect: {
        en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon.",
        fr: "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire.",
        es: "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival.",
        it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario.",
        pt: "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
        de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu."
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;