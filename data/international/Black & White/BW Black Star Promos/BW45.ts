import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mewtwo-EX",
		'fr-fr': "Mewtwo ex",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 170,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "X Ball",
				'fr-fr': "X Ball",
			},
			effect: {
				'en-us': "Does 20 damage times the amount of Energy attached to this Pokémon and the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à ce Pokémon et au Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psydrive",
				'fr-fr': "Psykoforce",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 120,

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
