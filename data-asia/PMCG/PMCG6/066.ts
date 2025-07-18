import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Porygon",
         ja: "サブリナのポリゴン",
         fr: "Porygon de Sabrina",
         de: "Sabrinas Porygon",
         es: "Porygon de Sabrina",
         it: "Porygon di Sabrina",
         pt: "Porygon de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [137],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sharp Point",
            ja: "鋭い点",
            fr: "Point pointu",
            de: "Scharfer Punkt",
            es: "Punto afilado",
            it: "Punto acuto",
            pt: "Ponto nítido",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Barrier Attack",
            ja: "バリア攻撃",
            fr: "Attaque de barrière",
            de: "Barriereangriff",
            es: "Ataque de barrera",
            it: "Attacco barriera",
            pt: "Ataque de barreira",
          },
          effect: {
            en: "All damage done by attacks to Sabrina's Porygon during your opponent's next turn is reduced by 10 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中にサブリナのポリゴンへの攻撃によって与えられたすべての損害は、（脱力と抵抗を適用した後）10減少します。",
            fr: "Tous les dégâts causés par les attaques au Porygon de Sabrina lors du prochain virage de votre adversaire sont réduits de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden durch Angriffe auf Sabrinas Porygon während der nächsten Runde Ihres Gegners werden um 10 reduziert (nachdem Schwäche und Widerstand angewendet wurden).",
            es: "Todo el daño causado por los ataques a la Porygon de Sabrina durante el próximo turno de tu oponente se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Tutti i danni arrecati dagli attacchi al Porygon di Sabrina durante il prossimo turno dell'avversario sono ridotti di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Todos os danos causados por ataques ao porgor de Sabrina durante o próximo turno do seu oponente são reduzidos em 10 (após aplicar fraqueza e resistência).",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
