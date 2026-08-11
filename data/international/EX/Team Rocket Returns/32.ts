import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Dragonair",
		'de-de': "Dunkles Dragonir"
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 80,

	types: [
		"Darkness",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Dratini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Double Tackle",
				'de-de': "Double Tackle"
			},
			effect: {
				'en-us': "Does 20 damage to each Defending Pokémon.",
				'de-de': "Does 20 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crushing Blow",
				'de-de': "Crushing Blow"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'de-de': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276324,
				tcgplayer: 84583
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276324,
				tcgplayer: 84583
			},
		},
	],

}

export default card

