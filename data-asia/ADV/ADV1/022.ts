import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ウェイロード",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [321],
      hp: 120,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "降ろす",
                                                                      },
          effect: {
                        ja: "Wailordはそれ自体に20のダメージを与えます。",
                                                                      },
          damage: 50,
        },
        {
          cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
          name: {
                        ja: "サーフィン",
                                                                      },
          damage: 70,
        },
      ],

      retreat: 4,

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
