import { Card } from 'models/database/card'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		'en-us': "M Lucario-EX",
		'fr-fr': "M-Lucario-ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	dexId: [448],
	set: Set,

	hp: 220,
	types: [
		"Fighting",
	],
	evolveFrom: {
		'en-us': "Lucario-ex",
		'fr-fr': "Lucario-ex",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rising Fist",
				'fr-fr': "Poing Imminent",
			},
			effect: {
				'en-us': "Discard an Energy attached to your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
