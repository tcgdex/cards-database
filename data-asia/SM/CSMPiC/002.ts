import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "喷火龙GX",
	},
	rarity: "None",
	illustrator: "aky CG Works",
	category: "Pokemon",
	dexId: [6],
	hp: 250,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "火恐龙",
	},
	stage: "Stage2",
	suffix: "GX",
	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				'zh-cn': "喷射火焰",
			},
			damage: 140,
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				'zh-cn': "闪焰冲锋GX",
			},
			effect: {
				'zh-cn': "【对战中，己方的GX招式只能使用1次。】",
			},
			damage: 300,
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	variants: [{ type: "holo" }],
}

export default card
