import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "ゴーレム",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [76],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "クリスタルタイプ",
          },
          effect: {
            ja: "手からゴーレムに草、火、または基本エネルギーカードとの戦いをするときはいつでも、ゴーレムのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            ja: "ロックスロー",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Grass", "Fire", "Colorless"],
          name: {
            ja: "地球爆弾",
          },
          effect: {
            ja: "ゴーレムはそれ自体に20のダメージを与えます。この攻撃は、各ベンチポケモン（あなたと相手）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
          },
          damage: 50,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "normal",
        },
      ],
};
