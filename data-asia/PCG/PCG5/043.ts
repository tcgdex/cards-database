import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ウォブバフェット",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [202],
      hp: 80,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "進化の段階",
                                                                      },
          effect: {
                        ja: "Wobbuffetが進化したポカモンである限り、あなたの対戦相手は彼または彼女のアクティブなPokã©Monを後退させるために{{e}}をより多く支払います。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "粉砕",
                                                                      },
          effect: {
                        ja: "Wobbuffetに取り付けられたエネルギーの量を10回ダメージします。",
                                                                      },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
                        ja: "シャドウタグ",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターンの終わりに、防御ポケモンに7つのダメージカウンターを置きます。",
                                                                      },
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
