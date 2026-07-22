import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    ja: "ダーク・ルギア",
  },
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [249],
  hp: 120,
  types: ["Psychic"],

  stage: "Basic",

  attacks: [
    {
      name: {
        ja: "ダークストーム",
      },
      cost: [
        "Psychic",
        "Psychic",
        "Psychic",
        "Psychic"
      ],
      effect: {
        ja: "ダークオーラで発生させた竜巻で、敵を攻撃。"
      },
      damage: "1000",
    },
  ],

  weaknesses: [
    {
      type: 'Psychic',
    }
  ],

  retreat: 3,

  variants: [
    {
      type: 'normal',
      size: 'jumbo',
      thirdParty: {
        tcgplayer: 617391
      }
    },
  ]
}

export default card
