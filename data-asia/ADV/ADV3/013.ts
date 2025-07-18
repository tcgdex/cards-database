import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Magikarp",
         ja: "Magikarp",
         fr: "Magikarp",
         de: "Magikarp",
         es: "Magikarp",
         it: "Magikarp",
         pt: "Magikarp",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for Magikarp and put as many of them as you like onto your Bench. Shuffle your deck afterward.",
            ja: "デッキをMagikarpを検索し、ベンチに好きなだけ多くを置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour Magikarp et mettez autant d'entre eux que vous le souhaitez sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach Magikarp und legen Sie so viele von ihnen, wie Sie möchten, auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo para Magikarp y ponga tantos como desee en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo Magikarp e metti tutti loro che desideri sulla tua panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho em busca de Magikarp e coloque o máximo que quiser em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
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
