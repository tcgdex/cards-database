import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electribeam",
				'fr-fr': "Rayon Électrique",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Self Destruct",
				'fr-fr': "Destruction",
			},
			effect: {
				'en-us': "This Pokémon does 100 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 100 dégâts.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],






	description: {
		'en-us': "It is known to drift on winds if it is bloated to bursting with stored electricity.",
	},
}

export default card
