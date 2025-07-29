import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de feu",
				de: "Fire Punch"
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

	retreat: 1,

	thirdParty: {
		cardmarket: 278491
	}
}

export default card
