import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Houndstone",
		fr: "Tomberro",
		de: "Friedwuff",
		it: "Houndstone",
		es: "Houndstone",
		pt: "Houndstone",
		'es-mx': "Houndstone"
  },
  illustrator: "Kouki Saitou",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Psychic"],
  dexId: [972],
  evolveFrom: {
		en: "Greavard",
		fr: "Toutombe",
		de: "Gruff",
		it: "Greavard",
		es: "Greavard",
		pt: "Greavard",
		'es-mx': "Greavard"
  },
  description: {
    en: "A lovingly mourned Pokémon was reborn as Houndstone. It doesn't like anyone touching the protuberance atop its head.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Last Respects",
        fr: "Hommage Posthume",
        es: "Homenaje Póstumo",
        it: "Omaggio ai KO",
        pt: "Último Adeus",
        de: "Letzte Ehre"
      },
      damage: "50+",
      cost: ["Psychic", "Colorless"],
      effect: {
        en: "This attack does 20 more damage for each Psychic Pokémon in your discard pile.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Darkness",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;