import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    ja: "サンダーとフリーザーとファイヤー",
  },
  illustrator: "Mitsuhiro Arita",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [146, 145, 144],
  hp: 120,
  types: ["Colorless"],

  stage: "Basic",

  attacks: [
    {
      name: {
        ja: "ビッグバーン",
      },
      cost: [
        "Lightning",
        "Water",
        "Fire",
      ],
      effect: {
        ja: "このワザを使ったら、このカードを山札にもどし、その山札をよく切る。そのとき、このカードについていたダメージカウンターを全部取りのぞき、ついていたカードも全てトラッシュする。"
      },
      damage: "200",
    },
  ],

  retreat: 0,

  description: {
    ja: "雷、氷、炎とそれぞれの属性の頂点にたつと言われる伝説の鳥ポケモンだ。"
  },

  variants: [
    {
      type: 'normal',
      size: 'jumbo',
      thirdParty: {
        tcgplayer: 617213
      }
    },
  ]
}

export default card
