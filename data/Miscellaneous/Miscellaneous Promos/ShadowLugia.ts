import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Shadow Lugia",
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
        en: "Shadow Storm",
      },
      cost: [
        "Psychic",
        "Psychic",
        "Psychic",
        "Psychic"
      ],
      effect: {
        en: "A shadowy aura is used to whip up a vicious tornado.."
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
      stamp: ['pokemon-xd-gale-of-darkness'],
      thirdParty: {
        tcgplayer: 127168
      }
    },
  ]
}

export default card
