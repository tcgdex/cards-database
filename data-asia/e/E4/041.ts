import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Kadabra",
         ja: "カダブラ",
         fr: "Kadabra",
         de: "Kadabra",
         es: "Kadabra",
         it: "Kadabra",
         pt: "Kadabra",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [64],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Nightmare",
            ja: "悪夢",
            fr: "Cauchemar",
            de: "Alptraum",
            es: "Pesadilla",
            it: "Incubo",
            pt: "Pesadelo",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Mind Shock",
            ja: "マインドショック",
            fr: "Choc mental",
            de: "Geistesschock",
            es: "Meta Choque",
            it: "Shock mentale",
            pt: "Choque da mente",
          },
          effect: {
            en: "Don't apply Weakness and Resistance.",
            ja: "衰弱と抵抗を適用しないでください。",
            fr: "N'appliquez pas la faiblesse et la résistance.",
            de: "Wenden Sie keine Schwäche und Widerstand an.",
            es: "No aplique debilidad y resistencia.",
            it: "Non applicare debolezza e resistenza.",
            pt: "Não aplique fraqueza e resistência.",
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
