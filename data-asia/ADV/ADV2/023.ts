import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Raichu Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
                        ja: "眩しい爆発",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
                        ja: "メガサンダーボルト",
                                                                      },
          effect: {
                        ja: "Raichu Exに取り付けられたすべてのエネルギーカードを捨てます。",
                                                                      },
          damage: 120,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};

export default card
