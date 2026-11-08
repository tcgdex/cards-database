import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Gyarados",
		'de-de': "Dunkles Garados"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 80,

	types: [
		"Water",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Magikarp",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'de-de': "Sharp Fang"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Streak",
				'de-de': "Dark Streak"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				'de-de': "Flip a coin. If heads, each Defending Pokémon is now Paralyzed."
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	abilities: [{
		type: 'Poke-BODY',
		name: {
			'de-de': "Dark Scale"
		},

		effect: {
			'de-de': "If Dark Gyarados is your Active Pokémon and is Knocked Out by an opponent's attack, put 3 damage counters on the Attacking Pokémon."
		}
	}],

	
	retreat: 2,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276328,
				tcgplayer: 84608
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276328,
				tcgplayer: 84608
			},
		},
	],

}

export default card

