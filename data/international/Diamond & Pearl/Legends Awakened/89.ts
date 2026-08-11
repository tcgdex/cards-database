import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Corphish",
		'fr-fr': "Ecrapince",
		'de-de': "Krebscorps"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		341,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
				'de-de': "Abschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Irongrip",
				'fr-fr': "Poigne de fer",
				'de-de': "Eiserner Griff"
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

	retreat: 1,

	description: {
		'en-us': "Its hardy vitality enables it to adapt to any environment. Its pincers will never release prey.",
		'fr-fr': "Sa nature robuste lui permet de vivre sur n'importe quel terrain. Ses pinces ne lâchent jamais prise."
	},

	thirdParty: {
		cardmarket: 278238,
		tcgplayer: 84435
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
