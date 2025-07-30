import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "アンファロス",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 120,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "エネルギー接続",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃前）に好きなように、ベンチのポカモンの1つに取り付けられた基本的なエネルギーカードをアクティブなポカモンに移動することができます。 Ampharosが特別な状態の影響を受ける場合、この電力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
                        ja: "奇跡的な雷",
                                                                      },
          effect: {
                        ja: "Ampharosに取り付けられたすべての稲妻エネルギーを捨てることができます。もしそうなら、防御するポケモンは今や燃やされ、混乱しています。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 2,

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
