import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "マチョーク",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "フォーカスエネルギー",
          },
          effect: {
            ja: "次のターン中、マチョークのメガパンチ攻撃のベースダメージは80です。",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            ja: "メガパンチ",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
