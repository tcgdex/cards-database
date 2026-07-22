import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Reshiram, Zekrom & Kyurem",
  },
  illustrator: "5ban Graphics",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [643, 644, 646],
  hp: 500,
  types: ["Dragon"],

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
        en: "Reshiram, Zekrom & Kyurem embark on a year of legendary adventures!"
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
        tcgplayer: 179036
      }
    },
  ]
}

export default card
