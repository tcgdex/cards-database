import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "slugma",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [218],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            ja: "シング",
          },
          effect: {
            ja: "防御ポケモンは現在燃やされています。",
          },
          damage: 10,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
