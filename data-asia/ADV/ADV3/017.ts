import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Whiscash",
         ja: "ウィスカッシュ",
         fr: "Mourir",
         de: "Whiscash",
         es: "Whiscash",
         it: "Whiscash",
         pt: "Whiscash",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [340],
      hp: 90,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Submerge",
            ja: "水没",
            fr: "Submerger",
            de: "Tauchen",
            es: "Sumergir",
            it: "Immergere",
            pt: "Submergir",
          },
          effect: {
            en: "As long as Whiscash is on your Bench, prevent all damage done to Whiscash by opponent's attacks.",
            ja: "Wiscashがベンチにある限り、相手の攻撃によってWISCASHに与えられたすべての損害を防ぎます。",
            fr: "Tant que Wiscash est sur votre banc, empêchez tous les dégâts causés à Wiscash par les attaques de l'adversaire.",
            de: "Verhindern Sie, wie sich Whiscash auf Ihrer Bank befindet, alle Schäden, die durch die Angriffe des Gegners angerichtet werden.",
            es: "Mientras Whiscash esté en su banco, evite todo el daño causado a Whiscash por los ataques del oponente.",
            it: "Finché Whiscash è in panchina, impedisci tutti i danni fatti a Whiscash dagli attacchi dell'avversario.",
            pt: "Enquanto Whiscash estiver em seu banco, evite que todos os danos causados a Whiscash pelos ataques do oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Surf",
            ja: "サーフィン",
            fr: "Surf",
            de: "Surfen",
            es: "Navegar",
            it: "Navigare",
            pt: "Surf",
          },
          damage: 30,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
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
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
