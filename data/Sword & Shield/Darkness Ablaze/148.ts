import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [580],

	name: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		pt: "Ducklett",
		de: "Piccolente"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 50,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
				es: "Aleteo",
				it: "Alabattito",
				pt: "Asa",
				de: "Flattern"
			},

			damage: 20,

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
	regulationMark: "D",


	stage: "Basic",

	description: {
		en: "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483619,
				tcgplayer: 219357
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483619,
				tcgplayer: 219357
			}
		},
	],
}

export default card
