import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Paras",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Ayaka Yoshida",

	set: Set,
	dexId: [46],
	hp: 60,
	types: ["Grass"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				fr: "Griffe"
			},
			damage: 30,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479684,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581846,
			}
		}
	]
}

export default card

