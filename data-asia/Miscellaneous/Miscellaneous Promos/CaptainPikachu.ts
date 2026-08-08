import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    ja: "_____のピカチュウ",
  },
  illustrator: "Kouki Saitou",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [393, 390, 387, 190, 252, 281, 52, 490, 457, 72, 278, 170, 279, 456, 418, 327, 331, 446, 293],
  hp: 80,
  types: ["Lightning"],

  stage: "Basic",

  attacks: [
    {
      name: {
        ja: "キャプテンピカチュウ",
      },
      cost: [
        "Colorless",
      ],
      effect: {
        ja: "自分のウラに伏っているサイドのカードをすべて見る。その後、その中の好きなカードを１枚、手札に加える。（見たサイドはすべてウラにもどす。）"
      },
    },
    {
      name: {
        ja: "だいらんとう!?",
      },
      cost: [
        "Lightning",
        "Lightning",
        "Lightning",
      ],
      effect: {
        ja: "おたがいのベンチポケモン全員にも、それぞれ100ダメージ。"
      },
      damage: "100",
    },
  ],

  weaknesses: [
    {
      type: "Fighting",
      value: "+20"
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
      stamp: ['pokemon-center-yokohama']
    },
  ]
}

export default card
