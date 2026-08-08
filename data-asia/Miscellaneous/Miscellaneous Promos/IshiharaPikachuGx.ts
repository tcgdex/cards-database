import { Card } from '../../../interfaces'
import Set from "../../../data/Miscellaneous/Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Ishihara GX",
  },
  suffix: 'TAG TEAM-GX',
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  hp: 300,
  types: ["Lightning"],

  stage: "Basic",

  attacks: [
    {
      name: {
        en: "",
      },
      cost: [
        "Lightning",
        "Lightning",
        "Lightning"
      ],
      effect: {
        ja: ""
      },
      damage: "200",
    },
    {
      name: {
        ja: "GX",
      },
      cost: [
        "Lightning",
        "Lightning",
        "Lightning"
      ],
      effect: {
        ja: ""
      },
      damage: "610",
    },
  ],

  retreat: 0,

  variants: [
    {
      type: 'holo',
    },
  ]
}

export default card
