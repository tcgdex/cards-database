import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Rhyhorn",
         ja: "Rhyhorn",
         fr: "Rhyhorn",
         de: "Rhyhorn",
         es: "Ranio",
         it: "Rhyhorn",
         pt: "Rhyhorn",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [111],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Horn Attack",
            ja: "ホーン攻撃",
            fr: "Attaque de corne",
            de: "Hornangriff",
            es: "Ataque",
            it: "Attacco del corno",
            pt: "Ataque de chifre",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
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
            en: "This attack does 10 damage times the number of damage counters on Rhyhorn.",
            ja: "この攻撃は、Rhyhornのダメージカウンターの数の10倍のダメージを与えます。",
            fr: "Cette attaque fait 10 fois le nombre de compteurs de dégâts sur Rhyhorn.",
            de: "Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Schäden auf Rhyhorn.",
            es: "Este ataque hace 10 veces el número de contadores de daño en Rhyhorn.",
            it: "Questo attacco fa 10 danni volte il numero di contatori di danno su Rhyhorn.",
            pt: "Este ataque causa 10 danos vezes o número de contadores de danos em Rhyhorn.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
