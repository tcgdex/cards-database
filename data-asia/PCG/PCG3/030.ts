import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "バルボハ",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [339],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "健忘症",
                                                                      },
          effect: {
                        ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
                                                                      },
        },
        {
          cost: ["Fighting"],
          name: {
                        ja: "取り組む",
                                                                      },
          damage: 10,
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
