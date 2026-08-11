import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'es-mx': "Aipom",
		'de-de': "Griffel",
		'it-it': "Aipom",
		'pt-br': "Aipom"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [190],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Astonish",
			'fr-fr': "Étonnement",
			'es-es': "Impresionar",
			'es-mx': "Impresión",
			'de-de': "Erstauner",
			'it-it': "Sgomento",
			'pt-br': "Abismar"
		},

		effect: {
			'en-us': "Choose a random card from your opponent's hand, and your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival, y tu rival enseña esa carta, la pone en su baraja y baraja todas las cartas.",
			'es-mx': "Elige 1 carta aleatoria de la mano de tu rival, y tu rival muestra esa carta y la baraja en su mazo.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners, und dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario, e il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'pt-br': "Escolha uma carta aleatória da mão do seu oponente, e seu oponente revela aquela carta e a embaralha no baralho dele."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It lives atop tall trees. When leaping from branch to branch, it deftly uses its tail for balance.",
	},

	illustrator: "Saboteri",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857653,
				tcgplayer: 662126,
				cardtrader: 356864
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857653,
				tcgplayer: 662126,
				cardtrader: 356864
			}
		},
	],
}

export default card
