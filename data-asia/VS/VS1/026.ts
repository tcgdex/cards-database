import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Morty's Misdreavus",
         ja: "モーティのミスレアバス",
         fr: "Mordrafus de Morty",
         de: "Mortys Miskravus",
         es: "Misdreavus de Morty",
         it: "Morty's Misdreavus",
         pt: "Morty's Misdraavus",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [200],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
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
