import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Feuillajou",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Shigenori Negishi",

	set: Set,
	dexId: [511],
	hp: 70,
	types: ["Grass"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				fr: "Fouet Lianes"
			},
			damage: 10
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362772,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362772,
			}
		}
	]
}

export default card

