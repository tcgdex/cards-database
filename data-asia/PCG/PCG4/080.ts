import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "ポリゴン",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [137],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "3D攻撃",
                                                                      },
          effect: {
                        ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
