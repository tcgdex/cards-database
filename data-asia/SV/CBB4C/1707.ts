import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "四季鹿",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "活蹦乱跳" },
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "落叶冲撞" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的1个【草】能量，放于弃牌区。" },
			damage: 40,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [585],
}

export default card
