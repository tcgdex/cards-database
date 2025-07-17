import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Lairon",
         ja: "レイロン",
         fr: "Lairon",
         de: "Lairon",
         es: "Guarida",
         it: "Lairon",
         pt: "Lairon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [305],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Metal"],
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
            en: "Does 10 damage to each Benched Pokemon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "各ベンチポケモン（あなたと対戦相手の両方）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à chaque pokemon bancé (à la fois le vôtre et celui de votre adversaire). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 jedes Bankpokémon (sowohl Ihr als auch Ihr Gegner). (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon en banca (tanto el tuyo como el de tu oponente). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascun Pokemon in panchina (sia il tuo che il tuo avversario). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada Pokémon em banco (tanto o seu quanto o do seu oponente). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "One-Two Strike",
            ja: "ワンツーストライク",
            fr: "Grève un deux",
            de: "Ein zwei Streik",
            es: "Uno y dos huelga",
            it: "Un due due colpi",
            pt: "Um dois greves",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
            ja: "2つのコインをフリップします。この攻撃は、30のダメージに加えて、ヘッドごとに20のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque tête.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schäden plus 20 weitere Schäden für jeden Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 daños más 20 más de daño para cada cabezal.",
            it: "Flip 2 monete. Questo attacco infligge 30 danni più 20 danni in più per ogni teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos mais 20 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 2,

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
