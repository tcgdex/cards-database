import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Geodude",
         ja: "ジオドード",
         fr: "Géodude",
         de: "Geodude",
         es: "Geodudas",
         it: "Geodude",
         pt: "Geodude",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [74],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Knuckle Punch",
            ja: "ナックルパンチ",
            fr: "Coup de poing",
            de: "Knöchelschlag",
            es: "Puñetazo",
            it: "Punch Knuckle",
            pt: "Punchamento da junta",
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
