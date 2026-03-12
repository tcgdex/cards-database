import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Houndstone",
  },
  illustrator: "Kouki Saitou",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Psychic"],
  dexId: [972],
  evolveFrom: {
    en: "Greavard",
  },
  description: {
    en: "A lovingly mourned Pokémon was reborn as Houndstone. It doesn't like anyone touching the protuberance atop its head.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Last Respects",
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