import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ホース（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [116],
      hp: 40,
      types: ["Fighting"],
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
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "逆スラスト",
                                                                      },
          effect: {
                        ja: "ベンチ付きポケモンを1枚馬に切り替えます。",
                                                                      },
          damage: 20,
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
