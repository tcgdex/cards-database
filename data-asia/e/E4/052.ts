import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "Poliwrath",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [62],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "奇妙ならせん",
          },
          effect: {
            ja: "ターン中（攻撃の前に）一度、PoliwrathがアクティブなPokmonである場合、PoliWrathに取り付けられた基本的なエネルギーカードを破棄することができます。もしそうなら、防御するポクモンは今混乱しています。 Poliwrathが特別な状態の影響を受けている場合、このパワーは使用できません。",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            ja: "スパイラルパンチ",
          },
          effect: {
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、40のダメージに加えて、ヘッドごとに20のダメージを与えます。",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
