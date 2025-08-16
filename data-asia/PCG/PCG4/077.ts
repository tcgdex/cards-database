import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Pupitar",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [247],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "スラッシュ",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
                        ja: "ロックスロー",
                                                                      },
          damage: 40,
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
