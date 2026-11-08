import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'es-es': "Rattata",
		'it-it': "Rattata",
		'pt-br': "Rattata",
		'de-de': "Rattfratz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

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
				'en-us': "Lunge",
				'fr-fr': "Coup Rapide",
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
		'en-us': "It searches for food all day. It gnaws on hard objects to wear down its fangs, which grow constantly during its lifetime.",
	},

	thirdParty: {
		cardmarket: 280965,
		tcgplayer: 88623
	}
}

export default card
