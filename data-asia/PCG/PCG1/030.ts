import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Shellder",
         ja: "シェルダー",
         fr: "Chagrin",
         de: "Schellder",
         es: "Cáscara",
         it: "Shellder",
         pt: "Shellder",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [90],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
            en: "During your opponent's next turn, any damage done to Shellder by attacks is reduced by 20 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中、攻撃によってシェルダーに与えられた損害は20増加します（脱力と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Shellder par des attaques est réduit de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden, der durch Angriffe durch Angriffe angerichtet wird, um 20 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Shellder por ataques se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Shellder dagli attacchi viene ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado ao Shellder pelos ataques é reduzido em 20 (após aplicar fraqueza e resistência).",
          },
        },
        {
          cost: ["Water"],
          name: {
            en: "Wave Splash",
            ja: "波のスプラッシュ",
            fr: "Vague de vagues",
            de: "Wellenspritzer",
            es: "Salpicadería",
            it: "Splash d'onda",
            pt: "Splash de onda",
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
