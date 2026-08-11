import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Sandshrew",
		fr: "Sabelette",
		de: "Sandan"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [27],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		en: "To protect itself from attackers, it curls up into a ball. It lives in arid regions with minimal rainfall."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88925,
				cardmarket: 278815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278815,
				tcgplayer: 88925
			}
		},
	],

}

export default card
