import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lapras",
         ja: "ラプラス",
         fr: "Lapras",
         de: "Lapras",
         es: "Lapras",
         it: "Lapras",
         pt: "LaPras",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [131],
      hp: 80,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Support Navigation",
            ja: "サポートナビゲーション",
            fr: "Soutenir la navigation",
            de: "Unterstützungsnavigation",
            es: "Apoyo de navegación",
            it: "Supportare la navigazione",
            pt: "Apoiar a navegação",
          },
          effect: {
            en: "Once during your turn, when you put Lapras onto your Bench from your hand, you may search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "ターン中にラプラスを手からベンチに置いたら、デッキをサポーターカードで検索し、相手に見せて、手に置くことができます。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour, lorsque vous mettez les Lapras sur votre banc de votre main, vous pouvez rechercher votre deck pour une carte supporte, le montrer à votre adversaire et le mettre dans votre main. Mélanger votre deck par la suite.",
            de: "Sobald Sie während Ihres Zuges Lapras von Ihrer Hand auf Ihre Bank legen, können Sie Ihr Deck nach einer Unterstützerkarte suchen, es Ihrem Gegner zeigen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno, cuando coloque Lapras en su banco desde su mano, puede buscar en su mazo una carta de seguidores, mostrarlo a su oponente y ponerlo en su mano. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno, quando metti Lapras sulla panchina dalla tua mano, puoi cercare nel tuo mazzo una carta di sostenitore, mostrarlo al tuo avversario e metterlo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno, quando você coloca o LaPras em seu banco da mão, pode pesquisar uma carta de apoiadores no seu baralho, mostrá -la ao seu oponente e colocá -lo em sua mão. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Surf",
            ja: "サーフィン",
            fr: "Surf",
            de: "Surfen",
            es: "Navegar",
            it: "Navigare",
            pt: "Surf",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
