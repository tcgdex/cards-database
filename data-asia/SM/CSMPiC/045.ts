import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "诅咒娃娃GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [354],
	hp: 190,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "怨影娃娃",
	},
	stage: "Stage1",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "阴影移动",
			},
			effect: {
				'zh-cn': "这个特性在这只宝可梦是你的战斗宝可梦时，在自己的回合可以使用1次。选择1只宝可梦身上的1个伤害指示物，改放到另一只宝可梦身上。",
			},
		},
	],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "暗影咏唱",
			},
			effect: {
				'zh-cn': "增加自己的弃牌区的支援者卡的张数×10点伤害。以这个方式最多增加100点伤害。",
			},
			damage: "30+",
		},
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "墓地搜寻GX",
			},
			effect: {
				'zh-cn': "从自己的弃牌区选择3张卡加入手牌。【对战中，己方的GX招式只能使用1次。】",
			},
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [{ type: "holo" }],
}

export default card
