import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "セレビの星",
                                                   },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [251],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "タイムトラベル",
                                                                      },
          effect: {
                        ja: "セレビ{{星|このポカン}}が相手の攻撃による損傷によってノックアウトされると、コインをひっくり返すことができます。ヘッドの場合、セレビ{{星|このポカンモン}}はノックアウトされておらず、セレビに取り付けられたすべてのカードを破棄します{{star | thispokã©mon}}、そしてデッキの下にセレビ{{star | thispokã©mon}}を置きます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "葉の色合い",
                                                                      },
          effect: {
                        ja: "セレビに付着したエネルギーの量を数えます{{星|このポケモン}}。相手のポケモンの1つに多くのダメージカウンターを置きます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
