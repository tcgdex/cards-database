import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "奇妙な",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "睡眠の種",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
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
