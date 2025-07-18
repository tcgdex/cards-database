import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Staryu",
         ja: "staryu",
         fr: "Staryu",
         de: "Staryu",
         es: "Staryu",
         it: "Staryu",
         pt: "Staryu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [120],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Core Guard",
            ja: "コアガード",
            fr: "Garde de base",
            de: "Kernwache",
            es: "Guardia central",
            it: "Guardia centrale",
            pt: "Guarda do núcleo",
          },
          effect: {
            en: "If Staryu has any Psychic Energy attached to it, damage done to Staryu by any attack is reduced by 10 (after applying Weakness and Resistance).",
            ja: "Staryuに精神的なエネルギーが付着している場合、攻撃によってStaryuに与えられた損傷は10増加します（脱力と抵抗を適用した後）。",
            fr: "Si Staryu a une énergie psychique qui lui est attachée, les dommages causés à Staryu par toute attaque sont réduits de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Wenn Staryu eine psychische Energie hat, wird die Beschädigung von Staryu durch Angriff um 10 um 10 reduziert (nach Anwendung von Schwäche und Widerstand).",
            es: "Si Staryu tiene alguna energía psíquica adjunta, el daño hecho a Staryu por cualquier ataque se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Se Staryu ha un'energia psichica attaccata ad essa, il danno fatto a Staryu da qualsiasi attacco è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Se Staryu tiver alguma energia psíquica ligada a ela, os danos causados a Staryu por qualquer ataque são reduzidos em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
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
