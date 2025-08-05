import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "アルマルド（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [348],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
                        ja: "デルタエッジ",
                                                                      },
          effect: {
                        ja: "サポーターカードがある場合、この攻撃のベースダメージは70ではなく20です。",
                                                                      },
          damage: 70,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "化石料金",
                                                                      },
          effect: {
                        ja: "手から90、62、92、または86を捨てることができます。そうする場合は、相手のベンチポケモンの1つを選択し、そのポケモンに30ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
