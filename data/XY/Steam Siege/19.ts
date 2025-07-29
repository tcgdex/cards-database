import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
		es: "Monferno",
		it: "Monferno",
		pt: "Monferno",
		de: "Panpyro"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
		es: "Chimchar",
		it: "Chimchar",
		pt: "Chimchar",
		de: "Panflam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				es: "Llama",
				it: "Fiammata",
				pt: "Labareda",
				de: "Flackern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 291525
	}
}

export default card
