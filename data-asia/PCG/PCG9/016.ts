import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "Togepi（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [175],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "魅力",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中に、防御ポケモンからの攻撃によって与えられた損害は20増加します（脱力感と抵抗を適用する前）。",
                                                                      },
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
