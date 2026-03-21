import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Baxcalibur",
    fr: "Glaivodo"
  },
  illustrator: "Oswaldo KATO",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 140,
  types: ["Water"],
  dexId: [998],
  evolveFrom: {
    en: "Arctibax",
    fr: "Cryodo"
  },
  description: {
    en: "It launches itself into battle by flipping upside down and spewing frigid air from its mouth. It finishes opponents off with its dorsal blade.",
  },
  stage: "Stage2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Ice Maker",
      },
      effect: {
        en: "Once during your turn, you may take a Water Energy from your Energy Zone and attach it to the Water Pokémon in the Active Spot.",
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "Buster Tail",
      },
      damage: "90",
      cost: ["Water", "Water", "Water"],
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;