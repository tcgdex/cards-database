import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "Omastar",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [139],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "原始凝視",
          },
          effect: {
            ja: "Omastarがアクティブなポケモンである限り、あなたの対戦相手は、アクティブなポクモンを進化させるために、手から進化カードのために基本的なポケモンをプレイすることができません。",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            ja: "恐怖",
          },
          effect: {
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
          },
          damage: 50,
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
