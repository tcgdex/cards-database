import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "sableye",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [302],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "掘削",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、デッキの上のカードを見ることができます。そのカードをデッキの上に置くか、そのカードを破棄します。 Sableyeが特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "無効にします",
                                                                      },
          effect: {
                        ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
                                                                      },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
