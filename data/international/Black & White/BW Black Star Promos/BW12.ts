import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		570,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Jump On",
				'fr-fr': "Saut",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon.",
	},
}

export default card
