import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Taillow",
         ja: "テイロウ",
         fr: "Se frayer",
         de: "Rücksperrung",
         es: "Platillo",
         it: "Coillow",
         pt: "Taillow",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [276],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Peck",
            ja: "ペック",
            fr: "Picorer",
            de: "Picken",
            es: "Picotear",
            it: "Peck",
            pt: "Peck",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 20,
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
