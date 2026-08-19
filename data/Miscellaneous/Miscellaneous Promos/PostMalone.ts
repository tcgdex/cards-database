import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Post Malone V",
  },
  suffix: 'V',
  illustrator: "Naoki Saito",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  hp: 180,
  types: ["Colorless"],

  stage: "Basic",

  attacks: [
    {
      cost: [
        "Colorless",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      name: {
        en: "Multi Beat",
      },
      effect: {
        en: "This attack does 20 more damage for each type of basic Energy attached to this Pokémon."
      },
      damage: "120+",
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "x2"
    },
  ],
  resistances: [
    {
      type: "Fighting",
      value: "-30"
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
