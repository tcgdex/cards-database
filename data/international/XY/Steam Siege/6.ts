import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		193,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scout",
				'fr-fr': "Espionnage",
				'es-es': "Explorar",
				'it-it': "Esplorazione",
				'pt-br': "Explorador",
				'de-de': "Späher"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand.",
				'fr-fr': "Votre adversaire montre sa main.",
				'es-es': "Tu rival enseña las cartas de su mano.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano.",
				'pt-br': "Seu oponente revela a própria mão.",
				'de-de': "Dein Gegner deckt seine Handkarten auf."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Dive",
				'fr-fr': "Plongée Rapide",
				'es-es': "Picado Rápido",
				'it-it': "Immersione Rapida",
				'pt-br': "Mergulho Veloz",
				'de-de': "Tempohechtsprung"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area.",
	},

	thirdParty: {
		cardmarket: 291513,
		tcgplayer: 120995
	}
}

export default card
