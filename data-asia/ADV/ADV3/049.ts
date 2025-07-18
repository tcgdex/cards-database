import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Skarmory",
         ja: "スカルモリー",
         fr: "Skarmory",
         de: "Skarmory",
         es: "Skarmory",
         it: "Skarmory",
         pt: "Skarmory",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [227],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "Pick On",
            ja: "選んでください",
            fr: "Choisir",
            de: "Pflücken",
            es: "Meterse con",
            it: "Scegli",
            pt: "Escolha",
          },
          effect: {
            en: "If the number of cards in your opponent's hand is at least 6, look at his or her hand. Choose a number of cards there until your opponent has 5 cards left in his or her hand and have your opponent shuffle the cards you chose into his or her deck.",
            ja: "相手の手のカードの数が少なくとも6人の場合は、手を見てください。相手が手に5枚のカードが残っていて、相手に自分のデッキに選んだカードをシャッフルさせるまで、そこにいくつかのカードを選択してください。",
            fr: "Si le nombre de cartes dans la main de votre adversaire est d'au moins 6 ans, regardez sa main. Choisissez un certain nombre de cartes là-bas jusqu'à ce que votre adversaire lui reste 5 cartes dans sa main et demandez à votre adversaire de mélanger les cartes que vous avez choisies dans son jeu.",
            de: "Wenn die Anzahl der Karten in der Hand Ihres Gegners mindestens 6 ist, schauen Sie sich seine Hand an. Wählen Sie dort eine Reihe von Karten, bis Ihr Gegner 5 Karten in der Hand hat, und lassen Sie Ihren Gegner die Karten, die Sie ausgewählt haben, in sein Deck ausgewählt.",
            es: "Si el número de cartas en la mano de tu oponente es de al menos 6, mire su mano. Elija una serie de cartas allí hasta que su oponente le queden 5 cartas en su mano y haga que su oponente baraja las cartas que elegiste en su mazo.",
            it: "Se il numero di carte nella mano del tuo avversario è almeno 6, guarda la sua mano. Scegli un certo numero di carte lì fino a quando il tuo avversario non resta 5 carte nella sua mano e fai in modo che il tuo avversario mescoli le carte che hai scelto nel suo mazzo.",
            pt: "Se o número de cartas na mão do seu oponente for pelo menos 6, olhe para a mão dele ou dela. Escolha uma série de cartas lá até que seu oponente tenha 5 cartas restantes na mão dele e faça com que seu oponente embaralhe as cartas que você escolheu no deck dele ou dela.",
          },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Power Count",
            ja: "パワーカウント",
            fr: "Nombre d'énergie",
            de: "Machtzahl",
            es: "Conteo de energía",
            it: "Conteggio di potenza",
            pt: "Contagem de energia",
          },
          effect: {
            en: "Count the amount of Energy attached to all of your Pokemon and all of your opponent's Pokemon. If your Pokemon have less Energy than your opponent's, this attack does 20 damage plus 30 more damage.",
            ja: "すべてのポケモンと相手のポケモンのすべてに取り付けられたエネルギーの量を数えます。ポケモンが相手のエネルギーよりもエネルギーが少ない場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
            fr: "Comptez la quantité d'énergie attachée à tous vos Pokémon et à tous les pokemon de votre adversaire. Si votre pokemon a moins d'énergie que celui de votre adversaire, cette attaque fait 20 dégâts plus 30 dégâts supplémentaires.",
            de: "Zählen Sie die Menge an Energie, die an alle Ihr Pokémon und das gesamte Pokémon Ihres Gegners verbunden ist. Wenn Ihr Pokémon weniger Energie hat als der Ihres Gegners, verursacht dieser Angriff 20 Schaden zuzüglich 30 mehr Schaden.",
            es: "Cuente la cantidad de energía unida a todos sus Pokémon y todos los Pokémon de su oponente. Si tus Pokémon tienen menos energía que la de tu oponente, este ataque hace 20 daños más 30 más de daño.",
            it: "Conta la quantità di energia attaccata a tutto il tuo Pokemon e tutto il Pokemon del tuo avversario. Se il tuo Pokemon ha meno energia di quello del tuo avversario, questo attacco infligge 20 danni più 30 danni.",
            pt: "Conte a quantidade de energia ligada a todos os seus Pokémon e todos os Pokémon do seu oponente. Se o seu Pokémon tiver menos energia que o do seu oponente, esse ataque causará 20 danos mais 30 danos.",
          },
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
