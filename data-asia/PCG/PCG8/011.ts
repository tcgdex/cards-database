import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "チャーマンダー",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [4],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "報復",
                                                                      },
          effect: {
                        ja: "ダメージ数のダメージ数は、チャーマンダーのダメージ数をカウンターします。",
                                                                      },
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "炎の尾",
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
