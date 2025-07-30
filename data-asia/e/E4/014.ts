import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "シャックル",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [213],
      hp: 30,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "花瓶の体",
          },
          effect: {
            ja: "攻撃からシャックルへのすべての損傷は20増加します（衰弱と抵抗を適用した後）。",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            ja: "有毒唾液",
          },
          effect: {
            ja: "防御ポケモンは現在中毒になっています。",
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
