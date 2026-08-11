import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cold Crush",
				'fr-fr': "Écrasement Net",
			},
			effect: {
				'en-us': "You may discard an Energy attached to this Pokémon. If you do, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "If anyone were to hurt its pride, it would slash them with wings that can cleave through an ice floe.",
	},
}

export default card
