import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Doduo",
         ja: "ドドゥオ",
         fr: "Doduo",
         de: "Doduo",
         es: "Doduo",
         it: "Doduo",
         pt: "Doduo",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [84],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Drill Peck",
            ja: "ドリルペック",
            fr: "Percez",
            de: "Bohrer Peck",
            es: "Bisagro",
            it: "Drill Peck",
            pt: "Peck de perfuração",
          },
          damage: 10,
        },
      ],

      retreat: 1,

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
