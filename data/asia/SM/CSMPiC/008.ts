import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "月亮伊布GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [197],
	hp: 200,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	suffix: "GX",
	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'zh-cn': "扫射",
			},
			effect: {
				'zh-cn': "可将这只宝可梦与自己的1只后备宝可梦互换。",
			},
			damage: 30,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'zh-cn': "暗影子弹",
			},
			effect: {
				'zh-cn': "对手的1只后备宝可梦也受到30点伤害。【后备宝可梦不计算弱点・抵抗力。】",
			},
			damage: 90,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				'zh-cn': "暗夜呼唤GX",
			},
			effect: {
				'zh-cn': "将对手的宝可梦身上的能量丢弃2个。【对战中，己方的GX招式只能使用1次。】",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
