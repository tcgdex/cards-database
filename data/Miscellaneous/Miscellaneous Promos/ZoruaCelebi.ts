import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Zorua and Celebi",
  },
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [570, 251],
  hp: 90,
  types: ["Darkness"],

  stage: "Basic",

  attacks: [
    {
      name: {
        en: "Who is Who?",
      },
      cost: [
        "Darkness",
        "Grass",
      ],
      effect: {
        en: "Each player switches places with his or her opponent. Then, each player continues to play the game using his or her opponent's cards."
      },
      damage: "1000",
    },
  ],

  weaknesses: [
    {
      type: "Fighting",
      value: "×2"
    },
  ],

  resistances: [
    {
      type: "Psychic",
      value: "-20"
    },
  ],

  retreat: 2,

  variants: [
    {
      type: 'normal',
      size: 'jumbo',
      thirdParty: {
        tcgplayer: 211494
      }
    },
  ]
}

export default card
