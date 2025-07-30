import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "アラカザム",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [65],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "エネルギージャンプ",
          },
          effect: {
            ja: "ターン中（攻撃の前）に、エネルギーカードをポケモンの1匹からポケモンの別のものに移動できます。アラカザムが特別な状態の影響を受けている場合、この力は使用できません。",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            ja: "サイキック",
          },
          effect: {
            ja: "この攻撃は、防御ポケモンに取り付けられた各エネルギーカードに対して30のダメージと10のダメージをさらに10件以上与えます。",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
