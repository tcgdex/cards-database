import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Bulbizarre",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Mizue",

	set: Set,
	dexId: [1],
	hp: 70,
	types: ["Grass"],

	stage: "Basic",
	retreat: 2,

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
				fr: "Tranch'Herbe"
			},
			damage: 30,
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479674,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581844,
			}
		}
	]
}

export default card

