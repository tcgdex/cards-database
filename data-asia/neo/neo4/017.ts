import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Slugma",
         ja: "slugma",
         fr: "Glissade",
         de: "Slugma",
         es: "Slugma",
         it: "Slugma",
         pt: "Slugma",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [218],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Combustion",
            ja: "燃焼",
            fr: "Combustion",
            de: "Verbrennung",
            es: "Combustión",
            it: "Combustione",
            pt: "Combustão",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
