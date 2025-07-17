import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Metapod",
         ja: "メタポッド",
         fr: "Métapode",
         de: "Metapod",
         es: "Metapod",
         it: "Metapode",
         pt: "Metapod",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [11],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Exoskeleton",
            ja: "外骨格",
            fr: "Exosquelette",
            de: "Exoskelett",
            es: "Exoesqueleto",
            it: "Esoscheletro",
            pt: "Exoesqueleto",
          },
          effect: {
            en: "All damage done by attacks to Metapod is reduced by 20 <em>(after applying Weakness and Resistance)</em>.",
            ja: "メタポッドへの攻撃によって与えられたすべての損傷は、20 <em>（脱力感と抵抗を適用した後）</em>に減少します。",
            fr: "Tous les dégâts causés par les attaques à Metapod sont réduits de 20 <em> (après avoir appliqué la faiblesse et la résistance) </em>.",
            de: "Alle Schäden durch Angriffe auf Metapod werden um 20 <em> (nach Anbringen von Schwäche und Widerstand) </em> reduziert.",
            es: "Todo el daño causado por los ataques a Metapod se reduce en 20 <em> (después de aplicar debilidad y resistencia) </em>.",
            it: "Tutti i danni arrecati dagli attacchi al metapod sono ridotti di 20 <em> (dopo aver applicato la debolezza e la resistenza) </em>.",
            pt: "Todos os danos causados por ataques ao metapod são reduzidos em 20 (após aplicar fraqueza e resistência) </em>.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 10,
        },
      ],

      retreat: 2,

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
