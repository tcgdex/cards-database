import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'de-de': "Kanivanha"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Bite Away",
				'fr-fr': "Morsure énorme",
				'de-de': "Wegbeißen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose a card from your opponent's hand without looking and discard it.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They can swarm any foe that invades their territory. Their sharp fangs can tear out boat hulls.",
	},

	thirdParty: {
		cardmarket: 277834,
		tcgplayer: 84114
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
