import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "Psyduck（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "傷",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Lightning"],
          name: {
                        ja: "無効にします",
                                                                      },
          effect: {
                        ja: "防御ポケモンの攻撃の1つを選択します。  そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
                                                                      },
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
