import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Teddiursa",
         ja: "Teddiursa",
         fr: "Teddiursa",
         de: "Teddiursa",
         es: "Teddiursa",
         it: "Teddiursa",
         pt: "Teddiursa",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [216],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Teary Eyes",
            ja: "涙目",
            fr: "Yeux larmoyants",
            de: "Tränene Augen",
            es: "Ojos llorosos",
            it: "Occhi lacrimanti",
            pt: "Olhos lacrimejantes",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Teddiursa by attacks is reduced by 20 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、攻撃によってTeddiursaに与えられた損害は20倍に減少します（脱力感と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Teddiursa par des attaques est réduit de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird alle Schäden an Teddiursa durch Angriffe um 20 verringert (nach Anbringen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Teddiursa por ataques se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Teddiursa dagli attacchi viene ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado a Teddiursa por ataques é reduzido em 20 (após aplicar fraqueza e resistência).",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
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
