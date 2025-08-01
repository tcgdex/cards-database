import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ゴールデン",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [118],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "フレイル",
                                                                      },
          effect: {
                        ja: "Goldeenの各ダメージカウンターに対して10ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
