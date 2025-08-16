import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ヌズリーフ",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [274],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ポンド",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
                        ja: "略奪",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
                                                                      },
          damage: 30,
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
