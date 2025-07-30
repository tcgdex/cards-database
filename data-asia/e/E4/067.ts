import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "ダンズパース",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [206],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "滑りやすい肌",
          },
          effect: {
            ja: "防御ポケモンが進化したポケモンである限り、Dunsparceのリトリートコストは0です。",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "テールシェイク",
          },
          effect: {
            ja: "防御ポケモンは今眠っています。",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
