import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Lucario",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Riolu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Blocking Punch",
			},
			effect: {
				'en-us': "During your opponent’s next turn, any damage done to Lucario by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Striking Kick",
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		'en-us': "By catching the aura emanating from others, it can read their thoughts and movements."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278403,
				tcgplayer: 86877
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278403,
				tcgplayer: 86877
			}
		},
	],
}

export default card
