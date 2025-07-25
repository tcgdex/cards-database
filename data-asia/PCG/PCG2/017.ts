import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Numel",
         ja: "numel",
         fr: "Numel",
         de: "Numel",
         es: "Numelismo",
         it: "Numel",
         pt: "Numel",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [322],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Dense",
            ja: "密集",
            fr: "Dense",
            de: "Dicht",
            es: "Denso",
            it: "Denso",
            pt: "Denso",
          },
          effect: {
            en: "Any damage done to Numel by attacks from Evolved PokÃ©mon (both yours and your opponent's) is reduced by 20 (after applying Weakness and Resistance).",
            ja: "進化したポカモン（あなたと相手の両方）からの攻撃によってnumelに与えられた損害は20（脱力感と抵抗を適用した後）に20減少します。",
            fr: "Tout dommage causé à Numel par des attaques de Pokã © mon (le vôtre et celui de votre adversaire) est réduit de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden, die durch Angriffe von Evolved Poké Mon (sowohl Ihre als auch die Ihres Gegners) zu schaden, wird um 20 reduziert (nachdem Schwäche und Widerstand angewendet wurden).",
            es: "Cualquier daño hecho a Numel por ataques de Poké Mon evolucionado (tanto el tuyo como el de tu oponente) se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Numel dagli attacchi di Poké evoluti (sia il tuo che il tuo avversario) è ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Numel por ataques de Poké -Mon evoluído (tanto o seu quanto o de seu oponente) é reduzido em 20 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
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
