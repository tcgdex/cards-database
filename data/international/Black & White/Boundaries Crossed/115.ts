import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'es-es': "Spinda",
		'it-it': "Spinda",
		'pt-br': "Spinda",
		'de-de': "Pandir"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whimsy Tackle",
				'fr-fr': "Charge Bizarre",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "No two Spinda have the same pattern of spots. Its tottering step fouls the aim of foes.",
	},

	thirdParty: {
		cardmarket: 280702,
		tcgplayer: 89464
	}
}

export default card
