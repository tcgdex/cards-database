import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'de-de': "Dratini"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

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
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'de-de': "Wrap"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. if heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

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
		'en-us': "The capture of the first Dratini inspired the search for other legendary Pokémon.",
		'fr-fr': "La capture du premier Minidraco a inspiré la quêtre d'autres Pokémon légendaires."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274106,
				tcgplayer: 84928
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274106,
				tcgplayer: 84928
			}
		}
	]
}

export default card
