import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Edge",
				'fr-fr': "Lame de Givre",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They are born in snow clouds. They use chains made of ice crystals to capture prey.",
	},

	thirdParty: {
		cardmarket: 280633,
		tcgplayer: 84514
	}
}

export default card
