import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Katy Perry V",
  },
  suffix: 'V',
  illustrator: "Yuu Nishida",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  hp: 180,
  types: ["Lightning"],

  stage: "Basic",

  attacks: [
    {
      cost: [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      name: {
        en: "Heartbeat Ray",
      },
      effect: {
        en: "This attack also does 20 damage to each of your opponent's benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokemon)."
      },
      damage: "130",
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
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
