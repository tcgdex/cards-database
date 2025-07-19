import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Aron",
         ja: "アロン",
         fr: "Aron",
         de: "Aron",
         es: "Arón",
         it: "Aron",
         pt: "Aron",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [304],
      hp: 50,
      types: ["Metal"],
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
            en: "Does 10 damage times the number of damage counters on Aron.",
            ja: "ダメージ数のダメージ数は、アロンのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Aron.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schadenszähler auf Aron.",
            es: "Hace 10 tiempos de daño el número de contadores de daño en Aron.",
            it: "Fa 10 danni volte il numero di contatori di danno su Aron.",
            pt: "10 danos vezes o número de contadores de danos em Aron.",
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
