import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "赛富豪ex"
	},
	illustrator: "Akira Komayama",
	rarity: "Special illustration rare",
	category: "Pokemon",
	set: Set,
	dexId: [1000],
	hp: 260,
	types: ["Metal"],
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "嘉奖硬币"
			},
			effect: {
				'zh-cn': "在自己的回合可以使用1次。从自己牌库上方抽取1张卡牌。如果这只宝可梦在战斗场上的话，则额外抽取1张卡牌。"
			},
		},
	],
	attacks: [
		{
			cost: ["Metal"],
			name: {
				'zh-cn': "淘金潮"
			},
			effect: {
				'zh-cn': "将自己手牌中任意数量的基本能量放于弃牌区，造成其张数×50伤害。"
			},
			damage: "50×",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
