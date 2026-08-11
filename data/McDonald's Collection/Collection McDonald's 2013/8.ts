import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Charpenti",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [532],
	hp: 70,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Balayage",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				fr: "Écras'Face",
			},
			damage: 20,
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361728,
			}
		}
	]
}

export default card
