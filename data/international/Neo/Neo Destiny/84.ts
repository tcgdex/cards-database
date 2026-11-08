import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'de-de': "Quiekel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 50,

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
				'en-us': "Generate Cold",
				'fr-fr': "Émanations glaciales",
				'de-de': "Generate Cold"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It moves with its sensitive nose pressed to the ground, always searching for food.",
		'fr-fr': "Il avance, son nez ultra-sensible contre le sol, toujours à la recherche de nourriture."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274736,
				tcgplayer: 89699
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274736,
				tcgplayer: 89699
			}
		}
	]
}

export default card
