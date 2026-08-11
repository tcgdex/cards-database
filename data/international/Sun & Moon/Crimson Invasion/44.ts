import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		710,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
				'es-es': "Impresionar",
				'it-it': "Sgomento",
				'pt-br': "Abismar",
				'de-de': "Erstauner"
			},
			effect: {
				'en-us': "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
				'fr-fr': "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
				'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The pumpkin body is inhabited by a spirit trapped in this world. As the sun sets, it becomes restless and active.",
	},

	thirdParty: {
		cardmarket: 311894,
		tcgplayer: 149067
	}
}

export default card
