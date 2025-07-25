import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Shuppet",
         ja: "シュペット",
         fr: "Brouiller",
         de: "Shuppet",
         es: "Shuppet",
         it: "Shuppet",
         pt: "Shuppet",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [353],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
            en: "Search your deck for a card that evolves from Shuppet and put it onto Shuppet. (This counts as evolving Shuppet.) Shuffle your deck afterward.",
            ja: "シュペットから進化するカードをデッキに検索し、シュペットに置きます。 （これは進化するシュペットとしてカウントされます。）その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte qui évolue depuis Shuppet et mettez-la sur Shuppet. (Cela compte comme un shuppet en évolution.) Tandez votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich aus Shuppet entwickelt, und legen Sie sie auf Shuppet. (Dies gilt als sich weiterentwickelnde Shuppet.) Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de Shuppet y póngala en Shuppet. (Esto cuenta como un shuppet evolucionante.) Arriba su mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Shuppet e mettila su Shuppet. (Questo conta come shuppet in evoluzione.) Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta que evolui de Shuppet e coloque -a em Shuppet. (Isso conta como evolução de shuppet.) Afaste o seu baralho depois.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
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
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
