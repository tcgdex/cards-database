import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "swinub",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [220],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "ラム",
          },
          damage: 10,
        },
        {
          cost: ["Water"],
          name: {
            ja: "凍る息",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
