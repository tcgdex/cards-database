import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "レディバ",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [165],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "涙目",
          },
          effect: {
            ja: "対戦相手の次のターン中に、攻撃によるLedybaに与えられた損害は20倍に減少します。",
          },
        },
        {
          cost: ["Grass"],
          name: {
            ja: "クイックターン",
          },
          effect: {
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
          },
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
