import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "トラピンチ",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [328],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "砂ピット",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "Irongrip",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
