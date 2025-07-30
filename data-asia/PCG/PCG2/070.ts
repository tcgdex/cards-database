import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "sableye",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [302],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "ナイトビジョン",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、SableyeがあなたのアクティブなPokã©Monである場合、あなたはあなたの対戦相手の手を見ることができます。 Sableyeが特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "スラッシュ",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Darkness"],
          name: {
                        ja: "制限",
                                                                      },
          effect: {
                        ja: "対戦相手は、相手の次のターン中に自分の手からサポーターカードをプレイできません。",
                                                                      },
        },
      ],

      retreat: 1,

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
