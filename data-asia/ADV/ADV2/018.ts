import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "lotad",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [270],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "雨皿",
                                                                      },
          effect: {
                        ja: "ターンの間にいつでも、Lotadから1つのダメージカウンターを取り外します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ラム",
                                                                      },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
