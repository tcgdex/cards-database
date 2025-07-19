import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Cubone",
         ja: "キューボン",
         fr: "Cubone",
         de: "Cubone",
         es: "Cuboo",
         it: "Cubone",
         pt: "Cubone",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [104],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Beat",
            ja: "ビート",
            fr: "Battre",
            de: "Schlagen",
            es: "Derrotar",
            it: "Colpo",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Does 10 damage plus 10 more damage for each damage counter on Cubone.",
            ja: "キューボンの各ダメージカウンターで10ダメージに加えて10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Cubone.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Cubone.",
            es: "Hace 10 daños más 10 10 más de daño por cada mostrador de daño en Cubone.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Cubone.",
            pt: "10 danos mais 10 mais danos para cada contador de danos em Cubone.",
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
