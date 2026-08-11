import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		559,
	],
	hp: 50,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard Paralysant",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It immediately headbutts anyone that makes eye contact with it. Its skull is massively thick.",
	},
}

export default card
