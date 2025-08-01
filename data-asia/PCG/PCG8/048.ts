import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "サボテン（デルタ種）",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [332],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "スパイクストーム",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）、CacturneがアクティブなPokã©Monである場合、既にダメージカウンターがある対戦相手のPokã©Monに1つのダメージカウンターを置くことができます。 Cacturneが特別な状態の影響を受ける場合、この電力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
                        ja: "トリプルニードル",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンの3つを選択してください。この攻撃は、それらのポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "軽いパンチ",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
