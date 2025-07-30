import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "シフトリー",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [275],
      hp: 110,
      types: ["Darkness"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "進化的ファン",
                                                                      },
          effect: {
                        ja: "ターン中に、Pokã©Monの1つを進化させるために手からシフトリーをプレイすると、進化したPokã©Monの1つを選択できます（シフトリーを除く）。  そのpokã©monとすべてのカードを手に返します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "反応的な鼓動",
                                                                      },
          effect: {
                        ja: "Shiftryがそれに反応エネルギーカードを添付している場合、防御ポケモンは混乱しています。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
                        ja: "クロスカット",
                                                                      },
          effect: {
                        ja: "防御ポケモンが進化したポケモンである場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
