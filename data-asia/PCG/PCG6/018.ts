import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "フレレオン（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [136],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "デルタ検索",
                                                                      },
          effect: {
                        ja: "デッキを検索してホロンエネルギーカードを調べ、フレアロンに添付してください。その後、デッキをシャッフルします。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fire", "Metal", "Colorless"],
          name: {
                        ja: "火傷を返します",
                                                                      },
          effect: {
                        ja: "フレアロンに取り付けられたエネルギーカードを手に返すことができます。もしそうなら、防御するポケモンは燃やされます。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
