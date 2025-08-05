import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Jigglypuff",
         ja: "jigglypuff",
         fr: "Jigglypuff",
         de: "Wacklypuff",
         es: "Jigglypuff",
         it: "Jigglypuff",
         pt: "Jigglypuff",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [39],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Expand",
            ja: "拡大する",
            fr: "Développer",
            de: "Expandieren",
            es: "Expandir",
            it: "Espandere",
            pt: "Expandir",
          },
          effect: {
            en: "All damage done to Jigglypuff during your opponent's next turn is reduced by 10 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中にジグリプフに与えられたすべての損傷は、衰弱と抵抗を適用した後）10増加します。",
            fr: "Tous les dégâts causés à Jigglypuff lors du prochain virage de votre adversaire sont réduits de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden an Jigglypuff während der nächsten Kurve Ihres Gegners werden um 10 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Todo el daño hecho a Jigglypuff durante el próximo turno de tu oponente se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Tutti i danni arrecati a Jigglypuff durante il prossimo turno dell'avversario sono ridotti di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Todos os danos causados a Jigglypuff durante o próximo turno do seu oponente são reduzidos em 10 (após aplicar fraqueza e resistência).",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
