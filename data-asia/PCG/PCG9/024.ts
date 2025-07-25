import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Totodile (Delta Species)",
         ja: "totodile（デルタ種）",
         fr: "Totodile (espèces delta)",
         de: "Totodile (Delta -Arten)",
         es: "Totodile (especie delta)",
         it: "Totodile (specie delta)",
         pt: "Totodile (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [158],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each damage counter on Totodile.",
            ja: "Totodileの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Totodile.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Totodil.",
            es: "Hace 10 daños más 10 más de daño por cada contador de daños en Totodile.",
            it: "Fa 10 danni più 10 danni in più per ciascun danno sul totodile.",
            pt: "10 danos mais 10 mais danos para cada contador de danos no Totodile.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
