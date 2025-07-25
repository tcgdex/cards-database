import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Krabby",
         ja: "クラビー",
         fr: "Krabby",
         de: "Krabby",
         es: "Cañón",
         it: "Krabby",
         pt: "Krabby",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [98],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Crabhammer",
            ja: "crabhammer",
            fr: "Crabhammer",
            de: "Crabhammer",
            es: "Mechón",
            it: "Crabhammer",
            pt: "Crabhammer",
          },
          damage: 30,
        },
      ],

      retreat: 2,

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
