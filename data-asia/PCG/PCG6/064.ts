import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Taillow",
         ja: "テイロウ",
         fr: "Se frayer",
         de: "Rücksperrung",
         es: "Platillo",
         it: "Coillow",
         pt: "Taillow",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [276],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Skill Dive",
            ja: "スキルダイビング",
            fr: "Plongée de compétence",
            de: "Fähigkeitstauchgang",
            es: "Buceo",
            it: "Immersione di abilità",
            pt: "Habilidade",
          },
          effect: {
            en: "Does 10 damage to 1 of your opponent's Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンの1つに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à 1 des pokémon de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 das Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a 1 de los Pokémon de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a 1 del Pokemon del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a 1 do Pokémon do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
