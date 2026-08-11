import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Spinarak -007/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [167],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "gnaw",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "グーイのスレッド",
			},
			effect: {
				'ja-jp': "防御するポケモンは、相手の次のターン中に退却することはできません。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
