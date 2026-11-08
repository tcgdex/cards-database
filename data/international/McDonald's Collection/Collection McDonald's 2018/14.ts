import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		'fr-fr': "Wailmer",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Miki Tanaka",

	set: Set,
	dexId: [320],
	hp: 120,
	types: ["Water"],

	stage: "Basic",
	retreat: 3,

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'fr-fr': "Trempette"
			},
			damage: 20
		},
		{
			cost: ["Water", "Water", "Water","Colorless"],
			name: {
				'fr-fr': "Surf"
			},
			damage: 70
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362785,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362785,
			}
		}
	]
}

export default card

