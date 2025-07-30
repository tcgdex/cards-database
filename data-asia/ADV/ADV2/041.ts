import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "アズリル",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [298],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "赤ちゃんの進化",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前に）、マリルを手からアズリルに置くことができます（これは進化するアズリルとしてカウントされます）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ジャンプキャッチ",
                                                                      },
          effect: {
                        ja: "デッキを検索して、トレーナーカードを検索し、相手に見せて、手に入れてください。  その後、デッキをシャッフルします。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
