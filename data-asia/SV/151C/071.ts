import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大食花",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "口呆花",
	},
	description: {
		'zh-cn': "被它吞进体内的东西不管有多硬，都会被溶解液不留痕迹地溶化掉。",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "喷出" },
			damage: 50,
		},
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "迟延酸液" },
			effect: { 'zh-cn': "在下一个对手的回合结束时，将12个伤害指示物放置于受到这个招式影响的宝可梦身上。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [71],
}

export default card
