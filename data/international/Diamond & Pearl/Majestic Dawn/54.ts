import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Burmy Sandy Cloak",
		'fr-fr': "Cheniti Cape Sable",
		'de-de': "Burmy Sandumhang"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		412,
	],

	hp: 50,

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
				'en-us': "Iron Defense",
				'fr-fr': "Mur de fer",
				'de-de': "Eisenabwehr"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Burmy Sandy Cloak during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Cheniti Cape Sable lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' verhindere während des nächsten Zuges deines Gegners alle effekte eines Angriffs, einschließlich Schaden, die Burmy Sandumhang zugefügt würden."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
	},

	thirdParty: {
		cardmarket: 278103,
		tcgplayer: 84054
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
