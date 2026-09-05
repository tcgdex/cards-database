import { Card } from '../../../interfaces'
import Set from "../Miscellaneous Promos"

const card: Card = {
  name: {
    en: "Ishihara GX",
  },
  suffix: 'GX',
  illustrator: "Mike Cressy",
  rarity: "Promo",
  category: "Pokemon",

  set: Set,
  hp: 350,
  types: ["Dragon"],

  stage: "Basic",

  abilities: [
    {
      name: {
        en: "Red Chanchanko",
      },
      type: 'Ability',
      effect: {
        en: "Prevent all effects of attacks (including damage), Abilities, and Trainer cards done to this Pokémon."
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "60 Congradulations! GX",
      },
      cost: [
        "Grass",
        "Lightning"
      ],
      effect: {
        en: "Flip 60 coins. For each heads take a present! (You can use can't use more than 1 GX attack in a game.)"
      },
      damage: "1060",
    },
  ],

  retreat: 0,

  variants: [
    {
      type: 'holo',
    },
  ]
}

export default card
