import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Absol",
         ja: "絶対",
         fr: "Absolu",
         de: "Absol",
         es: "Absoluto",
         it: "ASSOLO",
         pt: "Abs",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [359],
      hp: 70,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Bad News",
            ja: "悪いニュース",
            fr: "Mauvaise nouvelle",
            de: "Schlechte Nachrichten",
            es: "Malas noticias",
            it: "Cattive notizie",
            pt: "Má notícia",
          },
          effect: {
            en: "If the number of cards in your opponent's hand is at least 6, choose a number of cards there, without looking, until your opponent has 5 cards left. Have your opponent discard the cards you chose.",
            ja: "対戦相手の手のカードの数が少なくとも6人の場合は、対戦相手に5枚のカードが残るまで、見ずにそこに多数のカードを選択します。あなたが選んだカードを相手に捨てさせてください。",
            fr: "Si le nombre de cartes dans la main de votre adversaire est d'au moins 6, choisissez un certain nombre de cartes là-bas, sans regarder, jusqu'à ce que votre adversaire ait 5 cartes. Demandez à votre adversaire de jeter les cartes que vous avez choisies.",
            de: "Wenn die Anzahl der Karten in der Hand Ihres Gegners mindestens 6 liegt, wählen Sie dort eine Reihe von Karten, ohne zu schauen, bis Ihr Gegner 5 Karten mehr hat. Lassen Sie Ihren Gegner die Karten verwerfen, die Sie ausgewählt haben.",
            es: "Si el número de cartas en la mano de tu oponente es de al menos 6, elija una serie de cartas allí, sin mirar, hasta que a tu oponente le queden 5 cartas. Haga que tu oponente deseche las cartas que eligiste.",
            it: "Se il numero di carte nella mano del tuo avversario è almeno 6, scegli un numero di carte lì, senza guardare, fino a quando il tuo avversario non è rimasto 5 carte. Chiedi al tuo avversario di scartare le carte che hai scelto.",
            pt: "Se o número de cartas na mão do seu oponente for de pelo menos 6, escolha várias cartas lá, sem olhar, até que seu oponente tenha 5 cartas restantes. Faça com que seu oponente descarte os cartões que você escolheu.",
          },
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Prize Count",
            ja: "賞金",
            fr: "Décompte",
            de: "Preisanzahl",
            es: "Conteo de premios",
            it: "Conteggio dei premi",
            pt: "Contagem de prêmios",
          },
          effect: {
            en: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 20 more damage.",
            ja: "対戦相手よりも多くの賞品が残っている場合、この攻撃は20ダメージに20ダメージを与えます。",
            fr: "S'il vous reste plus de cartes de prix que votre adversaire, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn Sie mehr Preiskarten übrig haben als Ihr Gegner, verursacht dieser Angriff 20 Schaden zuzüglich 20 mehr Schaden.",
            es: "Si te quedan más cartas de premios que tu oponente, este ataque hace 20 daños más 20 más de daño.",
            it: "Se hai più carte premiate rispetto al tuo avversario, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se você tiver mais cartões de prêmios que o seu oponente, esse ataque causará mais 20 danos a mais 20 danos.",
          },
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
