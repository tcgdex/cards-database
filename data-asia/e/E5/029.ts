import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "ラプラス",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [131],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            ja: "アシスト",
          },
          effect: {
            ja: "デッキを検索してサポーターカードを探し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
          },
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            ja: "催眠芽球",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
