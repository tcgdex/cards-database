import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Dratini",
         ja: "ドラチーニ",
         fr: "Dratini",
         de: "Dratini",
         es: "Dratini",
         it: "Dratini",
         pt: "Dratini",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [147],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
