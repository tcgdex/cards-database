import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Tornadus, Thundurus & Landorus",
  },
  illustrator: "Eske Yoshinob",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [641, 642, 645],
  hp: 500,
  types: ["Colorless"],

  stage: "Basic",

  attacks: [
    {
      name: {
        en: "Be Legendary!",
      },
      cost: [
        "Lightning",
        "Fighting",
        "Colorless"
      ],
      effect: {
        en: "Tornadus, Thundurus & Landorus embark on a year of legendary adventures!"
      },
      damage: "1000",
    },
  ],

  retreat: 0,

  variants: [
    {
      type: 'normal',
      size: 'jumbo',
      stamp: ['legendary-pokemon'],
      thirdParty: {
        tcgplayer: 170121
      }
    },
  ]
}

export default card
