import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Charmander",
         ja: "チャーマンダー",
         fr: "Charmander",
         de: "Charmander",
         es: "Encanto",
         it: "Charmander",
         pt: "Charmander",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [4],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Ember",
            ja: "ember",
            fr: "Bilan",
            de: "Glut",
            es: "Ascua",
            it: "Ember",
            pt: "Brasa",
          },
          effect: {
            en: "Discard a Fire Energy from this Pokemon.",
            ja: "このポケモンから火エネルギーを捨ててください。",
            fr: "Jeter une énergie de feu de ce Pokémon.",
            de: "Verwerfen Sie eine Feuerenergie von diesem Pokémon.",
            es: "Deseche una energía de fuego de este Pokémon.",
            it: "Scartare un'energia di fuoco da questo Pokemon.",
            pt: "Descarte uma energia de incêndio deste Pokémon.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
