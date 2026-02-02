import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		'es-mx': "Aipom",
		de: "Griffel",
		it: "Aipom",
		pt: "Aipom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [190],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Astonish",
			fr: "Étonnement",
			es: "Impresionar",
			'es-mx': "Impresión",
			de: "Erstauner",
			it: "Sgomento",
			pt: "Abismar"
		},

		effect: {
			en: "Choose a random card from your opponent's hand, and your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			es: "Elige 1 carta aleatoria de la mano de tu rival, y tu rival enseña esa carta, la pone en su baraja y baraja todas las cartas.",
			'es-mx': "Elige 1 carta aleatoria de la mano de tu rival, y tu rival muestra esa carta y la baraja en su mazo.",
			de: "Wähle 1 zufällige Karte aus der Hand deines Gegners, und dein Gegner zeigt dir jene Karte und mischt sie in sein Deck.",
			it: "Scegli una carta a caso dalla mano del tuo avversario, e il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			pt: "Escolha uma carta aleatória da mão do seu oponente, e seu oponente revela aquela carta e a embaralha no baralho dele."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857653
	}
}

export default card