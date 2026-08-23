import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "苹裹龙",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],
	evolveFrom: {
		'zh-cn': "啃果虫",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "酸酸喷吐" },
			effect: { 'zh-cn': "造成对手战斗宝可梦身上放置的伤害指示物数量×20伤害。" },
			damage: "20×",
		},
		{
			cost: ["Grass", "Fire"],
			name: { 'zh-cn': "高速飞行" },
			damage: 70,
		},
	],
	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [841],
}

export default card
