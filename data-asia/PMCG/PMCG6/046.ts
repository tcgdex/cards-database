import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Mr. Mime",
         ja: "サブリナのマイムさん",
         fr: "M. Sabrina's M. Mime",
         de: "Sabrinas Mr. Mime",
         es: "Mr. Mime de Sabrina",
         it: "Il signor Mime di Sabrina",
         pt: "O Sr. Mime de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [122],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sleight of Hand",
            ja: "手の手",
            fr: "Tour de passe-passe",
            de: "Handschleife",
            es: "Prestidigitación",
            it: "Pianificazione della mano",
            pt: "Sleight da mão",
          },
          effect: {
            en: "Choose up to 3 cards from your hand and put them on top of your deck. Then search your deck for that many basic Energy cards. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.",
            ja: "手から最大3枚のカードを選択し、デッキの上に置きます。次に、その多くの基本エネルギーカードをデッキに検索します。それらのカードを相手に見せてから、それらを手に入れます。その後、デッキをシャッフルします。",
            fr: "Choisissez jusqu'à 3 cartes dans votre main et mettez-les sur votre jeu. Recherchez ensuite votre deck pour de nombreuses cartes d'énergie de base. Montrez ces cartes à votre adversaire, puis mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Wählen Sie bis zu 3 Karten von Ihrer Hand aus und legen Sie sie auf Ihr Deck. Suchen Sie dann Ihr Deck nach so vielen grundlegenden Energiekarten. Zeigen Sie diese Karten Ihrem Gegner und geben Sie sie dann in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Elija hasta 3 cartas de su mano y colóquelas encima de su mazo. Luego busque en su mazo tantas cartas de energía básicas. Muestre esas cartas a tu oponente, luego póngalas en tu mano. Baraja tu mazo después.",
            it: "Scegli fino a 3 carte dalla tua mano e mettile sopra il mazzo. Quindi cerca nel tuo mazzo per così tante carte energia di base. Mostra quelle carte al tuo avversario, quindi mettile in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Escolha até 3 cartas da sua mão e coloque -as em cima do seu baralho. Em seguida, procure seu baralho por tantas cartas básicas de energia. Mostre essas cartas ao seu oponente e coloque -as em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Slap",
            ja: "平手打ち",
            fr: "Gifler",
            de: "Schlagen",
            es: "Bofetada",
            it: "Schiaffo",
            pt: "Tapa",
          },
          damage: 20,
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
