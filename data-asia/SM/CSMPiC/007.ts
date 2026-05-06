import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "太阳伊布GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [196],
	hp: 200,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	suffix: "GX",
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "幻想光线",
			},
			effect: {
				'zh-cn': "将对手的战斗宝可梦【混乱】。",
			},
			damage: 30,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'zh-cn': "精神强念",
			},
			effect: {
				'zh-cn': "增加对手的战斗宝可梦身上所附能量的数量×30点伤害。",
			},
			damage: "60+",
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'zh-cn': "分配GX",
			},
			effect: {
				'zh-cn': "以任意方式在对手的宝可梦身上放置10个伤害指示物。【对战中，己方的GX招式只能使用1次。】",
			},
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	variants: [{ type: "holo" }],
}

export default card
