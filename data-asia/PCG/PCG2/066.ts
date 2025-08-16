import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ラティオススター",
                                                   },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [381],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "奇跡的な光",
                                                                      },
          effect: {
                        ja: "Latiosから1つのダメージカウンターとすべての特別な条件を取り外します{{Star | This Pokemon}}。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Grass", "Lightning", "Psychic"],
          name: {
                        ja: "輝く星",
                                                                      },
          effect: {
                        ja: "防御ポケモンがステージ2の進化したポケモンである場合、ラティオスに取り付けられたすべてのエネルギーカードを捨てます{{star | this pokemon}}。",
                                                                      },
        },
      ],

      retreat: 1,

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
