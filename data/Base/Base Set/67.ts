import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal",
		it: "Voltorb"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

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
				en: "Tackle",
				fr: "Charge",
				de: "Tackle",
				it: "Azione"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Vivant dans les centrales, ce Pokémon survolté est souvent confondu avec une Poké Ball.",
		it: "Si trova generalmente nelle centrali elettriche. Facilmente confondibile per una Poké Ball, ha fulminato molte persone. LIV 10 N.100"
	},

	thirdParty: {
		cardmarket: 273762,
		tcgplayer: 42412
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/037.ts"
		}
	]
}

export default card
