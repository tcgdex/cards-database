import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "トロピウス（デルタ種）",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [357],
      hp: 70,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "熱帯治癒",
                                                                      },
          effect: {
                        ja: "ターン中に、トロピウスを手からベンチに置くと、すべての特別な条件、投獄マーカー、およびPokã©Monから衝撃波マーカーを削除できます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Metal"],
          name: {
                        ja: "粉砕",
                                                                      },
          effect: {
                        ja: "トロピウスに取り付けられたエネルギーの量を10回損傷します。",
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
