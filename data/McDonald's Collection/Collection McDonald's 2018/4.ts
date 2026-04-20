import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Salamèche",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Sanosuke Sakuma",

	set: Set,
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Griffe"
			},
			damage: 20
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				fr: "Queue de Flammes"
			},
			damage: 20
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362775,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362775,
			}
		}
	]
}

export default card