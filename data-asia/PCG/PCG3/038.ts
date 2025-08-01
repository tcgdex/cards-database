import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "Shedinja",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [292],
      hp: 50,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "空のシェル",
                                                                      },
          effect: {
                        ja: "Shedinjaがノックアウトされると、対戦相手は賞品を撮りません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "余分な呪い",
                                                                      },
          effect: {
                        ja: "防御ポケモンに2つのダメージカウンターを置きます。防御ポケモンがポケモンエクスの場合、代わりに4つのダメージカウンターを入れます。",
                                                                      },
        },
      ],


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
