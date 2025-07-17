import {Card} from "../../../interfaces"
import Set from "../PMCG4"

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
            en: "Afternoon Nap",
            ja: "午後の昼寝",
            fr: "Sieste",
            de: "Nachmittagsnickerchen",
            es: "Siesta de la tarde",
            it: "Pisolino pomeridiano",
            pt: "Tarde de soneca",
          },
          effect: {
            en: "Search your deck for a Psychic Energy card and attach it to Slowpoke. Shuffle your deck afterward.",
            ja: "デッキをサイキックエネルギーカードに検索し、slowpokeに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie psychique et attachez-la à SlowPoke. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer psychischen Energiekarte und fügen Sie sie an Slowpoke hinzu. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía psíquica y adjuntarla a SlowPoke. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia psichica e attaccalo a Slowpoke. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia psíquica e prenda -o para lentamente. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 10,
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
          stamp: ["1st edition"],
        },
      ],
};
