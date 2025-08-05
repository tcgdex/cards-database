import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "麻山",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [297],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "反転オーラ",
                                                                      },
          effect: {
                        ja: "相手よりも多くの賞品が残っている限り、Hariyamaのそれぞれの攻撃は、アクティブなポカモン（脱力感と抵抗を適用する前に）に20個のダメージを与え、アクティブポカモンによって行われたダメージが20倍になります（衰弱と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "スラッププッシュ",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
                        ja: "ブリックスマッシュ",
                                                                      },
          effect: {
                        ja: "この攻撃の損傷は、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
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
