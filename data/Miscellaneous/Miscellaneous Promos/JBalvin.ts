import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "J Balvin V",
  },
  suffix: 'V',
  illustrator: "nagimiso",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  hp: 180,
  types: ["Fire"],

  stage: "Basic",

  attacks: [
    {
      cost: [
        "Fire",
        "Fire",
        "Colorless",
        "Colorless"
      ],
      name: {
        en: "Llama Ritmo",
      },
      effect: {
        en: "During your next turn, this Pokémon's Llama Ritmo attack does 100 more damage."
      },
      damage: "150+",
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "x2"
    },
  ],

  retreat: 2,

  variants: [
    {
      type: 'holo',
    },
  ]
}

export default card
