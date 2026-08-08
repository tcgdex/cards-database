import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Raikou, Entei & Suicune",
  },
  illustrator: "Yoshinobu Saito",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [243, 244, 245],
  hp: 500,
  types: ["Colorless"],

  stage: "Basic",

  attacks: [
    {
      name: {
        en: "Be Legendary!",
      },
      cost: [
        "Fire",
        "Water",
        "Lightning"
      ],
      effect: {
        en: "Raikou, Entei & Suicune embark on a year of legendary adventures!"
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
        tcgplayer: 164235
      }
    },
  ]
}

export default card
