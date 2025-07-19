import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Bagon",
         ja: "バゴン",
         fr: "Bagon",
         de: "Bagon",
         es: "Bagón",
         it: "Bagon",
         pt: "Bagon",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [371],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Retaliate",
            ja: "報復",
            fr: "User de représailles",
            de: "Revanchieren",
            es: "Tomar represalias",
            it: "Vendicarsi",
            pt: "Retaliar",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Bagon.",
            ja: "ダメージ数のダメージ数は、バゴンのダメージカウンターを行います。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Bagon.",
            de: "Hat 10 Schadenszeiten der Anzahl der Schadenszähler auf Bagon.",
            es: "Hace 10 tiempos de daño el número de contadores de daño en Bagon.",
            it: "Fa 10 danni volte il numero di contatori di danno su Bagon.",
            pt: "10 danos vezes o número de contadores de danos em Bagon.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
