import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Spheal",
         ja: "スフィアル",
         fr: "Sphoal",
         de: "Spheal",
         es: "Esfera",
         it: "Sfeal",
         pt: "Speal",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [363],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
