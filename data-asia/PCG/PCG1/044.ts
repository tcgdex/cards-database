import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Slowpoke",
         ja: "slowpoke",
         fr: "Lambin",
         de: "Langweiler",
         es: "Perezoso",
         it: "Slowpoke",
         pt: "Slowpoke",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [79],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Confusion Wave",
            ja: "混乱波",
            fr: "Vague de confusion",
            de: "Verwirrungswelle",
            es: "Ola de confusión",
            it: "Onda di confusione",
            pt: "Onda de confusão",
          },
          effect: {
            en: "Both Slowpoke and the Defending Pokemon are now Confused.",
            ja: "SlowPokeと防御ポケモンの両方が混乱しています。",
            fr: "SlowPoke et le Pokémon en défense sont maintenant confus.",
            de: "Sowohl Slowpoke als auch das verteidigende Pokémon sind jetzt verwirrt.",
            es: "Tanto Slowpoke como el Pokémon defensor ahora están confundidos.",
            it: "Sia Slowpoke che i Pokemon in carica sono ora confusi.",
            pt: "Tanto o Slowpoke quanto o Pokémon defensivo agora estão confusos.",
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
