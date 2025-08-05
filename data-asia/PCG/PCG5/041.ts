import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "Mew Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [151],
      hp: 90,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "汎用性",
                                                                      },
          effect: {
                        ja: "Mew Exは、すべてのPokã©Monの攻撃を独自のものとして使用できます。 （各攻撃を使用するために必要なエネルギーが必要です。）",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "電力移動",
                                                                      },
          effect: {
                        ja: "デッキを検索してエネルギーカードを検索し、Mew Exに添付してください。その後、デッキをシャッフルします。次に、ベンチ付きポケモンの1つでMew Exを切り替えることができます。",
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
