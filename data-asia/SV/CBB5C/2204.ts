import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蒂蕾喵",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "新叶喵",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "魔法叶" },
			effect: { 'zh-cn': "抛掷1次硬币，如果为正面，则追加造成30伤害，回复这只宝可梦「30」HP。" },
			damage: "30+",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [907],
}

export default card
