import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Squirtle",
         ja: "squirtle",
         fr: "Écourter",
         de: "Squirtle",
         es: "Chirriar",
         it: "Squirtle",
         pt: "Esguicho",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [7],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Solid Shell",
            ja: "固体シェル",
            fr: "Coque solide",
            de: "Feste Hülle",
            es: "Concha sólida",
            it: "Guscio solido",
            pt: "Concha sólida",
          },
          effect: {
            en: "Any damage done to Squirtle by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "攻撃によってスカートルに与えられた損傷は10倍に減少します（脱力と抵抗を適用した後）。",
            fr: "Tout dommage causé à Squirtle par les attaques est réduit de 10 (après application de faiblesse et de résistance).",
            de: "Alle Schäden, die durch Angriffe durch Squirtle zugefügt wurden, wird um 10 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño hecho a Squirtle por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato allo squirtle dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado ao esguichar por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bubblebeam",
            ja: "バブルビーム",
            fr: "Rayon de bubbler",
            de: "BubbleBeam",
            es: "Rayo de burbuja",
            it: "Bubblebeam",
            pt: "Bubblebeam",
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
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
