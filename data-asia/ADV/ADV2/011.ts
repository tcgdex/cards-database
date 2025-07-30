import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "シンダキル",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [155],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "取り組む",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fire"],
          name: {
                        ja: "シング",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
