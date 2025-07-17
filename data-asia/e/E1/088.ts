import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Dugtrio - 088/128",
         ja: "Dugtrio -088/128",
         fr: "Dugtrio - 088/128",
         de: "Dugtrio - 088/128",
         es: "Dugtrio - 088/128",
         it: "Dugtrio - 088/128",
         pt: "Dugtrio - 088/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [51],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Mud Slap",
            ja: "泥の平手打ち",
            fr: "Gifle de boue",
            de: "Schlammschlag",
            es: "Bofetada",
            it: "Schiaffo di fango",
            pt: "Tapa na lama",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Magnitude",
            ja: "大きさ",
            fr: "Ampleur",
            de: "Größe",
            es: "Magnitud",
            it: "Grandezza",
            pt: "Magnitude",
          },
          effect: {
            en: "Does 10 damage to each Benched Pokemon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "各ベンチポケモン（あなたと対戦相手）に10のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à chaque pokemon bancé (le vôtre et celui de votre adversaire). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 jedes Bankpokémon (mit Ihrem und Ihrem Gegner). (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon en banca (el tuyo y el de tu oponente). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascun Pokemon in panchina (il tuo e quello del tuo avversario). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada Pokémon em banco (o seu e o seu oponente). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 40,
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
