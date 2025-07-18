import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Larvitar",
         ja: "幼虫",
         fr: "Larvi",
         de: "Larvitar",
         es: "Larvito",
         it: "Larvitar",
         pt: "Larvitar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [246],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
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
            en: "Does 10 damage times the number of damage counters on Larvitar.",
            ja: "ダメージ数のダメージ数は、Larvitarのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur la larviterre.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schadenszähler auf Larvitar.",
            es: "Hace 10 veces el número de contadores de daño en la larvita.",
            it: "Fa 10 danni volte il numero di contatori di danno su Larvitar.",
            pt: "10 danos vezes o número de contadores de danos na larvitar.",
          },
        },
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
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
