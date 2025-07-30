import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "恐ろしい（デルタ種）",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [22],
      hp: 60,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "デルタサイン",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度（攻撃の前）、そのカードにあるPokã©Monを検索し、それを相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。ターンごとに1つ以上のデルタサインPokã©-Powerを使用することはできません。 Fearowが特別な状態の影響を受けている場合、この力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "ピアス",
                                                                      },
          damage: 30,
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
