import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Flamajou",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Miki Tanaka",

	set: Set,
	dexId: [513],
	hp: 70,
	types: ["Fire"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				fr: "Flamboiement"
			},
			damage: 10,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362778,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362778,
			}
		}
	]
}

export default card

