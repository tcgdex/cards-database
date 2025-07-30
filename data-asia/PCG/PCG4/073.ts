import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "グリガー",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [207],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "フリーフライト",
                                                                      },
          effect: {
                        ja: "Gligarにエネルギーが付着していない場合、Gligarのリトリートコストは0です。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
                        ja: "有毒グリップ",
                                                                      },
          effect: {
                        ja: "防御ポケモンは現在中毒になっています。",
                                                                      },
          damage: 10,
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
