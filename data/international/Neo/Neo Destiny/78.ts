import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 50,

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
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'de-de': "Sharpen"
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
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This Pokémon was created by human computer engineering. Its program is only capable of simple action and reaction.",
		'fr-fr': "Ce Pokémon est le résultat de recherches informatiques. Son programme n'est capable que d'actions et de réactions simples."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274730,
				tcgplayer: 88305
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274730,
				tcgplayer: 88305
			}
		}
	]
}

export default card
