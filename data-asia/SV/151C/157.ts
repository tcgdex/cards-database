import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "走路草",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	description: {
		'zh-cn': "白天会为躲避太阳而钻入凉爽的地下。会通过沐浴月光成长。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "飞叶快刀" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [43],
}

export default card
