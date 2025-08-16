import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "スパラク",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [167],
      hp: 50,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "スタンポイズン",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御するポケモンは今や麻痺し、毒されます。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ピアス",
                                                                      },
          damage: 20,
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
