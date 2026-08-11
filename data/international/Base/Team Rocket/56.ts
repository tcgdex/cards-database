import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
		'de-de': "Rettan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		23,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Bite"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],

			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-venin",
				'de-de': "Poison Sting"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

			damage: 20
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
		'en-us': "A carnivore that swallows its prey whole. Pidgeys and Spearows are its favorite food.",
		'fr-fr': "Un carnivore qui avale ses proies en entier. Roucool et Piafabec sont ses plats favoris."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274109,
				tcgplayer: 85099
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274109,
				tcgplayer: 85099
			}
		}
	]
}

export default card
