import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "Steelix",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [208],
      hp: 100,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "レアメタル",
          },
          effect: {
            ja: "Steelixに取り付けられたすべての基本エネルギーカードは、通常のタイプではなく金属エネルギーを提供します。",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Metal", "Colorless"],
          name: {
            ja: "絞る",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与え、防御ポケモンが麻痺しています。",
          },
        },
        {
          cost: ["Metal", "Metal", "Metal", "Colorless"],
          name: {
            ja: "メタルテール",
          },
          effect: {
            ja: "ダメージを与える前に、コインをひっくり返すことができます。頭の場合、この攻撃は80のダメージを与えます。尾の場合、この攻撃は何もしません。",
          },
          damage: 40,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "normal",
        },
      ],
};
