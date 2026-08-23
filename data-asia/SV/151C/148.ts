import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "哈克龙",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		'zh-cn': "迷你龙",
	},
	description: {
		'zh-cn': "据说它全身散发出气场时，周围的天气会在转眼间发生突变。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "敲打" },
			damage: 20,
		},
		{
			cost: ["Water", "Lightning"],
			name: { 'zh-cn': "水流斩" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用招式。" },
			damage: 90,
		},
	],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [148],
}

export default card
