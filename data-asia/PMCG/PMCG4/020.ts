import {Card} from "../../../interfaces"
import Set from "../PMCG4"

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
            en: "Flop",
            ja: "フロップ",
            fr: "Fiasco",
            de: "Flop",
            es: "Fracaso",
            it: "Flop",
            pt: "FLOP",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Rapid Evolution",
            ja: "急速な進化",
            fr: "Évolution rapide",
            de: "Schnelle Entwicklung",
            es: "Evolución rápida",
            it: "Rapida evoluzione",
            pt: "Evolução rápida",
          },
          effect: {
            en: "Search your deck for a card that evolves from Magikarp and put it on this Pokemon. (This counts as evolving this Pokemon.) Shuffle your deck afterward.",
            ja: "Magikarpから進化するカードをデッキで検索し、このポケモンに置いてください。 （これはこのポケモンを進化させるものとしてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour une carte qui évolue de Magikarp et mettez-la sur ce pokemon. (Cela compte comme évoluant ce Pokémon.) Tandez votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich von Magikarp entwickelt, und setzen Sie es auf dieses Pokemon. (Dies gilt als die Entwicklung dieses Pokémon.) Mischen Sie danach Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de Magikarp y póngala en este Pokémon. (Esto cuenta como evolucionando este Pokémon). Arriba su mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Magikarp e mettilo su questo Pokemon. (Questo conta come evoluzione di questo Pokemon.) Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por uma carta que evolui do Magikarp e coloque -o neste Pokémon. (Isso conta como evoluindo este Pokémon.) Afaste seu baralho depois.",
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
