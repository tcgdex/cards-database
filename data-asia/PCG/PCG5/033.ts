import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "領土スター",
                                                   },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [378],
      hp: 90,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "アイスバリア",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中に、対戦相手のポケモン-Exによるレジス{{star | this pokemon}}に行われたダメージを含む攻撃のすべての影響を防ぎます。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
                        ja: "最終的なブリザード",
                                                                      },
          effect: {
                        ja: "対戦相手が1枚の賞品カードを残し、レジス{{star | this pokemon}}が唯一のポケモンである場合、この攻撃は対戦相手のベンチポケモンのそれぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 3,

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
