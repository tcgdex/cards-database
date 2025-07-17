import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Magikarp",
         ja: "Magikarp",
         fr: "Magikarp",
         de: "Magikarp",
         es: "Magikarp",
         it: "Magikarp",
         pt: "Magikarp",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Water"],
          name: {
            en: "Flail",
            ja: "フレイル",
            fr: "Fléau",
            de: "Drehfutter",
            es: "Mayal",
            it: "Flagello",
            pt: "Flail",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Magikarp.",
            ja: "10ダメージの時間は、Magikarpのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Magikarp.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schäden auf Magikarp.",
            es: "Hace 10 veces el número de contadores de daño en Magikarp.",
            it: "Fa 10 danni volte il numero di contatori di danno su Magikarp.",
            pt: "10 danos vezes o número de contadores de danos no Magikarp.",
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
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
