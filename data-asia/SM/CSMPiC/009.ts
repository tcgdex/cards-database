import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "仙子伊布GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [700],
	hp: 200,
	types: ["Fairy"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	suffix: "GX",
	attacks: [
		{
			cost: ["Fairy"],
			name: {
				'zh-cn': "魔法缎带",
			},
			effect: {
				'zh-cn': "从自己的牌库选择最多3张卡加入手牌。并且重洗牌库。",
			},
		},
		{
			cost: ["Fairy", "Colorless", "Colorless"],
			name: {
				'zh-cn': "妖精之风",
			},
			damage: 110,
		},
		{
			cost: ["Fairy", "Colorless", "Colorless"],
			name: {
				'zh-cn': "祈求GX",
			},
			effect: {
				'zh-cn': "将对手的2只后备宝可梦与附于它们身上的全部卡放回对手手牌。【对战中，己方的GX招式只能使用1次。】",
			},
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
