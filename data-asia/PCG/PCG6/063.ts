import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "Porygon2",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [233],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "バックアップ",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）1枚のカードが6枚未満の場合、手に6枚のカードがあるまでカードを描くことができます。 Porygon2が特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "マシンバースト",
                                                                      },
          effect: {
                        ja: "Porygon2にテクニカルマシンカードが付いている場合、防御ポケモンは眠って燃えています。",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
