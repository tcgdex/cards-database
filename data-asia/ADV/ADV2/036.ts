import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ソロック",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [338],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "日食",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃前）に一度、Lunatoneが再生されている場合は、このパワーを使用できます。ターンの終わりまで、Solrockのタイプは火です。 Solrockが特別な状態の影響を受ける場合、この電力は使用できません。",
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
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "ソーラーブラスト",
                                                                      },
          damage: 40,
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
