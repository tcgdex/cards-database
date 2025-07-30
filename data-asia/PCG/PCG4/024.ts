import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "ジンクス",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [124],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "進化の段階",
                                                                      },
          effect: {
                        ja: "Jynxが進化したポカモンである限り、Jynxに与えられた損傷を除いて、相手の攻撃のすべての影響を防ぎ、Jynxは弱さを持っていません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "凍結光",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御するポケモンが燃やされます。",
                                                                      },
        },
        {
          cost: ["Water", "Psychic", "Colorless"],
          name: {
                        ja: "純粋な力",
                                                                      },
          effect: {
                        ja: "相手のポケモンに4つのダメージカウンターを、好きなように配置します。",
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
