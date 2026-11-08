import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skélénox",
		'de-de': "Zwirrlicht"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	item: {
		name: {
			'fr-fr': "Tissu Fauche",
			'de-de': 'Düsterumhang'
		},
		effect: {
			'fr-fr': "Skélénox peut évoluer lors du tour où il est joué.",
			'de-de': 'Zwirrlicht kann in dem Zug entwickelt werden, in dem du es gespielt hast.'
		}
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
				'de-de': 'Erstauner'
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez sans regarder 1 carte de la main de votre adversaire. Regardez la carte et demandez à votre adversaire de la mélanger à son deck.",
				'de-de': 'Wirf 1 Münze. Wähle bei „Kopf“ 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck. '
			},

		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277839,
		tcgplayer: 85051
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		}
	]
}

export default card
