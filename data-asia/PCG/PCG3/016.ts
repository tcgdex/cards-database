import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "マグカルゴ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [219],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "滑らかに",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、デッキをカードで検索することができます。デッキをシャッフルしてから、そのカードをデッキの上に置きます。 Magcargoが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ノックオーバー",
                                                                      },
          effect: {
                        ja: "プレイ中のスタジアムカードを捨てることができます。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
                        ja: "燃焼",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 3,

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
