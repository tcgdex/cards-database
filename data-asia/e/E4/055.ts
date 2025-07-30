import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "ライドン",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [112],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            ja: "踏みつけ",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless", "Colorless"],
          name: {
            ja: "巨大な尾",
          },
          effect: {
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
          },
          damage: 100,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
