import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Clamperl",
         ja: "clamperl",
         fr: "Clamperl",
         de: "Klamperl",
         es: "Afligir",
         it: "Clamperl",
         pt: "Clamperl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [366],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

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
            en: "Any damage done to Clamperl by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "攻撃によるClamperlに与えられた損害は、衰弱と抵抗を適用した後）10倍に減少します。",
            fr: "Tout dommage causé à Clamperl par les attaques est réduit de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden, die durch Angriffe durch Angriffe zugefügt wurden, wird um 10 reduziert (nach Anbringen von Schwäche und Widerstand).",
            es: "Cualquier daño causado a Swlamperl por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Clamperl dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado ao clamperl por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Bubble",
            ja: "バブル",
            fr: "Bulle",
            de: "Blase",
            es: "Burbuja",
            it: "Bolla",
            pt: "Bolha",
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
          damage: 20,
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
