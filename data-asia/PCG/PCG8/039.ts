import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "duskull",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [355],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "集める",
                                                                      },
          effect: {
                        ja: "カードを描きます。",
                                                                      },
        },
        {
          cost: ["Psychic"],
          name: {
                        ja: "スーパーPSYボルト",
                                                                      },
          damage: 10,
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
