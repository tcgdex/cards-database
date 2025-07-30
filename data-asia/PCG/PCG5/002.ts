import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "weepinbell",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [70],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "睡眠の種",
                                                                      },
          effect: {
                        ja: "防御ポケモンは今眠っています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "つる鞭",
                                                                      },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
