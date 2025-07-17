import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Sudowoodo",
         ja: "sudowoodo",
         fr: "Sudowoodo",
         de: "Sudowoodo",
         es: "Sudowoodo",
         it: "Sudowoodo",
         pt: "SUDOWOODO",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [185],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
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
            en: "Does 10 damage times the number of damage counters on Sudowoodo.",
            ja: "ダメージ数のダメージ数は、sudowoodoのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Sudowoodo.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schadensunterschiede auf Sudowoodo.",
            es: "Hace 10 veces el número de contadores de daño en Sudowoodo.",
            it: "Fa 10 danni volte il numero di contatori di danno su Sudowoodo.",
            pt: "10 danos vezes o número de contadores de danos em Sudowoodo.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rock Throw",
            ja: "ロックスロー",
            fr: "Lancer du roche",
            de: "Felswurf",
            es: "Lanzamiento de roca",
            it: "Lancio di roccia",
            pt: "Arremesso de rochas",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
