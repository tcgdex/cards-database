import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Shelgon (Delta Species)",
         ja: "シェルゴン（デルタ種）",
         fr: "Shelgon (espèce delta)",
         de: "Shelgon (Delta -Arten)",
         es: "Shelgon (especie delta)",
         it: "Shelgon (Delta Species)",
         pt: "Shelgon (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [372],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

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
            en: "Any damage done to Shelgon by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "攻撃によってシェルゴンに与えられた損害は、衰弱と抵抗を適用した後）10増加します。",
            fr: "Tout dommage causé à Shelgon par les attaques est réduit de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden, die durch Angriffe an Angriffe angerichtet werden, wird um 10 reduziert (nachdem Schwäche und Widerstand angewendet wurden).",
            es: "Cualquier daño hecho a Shelgon por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Shelgon dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Shelgon por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Heat Blast",
            ja: "ヒートブラスト",
            fr: "Explosion de chaleur",
            de: "Hitzeexplosion",
            es: "Explosión de calor",
            it: "Blast di calore",
            pt: "Explosão de calor",
          },
          damage: 30,
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
