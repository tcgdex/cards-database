import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		es: "Floatzel",
		it: "Floatzel",
		pt: "Floatzel",
		de: "Bojelin"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		419,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280472
	}
}

export default card
