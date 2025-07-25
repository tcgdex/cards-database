import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Psyduck",
         ja: "Psyduck",
         fr: "Psyde",
         de: "Psyduck",
         es: "Psíquico",
         it: "Psyduck",
         pt: "Psyduck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 50,
      types: ["Water"],
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
            en: "Both Psyduck and the Defending Pokemon are now Confused.",
            ja: "Psyduckと防御ポケモンの両方が混乱しています。",
            fr: "Psyduck et le Pokémon en défense sont maintenant confus.",
            de: "Sowohl Psyduck als auch das verteidigende Pokemon sind jetzt verwirrt.",
            es: "Tanto Psyduck como el Pokémon defensor ahora están confundidos.",
            it: "Sia Psyduck che i Pokemon in carica sono ora confusi.",
            pt: "Tanto o Psyduck quanto o Pokémon atual agora estão confusos.",
          },
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
