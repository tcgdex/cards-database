import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "コルサラ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [222],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "助けを求めて泣きます",
                                                                      },
          effect: {
                        ja: "デッキを検索したり、ポケモンとの戦い（ポケモンエクスを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Water"],
          name: {
                        ja: "二重攻撃",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンの2つを選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
