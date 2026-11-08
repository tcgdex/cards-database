import { Card } from 'models/database/card'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		'en-us': "Mareep",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [179],
	hp: 40,
	types: [
		"Lightning",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Static Electricity",
			},
			effect: {
				'en-us': "Search your deck for a number of Lightning Energy cards up to the number of Mareep in play (both yours and your opponent's) and attach them to Mareep. Shuffle your deck afterward.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
			},
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279099,
				tcgplayer: 87206,
			},
		},
	],

}

export default card
