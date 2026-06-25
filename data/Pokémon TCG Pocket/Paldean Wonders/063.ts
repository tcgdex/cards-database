import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon",
		de: "Koraidon"
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Fighting"],
  dexId: [1007],
  description: {
    en: "This Pokémon resembles Cyclizar, but it is far burlier and more ferocious. Nothing is known about its ecology or other features.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Rampaging Fang",
        fr: "Croc Furieux",
        es: "Colmillo Furioso",
        it: "Zanna Infuriata",
        pt: "Canino Feroz",
        de: "Tobende Fänge"
      },
      damage: 120,
      cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
      effect: {
        en: "Discard 2 {R} Energy from this Pokémon.",
        fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
        es: "Descarta 2 Energías {R} de este Pokémon.",
        it: "Scarta 2 Energie {R} da questo Pokémon.",
        pt: "Descarte 2 Energias {R} deste Pokémon.",
        de: "Lege 2 {R} Energien von diesem Pokémon auf deinen Ablagestapel."
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;
