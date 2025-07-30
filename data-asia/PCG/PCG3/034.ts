import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "プラスレ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [311],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "家族を呼びます",
                                                                      },
          effect: {
                        ja: "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Lightning"],
          name: {
                        ja: "ポジティブな火花",
                                                                      },
          effect: {
                        ja: "ポケパウアーを持つ相手の各ポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
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
