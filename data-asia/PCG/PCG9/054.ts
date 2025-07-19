import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Nidorino (Delta Species)",
         ja: "ニドリーノ（デルタ種）",
         fr: "Nidorino (espèce delta)",
         de: "Nidorino (Delta -Arten)",
         es: "Nidorino (especie delta)",
         it: "Nidorino (Delta Species)",
         pt: "Nidorino (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [33],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
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
            en: "Does 10 damage plus 10 more damage for each damage counter on Nidorino.",
            ja: "Does 10 damage plus 10 more damage for each damage counter on Nidorino.",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Nidorino.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Nidorino.",
            es: "Hace 10 daños más 10 más de daño por cada contador de daños en Nidorino.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Nidorino.",
            pt: "10 danos mais 10 mais danos para cada contador de danos em Nidorino.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Horn Drill",
            ja: "ホーンドリル",
            fr: "Perceuse à cornes",
            de: "Hornbohrer",
            es: "Taladro",
            it: "Trapano a corno",
            pt: "Broca de chifre",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
