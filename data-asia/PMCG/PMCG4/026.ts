import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Magnemite",
         ja: "マグナイト",
         fr: "Magnémite",
         de: "Magnemit",
         es: "Magnemita",
         it: "Magnemite",
         pt: "Magnemita",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [81],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Magnetism",
            ja: "磁気",
            fr: "Magnétisme",
            de: "Magnetismus",
            es: "Magnetismo",
            it: "Magnetismo",
            pt: "Magnetismo",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Magnemite, Magneton, and Dark Magneton on your Bench.",
            ja: "ベンチにある各マグネミテ、マグネトン、ダークマグネトンに10ダメージを加えて10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque magnémite, magnéton et magnéton noir sur votre banc.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Magnemit, Magneton und dunklen Magneton auf Ihrer Bank.",
            es: "Hace 10 daños más 10 más de daño por cada magnemita, Magneton y Dark Magneton en su banco.",
            it: "Fa 10 danni più 10 danni per ogni magnemite, magneton e magneton scuro sulla panchina.",
            pt: "10 danos mais 10 mais danos para cada magnemite, magneton e magneton escuro em seu banco.",
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
