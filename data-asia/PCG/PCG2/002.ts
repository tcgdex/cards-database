import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ゴルバット",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [42],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "自制心",
                                                                      },
          effect: {
                        ja: "ゴルバットは麻痺することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "スパイラルドレイン",
                                                                      },
          effect: {
                        ja: "Golbatから1つのダメージカウンターを取り外します。",
                                                                      },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
