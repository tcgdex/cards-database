import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Flotajou",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Sanosuke Sakuma",

	set: Set,
	dexId: [515],
	hp: 70,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Water"],
			name: {
				fr: "Pistolet à O"
			},
			damage: 10
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362786,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362786,
			}
		}
	]
}

export default card

