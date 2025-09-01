import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ルナトン",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [337],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "月食",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃前）に、Solrockがプレイ中の場合は、このパワーを使用できます。ターンの終わりまで、ルナトンのタイプは闇です。ルナトンが特別な状態の影響を受ける場合、この電力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "宇宙の引き分け",
                                                                      },
          effect: {
                        ja: "相手が進化したポケモンをプレイしている場合は、3枚のカードを描きます。",
                                                                      },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "月の爆発",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

export default card
