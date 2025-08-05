import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Paras",
         ja: "パラ",
         fr: "Paras",
         de: "Paras",
         es: "Paras",
         it: "Paras",
         pt: "Parágrafos",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [46],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spore",
            ja: "胞子",
            fr: "Spore",
            de: "Spore",
            es: "Espora",
            it: "Spora",
            pt: "Esporo",
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
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Spore Evolution",
            ja: "胞子の進化",
            fr: "Évolution des spores",
            de: "Sporenentwicklung",
            es: "Evolución de las esporas",
            it: "Evoluzione delle spore",
            pt: "Evolução de esporos",
          },
          effect: {
            en: "Search your deck for a card that evolves from Paras. Attach it to Paras. This counts as evolving Paras. Shuffle your deck afterward.",
            ja: "パラから進化するカードをデッキで検索してください。パラに添付します。これは進化するパラとしてカウントされます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu une carte qui évolue à partir de paras. Fixez-le aux paras. Cela compte comme des paras en évolution. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Karte, die sich aus den Paras entwickelt. Befestigen Sie es an Paras. Dies gilt als sich weiterentwickelnde Paras. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta que evolucione de los párrs. Adjuntarlo a los paras. Esto cuenta como paras en evolución. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta che si evolve da Paras. Attaccalo a Paras. Questo conta come Paras in evoluzione. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por uma carta que evolui dos parágrafos. Anexe -o a parágrafos. Isso conta como parágrafos em evolução. Afaste seu baralho depois.",
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
