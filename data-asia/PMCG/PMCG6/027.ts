import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Growlithe",
         ja: "ブレインのうなり声",
         fr: "Growlithe de Blaine",
         de: "Blaines Knurren",
         es: "Growlithe de Blaine",
         it: "Blaine's Growlithe",
         pt: "Growlithe de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [58],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Blaze",
            ja: "炎",
            fr: "Flamber",
            de: "Brand",
            es: "Resplandor",
            it: "Fiammata",
            pt: "Chama",
          },
          effect: {
            en: "Does 10 damage to each Grass Pokemon on your opponent's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "相手のベンチで各草のポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dommages à chaque pokemon de l'herbe sur le banc de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 jedes Graspokémon auf der Bank Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon de hierba en el banco de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascun Pokemon di erba sulla panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Causa 10 danos a cada Pokémon de grama no banco do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
