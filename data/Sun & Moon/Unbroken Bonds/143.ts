import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
		es: "Rattata",
		it: "Rattata",
		pt: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 30,

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
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 30,

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
		cardmarket: 372429
	}
}

export default card
