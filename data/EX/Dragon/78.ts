import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Trapinch",
		fr: "Kraknoix",
		de: "Knacklion"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [328],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dig",
				fr: "Tunnel",
				de: "Schaufler"
			},

			damage: 10,

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
				tcgplayer: 90019,
				cardmarket: 275955
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90019,
				cardmarket: 275955
			},
		},
	],

}

export default card
