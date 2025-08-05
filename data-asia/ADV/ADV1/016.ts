import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "スワンパート",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [260],
      hp: 110,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "ウォーターコール",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前）、手からアクティブなPokã©Monに水エネルギーカードを取り付けることができます。 Swampertが特別な状態の影響を受ける場合、この電力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
                        ja: "催眠術",
                                                                      },
          effect: {
                        ja: "防御ポケモンは今眠っています。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 3,

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
