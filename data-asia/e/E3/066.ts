import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Furret",
         ja: "Furret",
         fr: "Furler",
         de: "Furret",
         es: "Fragrón",
         it: "Furret",
         pt: "Furret",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [162],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Scavenger Hunt",
            ja: "スカベンジャーハント",
            fr: "Chasse au trésor",
            de: "Schnitzeljagd",
            es: "Búsqueda del tesoro",
            it: "Caccia al tesoro",
            pt: "Caça ao tesouro",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may put 2 cards from your hand into your deck. Then, search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、手から2枚のカードをデッキに入れることができます。次に、デッキを検索してエネルギーカードを検索し、相手に見せて、手に入れます。その後、デッキをシャッフルします。 Furretが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez mettre 2 cartes de votre main dans votre deck. Ensuite, recherchez votre jeu une carte d'énergie, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite. Ce pouvoir ne peut pas être utilisé si le furret est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie 2 Karten von der Hand in Ihr Deck geben. Suchen Sie dann Ihr Deck nach einer Energiekarte, zeigen Sie sie Ihrem Gegner an und stecken Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck. Diese Leistung kann nicht verwendet werden, wenn Furret von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede poner 2 cartas de su mano en su mazo. Luego, busque en su mazo una tarjeta de energía, muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después. Esta potencia no se puede usar si Furret se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi mettere 2 carte dalla tua mano nel mazzo. Quindi, cerca nel tuo mazzo una carta energetica, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se Furret è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode colocar 2 cartas da sua mão no baralho. Em seguida, procure um cartão de energia do seu baralho, mostre -o ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois. Esse poder não pode ser usado se o Furret for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Spinning Attack",
            ja: "スピニング攻撃",
            fr: "Attaque tournante",
            de: "Spinnenangriff",
            es: "Ataque giratorio",
            it: "Attacco rotante",
            pt: "Ataque giratório",
          },
          damage: 30,
        },
      ],

      retreat: 1,

};
