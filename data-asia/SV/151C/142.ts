import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "化石翼龙",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "谜之化石",
	},
	description: {
		'zh-cn': "长着锯子般的牙齿。甚至连钢属性宝可梦的皮肤都会被它的牙齿撕成碎片。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "滑翔" },
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "退化光线" },
			effect: { 'zh-cn': "从对手的已经进化的战斗宝可梦身上，移除1张「进化卡」使其退化。将被移除的卡牌，放回对手的手牌。" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [142],
}

export default card
