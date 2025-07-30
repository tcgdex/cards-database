import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "Swablu",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [333],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "羽毛",
                                                                      },
          effect: {
                        ja: "Swabluがあなたのベンチにある限り、相手の攻撃によってSwabluに与えられたすべての損害を防ぎます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "かみそりの風",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
