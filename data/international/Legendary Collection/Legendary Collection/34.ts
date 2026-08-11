import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Pidgeotto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [17],

	hp: 60,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Pidgey"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching the Pokémon.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Move"
			},
			effect: {
				'en-us': "If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon."
			},

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
	retreat: 1,


	description: {
		'en-us': "Very protective of its sprawling territory, this Pokémon will fiercely peck at any intruder."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274799,
				tcgplayer: 88038
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88038,
				cardmarket: 274799
			}
		}
	],

}

export default card
