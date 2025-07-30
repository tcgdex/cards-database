import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "オッディッシュ（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [43],
      hp: 40,
      types: ["Water"],
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
          cost: ["Water"],
          name: {
                        ja: "ブロット",
                                                                      },
          effect: {
                        ja: "Oddishから2つのダメージカウンターを削除します。",
                                                                      },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
