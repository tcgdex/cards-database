import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "嘟嘟利",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "嘟嘟",
	},
	description: {
		'zh-cn': "极少见的珍稀物种。３个脑袋会各自表现出愉快、悲伤和愤怒之情。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "暴走抽取" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。给这只宝可梦身上放置1个伤害指示物。然后，从自己牌库上方抽取1张卡牌。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "愤怒之喙" },
			effect: { 'zh-cn': "追加造成这只宝可梦身上放置的伤害指示物数量×30伤害。" },
			damage: "10+",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [85],
}

export default card
