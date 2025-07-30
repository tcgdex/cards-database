import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "クレイドル",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [344],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "サイキックトレース",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、クレイドールがあなたのアクティブなポカモンである場合、あなたはあなたの手をあなたのデッキにシャッフルするかもしれません。次に、相手の手にあるカードの数に等しい数枚のカードを描きます。クレイドールが特別な状態の影響を受ける場合、この電力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "古代のマントラ",
                                                                      },
          effect: {
                        ja: "Claydolに精神的なエネルギーが付着している場合、防御ポケモンは混乱しています。 Claydolには、戦闘エネルギーが付属している場合、この攻撃は20ダメージに20回のダメージを与えます。",
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
