import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Meditite",
         ja: "瞑想",
         fr: "Méditer",
         de: "Meditit",
         es: "Meditita",
         it: "Meditite",
         pt: "Meditite",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [307],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Punch",
            ja: "パンチ",
            fr: "Punch",
            de: "Stempel",
            es: "Puñetazo",
            it: "Punch",
            pt: "Soco",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Meditate",
            ja: "瞑想します",
            fr: "Méditer",
            de: "Meditieren",
            es: "Meditar",
            it: "Meditare",
            pt: "Meditar",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokemon.",
            ja: "ディフェンディングポケモンの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur le Pokémon en défense.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf dem verteidigenden Pokémon.",
            es: "Hace 10 daños más 10 10 más de daño por cada contador de daños en el Pokémon defensor.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore del danno sul Pokemon in difesa.",
            pt: "10 danos mais 10 mais danos para cada contador de danos no pokemon atual.",
          },
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
          stamp: ["1st edition"],
        },
      ],
};
