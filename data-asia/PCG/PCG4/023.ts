import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "スローブロ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [80],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "デュアルアーマー",
                                                                      },
          effect: {
                        ja: "Slowbroに精神エネルギーが付着している限り、Slowbroは水と精神型の両方です。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "並列ゲイン",
                                                                      },
          effect: {
                        ja: "各ポケモン（スローブロを含む）から1つのダメージカウンターを取り外します。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "ローリングタックル",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 2,

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
