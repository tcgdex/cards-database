import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		'en-us': "Gyarados",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [130],
	hp: 130,
	types: [
		"Water",
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
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
			},
			damage: 50,
		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
			},
			effect: {
				'en-us': "Discard an Energy card attached to the Defending Pokémon.",
			},
			damage: 80,
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
			value: "-20"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279118,
				tcgplayer: 85998,
			},
		},
	],

}

export default card
