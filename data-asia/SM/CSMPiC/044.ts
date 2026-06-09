import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "超梦GX",
	},
	rarity: "None",
	illustrator: "MPC Film",
	category: "Pokemon",
	dexId: [150],
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "GX",
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "念力移动",
			},
			effect: {
				'zh-cn': "对手的1只宝可梦受到50点伤害。这个伤害不计算弱点・抵抗力。",
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			name: {
				'zh-cn': "支配脉冲",
			},
			effect: {
				'zh-cn': "将对手的战斗宝可梦【混乱】。",
			},
			damage: 120,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			name: {
				'zh-cn': "精神新星GX",
			},
			effect: {
				'zh-cn': "在对手的下个回合，这只宝可梦不会受到招式的伤害。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: 180,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
