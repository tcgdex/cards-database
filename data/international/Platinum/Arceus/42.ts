import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'de-de': "Alpollo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [93],
	
	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Gastly"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshot",
				'de-de': "Psychoschuss"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Bind",
				'de-de': "Schattenbindung"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86030,
				cardmarket: 278913
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278913,
				tcgplayer: 86030
			}
		},
	],

}

export default card
