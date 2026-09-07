import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Articuno, Moltres, and Zapdos",
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
        en: "Big Bang",
      },
      cost: [
        "Fire",
        "Lightning",
        "Water"
      ],
      effect: {
        en: "Shuffle Articuno, Molres and Zapdos into your deck."
      },
      damage: "200",
    },
  ],

  retreat: 0,

  description: {
    en: "These legendary bird Pokémon are above electricity, fire, water, and all other elements."
  },

  variants: [
    {
      type: 'normal',
      size: 'jumbo',
      thirdParty: {
        tcgplayer: 211417
      }
    },
  ]
}

export default card
