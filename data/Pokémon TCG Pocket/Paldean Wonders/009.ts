import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Arboliva",
  },
  illustrator: "Kouki Saitou",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Grass"],
  dexId: [930],
  evolveFrom: {
    en: "Dolliv",
  },
  description: {
    en: "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
  },
  stage: "Stage 2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Extra Heal",
      },
      effect: {
        en: "Once during your turn, you may heal 60 damage from 1 of your Pokémon ex that has any Energy attached. If you do, discard a random Energy from that Pokémon.",
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "Seed Bomb",
      },
      damage: "70",
      cost: ["Colorless", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;