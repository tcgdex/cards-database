import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Grimer",
         ja: "グリマー",
         fr: "Sinistre",
         de: "Schmutz",
         es: "Mueca",
         it: "Grimer",
         pt: "Grimer",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [88],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Nasty Goo",
            ja: "厄介なグー",
            fr: "Gluant méchant",
            de: "Böser Goo",
            es: "Pegajoso",
            it: "Nasty Goo",
            pt: "Goo desagradável",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Minimize",
            ja: "最小化します",
            fr: "Minimiser",
            de: "Minimieren",
            es: "Minimizar",
            it: "Minimizzare",
            pt: "Minimizar",
          },
          effect: {
            en: "All damage done by attacks to Grimer during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
            ja: "相手の次のターン中にグリマーへの攻撃によって与えられたすべての損害は、衰弱と抵抗を適用した後）20増加します。",
            fr: "Tous les dégâts causés par les attaques à Primer lors du prochain virage de votre adversaire sont réduits de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden durch Angriffe auf Grimer während der nächsten Kurve Ihres Gegners werden um 20 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Todo el daño causado por los ataques a la mueca durante el próximo turno de tu oponente se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Tutti i danni arrecati dagli attacchi a Grimer durante il prossimo turno dell'avversario sono ridotti di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Todos os danos causados por ataques a Grimer durante o próximo turno do seu oponente são reduzidos em 20 (após aplicar fraqueza e resistência).",
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
