import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
		es: "Roggenrola",
		it: "Roggenrola",
		pt: "Roggenrola",
		de: "Kiesling"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		524,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281854
	}
}

export default card
