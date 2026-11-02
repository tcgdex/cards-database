import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "帕路奇亚GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [484],
	hp: 180,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "GX",
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "空间控制",
			},
			effect: {
				'zh-cn': "将自己的后备宝可梦身上的任意数量的能量转移到这只宝可梦身上。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "水压",
			},
			effect: {
				'zh-cn': "增加这只宝可梦身上所附水能量的数量×20点伤害。",
			},
			damage: "60+",
		},
		{
			cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
			name: {
				'zh-cn': "零度消失GX",
			},
			effect: {
				'zh-cn': "将对手所有宝可梦身上的全部能量放回对手牌库并重洗。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: 150,
		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2",
		},
	],
	retreat: 3,
	variants: [{ type: "holo" }],
}

export default card
