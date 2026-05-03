import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "帝牙卢卡GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [483],
	hp: 180,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "GX",
	attacks: [
		{
			cost: ["Metal"],
			name: {
				'zh-cn': "超频",
			},
			effect: {
				'zh-cn': "抽卡直到自己的手牌变为6张。",
			},
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'zh-cn': "撕裂",
			},
			effect: {
				'zh-cn': "这个招式的伤害不受对手战斗宝可梦身上的效果影响。",
			},
			damage: 80,
		},
		{
			cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"],
			name: {
				'zh-cn': "永恒GX",
			},
			effect: {
				'zh-cn': "在这个回合结束后，再进行自己的1个回合。（跳过回合间的步骤。）【对战中，己方的GX招式只能使用1次。】",
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
