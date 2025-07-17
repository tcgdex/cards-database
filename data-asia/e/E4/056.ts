import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Kabuto",
         ja: "カブト",
         fr: "Kabuto",
         de: "Kabuto",
         es: "Kabuto",
         it: "Kabuto",
         pt: "Kabuto",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [140],
      hp: 50,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Thick Shell",
            ja: "厚いシェル",
            fr: "Coquille épaisse",
            de: "Dicke Schale",
            es: "Concha gruesa",
            it: "Guscio spesso",
            pt: "Concha grossa",
          },
          effect: {
            en: "All damage done by attacks to Kabuto from Evolved Pokmon is reduced by 10 <em>(after applying Weakness and Resistance)</em>.",
            ja: "進化したポケモンからのカブトへの攻撃によって与えられたすべての損傷は、（衰弱と抵抗を適用した後）10 <em> </em>に削減されます。",
            fr: "Tous les dégâts causés par les attaques à Kabuto à partir de Pokémon évolué sont réduits de 10 <em> (après avoir appliqué une faiblesse et une résistance) </em>.",
            de: "Alle Schäden, die durch Angriffe auf Kabuto durch entwickeltes Pokémon angerichtet werden, wird um 10 <em> (nach Anwendung von Schwäche und Widerstand) </em> reduziert.",
            es: "Todo el daño causado por los ataques a Kabuto de Pokémon evolucionado se reduce en 10 <em> (después de aplicar debilidad y resistencia) </em>.",
            it: "Tutti i danni arrecati dagli attacchi a Kabuto da Pokemon evoluto sono ridotti di 10 <em> (dopo aver applicato la debolezza e la resistenza) </em>.",
            pt: "Todos os danos causados por ataques a Kabuto de Pokemon evoluídos são reduzidos em 10 <em> (após aplicar fraqueza e resistência) </em>.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 30,
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
