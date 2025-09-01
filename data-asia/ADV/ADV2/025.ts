import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "natu",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [177],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ペック",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Psychic"],
          name: {
                        ja: "なだめる波",
                                                                      },
          effect: {
                        ja: "防御するポケモンはそれぞれ眠っています。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

export default card
