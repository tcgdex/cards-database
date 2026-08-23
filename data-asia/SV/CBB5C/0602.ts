import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "向日花怪",
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "向日种子",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "日光反射" },
			effect: { 'zh-cn': "造成对手所有宝可梦身上附着的【火】能量数量×60伤害。" },
			damage: "60×",
		},
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "超级吸取" },
			effect: { 'zh-cn': "回复这只宝可梦「30」HP。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [192],
}

export default card
