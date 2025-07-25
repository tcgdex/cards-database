import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Buried Fossil",
         ja: "埋もれた化石",
         fr: "Fossile enterré",
         de: "Fossil begraben",
         es: "Fósil enterrado",
         it: "Fossile sepolto",
         pt: "Fossil enterrado",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [Unknown],
      hp: 30,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Reconstruction",
            ja: "再建",
            fr: "Reconstruction",
            de: "Wiederaufbau",
            es: "Reconstrucción",
            it: "Ricostruzione",
            pt: "Reconstrução",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if you have a basic Energy card in your hand, you may search your deck for an Omanyte or Kabuto card, show it to your opponent, and put it into your hand. Then put a basic Energy card from your hand into your deck. Shuffle your deck afterward.",
            ja: "ターン中（攻撃の前）</em> </em>、基本的なエネルギーカードがある場合は、デッキを検索してオマニテまたはカブトカードを検索し、相手に見せて、手に入れてください。次に、基本的なエネルギーカードを手からデッキに入れます。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si vous avez une carte d'énergie de base dans votre main, vous pouvez rechercher votre jeu une carte Omanyte ou Kabuto, montrez-la à votre adversaire et la mettez-la dans votre main. Ensuite, mettez une carte d'énergie de base de votre main dans votre deck. Mélanger votre deck par la suite.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Sie eine grundlegende Energiekarte in der Hand haben, können Sie Ihr Deck nach einer Omanyte- oder Kabuto -Karte suchen, sie Ihrem Gegner zeigen und in Ihre Hand legen. Geben Sie dann eine einfache Energiekarte aus Ihrer Hand in Ihr Deck. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si tiene una tarjeta de energía básica en su mano, puede buscar en su mazo una tarjeta Omanyte o Kabuto, mostrarla a su oponente y ponerla en su mano. Luego coloque una tarjeta de energía básica de su mano en su mazo. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se hai una carta di energia di base in mano, puoi cercare nel tuo mazzo una carta Omanyte o Kabuto, mostralo al tuo avversario e metterlo in mano. Quindi metti una carta energetica di base dalla tua mano nel mazzo. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se você tiver um cartão de energia básico na mão, poderá pesquisar no seu baralho um cartão Omanyte ou Kabuto, mostre -o ao seu oponente e colocá -lo em sua mão. Em seguida, coloque um cartão de energia básico da sua mão em seu baralho. Afaste seu baralho depois.",
          },
      }],

      attacks: [
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
