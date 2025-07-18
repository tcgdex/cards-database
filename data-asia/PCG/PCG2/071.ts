import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Carvanha",
         ja: "カルバンハ",
         fr: "Carvanha",
         de: "Carvanha",
         es: "Carvanha",
         it: "Carvanha",
         pt: "Carvanha",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [318],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Sharp Fin",
            ja: "シャープフィン",
            fr: "Aileron aiguë",
            de: "Scharfe Flosse",
            es: "Aleta afilada",
            it: "Pinna affilata",
            pt: "Barbatana nítida",
          },
          damage: 10,
        },
        {
          cost: ["Darkness", "Colorless"],
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
            en: "Does 10 damage plus 10 more damage for each damage counter on Carvanha.",
            ja: "Carvanhaの各ダメージカウンターの10ダメージと10ダメージをさらに10回します。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Carvanha.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Carvanha.",
            es: "Hace 10 daños más 10 más de daño por cada mostrador de daño en Carvanha.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Carvanha.",
            pt: "10 danos mais 10 danos mais danos para cada contador de danos na Carvanha.",
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
