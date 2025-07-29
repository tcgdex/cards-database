import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		759,
	],

	hp: 70,

	types: [
		"Colorless",
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
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297564
	}
}

export default card
