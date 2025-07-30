import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "ドラゴンエア（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [148],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "ツイスター",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。両方が尾の場合、この攻撃は何もしません。それぞれの頭について、防御ポケモンに取り付けられたエネルギーを捨てます。",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 2,

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
