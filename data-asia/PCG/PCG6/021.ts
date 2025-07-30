import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "サラメンス（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [373],
      hp: 110,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "ファイアダンス",
                                                                      },
          effect: {
                        ja: "廃棄の山を検索して、ファイアエネルギーカードを使用して、1枚のポケモンに取り付けます。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Fire", "Metal", "Colorless", "Colorless"],
          name: {
                        ja: "デルタブラスト",
                                                                      },
          effect: {
                        ja: "サラメンスに取り付けられた金属エネルギーカードを捨てます。",
                                                                      },
          damage: 100,
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
