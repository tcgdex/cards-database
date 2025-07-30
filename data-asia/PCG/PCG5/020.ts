import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "Tentacool",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [72],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "毒物",
                                                                      },
          effect: {
                        ja: "防御ポケモンは現在中毒になっています。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
