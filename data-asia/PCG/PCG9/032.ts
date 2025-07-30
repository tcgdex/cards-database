import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "シンダキル（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [155],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "迅速",
                                                                      },
          effect: {
                        ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
                                                                      },
          damage: 30,
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
