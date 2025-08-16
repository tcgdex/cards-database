import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "numel",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [322],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ヘッドバット",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "燃え尽きる",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御する各ポケモンが燃やされます。",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
