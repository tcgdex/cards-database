import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Zoroark and Legendary Pokemon",
  },
  illustrator: "Kouki Saitou",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  dexId: [571, 483, 383, 384],
  hp: 500,
  types: ["Darkness"],

  stage: "Basic",

  attacks: [
    {
      name: {
        en: "Call of Legends",
      },
      cost: [
        "Darkness",
        "Fighting",
        'Metal',
        "Colorless"
      ],
      effect: {
        en: "A fierce battle unfolds between Zoroark and the Legendary Pokémon!"
      },
      damage: "1000",
    },
  ],

  retreat: 4,

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

  variants: [
    {
      type: 'normal',
      size: 'jumbo',
      thirdParty: {
        tcgplayer: 211493
      }
    },
  ]
}

export default card
