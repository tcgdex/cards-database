import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Skeledirge",
  },
  illustrator: "nagimiso",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 150,
  types: ["Fire"],
  dexId: [911],
  evolveFrom: {
    en: "Crocalor",
  },
  description: {
    en: "Skeledirge's gentle singing soothes the souls of all that hear it. It burns its enemies to a crisp with flames of over 5,400 degrees Fahrenheit.",
  },
  stage: "Stage 2",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Passionate Voice",
      },
      effect: {
        en: "Once during your turn, you may discard 1 Fire Energy from this Pokémon in order to use this Ability. During this turn, attacks used by your Fire Pokémon do +50 damage to your opponent's Active Pokémon.",
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "Heat Crash",
      },
      damage: "70",
      cost: ["Fire", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;
