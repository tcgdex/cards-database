import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Shinx",
		'de-de': "Sheinux"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [403],
	
	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'de-de': "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swagger",
				'de-de': "Angeberei"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The extension and contraction of its muscles generates electricity. It glows when in trouble."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89177,
				cardmarket: 278872
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278872,
				tcgplayer: 89177
			}
		},
	],

}

export default card
