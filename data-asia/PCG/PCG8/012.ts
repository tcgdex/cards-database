import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "チャームレオン",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [5],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "怒り",
                                                                      },
          effect: {
                        ja: "CharmeLeonの各ダメージカウンターの10ダメージと10ダメージをさらに10回します。",
                                                                      },
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
                        ja: "火炎放射器",
                                                                      },
          effect: {
                        ja: "Charmeleonに取り付けられた火エネルギーを捨てます。",
                                                                      },
          damage: 60,
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
