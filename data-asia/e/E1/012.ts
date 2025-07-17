import {Card} from "../../../interfaces"
import Set from "../E1"

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

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
            en: "This attack does 10 damage times the number of damage counters on Magikarp.",
            ja: "この攻撃は、Magikarpのダメージカウンターの数の10倍のダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts le nombre de compteurs de dégâts sur Magikarp.",
            de: "Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Schäden auf Magikarp.",
            es: "Este ataque hace 10 veces el número de contadores de daño en Magikarp.",
            it: "Questo attacco fa 10 danni volte il numero di contatori di danno su Magikarp.",
            pt: "Este ataque causa 10 danos vezes o número de contadores de danos no Magikarp.",
          },
        },
      ],

      retreat: 1,

};
