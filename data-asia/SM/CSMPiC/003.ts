import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "暴鲤龙GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [130],
	hp: 240,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "鲤鱼王",
	},
	stage: "Stage1",
	suffix: "GX",
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'zh-cn': "攀瀑",
			},
			damage: 70,
		},
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "龙之灾祸",
			},
			effect: {
				'zh-cn': "若场上有场地卡，则增加100点伤害。然后，将那张场地卡丢弃。",
			},
			damage: "100+",
		},
		{
			cost: ["Water"],
			name: {
				'zh-cn': "恐惧风暴GX",
			},
			effect: {
				'zh-cn': "将对手所有宝可梦身上的能量各丢弃1个。【对战中，己方的GX招式只能使用1次。】",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	variants: [{ type: "holo" }],
}

export default card
