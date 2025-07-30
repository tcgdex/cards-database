import {Card} from "../../../interfaces"
import Set from "../E4"

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
          cost: ["Colorless"],
          name: {
            ja: "取り組む",
          },
          damage: 10,
        },
        {
          cost: ["Fire"],
          name: {
            ja: "焼ける溶岩",
          },
          effect: {
            ja: "この攻撃を使用するために、Slugmaに取り付けられた消防エネルギーカードを廃棄します。防御ポケモンは現在燃やされています。",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
