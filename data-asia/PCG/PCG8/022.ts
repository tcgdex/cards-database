import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Marshtomp",
         ja: "マーシュトンプ",
         fr: "Marshtomp",
         de: "Marshtomp",
         es: "Marisca",
         it: "Marshtomp",
         pt: "Marshtomp",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [259],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Rain Splash",
            ja: "雨が降る",
            fr: "Pluie",
            de: "Regenspritzer",
            es: "Chapoteo de la lluvia",
            it: "Pioggia",
            pt: "Rain Splash",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Mud Splash",
            ja: "泥のスプラッシュ",
            fr: "Éclaboussure de boue",
            de: "Schlammspritzer",
            es: "Chapoteo de lodo",
            it: "Splash di fango",
            pt: "Respingo de lama",
          },
          effect: {
            en: "Does 30 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの1つに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Indique 30 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 30 an einem Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 30 daños a 1 de los pokemon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 30 danni a 1 del Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Causam 30 danos a 1 dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
