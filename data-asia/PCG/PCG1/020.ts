import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Growlithe",
         ja: "うなり声",
         fr: "Grogner",
         de: "Knurren",
         es: "Gruñido",
         it: "Growlithe",
         pt: "Growlithe",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [58],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Flame Tail",
            ja: "炎の尾",
            fr: "Queue de flamme",
            de: "Flammenschwanz",
            es: "Cola de llamas",
            it: "Coda di fiamma",
            pt: "Cauda de chama",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
