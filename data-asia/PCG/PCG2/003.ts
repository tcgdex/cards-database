import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Koffing",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [109],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "スモッグ",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
