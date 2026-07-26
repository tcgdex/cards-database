import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Marill",
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [183],
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Splash",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			},
			damage: "10+",
		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
			},
			damage: 30,
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
			type: "normal",
			thirdParty: {
				cardmarket: 279111,
				tcgplayer: 87221,
			},
		},
	],

}

export default card
