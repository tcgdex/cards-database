import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Natu",
         ja: "natu",
         fr: "Natu",
         de: "Natu",
         es: "Natu",
         it: "Natu",
         pt: "Natu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [177],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Peck",
            ja: "ペック",
            fr: "Picorer",
            de: "Picken",
            es: "Picotear",
            it: "Peck",
            pt: "Peck",
          },
          damage: 10,
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Soothing Wave",
            ja: "なだめる波",
            fr: "Vague apaisante",
            de: "Beruhigende Welle",
            es: "Ola calmante",
            it: "Onda rilassante",
            pt: "Onda calmante",
          },
          effect: {
            en: "Each Defending Pokemon is now Asleep.",
            ja: "防御するポケモンはそれぞれ眠っています。",
            fr: "Chaque Pokémon défendant est maintenant endormi.",
            de: "Jedes verteidigende Pokemon schläft jetzt.",
            es: "Cada Pokémon defensor ahora está dormido.",
            it: "Ogni Pokemon in difesa ora dorme.",
            pt: "Cada Pokemon defensor agora está dormindo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
