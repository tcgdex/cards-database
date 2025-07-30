import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "アグロン",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [306],
      hp: 110,
      types: ["Metal"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "報復",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。ヘッドの場合、この攻撃は10倍のダメージ倍のダメージ数をアグロンのカウンターにします。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "メガパンチ",
                                                                      },
          damage: 40,
        },
        {
          cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "ダブルラリアット",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の70ダメージ倍になります。",
                                                                      },
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
