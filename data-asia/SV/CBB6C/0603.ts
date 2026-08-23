import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "可多拉",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	evolveFrom: {
		'zh-cn': "可可多拉",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Metal"],
			name: { 'zh-cn': "钢铁冲撞" },
			effect: { 'zh-cn': "给这只宝可梦也造成20伤害。" },
			damage: 40,
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: { 'zh-cn': "金属爪" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [305],
}

export default card
