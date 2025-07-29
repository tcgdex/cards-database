import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 60,

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
				en: "Gnaw",
				fr: "Ronge",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 394587
	}
}

export default card
