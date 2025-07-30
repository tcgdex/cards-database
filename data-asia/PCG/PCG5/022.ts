import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ラプラス",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [131],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "サポートナビゲーション",
                                                                      },
          effect: {
                        ja: "ターン中にラプラスを手からベンチに置いたら、デッキをサポーターカードで検索し、相手に見せて、手に置くことができます。その後、デッキをシャッフルします。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "サーフィン",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 2,

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
