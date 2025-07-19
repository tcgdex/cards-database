import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Lairon",
         ja: "レイロン",
         fr: "Lairon",
         de: "Lairon",
         es: "Guarida",
         it: "Lairon",
         pt: "Lairon",
      },


      category: "Pokemon",
      dexId: [305],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Metal", "Colorless"],
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
            en: "During your opponent's next turn, any damage done to Lairon by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、攻撃によるライロンに与えられた損害は10増加します（脱力感と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Lairon par des attaques est réduit de 10 (après application de faiblesse et de résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden, den Lairon durch Angriffe angerichtet hat, um 10 verringert (nach Auftragen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Lairon por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Lairon dagli attacchi viene ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado a Lairon por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Stomp",
            ja: "踏みつけ",
            fr: "Piétiner",
            de: "Stomp",
            es: "Pisar muy fuerte",
            it: "Stomp",
            pt: "Stomp",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 2,

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
