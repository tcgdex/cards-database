import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "烈咬陆鲨",
	},
	rarity: "None",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [445],
	hp: 150,
	types: ["Dragon"],
	evolveFrom: {
		'zh-cn': "尖牙陆鲨",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "快速俯冲",
			},
			effect: {
				'zh-cn': "对手的1只宝可梦受到50点伤害。【后备宝可梦不计算弱点・抵抗力。】",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'zh-cn': "皇家利刃",
			},
			effect: {
				'zh-cn': "若在这个回合从手牌使出了「竹兰」，则增加100点伤害。",
			},
			damage: "100+",
		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2",
		},
	],
	variants: [{ type: "holo" }],
}

export default card
