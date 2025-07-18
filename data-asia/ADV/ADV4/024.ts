import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Feebas",
         ja: "Feebas",
         fr: "Feebas",
         de: "Feebas",
         es: "Feebas",
         it: "Fedebas",
         pt: "Feebas",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [349],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Water"],
          name: {
            en: "Ascension",
            ja: "上昇",
            fr: "Ascension",
            de: "Aufstieg",
            es: "Ascensión",
            it: "Ascensione",
            pt: "Ascensão",
          },
          effect: {
            en: "Search your deck for a card that evolves from Feebas and put it on Feebas. (This counts as evolving Feebas.) Shuffle your deck afterward.",
            ja: "Feebasから進化するカードをデッキで検索し、Feebasに置いてください。 （これは進化するFeebasとしてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte qui évolue à partir de Feebas et mettez-la sur Feebas. (Cela compte comme des frais évolutifs.) Tandez votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich von Feebas entwickelt, und setzen Sie sie auf Feebas. (Dies gilt als weiterentwickelnde Feebas.) Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de Feebas y la ponga en Feebas. (Esto cuenta como Feebas en evolución). Arriba su mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Femebas e mettila su Femebas. (Questo conta come feebas in evoluzione.) Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta que evolui de Feebas e coloque -a em Feebas. (Isso conta como evoluindo Feebas.) Reduza seu baralho depois.",
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
          stamp: ["1st edition"],
        },
      ],
};
