import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Mankey",
         ja: "マンキー",
         fr: "Homme",
         de: "Manker",
         es: "Mankey",
         it: "Mankey",
         pt: "Mankey",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [56],
      hp: 30,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Peek",
            ja: "ピーク",
            fr: "Jeter un coup d'œil",
            de: "Spähen",
            es: "Ojeada",
            it: "Sbirciare",
            pt: "Espiar",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may look at one of the following: the top card of either player's deck, a random card from your opponent's hand, or one of either player's Prizes. This power can't be used if Mankey is Asleep, Confused, or Paralyzed.",
            ja: "順番<em>（攻撃の前）</em>の間に、次のいずれかを見ることができます。どちらかのプレイヤーのデッキのトップカード、対戦相手の手からのランダムカード、またはプレイヤーの賞品の1つです。マンキーが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez regarder l'un des éléments suivants: la carte supérieure du deck de l'un ou l'autre des joueurs, une carte aléatoire de la main de votre adversaire, ou l'un des prix de l'un ou l'autre des joueurs. Ce pouvoir ne peut pas être utilisé si Mankey est endormi, confus ou paralysé.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie sich eine der folgenden: die Top -Karte des Decks eines Spielers, eine zufällige Karte aus der Hand Ihres Gegners oder eines der Preise des Spielers ansehen. Diese Kraft kann nicht verwendet werden, wenn Mankey schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede ver una de las siguientes opciones: la carta superior del mazo de cualquiera de los jugadores, una carta aleatoria de la mano de su oponente o uno de los premios de cualquiera de los jugadores. Este poder no se puede usar si Mankey está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi guardare una delle seguenti: la carta superiore del mazzo di entrambi i giocatori, una carta casuale dalla mano del tuo avversario o uno dei premi di entrambi i giocatori. Questo potere non può essere usato se Mankey è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode olhar para um dos seguintes: a carta superior do baralho de qualquer jogador, uma carta aleatória da mão do seu oponente ou um dos prêmios de qualquer jogador. Esse poder não pode ser usado se Mankey estiver dormindo, confuso ou paralisado.",
          },
      }],

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
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
