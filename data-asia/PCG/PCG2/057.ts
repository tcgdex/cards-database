import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Slakoth",
         ja: "スラコス",
         fr: "Slakoth",
         de: "Slakoth",
         es: "Slakoth",
         it: "Slakoth",
         pt: "Slakoth",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [287],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Yawn",
            ja: "あくび",
            fr: "Bâillement",
            de: "Gähnen",
            es: "Bostezo",
            it: "Sbadiglio",
            pt: "Bocejar",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
        },
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
            en: "Does 10 damage times the number of damage counters on Slakoth.",
            ja: "ダメージ数のダメージ数は、スラコスのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Slakoth.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schadenszähler auf Slakoth.",
            es: "Hace 10 tiempos de daño el número de contadores de daño en Slakoth.",
            it: "Fa 10 danni volte il numero di contatori di danno su Slakoth.",
            pt: "10 danos vezes o número de contadores de danos em Slakoth.",
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
