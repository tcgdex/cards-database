import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Croagunk",
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ghastly Sound",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can’t play any Supporter cards from his or her hand during his or her next turn.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Finger Poke",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		'en-us': "Its cheeks hold poison sacs. It tries to catch foes off guard to jab them with toxic fingers."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278414,
				tcgplayer: 84475
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278414,
				tcgplayer: 84475
			}
		},
	],
}

export default card
