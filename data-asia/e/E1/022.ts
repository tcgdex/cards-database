import {Card} from "../../../interfaces"
import Set from "../E1"

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
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Rock Hurl",
            ja: "ロックハール",
            fr: "Rock Hurl",
            de: "Rock Hurl",
            es: "Lanzar una roca",
            it: "Rock Hurl",
            pt: "Arremesso de rock",
          },
          effect: {
            en: "Don't apply Resistance.",
            ja: "抵抗を適用しないでください。",
            fr: "N'appliquez pas la résistance.",
            de: "Wenden Sie keinen Widerstand an.",
            es: "No aplique resistencia.",
            it: "Non applicare resistenza.",
            pt: "Não aplique resistência.",
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
