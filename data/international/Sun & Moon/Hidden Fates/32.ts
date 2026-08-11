import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Mew",
		'fr-fr': "Mew",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
	},

	thirdParty: {
		cardmarket: 394812,
		tcgplayer: 197676
	}
}

export default card
