import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Gyarados)'

const card: Card = {
	name: {
		en: "Totodile",
	},

	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [158],
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
				en: "Gnaw",
			},
			damage: 10,
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
			},
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279125,
				tcgplayer: 90001,
			},
		},
	],

}

export default card
