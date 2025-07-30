import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "Crobat Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 130,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "ねじれ",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）、Crobat ExがアクティブなPokã©Monである場合、対戦相手のPokã©Monに1つのダメージカウンターを置くことができます。 Crobat Exが特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "クロス攻撃",
                                                                      },
          effect: {
                        ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。 2つ以上の頭を手に入れると、防御するポケモンは混乱しています。",
                                                                      },
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
                        ja: "ペスター",
                                                                      },
          effect: {
                        ja: "防御ポケモンが特別な状態の影響を受ける場合、この攻撃は60ダメージに加えて40ダメージを与えます。",
                                                                      },
        },
      ],


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
