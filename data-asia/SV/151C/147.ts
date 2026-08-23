import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "迷你龙",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	description: {
		'zh-cn': "在飞流直下的瀑布的保护下反复蜕皮，逐渐变得越来越大。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "敲打" },
			damage: 10,
		},
		{
			cost: ["Water", "Lightning"],
			name: { 'zh-cn': "龙之鞭打" },
			damage: 40,
		},
	],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [147],
}

export default card
