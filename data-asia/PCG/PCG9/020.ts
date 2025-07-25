import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Bagon (Delta Species)",
         ja: "バゴン（デルタ種）",
         fr: "Bagon (espèce delta)",
         de: "Bagon (Delta -Arten)",
         es: "Bagon (especie delta)",
         it: "Bagon (Delta Species)",
         pt: "Bagon (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [371],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Granite Head",
            ja: "花崗岩の頭",
            fr: "Tête de granit",
            de: "Granitkopf",
            es: "Cabeza de granito",
            it: "Testa di granito",
            pt: "Cabeça de granito",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Bagon by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中、攻撃によってバゴンに与えられた損害は10倍に減少します（脱力感と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Bagon par les attaques est réduit de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden, der Bagon durch Angriffe angerichtet hat, um 10 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Bagon por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Bagon dagli attacchi viene ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado a Bagon por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
