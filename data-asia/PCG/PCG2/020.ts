import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "航海",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [119],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "トリプル違反",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンの3つを選択してください。この攻撃は、それらのポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "レンド",
                                                                      },
          effect: {
                        ja: "防御するポケモンがすでにダメージカウンターを持っている場合、この攻撃は30のダメージと20のダメージを与えます。",
                                                                      },
        },
      ],


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
