import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "龙卷云GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [641],
	hp: 180,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "GX",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "起风",
			},
			damage: 50,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "狂野怒火",
			},
			effect: {
				'zh-cn': "投掷硬币直到出现反面，增加正面出现的次数×30点伤害。",
			},
			damage: "90+",
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "破坏气旋GX",
			},
			effect: {
				'zh-cn': "将对手的战斗宝可梦身上的全部能量丢弃。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: 130,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
