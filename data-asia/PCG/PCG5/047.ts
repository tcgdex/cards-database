import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Machop",
         ja: "マチョップ",
         fr: "Machop",
         de: "Machop",
         es: "Machop",
         it: "Machop",
         pt: "Machop",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [66],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Mach Punch",
            ja: "マッハパンチ",
            fr: "Punch",
            de: "Mach Punch",
            es: "Mach Punch",
            it: "Punch mach",
            pt: "Mach Punch",
          },
          effect: {
            en: "Does 10 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの1つに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 an einem Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a 1 de los pokemon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a 1 del Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a 1 do Pokémon em banco do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
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
