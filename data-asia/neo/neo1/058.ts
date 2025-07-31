import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Skarmory",
         ja: "スカルモリー",
         fr: "Skarmory",
         de: "Skarmory",
         es: "Skarmory",
         it: "Skarmory",
         pt: "Skarmory",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [227],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Claw",
            ja: "爪",
            fr: "Griffe",
            de: "Klaue",
            es: "Garra",
            it: "Artiglio",
            pt: "Garra",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Steel Wing",
            ja: "スチール翼",
            fr: "Aile en acier",
            de: "Stahlflügel",
            es: "Ala de acero",
            it: "Ala d'acciaio",
            pt: "Asa de aço",
          },
          effect: {
            en: "Flip a coin. If heads, all damage done by attacks to Skarmory during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
            ja: "コインをひっくり返します。頭の場合、相手の次のターン中にスカルモリーへの攻撃によって与えられたすべての損傷は20増加します（脱力と抵抗を適用した後）。",
            fr: "Retourner une pièce. Si les têtes, tous les dégâts causés par les attaques à Skarmory pendant le prochain virage de votre adversaire sont réduits de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Eine Münze drehen. Bei Köpfen wird der gesamte Schaden durch Angriffe auf Skarmory während der nächsten Kurve Ihres Gegners um 20 reduziert (nach Anwendung von Schwäche und Widerstand).",
            es: "Voltea una moneda. Si se dirige, todo el daño causado por los ataques a Skarmory durante el próximo turno de tu oponente se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Capovolgi una moneta. Se le teste, tutti i danni causati dagli attacchi a Skarmory durante il prossimo turno dell'avversario vengono ridotti di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Vire uma moeda. Se as cabeças, todos os danos causados por ataques ao Skarmory durante o próximo turno do seu oponente serão reduzidos em 20 (após aplicar fraqueza e resistência).",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
