import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Gardevoir Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [282],
      hp: 150,
      types: ["Psychic"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "フィードバック",
                                                                      },
          effect: {
                        ja: "相手の手にカードの数を数えます。その多くのダメージカウンターを防御ポケモンに置きます。",
                                                                      },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "PSYSTORM",
                                                                      },
          effect: {
                        ja: "プレイ中のすべてのポケモンに取り付けられたエネルギーの総量を10回ダメージします。",
                                                                      },
        },
      ],

      retreat: 2,

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
