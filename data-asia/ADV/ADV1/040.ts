import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "スウラー",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [277],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "ドライブします",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）、スウェローがあなたのアクティブなポカモンの場合、敵の1つのベンチ付きポカモンと1つのディフェンディングポカモンを切り替えることができます。対戦相手は、ベンチ付きのPokã©Monを切り替えます。 Swelloが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "翼攻撃",
                                                                      },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
