import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    ja: "_____のピカチュウ",
  },
  illustrator: "Atsuko Nishida",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [25],
  hp: 120,
  types: ["Lightning"],

  stage: "Basic",

  attacks: [
    {
      name: {
        ja: "ハッピーバースデイ",
      },
      cost: [
        "Colorless",
      ],
      effect: {
        ja: "今日が自分の誕生日なら、相手のコレクションからカードを１枚、プレゼントしてもらう。（もらうカードは、相手が選ぶ。）"
      },
    },
    {
      name: {
        ja: "プレゼントMAX",
      },
      cost: [
        "Lightning",
        "Lightning",
      ],
      effect: {
        ja: "今日が自分の誕生日なら、自分がもらったプレゼントの数×20ダメージを追加。"
      },
      damage: "30+",
    },
  ],

  weaknesses: [
    {
      type: "Fighting",
      value: "+10"
    },
  ],

  resistances: [
    {
      type: "Metal",
      value: "-20"
    },
  ],

  retreat: 1,

  variants: [
    {
      type: 'normal',
      size: 'jumbo',
    },
  ]
}

export default card
