import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Walrein ex",
         ja: "Walrein Ex",
         fr: "Walrein ex",
         de: "Walrein ex",
         es: "Walrein Ex",
         it: "Walrein Ex",
         pt: "Walrein Ex",
      },


      category: "Pokemon",
      dexId: [365],
      hp: 150,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Chilling Breath",
            ja: "息を吸う",
            fr: "Souffle effrayant",
            de: "Chilling Atem",
            es: "Aliento escalofriante",
            it: "Respiro agghiacciante",
            pt: "Respiração arrepiante",
          },
          effect: {
            en: "Once during your turn, when you play Walrein ex from your hand to evolve 1 of your PokÃ©mon, you may use this power. Your opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
            ja: "ターン中に、Pokã©Monの1を進化させるためにWalrein Exを手からプレイすると、このパワーを使用できます。対戦相手は、対戦相手の次のターン中にトレーナーカードを手からプレイできません。",
            fr: "Une fois pendant votre tour, lorsque vous jouez à Walrein Ex de votre main pour évoluer 1 de votre pokã © Mon, vous pouvez utiliser cette puissance. Votre adversaire ne peut pas jouer de cartes d'entraîneur de sa main pendant le prochain tour de votre adversaire.",
            de: "Einmal in Ihrem Zug, wenn Sie Walrein Ex von Ihrer Hand spielen, um 1 Ihres Poké Mons zu entwickeln, können Sie diese Kraft verwenden. Ihr Gegner kann während der nächsten Runde Ihres Gegners keine Trainerkarten von seiner Hand spielen.",
            es: "Una vez durante su turno, cuando juegas a Walrein Ex de tu mano para evolucionar 1 de tu Poké Mon, puedes usar este poder. Tu oponente no puede jugar ninguna carta de entrenador desde su mano durante el próximo turno de tu oponente.",
            it: "Una volta durante il tuo turno, quando giochi Walrein Ex dalla tua mano per evolvere 1 del tuo poké mon, puoi usare questo potere. Il tuo avversario non può giocare a carte di allenatore dalla sua mano durante il prossimo turno del tuo avversario.",
            pt: "Uma vez durante o seu turno, quando você toca Walrein Ex da sua mão para evoluir 1 do seu Poké Mon, você pode usar esse poder. Seu oponente não pode tocar cartas de treinador da mão dele durante o próximo turno do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Wreck",
            ja: "難破船",
            fr: "Détruire",
            de: "Wrack",
            es: "Naufragio",
            it: "Relitto",
            pt: "Naufrágio",
          },
          effect: {
            en: "If there is any Stadium card in play, this attack does 70 damage plus 20 more damage. Discard that Stadium card.",
            ja: "スタジアムカードがプレイされている場合、この攻撃は70のダメージと20のダメージを与えます。そのスタジアムカードを捨ててください。",
            fr: "S'il y a une carte de stade en jeu, cette attaque fait 70 dégâts plus 20 dégâts supplémentaires. Jeter cette carte de stade.",
            de: "Wenn es eine Stadionkarte im Spiel gibt, verursacht dieser Angriff 70 Schaden zuzüglich 20 weitere Schäden. Verwerfen Sie diese Stadionkarte.",
            es: "Si hay alguna carta del estadio en el juego, este ataque hace 70 daños más 20 más de daño. Deseche esa tarjeta del estadio.",
            it: "Se c'è qualche carta stadio in gioco, questo attacco infligge 70 danni più 20 danni in più. Scartare quella carta dello stadio.",
            pt: "Se houver alguma carta de estádio em jogo, esse ataque causará 70 danos mais 20 mais danos. Descarte esse cartão do estádio.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
