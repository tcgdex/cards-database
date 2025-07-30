import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "Pineco",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [204],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "奇襲",
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
          stamp: ["1st edition"],
        },
      ],
};
