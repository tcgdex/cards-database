import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Golduck",
		'de-de': "Dunkles Entoron"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 70,

	types: [
		"Water",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Psyduck",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Shield",
				'de-de': "Darkness Shield"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to each of your Active Pokémon during your opponent's next turn.",
				'de-de': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to each of your Active Pokémon during your opponent's next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cold Crush",
				'de-de': "Cold Crush"
			},
			effect: {
				'en-us': "You may discard an Energy card attached to Dark Golduck. If you do, discard an Energy attached to the Defending Pokémon.",
				'de-de': "You may dicard an Energy card attached to Dark Golduck. If you do, discard an Energy attached to the Defending Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276327,
				tcgplayer: 84605
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276327,
				tcgplayer: 84605
			},
		},
	],

}

export default card

